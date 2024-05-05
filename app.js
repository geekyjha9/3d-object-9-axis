// var canvas = document.getElementById("renderCanvas");
// var engine = new BABYLON.Engine(canvas, true);

// var scene = new BABYLON.Scene(engine);
// var camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 4, 3, new BABYLON.Vector3(0, 1, 0), scene);
// camera.attachControl(canvas, true);
// camera.lowerRadiusLimit = 2;
// camera.upperRadiusLimit = 10;
// camera.wheelDeltaPercentage = 0.01;

// var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
// light.intensity = 0.6;
// light.specular = BABYLON.Color3.Black();

// var light2 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, -1.0), scene);
// light2.position = new BABYLON.Vector3(0, 5, 5);

// var shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);
// shadowGenerator.useBlurExponentialShadowMap = true;
// shadowGenerator.blurKernel = 32;

// engine.displayLoadingUI();

// var avatar; // Variable to hold the avatar mesh

// BABYLON.SceneLoader.ImportMesh("", "./scenes/", "dummy3.babylon", scene, function (newMeshes, particleSystems, skeletons) {
//     avatar = newMeshes[0];
//     var skeleton = skeletons[0];

//     shadowGenerator.addShadowCaster(scene.meshes[0], true);
//     for (var index = 0; index < newMeshes.length; index++) {
//         newMeshes[index].receiveShadows = false;;
//     }

//     var helper = scene.createDefaultEnvironment({
//         enableGroundShadow: true
//     });
//     helper.setMainColor(BABYLON.Color3.Gray());
//     helper.ground.position.y += 0.01;

//     // ROBOT
//     skeleton.animationPropertiesOverride = new BABYLON.AnimationPropertiesOverride();
//     skeleton.animationPropertiesOverride.enableBlending = true;
//     skeleton.animationPropertiesOverride.blendingSpeed = 0.05;
//     skeleton.animationPropertiesOverride.loopMode = 1;

//     var idleRange = skeleton.getAnimationRange("YBot_Idle");
//     var walkRange = skeleton.getAnimationRange("YBot_Walk");
//     var runRange = skeleton.getAnimationRange("YBot_Run");
//     var leftRange = skeleton.getAnimationRange("YBot_LeftStrafeWalk");
//     var rightRange = skeleton.getAnimationRange("YBot_RightStrafeWalk");

//     // IDLE
//     if (idleRange) scene.beginAnimation(skeleton, idleRange.from, idleRange.to, true);

//     engine.hideLoadingUI();
// });

// engine.runRenderLoop(function () {
//     scene.render();
// });

// window.addEventListener("resize", function () {
//     engine.resize();
// });

// // Function to process sensor data and rotate the avatar
// function processSensorData(data) {
//     // Extract accelerometer, gyroscope, and magnetometer data from 'data' object

//     // Log the measurements to the console (for demonstration purposes)
//     console.log("Accelerometer X:", data.accelerometer.x);
//     console.log("Accelerometer Y:", data.accelerometer.y);
//     console.log("Accelerometer Z:", data.accelerometer.z);
//     console.log("Gyroscope X:", data.gyroscope.x);
//     console.log("Gyroscope Y:", data.gyroscope.y);
//     console.log("Gyroscope Z:", data.gyroscope.z);
//     console.log("Magnetometer X:", data.magnetometer.x);
//     console.log("Magnetometer Y:", data.magnetometer.y);
//     console.log("Magnetometer Z:", data.magnetometer.z);

//     // Use the sensor data to rotate the avatar (replace with your logic)
//     // Example: Rotate the avatar based on gyroscope readings
//     // if (avatar) {
//     //     avatar.rotation.x = data.gyroscope.x;
//     //     avatar.rotation.y = data.gyroscope.y;
//     //     avatar.rotation.z = data.gyroscope.z;
//     // }
// }

// // Simulated sensor data (replace with real data)
// setInterval(function () {
//     var sensorData = {
//         accelerometer: {
//             x: Math.random(),
//             y: Math.random(),
//             z: Math.random()
//         },
//         gyroscope: {
//             x: Math.random(),
//             y: Math.random(),
//             z: Math.random()
//         },
//         magnetometer: {
//             x: Math.random(),
//             y: Math.random(),
//             z: Math.random()
//         }
//     };
//     processSensorData(sensorData);
// }, 3000);






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

    // Initialize the sensors
    initializeSensors();
});

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});




  
  async function checkSensorPermission() {
    try {
      if ('Accelerometer' in window && 'Gyroscope' in window) {
        const accelerometerPermission = await navigator.permissions.query({ name: "accelerometer" });
        const gyroscopePermission = await navigator.permissions.query({ name: "gyroscope" });
  
        if (accelerometerPermission.state === "granted" && gyroscopePermission.state === "granted") {
          console.log("Sensor permissions granted for accelerometer and gyroscope.");
          // Use sensor data (e.g., processSensorData())
        } else if (accelerometerPermission.state === "prompt" || gyroscopePermission.state === "prompt") {
          console.log("Sensor permission prompt requested for accelerometer or gyroscope.");
          // Show a button or message to request sensor permissions
          const userAction = await showButtonToEnableSensors();  // Implement this function to handle user interaction
          if (userAction === "allowed") {
            // User allowed permission, re-check permission state(s)
            checkSensorPermission();  // Call recursively to check again after permission changes
          } else {
            console.log("Sensor permissions denied for accelerometer or gyroscope.");
            // Show message about sensor-based features being unavailable
          }
        } else {
          console.log("Sensor permissions denied for accelerometer or gyroscope.");
          // Show message about sensor-based features being unavailable
        }
      } else {
        console.warn("Device does not support accelerometer or gyroscope sensors.");
      }
    } catch (error) {
      console.error("Error checking sensor permissions:", error);
    }
  }
  
  
  function showButtonToEnableSensors() {
    // ... Your UI logic to display a button or message for sensor permissions
  }
  
  // Call these functions to initiate permission checks
  checkSensorPermission();



