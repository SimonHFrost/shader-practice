var initialize = require('./initializer.js').initialize;
var createCube = require('./object-creator.js').createCube;
var createLight = require('./object-creator.js').createLight;
var createDirectionalLight = require('./object-creator.js').createDirectionalLight;

var result = initialize();
var scene = result.scene;
var renderer = result.renderer;
var camera = result.camera;
var cube = createCube();

var dotScreenEffect = new THREE.ShaderPass( THREE.DotScreenShader );
var rgbEffect = new THREE.ShaderPass( THREE.RGBShiftShader );

composer = new THREE.EffectComposer( renderer );

scene.add(createLight());
scene.add(createDirectionalLight());
scene.add(cube);

function rotateCube() {
  cube.rotation.y -= 0.01;
}

window.setInterval(rotateCube, 20);

composer.addPass( new THREE.RenderPass( scene, camera ) );
composer.addPass( dotScreenEffect );

rgbEffect.uniforms[ 'amount' ].value = 0.0015;
rgbEffect.renderToScreen = true;
composer.addPass( rgbEffect );
