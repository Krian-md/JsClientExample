// class Car {
    //     constructor(cars){
    //         this.cars = cars;
    //     } 
    // }
    
    // function Test(){
    //     let arrProtot = new Cars([1, "32", 14, 56, "Hey", true, "Yes", 14, false]);
        
    //     console.log(Object.getOwnPropertyNames(Car.prototype));
    //     console.log(arrProtot.filterNumbers());
    // }
    
    // Test();
    
    // Car.prototype.filterNumbers = function (){
    //     let result = [];
    //     for (let i = 0; i < this.lenght; i++){
    //         console.log(this.cars[i]);
    //         if (typeof this[i] === Number){
    //             result.push(this[i]);
    //         }
    //     } 
    //     return result;
    // };
    
   // [1, "32", 14, 56, "Hey", true, "Yes", 14, false]
	
	
	
	
//    let ArrProtot = function(nums) {
//     this.nums = nums;
// };

//  ArrProtot.prototype.filterNumbers = function (){
//     let result = [];
//     console.log(this.nums);
//     for (let i = 0; i < this.nums.length; i++){
//         if (typeof this.nums[i] === 'number'){
//             result.push(this.nums[i]);
//         }
//     } 
//     return result;
// };

// let arr = new ArrProtot([1, "32", 14, 56, "Hey", true, "Yes", 14, false]);
//     // console.log(Object.getOwnPropertyNames(ArrProtot.prototype));
//     console.log(arr.filterNumbers());\

// let a = 2;
// let b = 3;

// console.log(a, b);

// // a = a + b;
// // b = a - b;
// // a = a - b;

// // a = a + '' + b;
// // b = a[0];
// // a = a.substr(1,2);

// console.log(a, b);

// var arr = [1,2,24,5,6];
// arr.sort((a,b)=> b - a);

// console.log(arr);



// let spliceThreeFromArray = [1,2,3,4,5,6,7,8,9,10];
    
    // function DeleteThreeFromArray(array) {
        
        
    // }
    // let arr = spliceThreeFromArray.filter(elem => elem % 3 !== 0);
    
    // console.log(arr);

    // let employees = [
    //             {
    //                 firstName: 'John',
    //                 lastName: 'Doe',
    //                 age: 27,
    //                 joinedDate: 'December 15, 2017'
    //             },
            
    //             {
    //                 firstName: 'Ana',
    //                 lastName: 'Rosy',
    //                 age: 25,
    //                 joinedDate: 'January 15, 2012'
    //             },
            
    //             {
    //                 firstName: 'Zion',
    //                 lastName: 'Albert',
    //                 age: 30,
    //                 joinedDate: 'February 15, 2011'
    //             }
    //         ];
            
            // let InitialValue = 0;
            // const countEmployees = employees.reduce((tally, employee) => {
            //     tally += employee.age;
            //     return tally;
            // }, InitialValue); 
                
            // console.log(countEmployees);
            
            
            // employees.sort((a, b) => a.age - b.age);
            
            // employees.forEach(elem =>{
            //      console.log(elem.firstName + "  " + elem.lastName + "  " + elem.age + "  " + elem.joinedDate);
            // });
            
            // employees.sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));
            
            // employees.forEach(elem =>{
            //      console.log(elem.firstName + "  " + elem.lastName + "  " + elem.age + "  " + elem.joinedDate);
            // });
            
            
            
        //     const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
        
        // const countFruits = fruitBasket.reduce((tally, fruit, index) => {
        //     tally[fruit] = (tally[fruit] || 0) + 1 ;
        //     return tally;
        // }, {}); 
            
        // console.log(countFruits);

        //     const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
        
        // const countFruits = fruitBasket.reduce((tally, fruit, index) => {
        //     let size = fruit.length;
        //     if (!tally.hasOwnProperty(size))
        //     {
        //         tally[size] = [];
        //     }
        //     tally[size].push(fruit);
        //     return tally;
        // }, {}); 
            
        // console.log(countFruits);

        
       
        
        
        // const euro = [29.76, 41.85, 46.5];
        // const above30 = euro.reduce((total, amount) => {
        //   if (amount > 30) {
        //     total.push(amount);
        //   }
        //   return total;
        // }, []);
        // above30 // [ 41.85, 46.5 ]
        
        
        
        
        // const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        // const flat = data.reduce((total, amount) => {
        //   return total.concat(amount);
        // }, []);
        // flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
        

        // const data = [1, 2, 3, 4, 5, 6, [7, [8], 9]];
        // const data1 = {a:1, b:2, c:3, d: {d: 1, b: 2}};

        // const d = JSON.parse(JSON.stringify(data1));
        // const d1 = JSON.parse(JSON.stringify(data));

        // d["heat"] = 20;
        // data1.d.d= 20;
        // d.push(423);
        // data[6][0] = "ttt";
        // data[6][1][0] = "hey";


        // class User {
        //     constructor(id, name, price){
        //         this.id = id;
        //         this.name = name;
        //         this.price = price;
        //     }

        //     setName(value) {
        //         this.name = value;
        //     }

        //     setPrice(value) {
        //         this.price = value;
        //     }

        //     copyInstanse() {
        //         // return JSON.parse(JSON.stringify(this));
        //         return new User(this.id, this.name, this.price);
        //     }
        // }
         
        // let user = new User(1, "Gena", 2000);
        // let obj = user.copyInstanse();

        // obj.setName("Den");
        
        
        // console.log(user);
        // console.log(obj);
        // console.log(d1);
        


        // let obj = {a: 1, b: 2};

        // let o = obj;
        
        // o = 15;

        // console.log(o);
        // console.log(obj);



