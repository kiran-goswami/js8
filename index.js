console.log("working")

// // map , filter,  reduce

// //  they are  known as one linear function

// //  map never modifies original array

// let result =0;
// result=result+2;


// let numbers = [2,3,4,5,6,7];

// console.log(numbers);

// numbers.map((item)=>{console.log(item)})

// let res = numbers.filter(item => {
//     return item > 3
// })
// console.log(res);

// let res1 = numbers.reduce((acc,cur)=> acc = acc+cur,0);

// console.log(res1)


// let res2 = numbers.reduce((acc,cur)=> acc = acc*cur,1);

// console.log(res2)

//  charAt,
let str = "kiran goswami";
console.log(str.length);
console.log(str.charAt(2));


console.log(str.endsWith("i"));

let sentence = "hello world";
console.log(sentence.includes("world"));

// indexOf

console.log(sentence.indexOf("o"));

console.log(sentence.lastIndexOf("o"));

// length

console.log(str.length);


// replace

 console.log(str.replace("kiran","aashni"));

//  search

console.log(str.search("goswami"));

console.log(sentence.substr(1,4));

// first value is the index position and the second value is the no of characters from the index position mentioned in the first value

console.log(sentence.substring(0,6));

// first index value is inclusive ,  last index  vlaue is exclusive

//  for substring always the lower value is the starting index and higher value is the ending index , irrespective of the position of the values mentioned

console.log(sentence.substring(7,0));

let email = "kiran.goswami@gmail.com ";

let values = email.split("@");

console.log(values);
