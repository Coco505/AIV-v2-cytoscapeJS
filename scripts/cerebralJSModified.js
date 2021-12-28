/* cerebral.js */
/* Author: Silvia Frias, modified by Vincent Lau */
/**
 * Designed to work with the last version of cytoscape.js at the moment: 2.2.11
 * This layout place the nodes in horizontal layers.
 * Default settings are set for cerebral
 */

/** MODIFY THESE VARIABLES TO CUSTOMIZE YOUR NETWORK **/

// Map with the color of each layer ({layer1:color1, layer2:color2}) NOTE: changed here
var colors = {
    "unknown": "#000",
    "Extracellular": "#ffd672",
    "Plasma membrane": "#ffae00",
    "Cytoskeleton": "#572d21",
    "Cytosol": "#e0498a",
    "Mitochondria": "#41abf9",
    "Peroxisome": "#650065",
    "Plastid": "#006007",
    "Vacuole": "#ffe901",
    "Golgiapparatus": "#e8e88c",
    "Endoplasmic reticulum": "#d1111b",
    "Nucleus": "#0021a4",
    "Cytoplasm": "#CC8FE6",
    "Cellmembrane": "#9bffe7",
    "Cellwall": "#99ff00",
    "Chloroplast": "#0066ff"
};

// Ordered list of layers from top to bottom NOTE: changed here
var layers = ['unknown', 'Extracellular', 'Plasma membrane', 'Cytoskeleton', 'Cytosol', 'Mitochondria', 'Peroxisome', 'Plastid', 'Vacuole', 'Golgiapparatus', 'Endoplasmic reticulum', 'Cytoplasm', 'Cellmembrane', 'Cellwall', 'Chloroplast', 'Nucleus'];

// Name of the attribute that contains the information of the node layer
var layer_attribute_name = "localization";

// Color of hihglighted elements
var highLighColor = "red";

// Background color
var backgroundColor = "#FFFFFF";

// Widht of the line between layers
var gridLineWidth = 0.5;

// Color of the line between layers
var gridColor = 'black';

// Font of the labels of each layer
var font = "14pt Verdana";

//Edges color, width and label color
var edgeColor = '5f5f5f';
var edgeWidth = '0.8px';
var edgeLabel = 'black';

// Node label color
var nodeLabel = 'white';
var borderNodeLabel = 'black';


function filterTable(filter) {
    //REWRITE THIS METHOD TO EXTEND THE FILTERING
}