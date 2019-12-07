function helloWorld(str1, str2){
    return `Hello ${str1} ${str2}`;
}

console.log(helloWorld('Jack', 'Ryan'));

const stringToBoolean = !!"";
console.log(`!!"" is ${stringToBoolean}`);

const  stringToBoolean3 = Boolean("hello world");
console.log(stringToBoolean3);

const stringToBoolean1 = !!" ";
console.log(`!!" " is ${stringToBoolean1}`);

const numberToBoolean = !!1;
console.log(numberToBoolean);

const numberToBoolean1 = !!0;
console.log(numberToBoolean1);``

const numberToBoolean2 = !!-1;
console.log(`!!-1 is ${numberToBoolean2}`);

const arrayToBoolean = !![1];
console.log(arrayToBoolean);

const arrayToBoolean1 = !![];
console.log(arrayToBoolean1);

const objectToBoolean = !!{};
console.log(`!!{} is ${objectToBoolean}`);

const objectToBoolean1 = !!{ type: false};
console.log(objectToBoolean1);

const undefinedToBoolean = !!undefined;
console.log(undefinedToBoolean);

const nullToBoolean = !!null;
console.log(`!!null is ${nullToBoolean}`);