console.log('USING VISUAL STUDIO TO CODE AND LEARN');
console.log(' TERNARY OPERATOR & SWITCH STATEMENT ');

var firstName='NYIVA';
age=16;

age>=18 ? console.log(firstName + ' is allowed to drink'): console.log(firstName + ' Can not Drink ');

var drink = age>18 ? 'BEER' : 'JUICE';
console.log(drink);

//........WRITING THE SAME CODE WITH IF ELSE STATAMENT .....................//


console.log(' ........WRITING THE SAME CODE WITH IF ELSE STATAMENT .................... ');

age = 67;
if (age>=18)
{
    var drink='Beer';
    console.log(drink);
}
else
{
    var drink='Juice';
    console.log(drink);

}

console.log(' ........USING THE SWITCH STATEMENT .................... ');

var job=prompt('What\'s Nyiva\'s Job ?');

switch(job)
{
    case 'teacher':
        case 'instructor':
    console.log(firstName + ' Teaches Kids to become better people');
    break;
    case 'driver':
        case 'uber guy':
        console.log(firstName + ' Drives people around the city');
        break;
        case 'Software Engineer':
            console.log(firstName + ' Solves your problems whether in softwares or websites or in mobile applications');
            break;
            case 'Pilot':
                console.log(firstName + ' Flies you to your destination in the world');
                break;
                default:
                    console.log(firstName + 'Does something else.');

}