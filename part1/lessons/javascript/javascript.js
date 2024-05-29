const x = 1
let y = 5

console.log(x, y)

y += 10

console.log(x, y)

y = 'sometext'

console.log(x, y)

//x = 4 // throws an error because x is a constant

const t = [1, -1, 3] // even though t is a constant, the elements of the array can be modified

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log(value)
})

const t2 = t.concat(5)

console.log(t)
console.log(t2)

const m1 = t.map(value => value * 2)
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  

// can also assign individual elements of the array to variables
const [first, second,...rest] = t2
console.log(first, second)
console.log(rest)

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)
object1.address = 'Helsinki'
object1['secret number'] = 12341
console.log(object1)  
console.log(object1['secret number']) // works, but not recommended to use property names with space

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)

const square = p => {
    console.log(p)
    return p * p
} // if there is only one parameter, the parentheses can be omitted

const square2 = p => p * p // if the function has only one expression, the curly braces can be omitted 

const t3 = [1, 2, 3]
const t3Squared = t3.map(p => p * p)
console.log(t3Squared)

// we can assign methods to objects by defining properties that are functions

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello, my name is', this.name, 'and I am ', this.age, 'years old')
    },
    doAddition: function (a, b) {
        console.log(a+b)
        
    }
}

arto.greet()

// you can assign methods even after the object is created
arto.growOlder = function() {
    this.age += 1
}

arto.growOlder()

arto.greet()

arto.doAddition(1, 4)

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)
console.log(referenceToAddition.name) 
// in javascript, "this" is not bound to the object that the method is called on, 
// but to the object that is calling the method

setTimeout(arto.greet.bind(arto), 1000)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is', this.name, 'and I am', this.age, 'years old') 
        // note that when inserting numbers into a string, they are automatically converted to strings
        // also, spaces are automatically added between the strings
    }
}

const adam = new Person('Adam', 25)
adam.greet()

const bryan = new Person('Bryan', 30)
bryan.greet()

// we are using hooks rather than classes in this course
// hooks are a new feature in react
// they allow you to use state and other react features without writing a class
// see https://react.dev/reference/react/hooks for more information