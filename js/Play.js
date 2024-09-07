class Play extends Phaser.Scene {
    constructor() {
        super({
            key: 'play'
        });
        // initialize jump check
        this.jump = null;
        // initialize hurt check
        this.ouch = null;
        // initialize reset check
        this.hasReset = false;
        // initialize timer items
        this.timedEvent = null;
        this.initialTime = null;
        this.timerText = null;
        this.countUpEvent = null;
        // initializa best time array
        this.bestTimeArray = [];
        //initialize death delay timers
        this.deathDelay = null;
        this.deathDelayProgress = null;
        // initialize player death check
        this.hasDied = null;
        // initialize level number
        this.levelNumber = null;
        // initialize text items
        this.topTitleText = null;
        this.BottomTitleText = null;
        // initialize game objects
        this.blocks = null;
        this.boundary = null;
        this.spikes = null;
        this.falseBlocks = null;
        // check if keyboard has been enabled
        this.enableKeyboard = true;
        // initialize accumulate rotation
        this.accumulateRotation = 0;
        // initialize x and y (x and y are for the gravity rotation)
        this.x = 0;
        this.y = 1;
        // make new Bests all 0
        for(let i = 0; i<4;i++ ){
            this.bestTimeArray.push(0);
        }
    }

    createLevel() {
        // create the block + boundary array
        this.levelArray = [];
        this.levelArrayIndex = 0;
        if (this.levelNumber === 0) {
            this.levelArray.push(0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,
                                 0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,
                                 0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,
                                 0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,
                                 0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
                                 0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
                                 0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
                                 0,2,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,2,0,
                                 2,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,2,
                                 2,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,2,
                                 2,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,2,
                                 2,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,2,
                                 2,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,2,
                                 2,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,2,
                                 2,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,2,
                                 0,2,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,2,0,
                                 0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
                                 0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
                                 0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
                                 0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,
                                 0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,
                                 0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,
                                 0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0)
        }
        if (this.levelNumber === 1) {
            this.levelArray.push(0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,
                                 0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,
                                 0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,
                                 0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,
                                 0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
                                 0,0,2,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,2,0,0,
                                 0,2,0,0,0,0,0,0,4,4,0,0,0,0,0,4,4,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,2,0,
                                 2,0,0,0,0,0,4,0,0,3,0,0,0,0,0,3,0,0,4,0,0,0,0,0,2,
                                 2,0,0,0,0,4,0,0,3,3,3,0,0,0,3,3,3,0,0,4,0,0,0,0,2,
                                 2,0,0,0,0,4,0,0,0,3,0,0,0,0,0,3,0,0,0,4,0,0,0,0,2,
                                 2,0,0,0,0,4,0,0,0,0,0,0,1,0,0,0,0,0,0,4,0,0,0,0,2,
                                 2,0,0,0,0,4,0,0,1,0,0,1,1,1,0,0,1,0,0,4,0,0,0,0,2,
                                 2,0,0,0,0,4,0,1,1,0,0,0,1,0,0,0,1,1,0,4,0,0,0,0,2,
                                 2,0,0,0,0,0,4,0,0,1,0,0,0,0,0,1,0,0,4,0,0,0,0,0,2,
                                 0,2,0,0,0,0,4,0,0,0,1,1,1,1,1,0,0,0,4,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,4,4,0,0,0,0,0,4,4,0,0,0,0,0,0,2,0,
                                 0,0,2,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,2,0,0,
                                 0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
                                 0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,
                                 0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,
                                 0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,
                                 0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0)
        }
        if (this.levelNumber === 2) {
            this.levelArray.push(0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,
                                 0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,
                                 0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,
                                 0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,
                                 0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
                                 0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
                                 0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,2,0,
                                 2,0,0,0,0,0,0,0,3,1,1,1,1,1,1,1,3,0,0,0,0,0,0,0,2,
                                 2,0,0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,4,0,0,0,0,0,0,2,
                                 2,0,0,0,0,0,4,4,1,3,1,1,1,1,1,3,1,4,4,0,0,0,0,0,2,
                                 2,0,0,0,0,4,4,4,3,4,3,1,1,1,3,4,3,4,4,4,0,0,0,0,2,
                                 2,0,0,0,0,4,4,4,1,1,1,1,1,1,1,1,1,4,4,4,0,0,0,0,2,
                                 2,0,0,0,0,4,4,4,3,1,1,4,4,4,1,1,3,4,4,4,0,0,0,0,2,
                                 2,0,0,0,0,0,4,4,4,1,1,1,4,1,1,1,4,4,4,0,0,0,0,0,2,
                                 0,2,0,0,0,0,0,3,4,3,1,1,3,1,1,3,4,3,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
                                 0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
                                 0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
                                 0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,
                                 0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,
                                 0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,
                                 0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0)
        }
        if (this.levelNumber === 3) {
            this.levelArray.push(0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,
                                 0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,
                                 0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,
                                 0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,
                                 0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
                                 0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
                                 0,2,0,0,0,0,0,0,0,0,4,4,1,4,1,4,0,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,1,1,1,4,1,4,1,4,1,4,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,4,4,1,1,1,4,1,4,1,4,1,0,0,0,0,0,2,0,
                                 2,0,0,0,0,0,1,1,1,4,1,1,4,1,4,1,4,1,4,0,0,0,0,0,2,
                                 2,0,0,0,0,0,1,3,1,4,1,1,4,1,4,1,4,1,4,0,0,0,0,0,2,
                                 2,0,0,0,0,0,1,1,1,0,1,1,4,1,4,1,4,1,4,0,0,0,0,0,2,
                                 2,0,0,0,0,0,0,0,3,0,3,4,3,1,4,1,4,1,0,0,0,0,0,0,2,
                                 2,0,0,0,0,0,0,3,3,0,3,0,3,3,1,4,1,4,0,0,0,0,0,0,2,
                                 2,0,0,0,0,0,3,0,0,0,3,0,0,3,3,4,0,0,0,0,0,0,0,0,2,
                                 2,0,0,0,0,0,3,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,2,
                                 0,2,0,0,0,0,3,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,0,0,0,0,2,0,
                                 0,2,0,0,0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,2,0,
                                 0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
                                 0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,
                                 0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,
                                 0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,
                                 0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,
                                 0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0)
        }
    }

    createAnimations() {
        // create block animation 0
        this.anims.create({
            key: 'wobble0',
            frames: this.anims.generateFrameNumbers('block0', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create block animation 1
        this.anims.create({
            key: 'wobble1',
            frames: this.anims.generateFrameNumbers('block1', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create block animation 2
        this.anims.create({
            key: 'wobble2',
            frames: this.anims.generateFrameNumbers('block2', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create block animation 3
        this.anims.create({
            key: 'wobble3',
            frames: this.anims.generateFrameNumbers('block3', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create spike animation 0
        this.anims.create({
            key: 'wobbleSpike0',
            frames: this.anims.generateFrameNumbers('spikes0', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create spike animation 1
        this.anims.create({
            key: 'wobbleSpike1',
            frames: this.anims.generateFrameNumbers('spikes1', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create spike animation 2
        this.anims.create({
            key: 'wobbleSpike2',
            frames: this.anims.generateFrameNumbers('spikes2', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create false block animation 0
        this.anims.create({
            key: 'wobbleFalse0',
            frames: this.anims.generateFrameNumbers('falseBlock0', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create false block animation 1
        this.anims.create({
            key: 'wobbleFalse1',
            frames: this.anims.generateFrameNumbers('falseBlock1', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create false block animation 2
        this.anims.create({
            key: 'wobbleFalse2',
            frames: this.anims.generateFrameNumbers('falseBlock2', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create player animations
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('flea', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        this.anims.create({
            key: 'impact',
            frames: this.anims.generateFrameNumbers('impact', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: 0,
            showOnStart: true
        });
        this.anims.create({
            key: 'ouch',
            frames: this.anims.generateFrameNumbers('ouch', { start: 0, end: 7 }),
            frameRate: 32,
            repeat: -1,
            showOnStart: true
        });
        // create hurt effect animation
        this.anims.create({
            key: 'hurt',
            frames: this.anims.generateFrameNumbers('hurt', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: 1,
            showOnStart: false
        });
        // create button 0 animation
        this.anims.create({
            key: 'button0',
            frames: this.anims.generateFrameNumbers('button0', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create button 1 animation
        this.anims.create({
            key: 'button1',
            frames: this.anims.generateFrameNumbers('button1', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create button 2 animation
        this.anims.create({
            key: 'button2',
            frames: this.anims.generateFrameNumbers('button2', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create button 3 animation
        this.anims.create({
            key: 'button3',
            frames: this.anims.generateFrameNumbers('button3', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create particle animation 0
        this.anims.create({
            key: 'particle0',
            frames: this.anims.generateFrameNumbers('falseBlockParticle0', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create particle animation 1
        this.anims.create({
            key: 'particle1',
            frames: this.anims.generateFrameNumbers('falseBlockParticle1', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
        // create particle animation 2
        this.anims.create({
            key: 'particle2',
            frames: this.anims.generateFrameNumbers('falseBlockParticle2', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1,
            showOnStart: true
        });
    }

    create() {
        // initialize self
        let self = this;
        // initialize starting level
        this.levelNumber = 0;
        // set timers to zero
        this.initialTime = 0;
        // draw background
        this.sky = this.add.image(400, 400, 'sky_0');
        // create camera
        this.camera = this.cameras.add();
        this.camera.setPosition(0,0);
        // create UI camera
        this.UICamera = this.cameras.add();
        this.UICamera.setPosition(0,0);
        // add in groups for blocks, boundaries, spikes and false blocks
        this.blocks = this.add.group();
        this.boundary = this.add.group();
        this.spikes = this.add.group();
        this.falseBlocks = this.add.group();
        // create the level
        this.createLevel();
        // make the cursor invisible
        // let canvas = this.sys.canvas;
        // canvas.style.cursor = 'none';
        // place the blocks
        for (let i = 0; i < 25; i += 1) {
            for (let j = 0; j < 25; j += 1) {
                if (this.levelArray[this.levelArrayIndex] === 1) {
                let matterSprite = this.matter.add.sprite((j * gridSize + (gridSize / 2)), (i * gridSize + (gridSize / 2)), 'block0');
                this.blocks.add(matterSprite.setStatic(true));
           }
            else if (this.levelArray[this.levelArrayIndex] === 2) {
                let matterSprite = this.matter.add.sprite((j * gridSize + (gridSize / 2)), (i * gridSize + (gridSize / 2)), 'block0');
                this.boundary.add(matterSprite.setStatic(true).setVisible(false));
            }
            else if (this.levelArray[this.levelArrayIndex] === 3) {
                let matterSprite = this.matter.add.sprite((j * gridSize + (gridSize / 2)), (i * gridSize + (gridSize / 2)), 'spikes0');
                this.spikes.add(matterSprite.setStatic(true));
            }
            else if (this.levelArray[this.levelArrayIndex] === 4) {
                let matterSprite = this.matter.add.sprite((j * gridSize + (gridSize / 2)), (i * gridSize + (gridSize / 2)), 'FalseBlocks0');
                this.falseBlocks.add(matterSprite.setStatic(true));
            }
                this.levelArrayIndex++;
            }
        }
        for (let i = 0; i < this.blocks.children.entries.length; i += 1) {
            this.blocks.children.entries[i].setCollisionCategory(1);
        }
        for (let i = 0; i < this.boundary.children.entries.length; i += 1) {
            this.boundary.children.entries[i].setCollisionCategory(0);
        }
        for (let i = 0; i < this.spikes.children.entries.length; i += 1) {
            this.spikes.children.entries[i].setCollisionCategory(1);
        }
        for (let i = 0; i < this.falseBlocks.children.entries.length; i += 1) {
            this.falseBlocks.children.entries[i].setCollisionCategory(1);
        }
        // create animations
        this.createAnimations();
        // play the block animation
        for (let i = 0; i < this.blocks.children.entries.length; i ++) {
            this.blocks.children.entries[i].play('wobble0');
        }
        // play the spike animation
        for (let i = 0; i < this.spikes.children.entries.length; i ++) {
            this.spikes.children.entries[i].play('wobbleSpike0');
        }
        // play the false block animation
        for (let i = 0; i < this.falseBlocks.children.entries.length; i ++) {
            this.falseBlocks.children.entries[i].play('wobbleFalse0');
        }
        // create the player
        player = this.matter.add.sprite(400, 0, 'flea');
        // handle player initial position
        if (this.levelNumber === 0  || this.levelNumber === 2 || this.levelNumber === 3) {
            player.y = -35;
        }
        if (this.levelNumber === 1) {
            player.y = 200;
        }
        // set has died variable
        this.hasDied = false;
        // check if player is on block to jump
        this.checkCollisions();
        // set player hitbox + physics
        player.setBody({
            type: 'polygon',
            sides: 4,
            radius: 16
        }).setStatic(false).setFixedRotation(0).setFrictionStatic(0);
        // play player animation
        player.play('idle');
        // make sure the player collides with the blocks
        player.setCollisionCategory(2);
        // add in a delay after death
        this.deathDelay = new Phaser.Time.TimerEvent({ delay: 500 });
        this.time.addEvent(this.deathDelay);
        // add in vignette image
        this.vigniette = this.add.image(400, 400, 'vignette');
        // handle top title screen text
        if(this.bestTimeArray[this.levelNumber]<=0){
            this.topTitleText = this.add.text(400, 128, 'PRESS THE ARROW KEYS TO PLAY!', {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        if(this.bestTimeArray[this.levelNumber]>0){
            this.topTitleText = this.add.text(400, 128, 'BEST TIME : ' + this.formatTime(this.bestTimeArray[this.levelNumber]), {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        // create bottom title screen text
        this.bottomTitleText = this.add.text(400, 672, 'A GAME BY: KEVEN VAILLANCOURT', {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        // create input system
        cursors = this.input.keyboard.createCursorKeys();
        // make the buttons
        this.handleButtons();
        // change graphics depending on level
        this.changeGraphics();
        // change colors depending on level
        this.changeColor();
        //set the local children
        this.setChildren()
    }

    setChildren(){
        // get the block, spike, and false block children
        this.blockChildren = [];
        this.blockChildren.push(...this.blocks.children.entries);
        this.blockChildren.push(...this.spikes.children.entries);
        this.blockChildren.push(...this.falseBlocks.children.entries);
    }

    handleButtons() {
        // create buttons
        this.button0 = this.matter.add.sprite(88, 88, 'button0').setStatic(true).setCollisionCategory(0).setScale(0.00001);
        this.button1 = this.matter.add.sprite(712, 88, 'button1').setStatic(true).setCollisionCategory(0).setScale(0.00001);
        this.button2 = this.matter.add.sprite(88, 712, 'button2').setStatic(true).setCollisionCategory(0).setScale(0.00001);
        this.button3 = this.matter.add.sprite(712, 712, 'button3').setStatic(true).setCollisionCategory(0).setScale(0.00001);
        // create button idle tweens
        if (gameState === 'title') {
            this.tweens.add({
                targets: [this.button0, this.button1, this.button2, this.button3],
                scale: 1,
                duration: 250,
                delay: 750
            });
        }
        // play button 0 animation
        this.button0.play('button0');
        // play button 0 animation
        this.button0.setInteractive();
        this.button0.on('pointerover', () => { 
            this.tweens.add({
            targets: this.button0,
            scale: 1.1,
            ease: 'Linear',
            duration: 100
            }) })
            .on('pointerout', () => { 
            this.tweens.add({
            targets: this.button0,
            scale: 1,
            ease: 'Linear',
            duration: 100
            }) })
            .on('pointerdown', () => { 
                this.tweens.add({
                targets: this.button0,
                scale: 0.8,
                ease: 'Linear',
                duration: 50
                });
                this.levelNumber = 0;
                this.reset();
                })
            .on('pointerup', () => { 
                this.tweens.add({
                targets: this.button0,
                scale: 1,
                ease: 'Linear',
                duration: 50
                }) });
        // play button 1 animation
        this.button1.play('button1');
        // play button 1 animation
        this.button1.setInteractive();
        this.button1.on('pointerover', () => { 
            this.tweens.add({
            targets: this.button1,
            scale: 1.1,
            ease: 'Linear',
            duration: 100
            }) })
            .on('pointerout', () => { 
            this.tweens.add({
            targets: this.button1,
            scale: 1,
            ease: 'Linear',
            duration: 100
            }) })
            .on('pointerdown', () => { 
                this.tweens.add({
                targets: this.button1,
                scale: 0.8,
                ease: 'Linear',
                duration: 50
                });
                this.levelNumber = 1;
                this.reset();
                })
            .on('pointerup', () => { 
                this.tweens.add({
                targets: this.button1,
                scale: 1,
                ease: 'Linear',
                duration: 50
                }) });
        // play button 2 animation
        this.button2.play('button2');
        // play button 2 animation
        this.button2.setInteractive();
        this.button2.on('pointerover', () => { 
            this.tweens.add({
            targets: this.button2,
            scale: 1.1,
            ease: 'Linear',
            duration: 100
            }) })
            .on('pointerout', () => { 
            this.tweens.add({
            targets: this.button2,
            scale: 1,
            ease: 'Linear',
            duration: 100
            }) })
            .on('pointerdown', () => { 
                this.tweens.add({
                targets: this.button2,
                scale: 0.8,
                ease: 'Linear',
                duration: 50
                });
                this.levelNumber = 2;
                this.reset();
                })
            .on('pointerup', () => { 
                this.tweens.add({
                targets: this.button2,
                scale: 1,
                ease: 'Linear',
                duration: 50
                }) });
        // play button 3 animation
        this.button3.play('button3');
        // play button 3 animation
        this.button3.setInteractive();
        this.button3.on('pointerover', () => { 
            this.tweens.add({
            targets: this.button3,
            scale: 1.1,
            ease: 'Linear',
            duration: 100
            }) })
            .on('pointerout', () => { 
            this.tweens.add({
            targets: this.button3,
            scale: 1,
            ease: 'Linear',
            duration: 100
            }) })
            .on('pointerdown', () => { 
                this.tweens.add({
                targets: this.button3,
                scale: 0.8,
                ease: 'Linear',
                duration: 50
                });
                this.levelNumber = 3;
                this.reset();
                })
            .on('pointerup', () => { 
                this.tweens.add({
                targets: this.button3,
                scale: 1,
                ease: 'Linear',
                duration: 50
                }) });
    }

    formatTime(seconds) {
        // minutes
        let minutes = Math.floor(seconds/60);
        // seconds
        let partInSeconds = seconds%60;
        // adds left zeros to seconds
        partInSeconds = partInSeconds.toString().padStart(2,'0');
        // returns formated time
        return `${minutes}:${partInSeconds}`;
    }

    onEvent () {
        // have timer count up upon play
        if (gameState === 'play') {
            this.initialTime += 1; // One second
            this.timerText.setText('TIME : ' + this.formatTime(this.initialTime));
        }
    }

    manageDifficulty(){
        // have block move time decrease by 10 when game starts
        if (delayTime <= 1000 && delayTime >= 150) {
            delayTime = delayTime - 10;
        }
        // have block move time decrease by 1 after reaching a certain value
        if (delayTime <= 150 && delayTime >= 1) {
            delayTime = delayTime - 1;
        }
        // make sure block move time can never be less than 1
        if (delayTime < 1) {
            delayTime = 1;
        }
        // reset block move time upon death
        if (gameState === 'title') {
            delayTime = 1000;
        }
    }

    moveTile() {
        // make sure the blocks aren't moving
        this.tileMoved = false;
        let blockChildren = this.blockChildren
        // get the boundary children
        let boundaryChildren = this.boundary.children.entries;
        // move blocks once in the play state
        while (this.tileMoved === false && gameState === 'play') {
            // pick a random tile
            let randomTile = Phaser.Math.RND.between(0, blockChildren.length-1);
            // pick a random direction
            let randomDirection = Phaser.Math.RND.between(0, 3);
            // if direction chosen is right
            if (randomDirection === 0) {
                // check for empty spaces
                let result = checkSpacesXBlocks(blockChildren[randomTile].x + gridSize, blockChildren[randomTile].y)
                if (result === false) {
                    // check for boundaries
                    let resultBoundary = checkBoundaryX(blockChildren[randomTile].x + gridSize, blockChildren[randomTile].y);
                    if (resultBoundary === false) {
                        // move block right
                        blockChildren[randomTile].x += gridSize;
                        blockChildren[randomTile].body.x += gridSize;
                        this.tileMoved = true;
                        let self = this;
                        this.timedEvent = this.time.addEvent({delay: delayTime, callback: function(){
                            self.moveTile();
                            self.manageDifficulty();
                        } , loop: false});
                    }
                }
            }
            // if direction chosen is left
            if (randomDirection === 1) {
                // check for empty spaces
                let result = checkSpacesXBlocks(blockChildren[randomTile].x - gridSize, blockChildren[randomTile].y)
                if (result === false) {
                    // check for boundaries
                    let resultBoundary = checkBoundaryX(blockChildren[randomTile].x - gridSize, blockChildren[randomTile].y);
                    if (resultBoundary === false) {
                        // move block left
                        blockChildren[randomTile].x -= gridSize;
                        blockChildren[randomTile].body.x -= gridSize;
                        this.tileMoved = true;
                        let self = this;
                        this.timedEvent = this.time.addEvent({delay: delayTime, callback: function(){
                            self.moveTile();
                            self.manageDifficulty();
                        } , loop: false});
                    }
                }
            }
            // if direction chosen is up
            if (randomDirection === 2) {
                // check for empty spaces
                let result = checkSpacesYBlocks(blockChildren[randomTile].y + gridSize, blockChildren[randomTile].x)
                if (result === false) {
                    // check for boundaries
                    let resultBoundary = checkBoundaryY(blockChildren[randomTile].y + gridSize, blockChildren[randomTile].x);
                    if (resultBoundary === false) {
                        // move block up
                        blockChildren[randomTile].y += gridSize;
                        blockChildren[randomTile].body.y += gridSize;
                        this.tileMoved = true;
                        let self = this;
                        this.timedEvent = this.time.addEvent({delay: delayTime, callback: function(){
                            self.moveTile();
                            self.manageDifficulty();
                        } , loop: false});
                    }
                }
            }
            // if direction chosen is down
            if (randomDirection === 3) {
                // check for empty spaces
                let result = checkSpacesYBlocks(blockChildren[randomTile].y - gridSize, blockChildren[randomTile].x)
                if (result === false) {
                    // check for boundaries
                    let resultBoundary = checkBoundaryY(blockChildren[randomTile].y - gridSize, blockChildren[randomTile].x);
                    if (resultBoundary === false) {
                        // move block down
                        blockChildren[randomTile].y -= gridSize;
                        blockChildren[randomTile].body.y -= gridSize;
                        this.tileMoved = true;
                        let self = this;
                        this.timedEvent = this.time.addEvent({delay: delayTime, callback: function(){
                            self.moveTile();
                            self.manageDifficulty();
                        } , loop: false});
                    }
                }
            }
            // check if blocks are beside horizontally
            function checkSpacesXBlocks (newPos, testY) {
                for (let i = 0; i < blockChildren.length; i++) {
                    if (blockChildren[i].x === newPos && blockChildren[i].y === testY) {
                        return true;
                    }
                }
                return false;
            }
            // check if blocks are beside vertically
            function checkSpacesYBlocks (newPos, testX) {
                for (let i = 0; i < blockChildren.length; i++) {
                    if (blockChildren[i].y === newPos && blockChildren[i].x === testX) {
                        return true;
                    }
                }
                return false;
            }
            // check if boundary is beside horizontally
            function checkBoundaryX (newPos, testY) {
                for (let i = 0; i < boundaryChildren.length; i++) {
                    if (boundaryChildren[i].x === newPos && boundaryChildren[i].y === testY) {
                        return true;
                    }
                }
                return false;
            }
            // check if boundary is beside vertically
            function checkBoundaryY (newPos, testX) {
                for (let i = 0; i < boundaryChildren.length; i++) {
                    if (boundaryChildren[i].y === newPos && boundaryChildren[i].x === testX) {
                        return true;
                    }
                }
                return false;
            }
        }
    }

    checkCollisions() {
        // check if colliding with block from top
        this.matter.world.on('collisionstart', event =>
        {
            // initialize variables
            let colliderA;
            let colliderB;
            let fleaPosCheck;
            let blockPosCheck;
            // have to do this beacause colliders A and B swap after reset... for some reason
            if (this.hasReset === false) {
                colliderA = event.pairs[0].bodyA.gameObject.anims.currentFrame.textureKey;
                colliderB = event.pairs[0].bodyB.gameObject.anims.currentFrame.textureKey;
                fleaPosCheck = event.pairs[0].bodyB.gameObject.body.position.y
                blockPosCheck = event.pairs[0].bodyA.gameObject.body.position.y
                fleaPosCheck = event.pairs[0].bodyB.gameObject.body.position.x
                blockPosCheck = event.pairs[0].bodyA.gameObject.body.position.x
            }
            else if (this.hasReset === true) {
                colliderA = event.pairs[0].bodyB.gameObject.anims.currentFrame.textureKey;
                colliderB = event.pairs[0].bodyA.gameObject.anims.currentFrame.textureKey;
                fleaPosCheck = event.pairs[0].bodyA.gameObject.body.position.y
                blockPosCheck = event.pairs[0].bodyB.gameObject.body.position.y
                fleaPosCheck = event.pairs[0].bodyA.gameObject.body.position.x
                blockPosCheck = event.pairs[0].bodyB.gameObject.body.position.x
            }
            // for the bug where the player would get stuck on blocks, making use of the death delay timer
            if (colliderB === 'impact') {
                this.time.addEvent(this.deathDelay);
                if (this.deathDelayProgress >= 0 && this.deathDelayProgress < 1) {
                    colliderB = 'impact';
                }
                if (this.deathDelayProgress === 1) {
                    colliderB = 'flea';
                }
            }
            // jump on blocks
            if ((colliderA === 'block0' || colliderA === 'block1' || colliderA === 'block2' || colliderA === 'block3') && (colliderB === 'flea' || colliderB === 'ouch')) {
                this.jump = true;
            }
            // push back on spikes
            else if ((colliderA === 'spikes0' || colliderA === 'spikes1' || colliderA === 'spikes2') && (colliderB === 'flea' || colliderB === 'ouch')) {
                this.ouch = true;
            }
            // set jump and destroy false blocks
            else if ((colliderA === 'falseBlock0' || colliderA === 'falseBlock1' || colliderA === 'falseBlock2') && (colliderB === 'flea' || colliderB === 'ouch')) {
                this.jump = true;

                // DESTROY FALSE BLOCK CODE

            }
            else {
                this.jump = false;
            }   
        });
        // set jump to false
        this.jump = false;
        // set ouch to false
        this.ouch = false;
    }

    reset() {
        // initialize self
        let self = this;
        // reset gravity
        this.x = 0;
        this.y = 2;
        this.matter.world.setGravity(this.x, this.y);
        // disable keyboard
        this.enableKeyboard = false;
        // set timer to zero
        this.initialTime = 0;
        // reset title text completely
        this.topTitleText.destroy();
        // hide timer text
        if (gameState === 'reset') {
            this.timerText.setVisible(false);
        }
        // reset timer text
        if (gameState === 'reset') {
            this.timerText.setText('TIME : ' + this.formatTime(0));
        }
        // reset level rotation
        this.camera.rotation = 0;
        this. accumulateRotation = 0;
        // reset vigniette rotation
        this.vigniette.rotation = 0;
        // reset player rotation
        player.rotation = 0;
        // clear blocks
        this.blocks.clear(true, true);
        this.boundary.clear(true, true);
        this.spikes.clear(true, true);
        this.falseBlocks.clear(true, true);
        // clear level array
        this.levelArrayIndex = 0;
        // recreate the level
        this.createLevel();
        // reset block positions
        for (let i = 0; i < 25; i += 1) {
            for (let j = 0; j < 25; j += 1) {
                if (this.levelArray[this.levelArrayIndex] === 1) {
                    this.blocks.add(this.matter.add.sprite(j * gridSize + (gridSize / 2), i * gridSize + (gridSize / 2), 'block').setStatic(true));
                }
                else if (this.levelArray[this.levelArrayIndex] === 2) {
                    this.boundary.add(this.matter.add.sprite(j * gridSize + (gridSize / 2), i * gridSize + (gridSize / 2), 'block').setStatic(true)).setAlpha(0);
                }
                else if (this.levelArray[this.levelArrayIndex] === 3) {
                    this.spikes.add(this.matter.add.sprite(j * gridSize + (gridSize / 2), i * gridSize + (gridSize / 2), 'spikes').setStatic(true));
                }
                else if (this.levelArray[this.levelArrayIndex] === 4) {
                    this.falseBlocks.add(this.matter.add.sprite(j * gridSize + (gridSize / 2), i * gridSize + (gridSize / 2), 'falseBlock').setStatic(true));
                }
                    this.levelArrayIndex++;
                }
        }
        for (let i = 0; i < this.blocks.children.entries.length; i += 1) {
            this.blocks.children.entries[i].setCollisionCategory(1);
        }
        for (let i = 0; i < this.boundary.children.entries.length; i += 1) {
            this.boundary.children.entries[i].setCollisionCategory(0);
        }
        for (let i = 0; i < this.spikes.children.entries.length; i += 1) {
            this.spikes.children.entries[i].setCollisionCategory(1);
        }
        for (let i = 0; i < this.falseBlocks.children.entries.length; i += 1) {
            this.falseBlocks.children.entries[i].setCollisionCategory(1);
        }
        // handle top title screen text
        if(this.bestTimeArray[this.levelNumber]<=0){
            this.topTitleText = this.add.text(400, 128, 'PRESS THE ARROW KEYS TO PLAY!', {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        if(this.bestTimeArray[this.levelNumber]>0){
            this.topTitleText = this.add.text(400, 128, 'BEST TIME : ' + this.formatTime(this.bestTimeArray[this.levelNumber]), {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        this.topTitleText.rotation = 0;
        // make title screen text visible
        this.topTitleText.setVisible(true);
        // show level names
        this.bottomTitleText.setVisible(false);
        if (this.levelNumber === 0 && this.hasDied === false) {
            this.bottomTitleText = this.add.text(400, 672, '~ LOGO-A-GO-GO ~', {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        else if (this.levelNumber === 0 && this.hasDied === true) {
            this.bottomTitleText = this.add.text(400, 672, 'A GAME BY: KEVEN VAILLANCOURT', {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        else if (this.levelNumber === 1 && this.hasDied === false) {
            this.bottomTitleText = this.add.text(400, 672, '~ CLOWN AROUND ~', {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        else if (this.levelNumber === 2 && this.hasDied === false) {
            this.bottomTitleText = this.add.text(400, 672, '~ PUP-A-RAMA ~', {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        else if (this.levelNumber === 3 && this.hasDied === false) {
            this.bottomTitleText = this.add.text(400, 672, '~ FLEA OR DIE ~', {fontFamily: 'font', fontSize: 24, color: '#ffffff' }).setOrigin(0.5, 0.5);
        }
        if (this.hasDied === false) {
            this.tweens.add({
                targets: [this.bottomTitleText],
                alpha: 0,
                duration: 500,
                delay: 1000,
                ease: 'Sine.easeInOut'
            });
        }
        // have player be shown as hurt
        if (this.hasDied === true) {
            player.play('ouch');
        }
        // set has died to false
        this.hasDied = false;
        // restart block animations
        this.changeGraphics();
        // change colors
        this.changeColor();

        //set the local children
        this.setChildren()

        // restart collision checking
        this.checkCollisions();
        // reset player velocity
        player.setVelocityX(0);
        player.setVelocityY(0);
        player.applyForce({
            x: 0,
            y: 0
        });
        // reset player position
        player.x = 400;
        if (this.levelNumber === 0  || this.levelNumber === 2 || this.levelNumber === 3) {
            player.y = -35;
        }
        if (this.levelNumber === 1) {
            player.y = 200;
        }
        // nullify the timer
        this.timedEvent = null;
        //check if first time reseting
        this.hasReset = true;
    }

    moveButtons() {
        // shrink buttons on play
        if (gameState === 'willPlay') {
            this.tweens.add({
                targets: [this.button0, this.button1, this.button2, this.button3],
                scale: 0.00001,
                duration: 500,
                ease: 'Sine.easeInOut'
            });
        }
        // grow buttons on reset
        if (gameState === 'reset') {
            this.tweens.add({
                targets: [this.button0, this.button1, this.button2, this.button3],
                scale: 1,
                duration: 250
            });
        }
    }

    handleRotation() {
        // initialize rotation variables
        this.accumulateRotation += rotationAmount;
        this.camera.rotation += rotationAmount;
        this.vigniette.rotation -= rotationAmount;
        player.rotation -= rotationAmount;
        // calculate gravity to always point down
        if(this.accumulateRotation < Math.PI/2){ //y from 2->0 x from 0->2
            this.y = 2 * Math.cos(this.accumulateRotation); 
            this.x = 2 - this.y
        }
        else if(this.accumulateRotation < Math.PI) {
            this.y=  2 * Math.cos(this.accumulateRotation);  // y from 0->-2, x: 2->0
            this.x = 2 + this.y;
        }
        else if(this.accumulateRotation < 3/2* Math.PI){
            this.y=  2 * Math.cos(this.accumulateRotation);  // y from -2->0, x: 0->-2
            this.x = -(2+this.y);
        }
        else if(this.accumulateRotation < 2* Math.PI){
            this.y = 2 * Math.cos(this.accumulateRotation); // y from 0->2, x: -2 ->0
            this.x = -(2- this.y);
        }
        else{
            this.accumulateRotation = 0;
        }
        // set gravity
            this.matter.world.setGravity(this.x, this.y);
        }



    changeGraphics() {
        // level 0 graphics
        if (this.levelNumber === 0) {
            for (let i = 0; i < this.blocks.children.entries.length; i ++) {
                this.blocks.children.entries[i].play('wobble0');
            }
        }
        // level 1 graphics
        if (this.levelNumber === 1) {
            for (let i = 0; i < this.blocks.children.entries.length; i ++) {
                this.blocks.children.entries[i].play('wobble1');
            }
            for (let i = 0; i < this.spikes.children.entries.length; i ++) {
                this.spikes.children.entries[i].play('wobbleSpike0');
            }
            for (let i = 0; i < this.falseBlocks.children.entries.length; i ++) {
                this.falseBlocks.children.entries[i].play('wobbleFalse0');
            }
        }
        // level 2 graphics
        if (this.levelNumber === 2) {
            for (let i = 0; i < this.blocks.children.entries.length; i ++) {
                this.blocks.children.entries[i].play('wobble2');
            }
            for (let i = 0; i < this.spikes.children.entries.length; i ++) {
                this.spikes.children.entries[i].play('wobbleSpike1');
            }
            for (let i = 0; i < this.falseBlocks.children.entries.length; i ++) {
                this.falseBlocks.children.entries[i].play('wobbleFalse1');
            }
        }
        // level 3 graphics
        if (this.levelNumber === 3) {
            for (let i = 0; i < this.blocks.children.entries.length; i ++) {
                this.blocks.children.entries[i].play('wobble3');
            }
            for (let i = 0; i < this.spikes.children.entries.length; i ++) {
                this.spikes.children.entries[i].play('wobbleSpike2');
            }
            for (let i = 0; i < this.falseBlocks.children.entries.length; i ++) {
                this.falseBlocks.children.entries[i].play('wobbleFalse2');
            }
        }
    }

    changeColor() {
        // level 0 colors
        if (this.levelNumber === 0) {
          document.body.style.background = level0BgColor;
          this.vigniette.setTint(level0VignitteColor);
          this.topTitleText.setTint(level0TextColor);
          this.bottomTitleText.setTint(level0TextColor);
          this.button0.setTint(level0TextColor);
          this.button1.setTint(level0TextColor);
          this.button2.setTint(level0TextColor);
          this.button3.setTint(level0TextColor);
          this.sky.setTexture('sky_0');
          if (gameState === 'play') {
            this.timerText.setTint(level0TextColor);
          }
          player.setTint(playerLight);
        }
        // level 1 colors
        if (this.levelNumber === 1) {
          document.body.style.background = level1BgColor;
          this.vigniette.setTint(level1VignitteColor);
          this.topTitleText.setTint(level1TextColor);
          this.bottomTitleText.setTint(level1TextColor);
          this.button0.setTint(level1TextColor);
          this.button1.setTint(level1TextColor);
          this.button2.setTint(level1TextColor);
          this.button3.setTint(level1TextColor);
          this.sky.setTexture('sky_1');
          if (gameState === 'play') {
            this.timerText.setTint(level1TextColor);
          }
          player.setTint(playerLight);
        }
        // level 2 colors
        if (this.levelNumber === 2) {
          document.body.style.background = level2BgColor;
          this.vigniette.setTint(level2VignitteColor);
          this.topTitleText.setTint(level2TextColor);
          this.bottomTitleText.setTint(level2TextColor);
          this.button0.setTint(level2TextColor);
          this.button1.setTint(level2TextColor);
          this.button2.setTint(level2TextColor);
          this.button3.setTint(level2TextColor);
          this.sky.setTexture('sky_2');
          if (gameState === 'play') {
            this.timerText.setTint(level2TextColor);
          }
          player.setTint(playerLight);
        }
        // level 3 colors
        if (this.levelNumber === 3) {
          document.body.style.background = level3BgColor;
          this.vigniette.setTint(level3VignitteColor);
          this.topTitleText.setTint(level3TextColor);
          this.bottomTitleText.setTint(level3TextColor);
          this.button0.setTint(level3TextColor);
          this.button1.setTint(level3TextColor);
          this.button2.setTint(level3TextColor);
          this.button3.setTint(level3TextColor);
          this.sky.setTexture('sky_3');
          if (gameState === 'play') {
            this.timerText.setTint(level3TextColor);
          }
          player.setTint(playerDark);
        }
      }

    update() {
        // initialize self
        let self = this;
        // ignore non-UI stuff in UI camera
        this.UICamera.ignore(this.sky);
        this.UICamera.ignore(this.blocks.getChildren());
        this.UICamera.ignore(this.boundary.getChildren());
        this.UICamera.ignore(this.spikes.getChildren());
        this.UICamera.ignore(this.falseBlocks.getChildren());
        this.UICamera.ignore(player);
        // rotate background
        this.sky.rotation += 0.01;
        // handle moving buttons out of the way
        this.moveButtons();
        // start the game
        if (gameState === 'willPlay') {
            gameState = 'play';
            // make title screen text invisible
            this.topTitleText.setVisible(false);
            this.bottomTitleText.setVisible(false);
            // start the timer
            if (this.timerText === null) {
                this.timerText = this.add.text(400, 128, 'TIME : ' + this.formatTime(this.initialTime), {fontFamily: 'font', fontSize: 24, color: '#ffffff'}).setOrigin(0.5,0.5);
                this.countUpEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
            }
            else {
                this.timerText.setVisible(true);
            }
            // ignore UI stuff
            this.camera.ignore(this.topTitleText);
            this.camera.ignore(this.bottomTitleText);
            this.camera.ignore(this.timerText);
            this.UICamera.ignore(this.vigniette);
            this.camera.ignore(this.button0);
            this.camera.ignore(this.button1);
            this.camera.ignore(this.button2);
            this.camera.ignore(this.button3);
            // start moving tiles
            this.timedEvent = this.time.addEvent({delay: delayTime, callback: function(){
                self.moveTile();
            } , loop: false});
        }
        // when in play
        if (gameState === 'play') {
            // change timer color
            this.changeColor();
            // handle the rotation
            this.handleRotation();
            rotationAmount += 0.0000025;
            // death condition
            if (this.y > 0) {
                if (player.y > 900) {
                    gameState = 'reset';
                }
            }
            if (this.y < 0) {
                if (player.y < -100) {
                    gameState = 'reset';
                }
            }
            if (this.x > 0) {
                if (player.x > 900) {
                    gameState = 'reset';
                }
            }
            if (this.x < 0) {
                if (player.x < -100) {
                    gameState = 'reset';
                }
            }
            // set has died to true
            this.hasDied = true;
        }
        // describe death delay progress
        this.deathDelayProgress = this.deathDelay.getProgress();
        // handle game reset delay
        if (gameState === 'title') {
            // reset gravity
            this.x = 0;
            this.y = 2;
            // reset rotation speed
            rotationAmount = 0.001;
            // make sure the player can't move before delay ends
            player.setVelocityX(this.x);
            player.applyForce({
                x: 0,
                y: 0
            });
            // check death delay
                if (this.deathDelayProgress >= 0 && this.deathDelayProgress < 1) {
                    this.enableKeyboard = false;
                }
                if (this.deathDelayProgress === 1) {
                    this.enableKeyboard = true;
            }
        }
        // handle reset
        if (gameState === 'reset') {
            this.moveButtons();
            if (this.initialTime > this.bestTimeArray[this.levelNumber]) {
             this.bestTimeArray[this.levelNumber] = this.initialTime;
        }
            this.reset();
             // create death delay timer
            this.time.addEvent(this.deathDelay);
            // go back to title screen
            gameState = 'title';

        }
        // player set max speed x
        if ((player.body.velocity.x*this.y/2) <= -4 || (player.body.velocity.y*this.x/2) >= 4) {
            player.applyForce({
                x: (0.001*this.y/2),
                y: -(0.001*this.x/2)
            });
        }
        if ((player.body.velocity.x*this.y/2) >= 4 || (player.body.velocity.y*this.x/2) <= -4) {
            player.applyForce({
                x: -(0.001*this.y/2),
                y: (0.001*this.x/2)
            });
        }
        // player set max speed y
        if (player.body.velocity.y*this.y/2 >= 100 || player.body.velocity.x*this.x/2 >= 100) {
            player.setVelocityY(80*this.y/2);
            player.setVelocityX(80*this.x/2);
        }
        // push back player upon touching spikes
        if (this.ouch === true) {
            player.play("ouch").once('animationcomplete', () => {
                player.play("idle");
             });
            player.applyForce({
                x: -(player.x/100000) * 7,
                y: -(player.y/100000) * 7
            });
            this.enableKeyboard === false;
            this.time.addEvent(this.deathDelay);
            this.ouch = false;
        }
        // use death delay to prevent player from moving when hurt
        if (gameState === 'play') {
            if (this.deathDelayProgress >= 0 && this.deathDelayProgress < 1) {
                this.enableKeyboard = false;
            }
            if (this.deathDelayProgress === 1) {
                this.enableKeyboard = true;
            }
        }
        // play player impact animation
        if (this.jump === true) {
            player.play("impact").once('animationcomplete', () => {
                player.play("idle");
             });
        }
        if (this.enableKeyboard === true) {
            // handle moving left
            if (cursors.left.isDown)
            {
                if (gameState === 'title') {
                    gameState = 'willPlay';
                }
                if (gameState === 'play') {
                    player.applyForce({
                        x: -(0.001*this.y/2),
                        y: (0.001*this.x/2)
                    });
                }
            }
            // handle moving right
            else if (cursors.right.isDown)
            {
                if (gameState === 'title') {
                    gameState = 'willPlay';
                }
                if (gameState === 'play') {
                    player.applyForce({
                        x: (0.001*this.y/2),
                        y: -(0.001*this.x/2)
                    });
                }
            }
            // handle not moving + momentum
            else
            {
                // handle not moving
                player.applyForce({
                    x: 0,
                    y: 0
                });
                // set velocity to zero if momentum is small enough
                if (player.body.velocity.x*this.y/2 < 0.0001 || player.body.velocity.y*this.x/2 < 0.0001) {
                    player.applyForce({
                        x: 0,
                        y: 0
                    });
                }
                else if (player.body.velocity.x*this.y/2 > -0.0001 || player.body.velocity.y*this.x/2 > -0.0001) {
                    player.applyForce({
                        x: 0,
                        y: 0
                    });
                }
            }
            // handle pressing up
            if (cursors.up.isDown && this.jump === true)
            {
                if (gameState === 'title') {
                    gameState = 'willPlay';
                }
                if (gameState === 'play') {
                    player.applyForce({
                        x: -(0.03 * this.x/2),
                        y: -(0.03 * this.y/2)
                    });
                    this.jump = false;
                }
            }
            // handle pressing down
            else if (cursors.down.isDown && this.jump === true)
            {
                if (gameState === 'title') {
                    gameState = 'willPlay';
                }
                if (gameState === 'play') {
                    player.applyForce({
                        x: -(0.01 * this.x/2),
                        y: -(0.01 * this.y/2)
                    });
                    this.jump = false;
                }
            }
            // handle constant bouncing
            else if (this.jump === true)
            {
            player.applyForce({
                x: -(0.0175 * this.x/2),
                y: -(0.0175 * this.y/2)
            });
                this.jump = false;
            }
        }
        // handle constant bouncing
        else if (this.jump === true)
        {
            player.applyForce({
                x: -(0.0175 * this.x/2),
                y: -(0.0175 * this.y/2)
            });
            this.jump = false;
        }
    }
}