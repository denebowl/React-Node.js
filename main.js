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

const { resourceLimits } = require('worker_threads');

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

function getCounterManager() {
  var resultFinal = { numCounters: 0, newCounter: newCounter };

  function newCounter() {
    resultFinal.numCounters++;

    console.log('뉴카운터' + resultFinal.numCounters);

    var result = { increse: increse, total: 0 };
    function increse() {
      result.total++;
    }
    return result;
  }

  return resultFinal;
}

var manager = getCounterManager();
var counterA = manager.newCounter();
counterA.increse();
counterA.increse();

var counterB = manager.newCounter();
counterB.increse();

console.log(counterA.total, counterB.total);
