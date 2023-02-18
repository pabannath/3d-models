// Get a reference to the canvas element
const canvas = document.getElementById('canvas');

// Create a new Three.js scene
const scene = new THREE.Scene();

// Create a new Three.js camera
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

// Create a new Three.js renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

// Load the GLTF model
const loader = new THREE.GLTFLoader();
loader.load('model.gltf', (gltf) => {
    // Add the model to the scene
    scene.add(gltf.scene);
});

// Set the position of the camera
camera.position.z = 5;

// Create a function to update the scene
function update() {
    // Rotate the model
    scene.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);

    // Call the update function again
    requestAnimationFrame(update);
}

// Call the update function to start rendering the scene
requestAnimationFrame(update);
