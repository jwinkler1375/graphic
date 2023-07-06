
//import * as THREE from 'https://cnd.jsdelivr.net/three@0.118/build/three.module.js';
//import { OrbitControls } from'https://cnd.jsdelivr.net/npm/three@0.118/addons/controls/OrbitControls.js';

//import * as THREE from 'three/build';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x0066CC } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
    './textures/penguins/arid_ft.jpg',
    './textures/penguins/arid_bk.jpg',
    './textures/penguins/arid_up.jpg',
    './textures/penguins/arid_dn.jpg',
    './textures/penguins/arid_rt.jpg',
    './textures/penguins/arid_lf.jpg',
]);
scene.background = texture;



function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}

animate();

alert('ENDE');

