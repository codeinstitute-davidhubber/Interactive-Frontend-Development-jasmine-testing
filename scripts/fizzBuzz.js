fizzBuzz = function(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return "FizzBuzz";
	}
	else if (number % 3 === 0) {
		return "Fizz";
	}
	else if (number % 5 === 0) {
		return "Buzz";
	}	
	else {
		return number
	}
};


/* from https://github.com/Code-Institute-Solutions/MakingSureItWorks/tree/master/10-jasmine_challenges/02-challenge_two */