//Stars the player must collect
var Collect = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Star.png';
};

Collect.prototype.render = function() {
    if (flag5==true) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

//Lives the player must collect
var Heart = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Heart.png'
};

Heart.prototype.render = function() {
    if (flag4==true) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

var Gems = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/Gem Blue.png'
};

 Gems.prototype.update = function(dt) {
    this.x += (this.speed*dt);
    if (this.x>=495) {
        this.x = -1;
    }
};

Gems.prototype.render =function() {
    if (flag7==true) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};


// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += (this.speed*dt);
    //this.x *= dt;
    if (this.x>=495) {
        this.x = -1;
    }
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

var flag1 = true;   //Flags used to check various conditions in player.update()
var flag2 = true;
var flag3 = true;
var flag4 = true;
var flag5 = true;
var flag6 = true;
var flag7 = true;

Player.prototype.update = function() {
    for (i=0;i<allEnemies.length;i++) {
        if ((this.x<allEnemies[i].x+75&&this.x>allEnemies[i].x-75)&&this.y==allEnemies[i].y) { 
            this.lives--;
            this.score -= 10;
            this.x = 200;
            this.y = 415;
        }
    }

    //Reset game if lives become 0
    if (this.lives == 0) {
        window.alert("Game Over");
        this.reset();
    }

    //Increase score by 30 if star is collected
    if ((this.x==collect.x&&this.y==collect.y)&&flag1==true) {
        this.score += 30;
        flag1 = false;
        flag5 = false;
    }

    //Increase lives by 1 and score by 10 if heart is collected
    if ((this.x==heart.x&&this.y==heart.y)&&flag3==true) {
        this.lives += 1;
        this.score += 10;
        flag4 = false;
        flag3 = false;
    }

    //Increase score by 20 if water is reached and reset the game after displaying the score
    if (this.y==0&&flag2==true) {
        this.score += 20;
        flag2 = false;
        window.alert("Level Won!" + "Your Score:" + this.score);
        this.reset();     
    }

    //Increase score by 30 if gem is collected
    if ((this.x<gems.x+75&&this.x>gems.x-75)&&this.y==gems.y) {
        if (flag6==true) {
            this.score += 15;
            flag6 = false;
            flag7 = false;
        }
    }
};

//Reset the player when the game is either lost or won
Player.prototype.reset = function() {                       
    this.x =200;
    this.y = 415;  
    this.lives = 2;
    this.score = 0;
    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
    flag5 = true;
    flag6 = true;
    flag7 = true;                                    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font="30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Lives:"+" "+this.lives, 450, 100);
    ctx.fillText("Score:"+" "+this.score, 70, 100);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Enemy1 = new Enemy(0, 83, 110);
var Enemy2 = new Enemy(150, 166, 95);
var Enemy3 = new Enemy(250, 249, 100);
var allEnemies = [Enemy1, Enemy2, Enemy3];                 
var player = new Player(200, 415);
var collect = new Collect(300,249);
var heart = new Heart(0,249);
var gems =new Gems(100, 166, 50);

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
