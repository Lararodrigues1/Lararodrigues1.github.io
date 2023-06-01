import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as dat from 'three/addons/libs/lil-gui.module.min.js';



const floor = new URL('../../assets/last.glb',
    import.meta.url);

const assetLoader = new GLTFLoader();

const scene = new THREE.Scene();


const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const controls = new OrbitControls(camera, renderer.domElement);





//add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(100, 100, 30);
light.castShadow = true;
scene.add(light);




//add a light to the scene
const light2 = new THREE.AmbientLight(0xffffff, 0.5);
light2.castShadow = true;
scene.add(light2);


const light1 = new THREE.PointLight(0xffffff, 1, 0.5);
light1.position.set(50, 50, 50);
light1.castShadow = true;
scene.add(light);


camera.position.set(30, 80, 160);
controls.update();

//background color
renderer.setClearColor(0xccffff);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const gui = new dat.GUI();

const options = {
    Green_Car: 0,
    light: true,
    sphereMaterial: '#ff0000',
    light1: true,
    Yellow_Car: 0,
    Blue_Car: 0,
};

gui.add(options, 'Green_Car', 0, 1);
gui.add(options, 'Yellow_Car', 0, 1);
gui.add(options, 'Blue_Car', 0, 1);

gui.add(options, 'light').onChange(function(value) {
        if (value) {
            scene.add(light);
            sphereMaterial.color.setHex(0xffff99);
            renderer.setClearColor(0xccffff);


        } else {
            scene.remove(light);
            sphereMaterial.color.setHex(0xffffff);
            renderer.setClearColor(0x009999);
            scene.add(light2);
        }
    }

);


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


//create a car

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
    car.castShadow = true;
    car.receiveShadow = true;
    car.add(cabin);

    return car;
}

const car = createCar();
car.position.set(-140, 0, 100); // Set the position of the car
car.castShadow = true;
car.receiveShadow = true;
scene.add(car);


function createWheels1() {
    const geometry = new THREE.BoxBufferGeometry(2, 2, 5.5);
    const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const wheel = new THREE.Mesh(geometry, material);
    return wheel;
}

function createCar1() {
    const car1 = new THREE.Group();

    const backWheel = createWheels1();
    backWheel.position.y = 1;
    backWheel.position.x = -3;
    car1.add(backWheel);

    const frontWheel = createWheels1();
    frontWheel.position.y = 1;
    frontWheel.position.x = 3;
    car1.add(frontWheel);

    const main = new THREE.Mesh(
        new THREE.BoxBufferGeometry(10, 2.5, 5),
        new THREE.MeshLambertMaterial({ color: 0xffff99 })
    );
    main.position.y = 2;
    car1.add(main);

    const cabin = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5.5, 2, 4),
        new THREE.MeshLambertMaterial({ color: 0xffffff })
    );
    cabin.position.x = -1;
    cabin.position.y = 4.25;
    car1.add(cabin);

    car1.castShadow = true;
    car1.receiveShadow = true;

    return car1;
}

const car1 = createCar1();
car1.position.set(-140, 0, -90); // Set the position of the car
car1.castShadow = true;
car1.receiveShadow = true;
scene.add(car1);


function createWheels2() {
    const geometry = new THREE.BoxBufferGeometry(2, 2, 5.5);
    const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const wheel = new THREE.Mesh(geometry, material);
    return wheel;
}

function createCar2() {
    const car2 = new THREE.Group();

    const backWheel = createWheels2();
    backWheel.position.y = 1;
    backWheel.position.x = -3;
    car2.add(backWheel);

    const frontWheel = createWheels2();
    frontWheel.position.y = 1;
    frontWheel.position.x = 3;
    car2.add(frontWheel);

    const main = new THREE.Mesh(
        new THREE.BoxBufferGeometry(10, 2.5, 5),
        new THREE.MeshLambertMaterial({ color: 0xccffff })
    );
    main.position.y = 2;
    car2.add(main);

    const cabin = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5.5, 2, 4),
        new THREE.MeshLambertMaterial({ color: 0xffffff })
    );
    cabin.position.x = -1;
    cabin.position.y = 4.25;
    car2.add(cabin);

    return car2;
}

