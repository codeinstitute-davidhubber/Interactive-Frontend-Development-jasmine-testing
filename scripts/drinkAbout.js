whatCanIDrink = function(age) {
	if (age < 0) {
		return "Sorry. I can’t tell what drink because that age is incorrect!";
	}
	else if (age < 14) {
		return "Drink Toddy";
	}
	else if (age < 18 && age >=14) {
		return "Drink Coke";
	}
	else if (age < 21 && age >=18) {
		return "Drink Beer";
	}
	else if (age < 130) {
		return "Drink Whisky";
	} 
	else {
		return "Sorry. I can’t tell what drink because that age is incorrect!"
	}
};

/* This code was taken directly from https://raw.githubusercontent.com/Code-Institute-Solutions/MakingSureItWorks/master/10-jasmine_challenges/01-challenge_one/spec/drinkSpec.js */