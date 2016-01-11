$(document).ready(function(){
	$('.dial').knob({
		min: 0,
		max: 80,
		height: 150,
		width: 150,
		readOnly: true,
		fgColor: "#333",
		inputColor: "#333"
	});
});

speedLimit = 30;

function getInput(speed){
	updateDial(speed);
}

function updateDial(value){
	var tolerance = calculateTolerance(speedLimit);

	$('.dial').val(value).trigger('change');

	if (value <= speedLimit){
		$('.narrative').val("Under the speed limit.")
		$('.dial').trigger('configure',{"fgColor":"#00ff00"});
	} else if (value > speedLimit && value < tolerance){
		$('.narrative').val("Over speed limit but within tolerance.")
		$('.dial').trigger('configure',{"fgColor":"#ffa500"});		
	} else if (value => tolerance){
		$('.narrative').val("You are over the speed limit.")
		$('.dial').trigger('configure',{"fgColor":"#ff0000"});		
	}

}

function calculateTolerance(value){
	var speedLimit = value;
	var percent = speedLimit / 10;

	speedLimit = speedLimit + percent;
	speedLimit = speedLimit  + 2;

	return speedLimit;	
}


