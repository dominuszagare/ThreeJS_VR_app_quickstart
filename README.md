
# VR library for three.js

## Features
- [ ] multiplayer
- [ ] hand tracking
- [ ] physics
- [x] teleportation
- [x] object selection
- [x] inserting object into scene
- [x] drawing tool
- [x] 3D menu's
- [x] object manipulation

includes a template for creating a multiplayer VR application.

![interaction](./Documentation(ignore)/docs/img/teleportAndSelection.png)

## Why not Unity?
Why not use Unity? Unity is a great choice for creating VR applications with a lot of features and a great community. It also enables you to create applications for multiple platforms even web applications. It also has better performance by using Webassembly to run inside a browser. 

But the main reason why I chose to use three.js is that is relatively easy to learn and it is very flexible and lightweight. You can create small apps that include only the things you need. (projects contains a Webpack config that will reduce the app size even further) But for larger or more demanding applications I would recommend using Unity.

[Unity + WebXR](https://github.com/Rufus31415/Simple-WebXR-Unity)

## Tutorials

Tutorials on how to use the library can be found in the [Documentation](https://dominuszagare.github.io/ThreeJS_VR_app_quickstart/)

Other great resources for learning three.js are:
[building apps with three.js overview](https://www.youtube.com/watch?v=Q7AOvWpIVHU)

## Installation
Open a terminal in the project folder and run the following commands:
```bash
npm install
npm run build
npm run start
```

## Examples
Adding vr controls to your application is very easy. Create a new instance of the VRcontrols class and pass it the camera and scene. Then call the update method every frame in the render loop.
```js
import { VRcontrols } from './jsm/controls/VRcontrols.js'; 

let controls = new VRcontrols(camera,scene);

renderer.setAnimationLoop(()=>{
    controls.update(); 
    renderScene();
});
```

libraries used:
- Threejs (OpenGl abstractions)
- three-mesh-ui (Flexbox like UI in 3D)
- three-mesh-bvh (Bounding volume hierarchy for faster raycasting)
- stats.js (FPS counter)

- express (serving static files and multiplayer server)
- socket.io (multiplayer capabilities)

**Application was tested only on  Oculus Quest other headsets may not work.
It expects to find a least one controller with a trigger and grip button.**

