console.log('CODING USING VISUAL STUDIO');
console.log('THIS IS \'IF ELSE\' STATEMENT');

var firstName = 'John';
var civilStatus = 'single';

if( civilStatus=== 'married')
{
    console.log(firstName + 'is married');
}
else
{
    console.log(firstName + ' will hopefully marry soon :D');
}
//--------------------------------------------------------------//
var isMarried = true;
if (isMarried)
{
    console.log(firstName + ' is married');
}
else
{
    console.log(firstName + ' will hopefully marry soon :) ');
}
//--------------------------------------------------------------//
isMarried = false;
if (isMarried)
{
    console.log(firstName + ' is married');
}
else
{
    console.log(firstName + ' will hopefully marry soon :) ');
}

// USING THE CODING CHALLENGE QN AND CODE CODE SOMETHING BETTER USING THE IF ELSE STATEMENT

console.log('CODING CHALLENGE 1 SOLUTION USING IF ELSE STATAMENT');

var MarkHeight,MarkMass, JohnHeight,JohnMass,BMI,BMIJohn,BMIMark;
MarkHeight= prompt('Whats Marks Height ?');
console.log(MarkHeight);

JohnHeight = prompt('What is the Height  of John ?');
console.log(JohnHeight);
MarkMass=70;
JohnMass=76;

BMIJohn=JohnMass / (JohnHeight*JohnHeight);
console.log("John's BMI is "+ BMIJohn);

BMIMark = MarkMass /(MarkHeight*MarkHeight);
console.log("Mark's BMI is "+BMIMark);

if(BMIMark > BMIJohn)
{
    console.log('Mark\'s BMI is greater than John\'s ');
}
else
{
    console.log('John\'s BMI is greater than Mark\'s ');
}

//--------------------------------------------------------------//
