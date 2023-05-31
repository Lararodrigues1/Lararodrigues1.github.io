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
light.position.set(100, 100, 30);
light.castShadow = true;
scene.add(light);

//add a light to the scene
const light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);


camera.position.set(50, 100, 200);
controls.update();

//background color
renderer.setClearColor(0xcccccc);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


//add a tree
// assetLoader.load(floor.href, function(gltf) {
//         const model = gltf.scene;
//         model.scale.set(20, 20, 20);
//         model.position.set(10, 0, 0);

//         model.castShadow = true;
//         model.receiveShadow = true;

//         scene.add(model);
//     }), undefined,
//     function(error) {
//         console.error(error);
//     };



//add a plane to the scene
const planeGeometry = new THREE.PlaneGeometry(310, 250, 1);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0x4c9900 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(5, 0, 0);
plane.receiveShadow = true;
plane.castShadow = true;
scene.add(plane);


function geometry(a, l, p, x, y, z) {
    //add a rectangle to the scene
    const rectangleGeometry = new THREE.BoxGeometry(a, l, p); //comprimento,altura,profundidade
    const rectangleMaterial = new THREE.MeshLambertMaterial({ color: 0x606060 });
    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    rectangle.position.set(x, y, z); //x,y,z
    rectangle.castShadow = true;
    rectangle.receiveShadow = true;
    scene.add(rectangle);
}

geometry(10, 40, 10, 70, 20, -13);
geometry(20, 40, 10, 50, 20, 10);
geometry(10, 40, 10, -48, 20, 74);

geometry(18, 40, 10, -43, 20, -115);
geometry(18, 40, 10, -115, 20, -60);
geometry(18, 30, 10, -25, 15, 110);

geometry(5, 10, 12, 68, 5, -58);
geometry(5, 10, 12, 68, 5, -76);
geometry(5, 10, 12, 44, 5, -58);
geometry(5, 10, 12, 44, 5, -76);

//casinhas pequeninas
geometry(8, 10, 8, 23, 5, -78);
geometry(8, 10, 8, 23, 5, -68);
geometry(8, 10, 8, 23, 5, -58);
geometry(8, 10, 8, 55, 5, 113);
geometry(8, 10, 8, 45, 5, 113);
geometry(8, 10, 8, 34, 5, 113);
geometry(8, 10, 8, 23, 5, 113);

geometry(12, 20, 8, 1, 10, 110);
geometry(12, 20, 8, -49, 10, 110);
geometry(8, 20, 12, 28, 10, 75);
geometry(8, 20, 12, -105, 10, -78);
geometry(19, 10, 19, -34, 5, -66);

geometry(17, 7, 19, 70, 5, 66);
geometry(15, 7, 19, 2, 5, 61);
geometry(15, 7, 19, 2, 5, 61);
geometry(13, 7, 18, -113, 5, 58);
geometry(19, 7, 13, -109, 5, 112);
geometry(17, 7, 15, -47, 5, 5);
geometry(20, 5, 20, 133, 5, -68);
//casinhas duplas
geometry(8, 7, 9, 131, 4.5, 67);
geometry(8, 7, 9, 131, 4.5, 67);
geometry(6, 5, 6, 132, 4, 75);
geometry(8, 7, 9, 131, 4.5, 7);
geometry(6, 5, 6, 132, 4, 15);
geometry(9, 7, 7, 131, 4.5, -115);
geometry(6, 5, 7, 140, 4, -115);
geometry(9, 7, 7, 60, 4.5, -115);
geometry(6, 5, 7, 68, 4, -115);
geometry(9, 7, 7, 31, 4.5, -115);
geometry(6, 5, 7, 39, 4, -115);
//casinhas compridas
geometry(20, 7, 7, 135, 4.5, 110);
geometry(7, 7, 20, 132, 4.5, -16);
geometry(7, 7, 20, 132, 4.5, 40);

//edificios em L
geometry(15, 20, 8, -19, 11, 16);
geometry(6, 20, 7, -14, 11, 11);

