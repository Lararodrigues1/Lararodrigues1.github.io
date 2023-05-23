import * as THREE from 'three';
//import Stats from 'three/addons/libs/stats.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as dat from 'three/addons/libs/lil-gui.module.min.js';

//import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
//import { DRACOLoader } from 'node_modules/three/src/loaders/DRACOLoader.js';

//let stats = initStats();




const ligths = new URL('../../assets/ligths.glb',
    import.meta.url);

const floor = new URL('../../assets/houses.glb',
    import.meta.url);

const assetLoader = new GLTFLoader();

const scene = new THREE.Scene();


const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true

const gui = new dat.GUI();

const options = {
    darkMode: false
};

gui.add(options, 'darkMode').name('Dark Mode').onChange(function(e) {
    if (e) {
        scene.background = null;
        planeMaterial.color.set(0x994c00);
        sphereMaterial.color.set(0xffffff);
        planeMaterial1.color.set(0x4c9900);
        circleMaterial.color.set(0x004c99);
        //rectangleGeometry.color.set(0x606060);
    } else {
        scene.background = darkMaterial;
        planeMaterial.color.set(0xcd853f);
        sphereMaterial.color.set(0xffff99);
        planeMaterial1.color.set(0xb2ff66);
        circleMaterial.color.set(0x99ccff);
        //rectangleGeometry.color.set(0x606060);

    }
});

//add a tree
assetLoader.load(floor.href, function(gltf) {
        const model = gltf.scene;
        model.scale.set(20, 20, 20);
        model.position.set(10, 0, 0);

        model.castShadow = true;
        model.receiveShadow = true;

        scene.add(model);
    }), undefined,
    function(error) {
        console.error(error);
    };



// assetLoader.load(floor.href, function(gltf) {
//         const model = gltf.scene;
//         // const modelMaterial = new THREE.MeshBasictMaterial({ color: 0x994c00 });
//         // const model = new THREE.Mesh(modelGeometry, modelMaterial);
//         model.scale.set(20, 20, 20);
//         model.position.set(10, 0, 0);
//         // model.castShadow = true;
//         // model.receiveShadow = true;

//         scene.add(model);
//     }), undefined,
//     function(error) {
//         console.error(error);
//     };


//add a plane to the scene
const planeGeometry = new THREE.PlaneGeometry(310, 250, 250);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcd853f });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(5, 0, 0);
plane.receiveShadow = true;
plane.castShadow = true;
scene.add(plane);


//const house = new URL('../assets/cena_13.glb',import.meta.url);

//background color
renderer.setClearColor(0xcccccc);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(-200, 100, 0);
light.castShadow = true;
scene.add(light);

//add a light to the scene
const light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);


camera.position.set(200, 100, 0);
controls.update();

//add a sphere to the scene
const sphereGeometry = new THREE.SphereGeometry(30, 96, 96);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff66 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-400, 300, 0);
scene.add(sphere);




const animate = function(time) {
    requestAnimationFrame(animate);

    sphere.rotation.x = time / 1000;

    renderer.render(scene, camera);
    //stats.update();
}

renderer.setAnimationLoop(animate);



window.onresize = function() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

};


// function initStats() {
//     var stats = new Stats();
//     stats.setMode(0); // 0: fps, 1: ms
//     // Align top-left
//     stats.domElement.style.position = 'absolute';
//     stats.domElement.style.left = '0px';
//     stats.domElement.style.top = '0px';
//     document.getElementById("Stats-output").appendChild(stats.domElement);
//     return stats;
// };