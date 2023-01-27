
# VR library for three.js

## Features
- [] multiplayer
- [] hand tracking
- [] physics
- [x] teleportation
- [x] object selection
- [x] locomotion
- [x] inserting object into scene
- [x] drawing tool
- [x] 3D menu's
- [x] object manipulation

includes a template for creating a multiplayer VR application.

![interaction](./Documentation(ignore)/docs/img/teleportAndSelection.png)

## Tutorials

Tutorials on how to use the library can be found in the [Documentation](https://dominuszagare.github.io/ThreeJS_VR_app_quickstart/)

## Example
```js
import { VRcontrols } from './jsm/controls/VRcontrols.js'; 

controls = new VRcontrols(camera,scene);

renderer.setAnimationLoop(()=>{
    controls.update(); //controls need to be updated every frame
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

!Application was tested only on  Oculus Quest other headsets may not work.
It expects to find a least one controller with a trigger and grip button.

