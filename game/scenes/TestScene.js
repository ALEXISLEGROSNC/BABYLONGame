class TestScene extends I_SCENE {
    constructor(engine, canvas) {
        super(engine, canvas);
        this.mainCharacter = null;
    }

    init() {
                // scene
                this.scene.clearColor = new BABYLON.Color3(0,0,0);      
                
                let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0.5), this.scene);      
                light.intensity = 0.6;
                
                BABYLON.Mesh.CreateGround("ground", 8, 13, 8, this.scene);            
        
                // character
                BABYLON.SceneLoader.ImportMesh("", Main.getAssetsDir()+"characters/MainCharacter/", "MainCharacter.glb", this.scene, (meshes, particleSystems, skeletons, animationGroups) => {
                    this.mainCharacter = meshes[0];
                    this.mainCharacter.position.y = 2;
        
                    // base animation (idle)
                    if (animationGroups.length > 0) {
                        animationGroups[0].start(true, 1.0, animationGroups[0].from, animationGroups[0].to, false);
                    }
        
                    
                    camera.setTarget(this.mainCharacter.position);
                });
        
                // camera
                let camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 3, -5), this.scene);      
                camera.setTarget(BABYLON.Vector3.Zero());      
                camera.attachControl(this.canvas, false);        
    }
}
