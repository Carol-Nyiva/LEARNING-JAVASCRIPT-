//------------------------------------------ A R R A Y S --------------------------------------------------//

console.log('LEARNING ARRAYS, 4TH JUNE 2020');

var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names[0]); // Accessing one value in the array
console.log(names); //Accessing all values in the array
console.log(names.length); //Here you will know how many values are stored in the Array


//--------------------------- M U T A T E -- A R R A Y -- D A T A ---------------------------//

names[1]='Jonah'; //This changes a value in the array
console.log(names);

//Adding an array to the existing list

names[6]='Nyiva';
console.log(names);

names[names.length]='Rojer';
console.log(names);
console.log(names.length);

// Different data types
var John = [ 'John', 'Smith', 1990, 'teacher', false];
John.push('brown');  // PUSH > Pushes a value onto the array at the end
John.unshift('Mr '); // UNSHIFT > adds a value at the beginning of the array
John.pop(); // POP > removes the value that was at the end of the array
console.log(John);
John.shift(); //SHIFT > Removes the UNSHIFTED value
console.log(John);

John.indexOf(1990); //RETURNS THE INDEX VALUE OF 1990
console.log(John.indexOf(1990));

var isDesigner=John.indexOf('Designer') === -1 ? 'John is NOT A DESIGNER':'John is A DESIGNER';

console.log(isDesigner);