mapboxgl.accessToken =
"pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw";
const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/dark-v10",
projection: 'albers',
zoom: 4, // starting zoom
center: [-100, 35], // starting center
});

const grades = [1000, 10000, 50000, 150000],
colors = ['white', '#a1dab4', '#006994', '#0B0B45'],
radii = [5, 15, 20, 25];


map.on('load', () => {
    map.addSource('covid19-cases', {
        type: 'geojson',
        data: 'assets/us-covid-2020-counts.geojson'
    });

    map.addLayer({
        'id': 'covid19-cases-point',
        'type': 'circle',
        'source': 'covid19-cases',
        'paint': {
            'circle-radius': {
                'property': 'cases',
                'stops': [
                    [{
                        zoom: 5,
                        value: grades[0]
                    }, radii[0]],
                    [{
                        zoom: 5,
                        value: grades[1]
                    }, radii[1]],
                    [{
                        zoom: 5,
                        value: grades[2]
                    }, radii[2]],
                    [{
                        zoom: 5,
                        value: grades[3]
                    }, radii[3]],
                ]
            },
            'circle-color': {
                'property': 'cases',
                'stops': [
                    [grades[0], colors[0]],
                    [grades[1], colors[1]],
                    [grades[2], colors[2]],
                    [grades[3], colors[3]]
                ],
            },
            'circle-stroke-color': 'grey',
            'circle-stroke-width': 1,
            'circle-opacity': 0.6
        },
    },
    'waterway-label'
    );


    map.on('click', 'covid19-cases-point', (event) => {
        new mapboxgl.Popup()
            .setLngLat(event.features[0].geometry.coordinates)
            .setHTML(`<strong>County:</strong> ${event.features[0].properties.county},${event.features[0].properties.state} <br> <strong>Case:</strong> ${event.features[0].properties.cases}`)
            .addTo(map);
    });
});



// create legend
const legend = document.getElementById('legend');

var labels = ['<strong>Cases</strong>'],
vbreak;

for (var i = 0; i < grades.length; i++) {
vbreak = grades[i];

dot_radii = 2 * radii[i];
labels.push(
    '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radii +
    'px; height: ' +
    dot_radii + 'px; "></i> <span class="dot-label" style="top: ' + dot_radii  + 'px;">' + vbreak +
    '</span></p>');

}
// add the data source
const source =
'</br><p style="text-align: right; font-size:10pt">Source: <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">The New York Times</a></p>';
// combine all the html codes.
legend.innerHTML = labels.join('') + source;

