class Boot extends Phaser.Scene {
    constructor() {
      super({
        key: `boot`
      });
    }

    preload() {
      // preload sprites
      this.load.on(`complete`, () => {
        this.scene.start(`play`);
      });

      this.load.image('sky_0', 'assets/images/sky_0.png');
      this.load.image('sky_1', 'assets/images/sky_1.png');
      this.load.image('sky_2', 'assets/images/sky_2.png');
      this.load.image('sky_3', 'assets/images/sky_3.png');
      this.load.image('vignette', 'assets/images/vignette.png');

      this.load.spritesheet('cursorIdle',
      'assets/images/cursor_idle.png',
      { frameWidth: 20, frameHeight: 20 }
      );
      this.load.spritesheet('flea',
      'assets/images/flea.png',
      { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet('impact',
      'assets/images/impact.png',
      { frameWidth: 40, frameHeight: 40 }
      );
      this.load.spritesheet('ouch',
      'assets/images/ouch.png',
      { frameWidth: 40, frameHeight: 40 }
      );
      this.load.spritesheet('hurt',
      'assets/images/hurt_effect.png',
      { frameWidth: 72, frameHeight: 72 }
      );
      this.load.spritesheet('button0',
      'assets/images/button_0.png',
      { frameWidth: 64, frameHeight: 64 }
      );
      this.load.spritesheet('button1',
      'assets/images/button_1.png',
      { frameWidth: 64, frameHeight: 64 }
      );
      this.load.spritesheet('button2',
      'assets/images/button_2.png',
      { frameWidth: 64, frameHeight: 64 }
      );
      this.load.spritesheet('button3',
      'assets/images/button_3.png',
      { frameWidth: 64, frameHeight: 64 }
      );
      this.load.spritesheet('block0',
      'assets/images/block_0.png',
      { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet('block1',
      'assets/images/block_1.png',
      { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet('block2',
      'assets/images/block_2.png',
      { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet('block3',
      'assets/images/block_3.png',
      { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet('falseBlock0',
      'assets/images/falseBlock_0.png',
      { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet('falseBlock1',
      'assets/images/falseBlock_1.png',
      { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet('falseBlock2',
      'assets/images/falseBlock_2.png',
      { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet('spikes0',
      'assets/images/spikes_0.png',
      { frameWidth: 40, frameHeight: 40 }
      );
      this.load.spritesheet('spikes1',
      'assets/images/spikes_1.png',
      { frameWidth: 40, frameHeight: 40 }
      );
      this.load.spritesheet('spikes2',
      'assets/images/spikes_2.png',
      { frameWidth: 40, frameHeight: 40 }
      );
      this.load.spritesheet('falseBlockParticle0',
      'assets/images/falseBlock_particle_0.png',
      { frameWidth: 20, frameHeight: 20 }
      );
      this.load.spritesheet('falseBlockParticle1',
      'assets/images/falseBlock_particle_1.png',
      { frameWidth: 20, frameHeight: 20 }
      );
      this.load.spritesheet('falseBlockParticle2',
      'assets/images/falseBlock_particle_2.png',
      { frameWidth: 20, frameHeight: 20 }
      );
      //play transition on boot
      doTransition();
    }
  }