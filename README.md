frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.
##1.Run your code
The class functions named Enemy, Player, Collect, Heart, Gems were created with function parameters and then they were instantiated. The location of all the objects were passed while instantiating. Class prototype functions were used for purposes such as rendering, updating, restoring, etc.
The render method is responsible for drawing the images on the canvas which are included in the Resources.load() function in the engine.js file.
The update method updates position of the player, enemies and gems. It contains statements to change the co-ordinates as per requirement.
The restore method restores all the values if the game is either won or lost.
The handleInput method determines how the player reacts to the different inputs.
##2.Play your arcade game.
The game controls are the arrow keys. The aim is to reach the water without getting hit by the bug. Hearts, stars can be coleted to increase your lives and scores respectively. The moving gems also increses the score.
For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
