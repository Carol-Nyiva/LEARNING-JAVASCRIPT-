console.log('THIS IS PART OF JAVASCRIPT BASICS 😇 :');  
//................OBJECT LITERALS..........//
var John = {
    Firstname: 'John',
    Lastname: 'Smith',
    BirthYear: 1990,
    Family: ['Jane', 'Mark', 'Bob', 'Emily'],
    Job : 'Teacher',
    isMarried: false
};

console.log(John);
console.log(John.BirthYear);
console.log(John['Lastname']); // Accessing it through a key name.

var x =' BirthYear';
console.log(John[x]); // Another way to access the property of an object is to have a variable named after it 

John.Job ='Designer'; // This is a way of mutating the property of an Object
John['isMarried'] = true;
console.log(John);


//..................................................//
// .........NEW OBJECT SYNTAX .......//
var Jane = new Object();
Jane.Firstname = 'Jane';
Jane.BirthYear = '1995';
Jane['Lastname'] = 'Smith';
console.log(Jane);
