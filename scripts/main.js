

// changing individual properties with code and using setInterval
var rotationSpeed = 0.06;
var flySpeed = 0.03;
var height1=5;
var myOtherBox = document.getElementById('myOtherBox');
var myBox = document.getElementById('myBox');

function spin(){
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myBox.object3D.rotation.z += rotationSpeed;
	//console.log(myOtherBox.object3D.rotation.x);
}

function fly(){
	myBox.object3D.position.z -= flySpeed;
	myOtherBox.object3D.position.x += flySpeed;
}

setInterval(spin, 16); //equivalent to 60 fps
setInterval(fly, 16);