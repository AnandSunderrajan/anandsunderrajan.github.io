import * as THREE from '/three.js-master/build/three.module.js'
import {GLTFLoader} from '/three.js-master/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from '/three.js-master/examples/jsm/controls/OrbitControls.js'
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()
// console.log(THREE)

const loader = new GLTFLoader()
loader.load('assets/img/final.glb', function(glb){
    console.log(glb)
    const root = glb.scene;
    root.scale.set(0.8,0.8,0.8)
    scene.add(root);
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log('error happen :(')
}
)
// width: innerWidth/2 + 50,
    // height: innerHeight/2
const sizes = {
    width: 436,
    height: 400
}

const camera = new THREE.PerspectiveCamera(80, sizes.width/sizes.height, 0.1, 50)
// const camera = new THREE.PerspectiveCamera(70,2,1,1000);
// const light = new THREE.AmbientLight(0xffffff)
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0,0,0)
camera.add(light)

const renderer = new THREE.WebGL1Renderer({
    canvas:canvas,
    alpha:true
})

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set(1,1,5);
// camera.translateY(10)
controls.update();
controls.autoRotate = true
controls.autoRotateSpeed = 3.0
controls.enableZoom = false;
scene.add(camera)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(canvas.devicePixelRatio)
renderer.shadowMap.enabled = true

function animate() {
    requestAnimationFrame(animate)
    controls.update()
    camera.add(light)
    renderer.render(scene,camera)
}

animate()



