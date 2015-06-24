// Basic skeleton for any game. 


function game() {
	initialize();

	//do the following in a loop that executes 
	// at 60FPS
	window.setInterval(function() {

		//receive input
		handleInput();

		//update the state and position of objects
		update();

		//handle collisions
		collide();


		//draw the scene
		draw();
	}, 1000/60);
}