const car2 = createCar2();
car2.position.set(100, 0, -100); // Set the position of the car
//rotate 360 degrees
car2.rotation.y = Math.PI / 2;
car2.castShadow = true;
car2.receiveShadow = true;
scene.add(car2);






//add a sphere to the scene
const sphereGeometry = new THREE.SphereGeometry(5, 16, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff99 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(100, 100, 30);
scene.add(sphere);


const rectangleWidth = 220;
const rectangleLength = 140;
// Define the speed of the car

const rectangleLength1 = 100;
const rectangleWidth1 = 100;




// Define the direction of movement
let direction = 1; // 1: Right, 2: Down, 3: Left, 4: Up

let direction1 = 1;

let direction2 = 1;

let step = 0;
let step1 = 0;
let step2 = 0;

function animate() {

    step = options.Green_Car;
    step1 = options.Yellow_Car;
    step2 = options.Blue_Car;
    // Move the car horizontally along the road lines
    if (direction === 1) {
        car.position.x += step;
        car.rotation.y = 0; // Rotate the car to face right
        if (car.position.x > rectangleWidth / 2) {
            car.position.x = rectangleWidth / 2;
            direction = 2;
        }
    } else if (direction === 2) {
        car.position.z -= step;
        car.rotation.y = Math.PI / 2; // Rotate the car to face down
        if (car.position.z < 100 - rectangleLength / 2) {
            car.position.z = 100 - rectangleLength / 2;
            direction = 3;
        }
    } else if (direction === 3) {
        car.position.x -= step;
        car.rotation.y = Math.PI; // Rotate the car to face left
        if (car.position.x < (-rectangleWidth + 50) / 2) {
            car.position.x = (-rectangleWidth + 50) / 2;
            direction = 4;
        }
    } else if (direction === 4) {
        car.position.z += step;
        car.rotation.y = (3 * Math.PI) / 2; // Rotate the car to face up
        if (car.position.z > 100) {
            car.position.z = 100;
            direction = 1;
        }
    }


    // yellow car
    if (direction1 === 1) {
        car1.position.x += step1; // Move the car to the right
        car1.rotation.y = 0; // Rotate the car to face right
        if (car1.position.x >= 110) {
            car1.position.x = 110;
            direction1 = 2; // Change direction to move down
        }
    } else if (direction1 === 2) {
        car1.position.z -= step1; // Move the car down
        car1.rotation.y = Math.PI / 2; // Rotate the car to face down
        if (car1.position.z <= -100) {
            car1.position.z = -100;
            direction1 = 3; // Change direction to move left
        }
    } else if (direction1 === 3) {
        car1.position.x -= step1; // Move the car to the left
        car1.rotation.y = Math.PI; // Rotate the car to face left
        if (car1.position.x <= -85) {
            car1.position.x = -85;
            direction1 = 4; // Change direction to move up
        }
    } else if (direction1 === 4) {
        car1.position.z += step1; // Move the car up
        car1.rotation.y = (3 * Math.PI) / 2; // Rotate the car to face up
        if (car1.position.z >= -35) {
            car1.position.z = -35;
            direction1 = 1; // Change direction to move right
        }
    }



    // blue car
    if (direction2 === 1) {
        car2.position.x += step2; // Move the car to the right
        car2.rotation.y = 0; // Rotate the car to face right
        if (car2.position.x >= 110) {
            car2.position.x = 110;
            direction2 = 2; // Change direction to move down
        }
    } else if (direction2 === 2) {
        car2.position.z -= step2; // Move the car down
        car2.rotation.y = Math.PI / 2; // Rotate the car to face down
        if (car2.position.z <= -100) {
            car2.position.z = -100;
            direction2 = 3; // Change direction to move left
        }
    } else if (direction2 === 3) {
        car2.position.x -= step2; // Move the car to the left
        car2.rotation.y = Math.PI; // Rotate the car to face left
        if (car2.position.x <= -85) {
            car2.position.x = -85;
            direction2 = 4; // Change direction to move up
        }
    } else if (direction2 === 4) {
        car2.position.z += step2; // Move the car up
        car2.rotation.y = (3 * Math.PI) / 2; // Rotate the car to face up
        if (car2.position.z >= 100) {
            car2.position.z = 100;
            direction2 = 1; // Change direction to move right
        }
    }



    controls.update();

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
renderer.setAnimationLoop(animate);



window.onresize = function() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

};