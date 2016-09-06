var initialize = require('./initializer.js').initialize;
var createCube = require('./object-creator.js').createCube;
var createLight = require('./object-creator.js').createLight;
var createDirectionalLight = require('./object-creator.js').createDirectionalLight;

var result = initialize();
var scene = result.scene;
var renderer = result.renderer;
var camera = result.camera;

scene.add(createLight());
scene.add(createDirectionalLight());

var cube = createCube();
scene.add(cube);

function rotateCube() {
  cube.rotation.y -= 0.01;
}

window.setInterval(rotateCube, 20);

// FIXME Global var...
composer = new THREE.EffectComposer( renderer );
composer.addPass( new THREE.RenderPass( scene, camera ) );

var dotScreenEffect = new THREE.ShaderPass( THREE.DotScreenShader );
composer.addPass( dotScreenEffect );


var rgbEffect = new THREE.ShaderPass( THREE.RGBShiftShader );
rgbEffect.uniforms[ 'amount' ].value = 0.0015;
rgbEffect.renderToScreen = true;
composer.addPass( rgbEffect );