///////////////////// Builder
// class OTG {
// 	constructor(model, color, maxTemperature, maxTimeSelection) {
// 	  this.model = model;
// 	  this.title = 'OTG';
// 	  this.color = color;
// 	  this.maxTemperature = maxTemperature || 150;
// 	  this.maxTimeSelection = maxTimeSelection || 30;
// 	}
// }


// class OTGBuilder {
//     constructor(model, color) {
//       this.model = model;
//       this.title = 'OTG';
//       this.color = color;
//     }
//     setMaxTemperature(temp) {
//       this.maxTemperature = temp;
//       return this;
//     }
  
//     setMaxTimeSelection(maxTime) {
//       this.maxTimeSelection = maxTime;
//       return this;
//     }
  
//     build() {
//       return new OTG(this.model, this.color,
//       this.maxTemperature, this.maxTimeSelection);
//     }
//   }


//   const basicOTG = new OTGBuilder('MorphyRichards', 'Black')
//   .setMaxTemperature(250)
//   .setMaxTimeSelection(60)
//   .build();

//   console.log(basicOTG);
      

//////////////// Intersection

// var ranges = [[1,3],[2,3],[3,5],[3,6,7],[3, 8,10],[3, 9,15]];


// function IntersectionMy(array){
//     let result = [], count = 0;
//     let isReoperation = false;

//     for (let i = 1; i < array.length; i++){
//         let tmp1 = array[i - 1];
//         let tmp2 = array[i];
        
//         if (tmp1[tmp1.length - 1] > tmp2[0]){
//             if(isReoperation){
//                 result[count - 1] = Array.prototype.concat(result[count - 1], tmp2);
//             }
//             else{
//                 result[count] = Array.prototype.concat([], tmp1, tmp2);
//                 count++;
//                 isReoperation = true;
//             }
//         }
//         else {
//             if(!isReoperation){
//                 result[count] = tmp1;
//                 count++;
//             }
//             isReoperation = false;
//         }
//     }
//     return result;
// }

// console.log(IntersectionMy(ranges));


// var ranges = [[1,3],[2,3],[3, 7, 5],[3,6,7],[3, 11, 8, 10],[3, 9, 15]];


