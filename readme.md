# Covid-19 Case Rates & Counts Thematic Maps

By Ajaz Syed

## Introduction

In this project, I show two thematic maps: 1) a choropleth map of the Covid-19 rates (map1.html) and 2) a proportional symbols map of Covid-19 cases (map2.html).


The first map is an interactive choropleth map that displays the covid rates per thousand residents of each county. The interactive tool showed the county name and case rate. In the map, I chose a purple/red theme, where the darker the red/purple-ish tint was, the higher the case rate was.
The legend essentially showed showed the breakdown of case rate ranges by color and also listed the data source.

The second map is an interactive proportional symbol map that uses circles varying diameter size and shade/color to depict the amount of COVID-19 cases in that area.
The legend displays what each circle size equaled. And for an even more effective visualization I also implemented a shade variation, where the darker the color of the circle, the bigger the number of cases was and the lighter color meant there were less cases.
In terms of interactivity, I implemented a clicking tooltip, that shows the county and the number of cases.


## Links to the maps
- [Covid-19 Rates Choropleth Map](https://ajazksyed.github.io/Covid-19_CaseRates_ThematicMaps/map1.html)

- [Covid-19 Case Proportional Symbols Map](https://ajazksyed.github.io/Covid-19_CaseRates_ThematicMaps/map2.html)


## Screenshots of the Maps

Covid-19 Rates Choropleth Map
![Covid-19 Rates Choropleth Map](img/map1.png)


Covid-19 Case Proportional Symbols Map
![Covid-19 Case Proportional Symbols Map](img/map2.png)

## Functions

* The function used in the first map was the information tooltip window, where when the cursor hovered over a county, the window in the top left displayed the Covid-19 rate information for that county.
*  The function used in the second map was the clickable county points that showed the number of Covid-19 cases and the county name.


## Additional Information

### Libraries and Software Resources used
* CSS
* HTML
* JavaScript
* Mapbox
* MapShaper
* ColorBrewer

### Data Sources
The COVID-19 case/death data used are originally from **The New York Times**. The population data used for calculating the case rates are from the **2018 ACS 5 year estimates**. The U.S. county boundary shapefile was downloaded from the **U.S. Census Bureau**.

### Credit Acknowledgment
Thank you to Professor Zhao for his assistance in creating the lab data and to the UW Geography 458 team for processesing the data to suit the project better.
