// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += 1;
    if (this.x==495) {
        this.x = -1;
    }
    //if(this.x)
    //this.x *= dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {                                   //ADD 1 (28-47 LINES)
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    //var lives = 6;
    this.score = 0;
};

Player.prototype.handleInput = function(e) {
    if(e=="up"&&this.y>0) {
        this.y -= 83;
    }
    else if(e=="down"&&this.y<415) {
        this.y += 83;
    }
    else if(e=="right"&&this.x<400) {
        this.x +=101;
    }
    else if(e=="left"&&this.x>0) {
        this.x -=101;
    }
};

Player.prototype.update = function() {
    for (i=0;i<allEnemies.length;i++) {
        if (this.x==(allEnemies[i].x+75)&&this.y==allEnemies[i].y) {
            this.reset();
        }
    }
    /*while (this.y<1) {
        window.alert("You won");
        this.reset();
    }*/
};

Player.prototype.reset = function() {                       
    this.x =200;
    this.y = 415;
    /*this.lives = 6;                                         
    this.score = 0;*/
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font="30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Reach here!!!", 505/2, 100);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Enemy1 = new Enemy(0, 83);
var Enemy2 = new Enemy(150, 166);
var Enemy3 = new Enemy(100, 83);
var Enemy4 = new Enemy(-150, 166);
var Enemy5 = new Enemy(250, 249);
var Enemy6 = new Enemy(10, 166);

var allEnemies = [Enemy1, Enemy2, Enemy3, Enemy4, Enemy5, Enemy6];                 //ADD 2 (45-46 LINES)
var player = new Player(200, 415);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