// var arrayReduce = ranges.reduce((total, elem, index, array)=>{
//     // console.log(total);

//     if (index == 0){
//         let currentElem = elem.sort((a,b) => a - b);
//         let nextElem = array[array[index + 1].length - 1].sort((a,b) => a - b);
//         total.push([currentElem[0], nextElem[nextElem.length - 1]]);
//         return total;
//     }
//     let currentTotal = total[index - 1];
//     let currentElem = elem.sort((a,b) => a - b);
//     let prevElem = currentTotal[currentTotal.length - 1];

//     total.push([prevElem, currentElem[currentElem.length - 1]]);
//     return total;

// }, []);

// console.log(arrayReduce);



// var ranges = [[1,3],[2,3],[3, 7, 5],[3,6,7],[3, 11, 8, 10],[3, 9, 15]];


// var arrayReduce = ranges.reduce((total, elem, index, array)=>{
//     // console.log(total);

//     if (index == 0){
//         let currentElem = elem.sort((a,b) => a - b);
//         let nextElem = array[array[index + 1].length - 1].sort((a,b) => a - b);
//         total.push([currentElem[0], nextElem[nextElem.length - 1]]);
//         return total;
//     }

//     let currentTotal = total[index - 1];
//     let currentElem = elem.sort((a,b) => a - b);
//     let prevElem = currentTotal[currentTotal.length - 1];

//     total.push([prevElem, currentElem[currentElem.length - 1]]);
//     return total;

// }, []);





// var ranges = [[1,3],[2,3],[3, 7, 5],[3,6,7],[3, 11, 8, 10],[3, 9, 15]];

// var arrayReduce = ranges.reduce((total, elem, index)=>{
//     // console.log(total);

//     if (index == 0){
//         total = elem.concat();
//         return total;
//     }

//     let count = 0;

//     total.forEach((value, index) =>{
//         let isExist = elem.includes(value);
//         if (!isExist){
//             total.splice(index - count, 1);
//             count++;
//         }
//     });
    
//     return total;
// }, []);

// console.log(ranges);
// console.log(arrayReduce);



// var ranges = [[1,3],[2,3],[5, 7],[8, 10],[9, 15]];

// var arrayReduce = ranges.reduce((total, elem, index, array)=>{
//     let currentElem = elem;

//     if (index === 0) {
//         total[total.length] = currentElem;
//         return total;
//     }

//     let prevElem = total[total.length - 1];

//     if (prevElem[prevElem.length - 1] > currentElem[0])
//     {
//         total[total.length - 1] = prevElem.concat(currentElem);
//     }
//     else {
//         total[total.length] = currentElem;
//     }
   
//     return total;
// }, []);

// console.log(arrayReduce);



// const { List  } = require('immutable');

// var mutableArr1 = List([1, 2, 3, 4]);
// var mutableArr2 = mutableArr1;

// mutableArr2.push(5);
// mutableArr2[2] = 25;

// console.log(mutableArr1); 
// console.log(mutableArr2); 








// let deleteArray = [6, 2, 4];

// let spliceThreeFromArray = [1,2,3,4,5,6,7,8,9,10];
    
    // function deleteThreeFromArray(array) {
    //     for (let i = 0; i < array.length; i++){
    //         if (array[i] % 3 === 0){
    //             array.splice(i, 1);
                
    //         }
    //     }
    //     return array;        
    // }
    // let arr = deleteThreeFromArray(spliceThreeFromArray);


    // function deleteByIndexes(array, indexes) {
    //     indexes.sort();
    //     for (let i = indexes.length - 1; i >= 0; i--){
    //         array.splice(indexes[i], 1);
    //     }
    //     return array;
    // }

    // let arr = deleteByIndexes(spliceThreeFromArray, deleteArray);

    // console.log(arr);

    




// let reduceSome = [1,2,3,4,5,6,7,8,9,10];

// let resArr = reduceSome.reduce((sum, elem)=>{
//     return sum + elem;
// });

    
//     console.log(resArr);
 



