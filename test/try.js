
 
 // const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('foo');
  //   }, 300);
  // });
  
  // promise1.then((value) => {
  // console.log(value);

  //   throw 'oh, no!';
  //   console.log(value);

  // }).catch((err)=>{
  //   console.log(err);
  //   throw 'second erroe';
  // })
  

//   console.log(promise1);
  // expected output: [object Promise]




//   function factory(value, result){
//     return value === 1? result : factory(value - 1, result * value); 
//   }

//  console.log(factory(6,1));

  
/////////////////////////// Observeble



// const observer = new EventObserver()

// observer.subscribe(data => {
//   console.f('subscribe was fired', data)
// })

// observer.broadcast({someData: 'hello'})

// class EventObserver {
//   constructor () {
//     this.observers = []
//   }

//   subscribe (fn) {
//     this.observers.push(fn)
//   }

//   unsubscribe (fn) {
//     this.observers = this.observers.filter(subscriber => subscriber !== fn)
//   }

//   broadcast (data) {
//     this.observers.forEach(subscriber => subscriber(data))
//   }
// }


// const observer = new EventObserver()

// observer.subscribe(data => {
//   console.log('broadcast catched', data)
// })

// const textField = document.querySelector('.textField')
// const countField = document.querySelector('.countField')

// console.log(textField);
// console.log(countField);


// observer.broadcast({someData: 'hello'})

// textField.addEventListener('keyup', () => {
//   observer.broadcast(textField.value)
// })

// const getWordsCount = text =>
//   text ? text.trim().split(/\s+/).length : 0

//   observer.subscribe(text => {
//     countField.innerHTML = getWordsCount(text)
//   })


  /////////////////// Mediator


//   var Participant = function (name) {
//     this.name = name;
//     this.chatroom = null;
// };

// // Переделать
// Participant.prototype = {
//     send: function (message, to) {
//         this.chatroom.send(message, this, to);
//     },
//     receive: function (message, from) {
//         console.log(from.name + " to " + this.name + ": " + message);
//     }
// };

// var Chatroom = function () {
//     var participants = {};

//     return {

//         register: function (participant) {
//             participants[participant.name] = participant;
//             participant.chatroom = this;
//         },

//         send: function (message, from, to) {
//             if (to) {                      // single message
//                 to.receive(message, from);
//             } else {                       // broadcast message
//                 for (key in participants) {
//                     if (participants[key] !== from) {
//                         participants[key].receive(message, from);
//                     }
//                 }
//             }
//         }
//     };
// };

// function run() {
//     var yoko = new Participant("Yoko");
//     var john = new Participant("John");
//     var paul = new Participant("Paul");
//     var ringo = new Participant("Ringo");

//     var chatroom = new Chatroom();
//     chatroom.register(yoko);
//     chatroom.register(john);
//     chatroom.register(paul);
//     chatroom.register(ringo);

//     yoko.send("All you need is love.");
//     yoko.send("I love you John.");
//     john.send("Hey, no need to broadcast", yoko);
//     paul.send("Ha, I heard that!");
//     ringo.send("Paul, what do you think?", paul);
// }

// run();


////////////  Strategy


// const logger = (strategy, level, message) => {
//   return strategy(level, message)
// }



// logger(
//   logToConsoleStrategy,
//   'log',
//   'log first message to console'
// )

// logger(
//   logToConsoleStrategy,
//   'warn',
//   'Some problem'
// )


// const logToConsoleStrategy = (level, message) =>      console[level](message)

// const logger = (strategy, level, message, ...args) => {
//   return strategy(level, message, ...args)
// }

// const logToDOMStrategy = (level, message, node) => {
//   node.innerHTML = `<div class='${level}'>${message}</div>`
// }

// logger(
//   logToDOMStrategy,
//   'warn',
//   'log second message to dom',
//   document.querySelector('#log')
// )

// logger(
//   logToDOMStrategy,
//   'log',
//   'Yes second example',
//   document.querySelector('#logNew')
// )

// logger(
//   logToConsoleStrategy,
//   'log',
//   'Yes second example',
// )


// class Company {
//   constructor(company) {
//   this.company = {};
//   }

