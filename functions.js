console.log(' USING VISUAL STUDIO TO CODE ');
console.log('LOVING THE PROGRESS AM MAKING ON JAVASCRIPT');

// .....................................FUNCTIONS ................................................ //
/*
function calculateAge(birthYear)
{
    return 2018-birthYear;
}
var ageJohn = calculateAge(1990);
var ageMary = calculateAge(1984);
var ageLilly = calculateAge(1962);
console.log(ageJohn , ageMary , ageLilly);  */

function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)

console.log(mycar);