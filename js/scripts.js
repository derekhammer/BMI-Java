//BMI calculator
var calculate = function(weight, height) {
	return weight / (height * height) * 703;
}
var weight = parseInt(prompt("weight?"))
var height = parseInt(prompt("height?"))
var BMI = calculate (weight, height);
alert(BMI);