//   setStrategy(company) {
//       this.company = company;
//   };
  
//   calculate(packageDemo) {
//       return this.company.calculate(packageDemo);
//   };
// };
// let company = new Company()

// class UPS{
//   calculate(packageDemo) {
//     //
//       return "$43.20";
//   };
// };

// class USPS{
//   calculate(packageDemo) {
//     //
//       return "$39.40";
//   };
// };

// class Fedex{
//   calculate(packageDemo) {
//     //
//       return "$45.95";
//   };
// };

// function run() {

// let packageDemo = { from: "76712", to: "10012", weigth: "lkg" };

// company.setStrategy(new UPS);
// console.log("UPS Strategy: " + company.calculate(packageDemo));
// company.setStrategy(new USPS);
// console.log("USPS Strategy: " + company.calculate(packageDemo));
// company.setStrategy(new Fedex);
// console.log("Fedex Strategy: " + company.calculate(packageDemo));
// }

// run();





// var re = /test/
// var str = 'test 1'
// console.log(re.test(str))
// console.log(re.test(str))
// console.log(re.test(str))


// let str = "I love JavaScript JavaScript";

// let result = str.match(/Java(Script)/);

// console.log(result[0]);     // JavaScript (всё совпадение)
// console.log(result[1]);     // Script (первые скобки)
// console.log(result.length); // 2

// // Дополнительная информация:
// console.log(result.index);  // 7 (позиция совпадения)
// console.log(result.input);

// let str = "I love JavaScript JavaScript";

// let result = str.match(/Java(Script)/g);

// console.log( result[0] ); // JavaScript
// console.log( result[1] ); // JavaScript
// console.log( result.length ); // 1






// let str = '<h1>Hello, world!</h1>';
// let regexp = /<(.*?)>/g;

// let matchAll = str.matchAll(regexp);

// console.log(matchAll); // [object RegExp String Iterator], не массив, а перебираемый объект

// matchAll = Array.from(matchAll); // теперь массив

// let firstMatch = matchAll[0];
// console.log( firstMatch[0] );  // <h1>
// console.log( firstMatch[1] );  // h1
// console.log( firstMatch.index );  // 0
// console.log( firstMatch.input );  // <h1>Hello, world!</h1>






// let str = 'Больше о JavaScript на https://javascript.info';
// let regexp = /javascript/ig;

// let result;

// while (result = regexp.exec(str)) {
//   console.log(`Найдено ${result[0]} на позиции ${result.index}` );
//   // Найдено JavaScript на позиции 9, затем
//   // Найдено javascript на позиции 31
// }





// let str = 'Hello, world!';

// let regexp = /\w+/g; // без флага g свойство lastIndex игнорируется
// regexp.lastIndex = 5; // ищем с 5-й позиции (т.е с запятой и далее)

// alert( regexp.exec(str) ); // world



// let str = "Я люблю JavaScript";

// // эти два теста делают одно и же
// alert( /люблю/i.test(str) ); // true
// alert( str.search(/люблю/i) != -1 ); // true








// const axios = require('axios');
// async function axiosGet(){
//   try {
    
//     let response = await axios.get('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fbeautiful%2Bpictures&psig=AOvVaw3ttZyvoYsfPEIkCEg2eUp_&ust=1649787023262000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKjL993NjPcCFQAAAAAdAAAAABAJ');
//     console.log(response.data);
//   }
//   catch(err) {
//     console.log(err);
//   }
// }
// axiosGet();

// axios.get('url')
//   .then((response) => {
 
//     // Code for handling the response
//   })
//   .catch((error) => {
 
//     // Code for handling the error
//   });

  
// fetch('path-to-the-resource-to-be-fetched')
// .then((response) => {

//   // Code for handling the response
// })
// .catch((error) => {

//   // Code for handling the error
// });




// let links = ['1',
// '2',
// '3',
// '4'];

// async function linksLoader(link) {
//   //Promise and async/await
//     try {
//       const response = await new Promise(resolve =>{
//         setTimeout(()=> {
//           resolve(link + "resolve")
//         }, 1000);
//       });
//       return response;
//     }
//     catch (err) {
//         console.log("Error links!");
//     }
//     finally {
// }}


