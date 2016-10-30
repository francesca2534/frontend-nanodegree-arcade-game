frontend-nanodegree-arcade-game
===============================

##1.Run your code
The class functions named Enemy, Player, Collect, Heart, Gems were created with function parameters and then they were instantiated. The location of all the objects were passed while instantiating. Class prototype functions were used for purposes such as rendering, updating, restoring, etc.
-The render method is responsible for drawing the images on the canvas which are included in the Resources.load() function in the engine.js file. All new render methods should be added to the renderEntities() function in engine.js.
-The update method updates position of the player, enemies and gems. It contains statements to change the co-ordinates as per requirement.
-The restore method restores all the values if the game is either won or lost.
-The handleInput method determines how the player reacts to the different inputs.
##2.Play your arcade game.
The game controls are the arrow keys. The aim is to reach the water without getting hit by the bug. Hearts, stars can be coleted to increase your lives and scores respectively. The moving gems also increses the score.

