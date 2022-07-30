//Primitives : number ,string , boolean
//More complex types : arrays , object ,
//Function types , parameters

//Primitives

let age: number

age = 12

let userName: string | string[]

userName = "Prg"

let isInstructor: boolean

isInstructor = true

//More complex types

let hobbies: string[]
hobbies = ["Sports", "Cooking"]

type Person = {
  name: string
  age: number
}
let person: Person

person = {
  name: "prg",
  age: 33,
}

// person={
// 	inEmployee : true,
// }

let people: Person[]

//Type inference

let course: string | number = "React - The Complete Guide"

//function & types

function add(a: number, b: number) {
  return a + b
}

function print(value: any) {
  console.log(value)
}

//Generic

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1, 2, 3]
const updateArray = insertAtBeginning(demoArray, -1) //[-1,1, 2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d")

console.log(updateArray)

// updateArray[0].split("")