// let linksDiv = document.querySelector('#links');

// function linksAsync2(links, index = 0){

//   const link = links[index];
//   return linksLoader(link).then((res)=> {
//     linksDiv.append(document.createElement(`div`).innerHTML = res);
//     // linksDiv.append(`<img src="${res.dat}" alt="Photo">`);
//     index++;
//     if (index < links.length) {
//       return linksAsync2(links, index);
//     }
//   }).catch((err)=>{
//     console.log(err);
//   })
// }

// linksAsync2(links);

// async function linksAsync(links){
//   for (let link of links){
//     linksDiv.append(document.createElement(`div`).innerHTML = await linksLoader(link));
//     // let res = await linksLoader(link);
//   }
// }

// linksAsync(links);

// async function asyncGeneratorWay(callback) {
//   async function* generateSequence() {
//     let results;
//     for (let url of urls) {
//       results = yield await fakeFetch(url, results);
//     }
//     return results;
//   }
//   let generator = generateSequence();
//   let result;
//   while (!result || !result.done) {
//     result = await generator.next(result && result.value);
//   }
//   callback(result.value);
// }


// let str = '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? \"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"';
    
// let regular =/".+?"/g;

// console.log(str.replace(regular,"hey"));


// console.log(str.replace(regular, function(match){
// let res = match;
// console.log(res + ": " + res.length);
// return res;
// }));


// 1
// 12 21
// 123 132 312 213 231 321
// 1234 1243 1423 4123    1324 1342 1432 4132   3124 3142 3412 4312    2134 2143 2413 4213    2314 2341 2431 4231    3214 3241 3421 4321 

// class ProtNum{
//     constructor(nums){
//       this.nums = nums;
//     }

//     getNums(){
//       return this.nums;
//     }
// }

// function Prot() {
//   let 
// }

// const date = new Date();
// // Эта функция извлекает прототип объекта из самого объекта
// const proto = Object.getPrototypeOf(date); // Date {}

// // В прототипе хранится не конструктор
// // Что там хранится – узнаем дальше
// proto === Date; // false

// const numbers = [1, 2];
// Object.getPrototypeOf(numbers); // [] – отображение отличается, но это массив

// // Прототипы есть и у конструкторов, которые мы определяем сами
// function Company(name) {
//   this.name = name;
// }

// const company = new Company();
// Object.getPrototypeOf(company);

// console.log(b);
// // console.log(Tr);
// // 'use strict'
// var b;

// function Tr(){
//   // let x = 1;
//   // let y = 2;
  
  // x = y; 
  // y = x;

  // switch(1){
  //   case 0: {

  //   } break;
  //   case 1:
  //     let a = 2;
  //     break;
  //   // case 2: 
  //   // break;

  // }

  // let obj = {a: 'f', second: 's', third: 't'};
  // let {a : first, second, third} = obj; 

  // console.log(first);
  // console.log(second);
  // console.log(third);

  // function call(a, b, callback){
  // }

  // document.addEventListener('mousemove', (event)=>{
  //   console.log(event);
  // })




  // console.log(x, y)

  // let b = {};
  // b.a = 1;

  // let c;
  // c = b;

  // b = [];

  // console.log(c);
  // console.log(b);
  // console.log(a);
  // console.log(b);

  // // var a = 'Hey';
  // console.log(a);
  // var b = function(){ 
  //   console.log("B");
  // }; 
  // a();
  // b();
  // return;
  // function a() {
  //   console.log("Second function")
  // }
// }

// Tr();





// class MyPromise {
//   constructor(callback){
//     this.callback = callback;
//   }

//   then(callback) {
//     callback()

    
//     return this;
//   }

//   catch(reject){

//   }

//   fanilly(){

//   }
// }

// let prm = new MyPromise(function(resolve, reject){
//   resolve("Resolve!");
// });

// async function linksLoader(link) {
//   //Promise and async/await
//     try {
//       const response = await new Promise(resolve =>{
//         setTimeout(()=> {
//           resolve(link + "resolve")
//         }, 1000);
//       });
//       return response;
//     }
//     catch (err) {
//         console.log("Error links!");
//     }
//     finally {
// }}