//1. HTTP 테스트
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end(`hello!`);
// });
// const port = 4000;
// server.listen(port, () => {
//   console.log('listring at port : %d', port);
// });

//2. HighOrderFunction (Closure)
// //and -> highOrderFunction 다른 함수를 내놓는 함수.
// function and(/**@type {string}*/ x) {
//   return function lowFunction(/** @type {string} */ y) {
//     return x + ' and ' + y;
//   };
// }

// const saltAnd = and('salt');
// console.log(saltAnd('cheese'));
// console.log(saltAnd('sugar'));

// const nullAnd = and('water');
// console.log(nullAnd('oil'));

//3. Closure 심화
// function getCounter() {
//   var result = {
//     counter: counter,
//     total: 0,
//   };

//   function counter() {
//     result.total += 1;
//   }
//   return result;
// }

// var counterA = getCounter();
// counterA.counter();
// counterA.counter();

// var counterB = getCounter();
// counterB.counter();

// console.log(counterA.total);
// console.log(counterB.total);

// 4. Closure 한번 더
// function getFactoryHandle() {
//   let handle = { numCounters: 0, initCounter: getCounter };
//   function getCounter() {
//     handle.numCounters++;

//     let counter = { total: 0, increase: increase };
//     function increase() {
//       counter.total++;
//     }
//     return counter;
//   }
//   return handle;
// }

// const factoryHandle = getFactoryHandle();
// const counterA = factoryHandle.initCounter();
// counterA.increase();
// counterA.increase();

// const counterB = factoryHandle.initCounter();
// counterB.increase();

// console.log(counterA.total, counterB.total, factoryHandle.numCounters);
