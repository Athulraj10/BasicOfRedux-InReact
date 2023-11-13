// // Source objects
// const personDetails = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30
//   };

//   const addressInfo = {
//     city: 'New York',
//     country: 'USA'
//   };

//   const combinedInfo =  Object.assign({},addressInfo,personDetails)

//   // Modify the combined object
//   combinedInfo.age = 31;
//   combinedInfo.city = 'San Francisco';

//   // Original objects and the combined object
//   console.log(personDetails);
//   console.log(addressInfo);
//   console.log(combinedInfo);

// Original object
// const originalObject = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
//   // Deep copy using JSON.parse() and JSON.stringify()
//   const deepCopy = JSON.parse(JSON.stringify(originalObject));
//   // Modify the deep copy
//   deepCopy.age = 31;
//   deepCopy.address.city = 'San Francisco';
//   // Changes in the deep copy do not affect the original object
//   console.log(originalObject);
//   console.log(deepCopy);

// // Constructor function for a basic person object
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Adding a method to the prototype of the Person constructor
//   Person.prototype.prototypeExample = function () {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   };

//   // Creating instances of the Person object
//   const person1 = new Person('Alice', 25);
//   const person2 = new Person('Bob', 30);

//   // Calling the method from the prototype
//   person1.prototypeExample();
//   person2.prototypeExample();
// Create a Buffer with a string
// const buffer = Buffer.from('Hello, Node.js!', 'utf-8');

// // Convert the buffer to a string
// const bufferString = buffer.toString('utf-8');

// // Print the original buffer and the converted string
// console.log('Original Buffer:', buffer);
// console.log('Converted String:', bufferString);
// function selectionSort(arr) {
//     const n = arr.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
  
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
  
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
  
//   function findSecondLargest(arr) {
//     selectionSort(arr);
//     return arr[arr.length - 2];
//   }
  
  // Example usage:
//   const numbers = [5, 2, 9, 1, 5, 6];
//   const secondLargest = findSecondLargest(numbers);
  
  function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    // Base case: if the start index is greater than the end index, the target is not in the array
    if (start > end) {
      return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target < arr[mid]) {
      return binarySearch(arr, target, start, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, end);
  }
  
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const targetValue = 7;
  
  const result = binarySearch(sortedArray, targetValue);
  
  if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}.`);
  } else {
    console.log(`Target ${targetValue} not found in the array.`);
  }
  