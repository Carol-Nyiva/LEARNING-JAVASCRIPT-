/* ----------------- CODING CHALLENGE SOLUTION ------------------ */
console.log('CODING CHALLENGE 1 SOLUTION');

var MarkHeight,MarkMass, JohnHeight,JohnMass,BMI,BMIJohn,BMIMark;
MarkHeight= prompt('Whats Marks Height ?');
console.log(MarkHeight);

JohnHeight = prompt('Whats John\'s Height ?');
console.log(JohnHeight);
MarkMass=70;
JohnMass=76;

BMIJohn=JohnMass / (JohnHeight*JohnHeight);
console.log("John's BMI is "+ BMIJohn);

BMIMark = MarkMass /(MarkHeight*MarkHeight);
console.log("Mark's BMI is "+BMIMark);

BMI= BMIMark>BMIJohn;
console.log("Is Mark's BMI higher than that of John ? " +BMI);
 