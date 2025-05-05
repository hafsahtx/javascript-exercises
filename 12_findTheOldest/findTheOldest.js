const findTheOldest = function (people){
    
    const oldest = people.map(person=>{
        if(!(person.yearOfDeath)){
            person["yearOfDeath"] = (new Date()).getFullYear()
        }
        return person;
    }).reduce(function(oldest,current){
        if((oldest.yearOfDeath-oldest.yearOfBirth)>(current.yearOfDeath-current.yearOfBirth)){
            return oldest;
        }else{
            return current;
        }
    })
    return oldest
}

// Do not edit below this line
module.exports = findTheOldest;
