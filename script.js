// Coding Steps by question number 

// 1.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a. subtract first index value from the last
console.log("1.a. ", ages[ages.length - 1] - ages[0])
// b. add to the array and test again
ages.push(120)
console.log("1.b. ", ages[ages.length - 1] - ages[0])
// c. find the average age
// I used the reduce method to get more practice with it
console.log("1.c. reduce version", ages.reduce((a, b) => (a + b)) / ages.length)
// but here is a for loop version
let ageSum = 0
for(let i = 0; i < ages.length; i++) {
    ageSum += ages[i]
}
console.log("1.c. for loop version ", ageSum / ages.length)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2. 
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
// a. average number of letters per name 

// Thought process commented :
// const namesLength = names.map(name => {return name.length})
// console.log(namesLength, namesLength.length)
// console.log(namesLength.reduce((a,b) => a + b) / names.length)

// final :
console.log("2.a. ", (names.map(name => name.length)).reduce((a,b) => a + b) / names.length)

// b. concat names with spaces in between 
console.log("2.b. ", names.join(' '))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 3. access the last element of any array 
let anyArray = [1, 2, 3, 4, 5]
console.log("3. last element ", anyArray[anyArray.length - 1])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 4. access the first element of any array 
console.log("4. first element ", anyArray[0])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 5. add length of each element in names array to a new array 
const nameLengths = names.map(name => name.length)
console.log("5. ", nameLengths)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 6. find sum of nameLengths elements
console.log("6. ", nameLengths.reduce((a,b) => a + b))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 7. concatenate a word 'n' number of times
const concat = (word, n) => word.repeat(n);
console.log("7. ", concat('conCat', 20))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 8. use a function to put a name together 
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("8. " + fullName("Jeremy", "Bearimy"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 9. function that returns true if sum of an array > 100 
const test1 = [10, 50, 80]
const test2 = [0, 5, 10]

const isSumOver100 = arr => arr.reduce((a,b) => a+b) > 100; 

console.log("9. test 1 ", isSumOver100(test1))
console.log("9. test 2 ", isSumOver100(test2))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 10. function returning average of numbers in array 
const averager = arr => arr.reduce((a, b) => a + b) / arr.length;

console.log("10. test 1", averager(test1))
console.log("10. test 2", averager(test2))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 11. function returning true if average of array 1 > average of array 2
// Keeping it DRY :

const isAvgGreater = (arr1, arr2) => averager(arr1) > averager(arr2);

console.log("11.test 1 ", isAvgGreater(test1, test2))
console.log("11.test 2 ", isAvgGreater(test2, test1))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 12. function returning true if hot and money > 10.50 

// const willBuyDrink = (isHotOutside, moneyInPocket) => {
    // easy answer but doesn't check for data type
    // console.log(isHotOutside && moneyInPocket > 10.5)
    
    // if(typeof(isHotOutside) === "boolean" && isHotOutside && typeof(moneyInPocket) === "number" && moneyInPocket > 10.5) {
        //     return true
        // } else {
        //     return false
        // }  
        // return typeof(isHotOutside) === "boolean" && isHotOutside && typeof(moneyInPocket) === "number" && moneyInPocket > 10.5 
        // }

const willBuyDrink = (isHotOutside, moneyInPocket) => typeof(isHotOutside) === "boolean" && isHotOutside && typeof(moneyInPocket) === "number" && moneyInPocket > 10.5;
            
console.log("12. test 1 ", willBuyDrink(true, 11.5))
console.log("12. test 2 ", willBuyDrink("hot", 11))
console.log("12. test 3 ", willBuyDrink(true, "cold"))
console.log("12. test 4 ", willBuyDrink(true, "11.5"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 13. create a function that solves a problem 
console.log("And 13. %cWait for it...", 'color: cornsilk; font-size: 18px; font-style: italic;')
let needALaugh = new Promise((response, reject) => {
    let request = fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
    if(request) {
        response("success")
    } else {
        reject("failed")
    }
    request.then(response => {return response.json()})
        .then((data) => {
            setTimeout(() => {
                console.log(`%c${data.setup}`, 'color: cornflowerblue; font-size: 22px; font-family: Arial')
            }, 1000)
            setTimeout(() => {
                console.log(`%c${data.delivery}`, 'color: cyan; font-size: 24px; font-family: Arial;')
            }, 4000)
            setTimeout(() => {
                console.log(`%cBadum Tsssss...`, 'color: #999; font-size: 14px; font-family: Calibri; font-style: italic;')
            }, 6000)
        })
        .catch((reject) => console.log("request failed", reject))
})

// I've created this function to practice Promises and to bask in the glory of bad jokes.

