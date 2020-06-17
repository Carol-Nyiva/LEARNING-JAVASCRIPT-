console.log('THIS IS PART OF JAVASCRIPT BASICS 😇 :');  
//................OBJECT LITERALS..........//
var John = {
    Firstname: 'John',
    Lastname: 'Smith',
    BirthYear: 1990,
    Family: ['Jane', 'Mark', 'Bob', 'Emily'],
    Job : 'Teacher',
    isMarried: false,
    CalcAge()
    {
        return 2020 - this.BirthYear;
    }
};


console.log(John.CalcAge());

var age = John.CalcAge();
John.age = age;
console.log(John);


