console.log('USING VISUAL STUDIO TO CODE ');
console.log('LEARNING FUNCTIONS IN JAVASCRIPT');

const greet = () => 'Hello World';
const result = greet();  // Store the result of function greet to "result" and print out the result 
console.log(result);

//SWITCH REMINDER 
console.log('REMINDER OF SWITCHING STATEMENT');

var whatDoYouDo = function(job,name)
{
    switch(job)
    {
        case 'Teacher':
        return name + ' Teaches children to be better';
        break;
        case 'Pilot':
        return name + ' Flies people all over the world';
        break;
        case 'Developer':
            return name + ' Turns your imaginations into beautiful web and mobile applications';
            break;
            default:
                return name + ' Does something else thats not defined';

    }
}

console.log(whatDoYouDo('Developer', ' Nyiva'));
console.log(whatDoYouDo('Teacher', ' Mary'));
console.log(whatDoYouDo('Pilot', ' Ian'));
console.log(whatDoYouDo('Plumber', ' Mike'));




