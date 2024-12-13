const findTheOldest = function(people) {
    let oldestPerson = people.reduce((max, person)=>{
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        if(max.yearOfDeath === undefined){
            max.yearOfDeath = currentYear;     
            age = max.yearOfDeath - max.yearOfBirth;       
        }else if(person.yearOfDeath === undefined){
            person.yearOfDeath = currentYear;
            nextage = person.yearOfDeath - person.yearOfBirth;
        }else{
            age = max.yearOfDeath - max.yearOfBirth;
            nextage = person.yearOfDeath - person.yearOfBirth;
        }
        
        if(age>nextage){
            return max;
        }else{
            return person;
        }
});
    return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
