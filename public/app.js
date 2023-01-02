import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Vector3,
    Color,
    AmbientLight,
    BoxGeometry,
    MeshLambertMaterial,
    PointLight,
    Mesh,
} from './jsm/three/three.module.js';

//to display the canvas properly 
document.body.setAttribute('style', 'margin: 0; overflow: hidden;');

//global varible and object declarations ****************************************************
let scene = new Scene();
let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let cube;

// setup renderer
var renderer = new WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
renderer.autoClear = false;
document.body.appendChild(renderer.domElement);
window.addEventListener('resize', onWindowResize);

//prevent default behavior like opening files in the browser
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    renderer.domElement.addEventListener(eventName, preventDefaults, false)
})

sceneInit(); //setup lighting and helper objects

document.addEventListener("DOMContentLoaded", ()=>{

    camera.position.z = 0.5;
    camera.position.y = 1.5;
    camera.position.x = 0.5;
    camera.lookAt(0, 0, 0);

    //setup program loop
    renderer.setAnimationLoop(()=>{
        renderScene();
    });

});

function sceneInit() {
    scene.background = new Color(0x383838);
    const light = new PointLight(0xffffff, 1, 100);
    light.position.set(5, 10, 5);
    scene.add(light);
    const ambientLight2 = new AmbientLight(0xffffee, 0.2);
    scene.add(ambientLight2);

    //create a box
    const geometry = new BoxGeometry(0.5, 0.5, 0.5);
    const material = new MeshLambertMaterial({ color: 0x00ff00 });
    const cube1 = new Mesh(geometry, material);
    cube = cube1;
    scene.add(cube);
}

function renderScene(){
    cube.rotation.x += 0.01;
    renderer.clear();
    renderer.render(scene, camera);
}

function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
}

renderer.domElement.addEventListener('drageneter',()=>{console.log("dragenter")},false);
renderer.domElement.addEventListener('dragleave',()=>{console.log("dragleave hide drop file icon"); loadingFileIcon.visible = false;},false);
renderer.domElement.addEventListener('drop',handleDrop,false);
renderer.domElement.addEventListener('dragover',()=>{console.log("dragover show drop file icon"); loadingFileIcon.visible = true;},false);

function handleDrop(e) {
    console.log("droped file hide icon");
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


