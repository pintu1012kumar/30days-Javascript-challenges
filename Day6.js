// Activity-1 basics initialise , print
const arr = [1,2,4,5,67,7];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

let len= arr.length
console.log(len)
console.log("last element=",arr[len-1])



// Activity-2 push,pop,shift,unshift

const brr =[10];
brr.push(1,3,14,15,116,17); // use to add the ele 
console.log(brr.length);
console.log("after push=",brr[brr.length-1])

brr.pop(3); // use to remove the last ele
console.log(brr.length);
console.log("after pop=",brr[brr.length-1])

const shiftEle=brr.shift(); // shift is used to remove the first element from the array
console.log(shiftEle);

const unshiftele= brr.unshift(20,90,900); //  used to add ele from the top
console.log(unshiftele);
console.log(brr[0]);

console.log("final array is here:",brr);



// Activity-3  map, filter, reduce

const crr = [2,3,4,5,6,7]
const crr1 = crr.map((x)=> x*3); // use to create new arr with given codn.
console.log("crr1=",crr1)
console.log("crr=",crr)

const names = ["priyanshu","pintu", "satyam", "anubhav", "aman", "raju"];
const result = names.filter((name)=> name.length >5); // use to filter array acc. to given condns.
console.log(result);
console.log(names);

// reduce
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue,
);
console.log(sumWithInitial);



// Activity -4

const array2 = [1, 2, 3, 4,5];
for(let i=0;i<array2.length;i++){
    console.log(array2[i])
}

const array3 = ['a', 'b', 'c'];
array3.forEach((element) => console.log(element));

// Activity-5

// expore multi-dimensitioal array