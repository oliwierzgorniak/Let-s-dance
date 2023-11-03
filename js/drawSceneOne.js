function drawSceneOne() {
        if (!newCanvasCreated) {
          let canvas3dElement = document.querySelector('#defaultCanvas0')
          canvas3dElement.remove()
          
          create2dCanvas()
          newCanvasCreated = true;
        };        
}