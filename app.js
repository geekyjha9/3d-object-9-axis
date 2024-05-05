var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 4, 3, new BABYLON.Vector3(0, 1, 0), scene);
camera.attachControl(canvas, true);
camera.lowerRadiusLimit = 2;
camera.upperRadiusLimit = 10;
camera.wheelDeltaPercentage = 0.01;

var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.6;
light.specular = BABYLON.Color3.Black();

var light2 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, -1.0), scene);
light2.position = new BABYLON.Vector3(0, 5, 5);

var shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);
shadowGenerator.useBlurExponentialShadowMap = true;
shadowGenerator.blurKernel = 32;

engine.displayLoadingUI();

var avatar; // Variable to hold the avatar mesh

BABYLON.SceneLoader.ImportMesh("", "./scenes/", "dummy3.babylon", scene, function (newMeshes, particleSystems, skeletons) {
    avatar = newMeshes[0];
    var skeleton = skeletons[0];

    shadowGenerator.addShadowCaster(scene.meshes[0], true);
    for (var index = 0; index < newMeshes.length; index++) {
        newMeshes[index].receiveShadows = false;;
    }

    var helper = scene.createDefaultEnvironment({
        enableGroundShadow: true
    });
    helper.setMainColor(BABYLON.Color3.Gray());
    helper.ground.position.y += 0.01;

    // ROBOT
    skeleton.animationPropertiesOverride = new BABYLON.AnimationPropertiesOverride();
    skeleton.animationPropertiesOverride.enableBlending = true;
    skeleton.animationPropertiesOverride.blendingSpeed = 0.05;
    skeleton.animationPropertiesOverride.loopMode = 1;

    var idleRange = skeleton.getAnimationRange("YBot_Idle");
    var walkRange = skeleton.getAnimationRange("YBot_Walk");
    var runRange = skeleton.getAnimationRange("YBot_Run");
    var leftRange = skeleton.getAnimationRange("YBot_LeftStrafeWalk");
    var rightRange = skeleton.getAnimationRange("YBot_RightStrafeWalk");

    // IDLE
    if (idleRange) scene.beginAnimation(skeleton, idleRange.from, idleRange.to, true);

    engine.hideLoadingUI();
});

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});

// Function to process sensor data and rotate the avatar
function processSensorData(data) {
    // Extract accelerometer, gyroscope, and magnetometer data from 'data' object

    // Log the measurements to the console (for demonstration purposes)
    console.log("Accelerometer X:", data.accelerometer.x);
    console.log("Accelerometer Y:", data.accelerometer.y);
    console.log("Accelerometer Z:", data.accelerometer.z);
    console.log("Gyroscope X:", data.gyroscope.x);
    console.log("Gyroscope Y:", data.gyroscope.y);
    console.log("Gyroscope Z:", data.gyroscope.z);
    console.log("Magnetometer X:", data.magnetometer.x);
    console.log("Magnetometer Y:", data.magnetometer.y);
    console.log("Magnetometer Z:", data.magnetometer.z);

    // Use the sensor data to rotate the avatar (replace with your logic)
    // Example: Rotate the avatar based on gyroscope readings
    if (avatar) {
        avatar.rotation.x = data.gyroscope.x;
        avatar.rotation.y = data.gyroscope.y;
        avatar.rotation.z = data.gyroscope.z;
    }
}

// Simulated sensor data (replace with real data)
setInterval(function () {
    var sensorData = {
        accelerometer: {
            x: Math.random(),
            y: Math.random(),
            z: Math.random()
        },
        gyroscope: {
            x: Math.random(),
            y: Math.random(),
            z: Math.random()
        },
        magnetometer: {
            x: Math.random(),
            y: Math.random(),
            z: Math.random()
        }
    };
    processSensorData(sensorData);
}, 1); // Update every 1 second (adjust as needed)
