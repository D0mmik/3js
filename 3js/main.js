import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene();

const sphereGeometry  = new THREE.SphereGeometry(3, 64, 64);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: "red",
});
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
//scene.add(sphereMesh);

const boxGeometry = new THREE.BoxGeometry(3,3,3);
const boxMaterial = new THREE.MeshStandardMaterial({
    color: "cyan",
});
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.rotation.set(3,2,9);
boxMesh.position.set(0,0,4)
scene.add(boxMesh);

const light = new THREE.PointLight("white", 1, 100);
light.position.set(3, 0, 10);
scene.add(light);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.z = 20;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