geometry(15, 20, 8, 70, 11, 114);
geometry(6, 20, 7, 75, 11, 109);

geometry(15, 20, 8, -18, 11, -22);
geometry(6, 20, 7, -23, 11, -17);

geometry(15, 20, 7, -14, 11, -116);
geometry(6, 20, 7, -18, 11, -111);

geometry(15, 20, 8, -111, 11, -117);
geometry(6, 20, 7, -116, 11, -111);

//hospital
geometry(20, 19, 35, -110, 10, 3);



//add a road to the scene
function road(l, p, a, x, y, z) {
    const roadGeometry = new THREE.BoxGeometry(l, p, a);
    const roadMaterial = new THREE.MeshLambertMaterial({ color: 0xc0c0c0 });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.position.set(x, y, z);
    road.castShadow = true;
    road.receiveShadow = true;
    scene.add(road);
}

road(310, 0.1, 20, 5, 0.1, 93);
road(310, 0.1, 20, 5, 0.1, -95);

road(20, 0.1, 200, 105, 0.1, 0);
road(20, 0.1, 200, -80, 0.1, 0);

road(166, 0.1, 20, 13, 0.1, 35);
road(166, 0.1, 15, 13, 0.1, -40);

//add road lines to the scene
function roadLines(l, p, a, x, y, z) {
    const roadLinesGeometry = new THREE.BoxGeometry(l, p, a);
    const roadLinesMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const roadLines = new THREE.Mesh(roadLinesGeometry, roadLinesMaterial);
    roadLines.position.set(x, y, z);
    roadLines.castShadow = true;
    roadLines.receiveShadow = true;
    scene.add(roadLines);
}

roadLines(20, 0.1, 2, -5, 0.2, 93);
roadLines(20, 0.1, 2, -30, 0.2, 93);
roadLines(20, 0.1, 2, -55, 0.2, 93);
roadLines(20, 0.1, 2, -80, 0.2, 93);
roadLines(20, 0.1, 2, -105, 0.2, 93);
roadLines(20, 0.1, 2, -130, 0.2, 93);
roadLines(5, 0.1, 2, -148, 0.2, 93);
roadLines(20, 0.1, 2, 5, 0.2, 93);
roadLines(20, 0.1, 2, 30, 0.2, 93);
roadLines(20, 0.1, 2, 55, 0.2, 93);
roadLines(20, 0.1, 2, 80, 0.2, 93);
roadLines(20, 0.1, 2, 105, 0.2, 93);
roadLines(20, 0.1, 2, 130, 0.2, 93);
roadLines(15, 0.1, 2, 153, 0.2, 93);


roadLines(5, 0.1, 2, -148, 0.2, -95);
roadLines(20, 0.1, 2, -130, 0.2, -95);
roadLines(20, 0.1, 2, -105, 0.2, -95);
roadLines(20, 0.1, 2, -80, 0.2, -95);
roadLines(20, 0.1, 2, -55, 0.2, -95);
roadLines(20, 0.1, 2, -30, 0.2, -95);
roadLines(10, 0.1, 2, -5, 0.2, -95);
roadLines(20, 0.1, 2, 5, 0.2, -95);
roadLines(20, 0.1, 2, 30, 0.2, -95);
roadLines(20, 0.1, 2, 55, 0.2, -95);
roadLines(20, 0.1, 2, 80, 0.2, -95);
roadLines(20, 0.1, 2, 105, 0.2, -95);
roadLines(20, 0.1, 2, 130, 0.2, -95);
roadLines(15, 0.1, 2, 153, 0.2, -95);


roadLines(2, 0.1, 20, 105, 0.2, 0);
roadLines(2, 0.1, 20, 105, 0.2, 25);
roadLines(2, 0.1, 20, 105, 0.2, 50);
roadLines(2, 0.1, 20, 105, 0.2, 75);
roadLines(2, 0.1, 20, 105, 0.2, -25);
roadLines(2, 0.1, 20, 105, 0.2, -50);
roadLines(2, 0.1, 20, 105, 0.2, -75);

