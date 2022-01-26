let name = 'Nathan'

const states = 50

var add = 5 + 4







function checkAge(name, age) {
    if (age < 21)
        alert("Sorry " + name + ", you aren't old enough to view this page!")
}
checkAge("charles", 21)
checkAge("abby", 27)
checkAge("james", 18)
checkAge("john", 17)

function sayHello() {
    var hello = "Hello World"
    alert(hello)

}

var favVeg = ["onions", "carrots", "bell peppers", "peppers"]
for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i])
}

var pet = {
    name: 'Maeve',
    breed: 'cat',
}
console.log(pet)

let peeps = [{ name: 'kile', age: 21 }, { name: "garrett", age: 22 }, { name: "nathan", age: 19 }, { name: "Parker", age: 17 }]

for (var i = 0; i < peeps.length; i++) {
    checkAge(peeps[i].name, peeps[i].age)
}
function getLength(string) {

    if (string.length % 2 === 0) {
        console.log('The world is nice and even!')
    }
    else {
        console.log('The world is an odd place!')
    }
}
getLength("Hello World")





sayHello()
console.log(name)
console.log(states)
console.log(add)