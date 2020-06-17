/* function cityFacts()
{
    let facts ={
        name :'Tokyo',
        population : 13929286,
        continent : 'Asia'
    }
    return console.log(facts.name +' has a population of '+ facts.population + ' and is situated in '+ facts.continent);
    
}

cityFacts(); */


function cityFacts(info)
{
    return info.name + ' has a population of ' + info.population +  ' and is situated in ' + info.continent;
}
cityFacts('Tokyo',1390212,'Asia');