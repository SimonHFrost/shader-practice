var initialize = require('./initializer.js').initialize;
var createCube = require('./object-creator.js').createCube;
var createLight = require('./object-creator.js').createLight;
var createDirectionalLight = require('./object-creator.js').createDirectionalLight;

var scene = initialize();
scene.add(createLight());
scene.add(createDirectionalLight());

var cube = createCube();
scene.add(cube);

function rotateCube() {
  cube.rotation.y -= 0.01;
}

window.setInterval(rotateCube, 20);
