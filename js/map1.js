mapboxgl.accessToken =
"pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw";
const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/dark-v10",
projection: 'albers',
zoom: 4, // starting zoom
center: [-100, 35], // starting center
});

const layers = [
  '0-9',
  '10-24',
  '25-49',
  '50-74',
  '75-99',
  '100-124',
  '125-149',
  '150 and more'
];

// change
const colors = [
  '#f7f4f9',
  '#e7e1ef',
  '#d4b9da',
  '#c994c7',
  '#df65b0',
  '#e7298a',
  '#ce1256',
  '#91003f'
];

map.on("load", () => {
map.addSource("covid19_rates", {
  type: "geojson",
  data: "assets/us-covid-2020-rates.geojson",
});

map.addLayer(
  {
    id: "covid19-rates-layer",
    type: "fill",
    source: "covid19_rates",
    paint: {
        'fill-color': [
            'step',
            ['get', 'rates'],
            '#f7f4f9',   // use color #f7f4f9
            10,          // if rates < 10
            '#e7e1ef',   // use color #e7e1ef
            25,          // if 10 <= rates < 25
            '#d4b9da',   // use color #d4b9da
            50,          // if 25 <= rates < 50
            '#c994c7',   // use color #c994c7
            75,         // if 50 <= rates < 75
            '#df65b0',   // use color #df65b0
            100,         // if 75 <= rates < 100
            '#e7298a',   // use color #e7298a
            125,         // if 100 <= rates < 125
            '#ce1256',   // use color #ce1256
            150,        // if 125 <= rates < 150
            "#91003f"    // use color #91003f if 150 <= rates
        ],
        'fill-outline-color': '#BBBBBB',
        'fill-opacity': 0.7,
    },
  });
});

// create legend
const legend = document.getElementById("legend");
legend.innerHTML = "<b>Covid Case Rates<br>(cases per thousand residents)</b><br><br>";


layers.forEach((layer, i) => {
  const color = colors[i];
  const item = document.createElement('div');
  const key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  const value = document.createElement('span');
  value.innerHTML = `${layer}`;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
});
// add the data source
const source =
'</br><p style="text-align: left; font-size:10pt"> Data Source: <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">New York Times</a></p>';
// combine all the html codes.
legend.innerHTML += source;


map.on('mousemove', ({point}) => {
  const state = map.queryRenderedFeatures(point, {
    layers: ['covid19-rates-layer']
  });
  document.getElementById('text-description').innerHTML = state.length ?

      `<h3>${state[0].properties.county + " County, " + state[0].properties.state}</h3>
      <p>${state[0].properties.rates} per thousand residents </p>` :
      `<p>Hover mouse over any county to view rates!</p>`;
});