console.log('CODING CHALLENGE 2 SOLUTION');

var GameA,GameB,GameC,winner,JohnTeamAverage,MikeTeamAverage;
GameA=89;
GameB=120;
GameC=103;
JohnTeamAverage=(GameA+GameB+GameC)/3;
console.log('Average Score of John\'s Team is : ' +JohnTeamAverage);

GameA=116;
GameB=94;
GameC=123;
MikeTeamAverage= (GameA+GameB+GameC)/3;
console.log('Average Score of Mike\'s Team is : ' +MikeTeamAverage);

winner=JohnTeamAverage>MikeTeamAverage? 'JOHN TEAM WINS WITH '+JohnTeamAverage:'MIKE TEAM WINS WITH ' +MikeTeamAverage;
console.log(winner);

GameA=97;
GameB=134;
GameC=105;
var MaryTeamAverage=  (GameA+GameB+GameC)/3;
console.log('Average Score of Mary\'s Team is : ' +MaryTeamAverage);

if(JohnTeamAverage>MikeTeamAverage && JohnTeamAverage>MaryTeamAverage)
{
    console.log('JOHN TEAM WINS OVER THE THREE WITH '+JohnTeamAverage);
}
else if(MikeTeamAverage>JohnTeamAverage && MikeTeamAverage>MaryTeamAverage)
{
    console.log('MIKE TEAM WINS OVER THE THREE WITH ' +MikeTeamAverage);
}
else if(MaryTeamAverage>JohnTeamAverage && MaryTeamAverage>MikeTeamAverage)
{
    console.log('MARY TEAM WINS OVER THE THREE WITH ' +MaryTeamAverage);
}
else
{
    console.log('THERE IS A DRAW');
}