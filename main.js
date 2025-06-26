const hero = {
    "name": "Tanos",
    "age": 10000,
    "isGood": false,
    destroy(){
    console.log("I'm Tanos")
    }
};
hero.self = hero
let heroJson
try{
    const heroJson = JSON.stringify(hero);
}catch(error)
{
    console.log(error.name);
    console.log(error.message);
}
// const a = [a, b, c]

// JSON.stringify перетворює об'єкт нв json

// JSON.parse перетворює джейсон на об'ект не забудь про '(...)'
console.log(heroJson);

// назва, рік випуску і режисер
const films = [{
    "name": "Titanic", 
    "year of graduation": 1997,
    "director": "James Cameron",
    "genre": " Romance"
},
{
   "name": "Titanic", 
    "year of graduation": 1997,
    "director": false,
    "genre": " Romance"
},
{
    "name": "Titanic", 
    "year of graduation": 1997,
    "director": false,
    "genre": " Romance"
}];