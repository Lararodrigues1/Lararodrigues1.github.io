import * as THREE from 'three';
//import Stats from 'three/addons/libs/stats.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as dat from 'three/addons/libs/lil-gui.module.min.js';


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

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(100, 200, 50);
light.castShadow = true;
scene.add(light);

//add a light to the scene
const light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);


camera.position.set(300, 200, 50);
controls.update();

//background color
renderer.setClearColor(0xcccccc);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


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



//add a plane to the scene
const planeGeometry = new THREE.PlaneGeometry(310, 250, 250);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcd853f });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(5, 0, 0);
plane.receiveShadow = true;
plane.castShadow = true;
scene.add(plane);


//add a rectangle to the scene
const rectangleGeometry = new THREE.BoxGeometry(10, 40, 8); //comprimento,altura,profundidade
const rectangleMaterial = new THREE.MeshLambertMaterial({ color: 0x606060 });
const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
rectangle.position.set(70, 25, -11); //x,y,z
rectangle.castShadow = true;
rectangle.receiveShadow = true;
scene.add(rectangle);


//add a rectangle to the scene
const rectangleGeometry1 = new THREE.BoxGeometry(20, 40, 10); //comprimento,altura,profundidade
const rectangleMaterial1 = new THREE.MeshLambertMaterial({ color: 0x606060 });
const rectangle1 = new THREE.Mesh(rectangleGeometry1, rectangleMaterial1);
rectangle1.position.set(50, 20, 10); //x,y,z
rectangle1.castShadow = true;
rectangle1.receiveShadow = true;
scene.add(rectangle1);

//add a rectangle to the scene
const rectangleGeometry2 = new THREE.BoxGeometry(10, 40, 10); //comprimento,altura,profundidade
const rectangleMaterial2 = new THREE.MeshLambertMaterial({ color: 0x606060 });
const rectangle2 = new THREE.Mesh(rectangleGeometry2, rectangleMaterial2);
rectangle2.position.set(-48, 20, 75); //x,y,z
rectangle2.castShadow = true;
rectangle2.receiveShadow = true;
scene.add(rectangle2);

//add a rectangle to the scene
const rectangleGeometry3 = new THREE.BoxGeometry(18, 40, 10); //comprimento,altura,profundidade
const rectangleMaterial3 = new THREE.MeshLambertMaterial({ color: 0x606060 });
const rectangle3 = new THREE.Mesh(rectangleGeometry3, rectangleMaterial3);
rectangle3.position.set(-43, 20, -115); //x,y,z
rectangle3.castShadow = true;
rectangle3.receiveShadow = true;
scene.add(rectangle3);

//add a rectangle to the scene
const rectangleGeometry4 = new THREE.BoxGeometry(18, 40, 10); //comprimento,altura,profundidade
const rectangleMaterial4 = new THREE.MeshLambertMaterial({ color: 0x606060 });
const rectangle4 = new THREE.Mesh(rectangleGeometry4, rectangleMaterial4);
rectangle4.position.set(-120, 20, -60); //x,y,z
rectangle4.castShadow = true;
rectangle4.receiveShadow = true;
scene.add(rectangle4);

//add a rectangle to the scene
const rectangleGeometry5 = new THREE.BoxGeometry(18, 30, 10); //comprimento,altura,profundidade
const rectangleMaterial5 = new THREE.MeshLambertMaterial({ color: 0x606060 });
const rectangle5 = new THREE.Mesh(rectangleGeometry5, rectangleMaterial5);
rectangle5.position.set(-25, 15, 110); //x,y,z
rectangle5.castShadow = true;
rectangle5.receiveShadow = true;
scene.add(rectangle5);



//add a sphere to the scene
const sphereGeometry = new THREE.SphereGeometry(30, 96, 96);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff66 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-200, 100, 0);
scene.add(sphere);

const animate = function(time) {
    requestAnimationFrame(animate);

    sphere.rotation.x = time / 1000;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);



window.onresize = function() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

};