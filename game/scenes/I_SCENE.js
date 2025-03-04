class I_SCENE {
    constructor(engine, canvas) {
        if (!engine) {
            throw new Error("Engine is not defined");
        }
        this.scene = new BABYLON.Scene(engine);
        this.engine = engine;
        this.canvas = canvas;
    }
    init() {
        throw new Error("Method 'init()' not implemented yet.");
    }
}