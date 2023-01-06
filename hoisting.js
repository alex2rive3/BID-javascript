console.log(hello);
var hello = "world";
//////////////
/*var hello
console.log(hello) logs undefined 
hello="world"*/
var needle = "haystack";
test();
function test() {
    var needle = "magnet";
    console.log(needle);
}
//////////////////////////
/*var needle = "haystack" 
function test(){
    var needle = "magnet";
    console.log(needle);
}
test() logs magnet
*/

var brendan = "super cool";
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);
//////////////////////////
/*var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); logs "only okay"
}
console.log(brendan); logs super cool */

var food = "chicken";
console.log(food);
eat();
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
////////////////////////////////////
/* var food = 'chicken';
console.log(food); logs chiken
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat(); logs half-chicken
*/

//mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
};
console.log(food);
//////////////////////////////
/*mean(); //funcion no definida
console.log(food); logs chicken
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
};
console.log(food);  logs chicken */

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
///////////////////
/* var genre
console.log(genre); logs undefined
var genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind(); logs rock r&b
console.log(genre); logs disco
 */
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//////////////////////
/*dojo = "san jose";
console.log(dojo); logs san jose
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn(); logs seattle burbank
console.log(dojo); san jose
*/
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
/////////////////////////
/*
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; imposible asignar una dadena de caracteres a un objeto
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); logs {name:'chicago',students:65, hiring: true}
console.log(makeDojo("Berkeley", 0)); imposible asignar una dadena de caracteres a un objeto
*/
