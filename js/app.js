/* global THREE */

var initialize = require('./initializer.js').initialize;
var createCube = require('./object-creator.js').createCube;
var createLight = require('./object-creator.js').createLight;
var createDirectionalLight = require('./object-creator.js').createDirectionalLight;

var scene = initialize();

var loader = new THREE.JSONLoader();

var spaceShip = null;
var cube = null;
var modelPath = 'model/spaceship.json';

function rotatePlanet() {
  cube.rotation.y -= 0.01;
}

window.setInterval(rotatePlanet, 20);

scene.add(createLight());
scene.add(createDirectionalLight());