roadLines(2, 0.1, 20, -80, 0.2, 0);
roadLines(2, 0.1, 20, -80, 0.2, 25);
roadLines(2, 0.1, 20, -80, 0.2, 50);
roadLines(2, 0.1, 20, -80, 0.2, 75);
roadLines(2, 0.1, 20, -80, 0.2, -25);
roadLines(2, 0.1, 20, -80, 0.2, -50);
roadLines(2, 0.1, 20, -80, 0.2, -75);


roadLines(20, 0.1, 2, 13, 0.2, 35);
roadLines(20, 0.1, 2, 38, 0.2, 35);
roadLines(20, 0.1, 2, 63, 0.2, 35);
roadLines(20, 0.1, 2, 88, 0.2, 35);
roadLines(20, 0.1, 2, -13, 0.2, 35);
roadLines(20, 0.1, 2, -38, 0.2, 35);
roadLines(20, 0.1, 2, -63, 0.2, 35);

roadLines(20, 0.1, 2, 13, 0.2, -40);
roadLines(20, 0.1, 2, 38, 0.2, -40);
roadLines(20, 0.1, 2, 63, 0.2, -40);
roadLines(20, 0.1, 2, 88, 0.2, -40);
roadLines(20, 0.1, 2, -13, 0.2, -40);
roadLines(20, 0.1, 2, -38, 0.2, -40);
roadLines(20, 0.1, 2, -63, 0.2, -40);


//add a vertical line to the scene
function verticalLine(x, y, z) {
    const geometry = new THREE.BoxGeometry(0.5, 18, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x404040 });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.set(x, y, z);
    scene.add(cube);
}

//lados das casas duplas
// verticalLine(119, 9, 0);

// verticalLine(119, 9, 29);

// verticalLine(119, 9, 58);

// verticalLine(119, 9, 105);

// verticalLine(119, 9, -26);

// verticalLine(119, 9, -51);

// verticalLine(121, 9, -108);

// verticalLine(119, 9, -84);

// //lado das casinhas pequeninas
// verticalLine(80, 9, 104);

// verticalLine(39, 9, 104);

// verticalLine(-10, 9, 104);

// verticalLine(-90, 9, 104);


//create a car

// Create a parent object for the car
const carContainer = new THREE.Object3D();
scene.add(carContainer);

function createWheels() {
    const geometry = new THREE.BoxBufferGeometry(2, 2, 5.5);
    const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const wheel = new THREE.Mesh(geometry, material);
    return wheel;
}

function createCar() {
    const car = new THREE.Group();

    const backWheel = createWheels();
    backWheel.position.y = 1;
    backWheel.position.x = -3;
    car.add(backWheel);

    const frontWheel = createWheels();
    frontWheel.position.y = 1;
    frontWheel.position.x = 3;
    car.add(frontWheel);

    const main = new THREE.Mesh(
        new THREE.BoxBufferGeometry(10, 2.5, 5),
        new THREE.MeshLambertMaterial({ color: 0x78b14b })
    );
    main.position.y = 2;
    car.add(main);

    const cabin = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5.5, 2, 4),
        new THREE.MeshLambertMaterial({ color: 0xffffff })
    );
    cabin.position.x = -1;
    cabin.position.y = 4.25;
    car.add(cabin);

    // Add the car to the parent container
    carContainer.add(car);

    return car;
}

const car = createCar();

// Animate the car




//add a sphere to the scene
const sphereGeometry = new THREE.SphereGeometry(5, 16, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff66 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(100, 100, 30);
scene.add(sphere);

const animate = function(time) {
    requestAnimationFrame(animate);


    renderer.render(scene, camera);

    requestAnimationFrame(animate);

    // Rotate the car container to simulate motion
    carContainer.position.x += 0.1;

    // Render the scene
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);



window.onresize = function() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

};