// Function to process sensor data and rotate the avatar
function processSensorData(event) {
    if (avatar) {
        // Log the sensor readings to the console
        console.log("Accelerometer X:", event.target.x);
        console.log("Accelerometer Y:", event.target.y);
        console.log("Accelerometer Z:", event.target.z);

        console.log("Gyroscope X:", event.target.x);
        console.log("Gyroscope Y:", event.target.y);
        console.log("Gyroscope Z:", event.target.z);


        // Calculate the total rotation from the gyroscope readings
        const totalRotation = new BABYLON.Vector3(
            event.target.x * 0.01, // Convert to radians and scale
            event.target.y * 0.01, // Convert to radians and scale
            event.target.z * 0.01  // Convert to radians and scale
        );

        // Apply the total rotation to the avatar
        avatar.rotation = BABYLON.Vector3.Add(avatar.rotation, totalRotation);
    }
}

// Function to initialize the sensors
async function initializeSensors() {
    // Create the sensor objects
    const accelerometer = new Accelerometer({ frequency: 60 });
    const gyroscope = new Gyroscope({ frequency: 60 });

    // Add event listeners to the sensors
    accelerometer.addEventListener('reading', processSensorData);
    gyroscope.addEventListener('reading', processSensorData);

    // Start the sensors
    accelerometer.start();
    gyroscope.start();
}

// Initialize the sensors
initializeSensors();
































// // Function to process sensor data and rotate the avatar
// function processSensorData(event) {
//     if (avatar) {
//         // Log the sensor readings to the console
//         console.log("Accelerometer X:", event.target.x);
//         console.log("Accelerometer Y:", event.target.y);
//         console.log("Accelerometer Z:", event.target.z);

//         console.log("Gyroscope X:", event.target.x);
//         console.log("Gyroscope Y:", event.target.y);
//         console.log("Gyroscope Z:", event.target.z);

//         if (event.target instanceof Magnetometer) {
//             console.log("Magnetometer X:", event.target.x);
//             console.log("Magnetometer Y:", event.target.y);
//             console.log("Magnetometer Z:", event.target.z);
//         }

//         // Calculate the total rotation from the gyroscope readings
//         const totalRotation = new BABYLON.Vector3(
//             event.target.x * 0.01, // Convert to radians and scale
//             event.target.y * 0.01, // Convert to radians and scale
//             event.target.z * 0.01  // Convert to radians and scale
//         );

//         // Apply the total rotation to the avatar
//         avatar.rotation = BABYLON.Vector3.Add(avatar.rotation, totalRotation);
//     }
// }

// // Function to initialize the sensors
// async function initializeSensors() {
//     // Check if the Accelerometer sensor is available
// if ('Accelerometer' in window) {
//     const accelerometer = new Accelerometer({ frequency: 60 });

//     accelerometer.addEventListener('reading', () => {
//         console.log("Accelerometer X:", accelerometer.x);
//         console.log("Accelerometer Y:", accelerometer.y);
//         console.log("Accelerometer Z:", accelerometer.z);
//     });

//     accelerometer.start();
// } else {
//     console.error('Accelerometer sensor not supported in this browser.');
// }

// // Check if the Gyroscope sensor is available
// if ('Gyroscope' in window) {
//     const gyroscope = new Gyroscope({ frequency: 60 });

//     gyroscope.addEventListener('reading', () => {
//         console.log("Gyroscope X:", gyroscope.x);
//         console.log("Gyroscope Y:", gyroscope.y);
//         console.log("Gyroscope Z:", gyroscope.z);
//     });

//     gyroscope.start();
// } else {
//     console.error('Gyroscope sensor not supported in this browser.');
// }

// // Check if the Magnetometer sensor is available
// if ('Magnetometer' in window) {
//     const magnetometer = new Magnetometer({ frequency: 60 });

//     magnetometer.addEventListener('reading', () => {
//         console.log("Magnetometer X:", magnetometer.x);
//         console.log("Magnetometer Y:", magnetometer.y);
//         console.log("Magnetometer Z:", magnetometer.z);
//     });

//     magnetometer.start();
// } else {
//     console.error('Magnetometer sensor not supported in this browser.');
// }
//     // try {
//     //     // Create the sensor objects
//     //     const accelerometer = new Accelerometer({ frequency: 60 });
//     //     const gyroscope = new Gyroscope({ frequency: 60 });

//     //     // Add event listeners to the sensors
//     //     accelerometer.addEventListener('reading', processSensorData);
//     //     gyroscope.addEventListener('reading', processSensorData);

//     //     // Start the sensors
//     //     accelerometer.start();
//     //     gyroscope.start();

//     //     // Check if Magnetometer is available
//     //     if (typeof Magnetometer !== 'undefined') {
//     //         const magnetometer = new Magnetometer({ frequency: 60 });
//     //         magnetometer.addEventListener('reading', processSensorData);
//     //         magnetometer.start();
//     //     } else {
//     //         console.warn('Magnetometer sensor is not available on this device.');
//     //     }
//     // } catch (error) {
//     //     console.error('Sensor initialization failed:', error);
//     // }
// }