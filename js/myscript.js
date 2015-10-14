$(document).ready(function() {
	//Click the button to get value
	$('#myfizzbuzz').on('click', function() {
		var inputValue = $('#text-input').val();
		inputValue = parseInt(inputValue, 10);
	//Check if value is number and between range, then run function or alert
		if (inputValue % 1 === 0 && inputValue >= 1 && inputValue <= 500) {
			FizzBuzz(inputValue);
		} 

		else {
			alert("You must enter a number between 1 and 500");
			$('#text-input').val("")
		}
	});

	$('#clear').on('click', function(){
		$('#text').empty();
		$('#text-input').val("");
	});
});

function FizzBuzz(max) {
for (var i=1; i <= max; i++) {
    if (i % 15 == 0) {
    	$("#text").append("FizzBuzz");
    	$("#text").append("<br>");
    }

    else if (i % 3 == 0) {
    	$("#text").append("Fizz");
    	$("#text").append("<br>");
    }

    else if (i % 5 == 0) {
    	$("#text").append("Buzz");
    	$("#text").append("<br>");
    }

    else {
    	$("#text").append(i);
    	$("#text").append("<br>");
	}
}
};
