var SPEED = 200
var GRAVITY = 900;

var state = {
    preload: function(){
        this.load.image("wall", "../assets/wall.png");
        this.load.image("background", "../assets/background-texture.png");
        this.load.spritesheet("player", "../assets/player.png", 48, 48);
    },
    create: function(){
        this.background = this.add.tileSprite(0, 0, this.world.with, this.world.height, 'background')
        this.background.autoScroll(-SPEED, 0);
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = GRAVITY;
        this.player = this.add.sprite(0,0,'player');
        this.player.animations.add('fly', [0,1,2], 10, true);
        this.physics.arcade.enableBody(this.player);
        this.player.body.collideWorldBounds = true;
    },
    update: function(){
    }
}

var game = new Phaser.Game(
    320,
    568,
    Phaser.AUTO,
    'game',
    state
)