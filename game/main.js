class Main {
    constructor(gameSource,canvas) {
        if (Main.instance) {
            return Main.instance;
        }
        
        this.gameSource = gameSource;
        this.canvas = canvas;

        this.engine = new BABYLON.Engine(canvas, true);

        this.currentScene = null;
        
        Main.instance = this;
    }
    // singleton
    static getInstance() {
        this.getInstance(this.canvas);
    }
    static getInstance(gameSource,canvas) {
        if (!Main.instance) {
            Main.instance = new Main(gameSource,canvas);
        }
        return Main.instance;
    }

    // config
    static getAssetsDir() {
        return this.getInstance().gameSource+"assets/";
    }

    // important part of the code starts here
    setScene(argScene) {
        this.currentScene = argScene;
        this.currentScene.init();
        this.engine.runRenderLoop(() => { // arrow function to be able to use 'this'
            this.currentScene.scene.render();
        });
    }

    // INIT
    async init() {
        this.setScene(
            new TestScene(this.engine, this.canvas)
        );
    }
}
