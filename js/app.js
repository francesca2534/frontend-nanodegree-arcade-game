// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed;
    //this.x *= dt;
    if (this.x>=495) {
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

var Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.lives = 2;
    this.score = 0;
};

Player.prototype.handleInput = function(e) {
    if(e=="up"&&this.y>0) {
        if (this.y-83==249&&this.x==100) {
            this.y = this.y;
        }
        else {
            this.y -=83;
        }
    }
    else if(e=="down"&&this.y<415) {
        if (this.y+83==332&&this.x==100) {
            this.y = this.y;
        }
        else {
            this.y +=83;
        }
    }
    else if(e=="right"&&this.x<400) {
        this.x +=100;
    }
    else if(e=="left"&&this.x>0) {
        this.x -=100;
    }
};

Player.prototype.update = function() {
    for (i=0;i<allEnemies.length;i++) {
        //if ((this.x==(allEnemies[i].x+75)&&this.y==allEnemies[i].y)
        //    ||(this.x==(allEnemies[i].x-75)&&this.y==allEnemies[i].y)) {
        if ((this.x<allEnemies[i].x+75&&this.x>allEnemies[i].x-75)&&this.y==allEnemies[i].y) { 
            this.lives--;
            this.reset();
        }
    }
    if (this.lives == 0) {
        window.alert("Game Over");
        this.lives = 2;
        this.reset()
    }
    /*while (this.y<1) {
        window.alert("You won");
        this.reset();
    }*/
};

Player.prototype.reset = function() {                       
    this.x =200;
    this.y = 415;                                         
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font="30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Lives:"+" "+this.lives, 450, 100);
    ctx.fillText("Score:"+" ", 50, 100);

};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Enemy1 = new Enemy(0, 83, 1.25);
var Enemy2 = new Enemy(150, 166, 1.5);
var Enemy5 = new Enemy(250, 249, 1.75);


var allEnemies = [Enemy1, Enemy2, Enemy5];                 //ADD 2 (45-46 LINES)
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
