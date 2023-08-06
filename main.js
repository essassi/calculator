let clear = document.getElementById("clear");
let nega = document.getElementById("nega");
let modulo = document.getElementById("modulo");
let div = document.getElementById("div");
let nine = document.getElementById("nine");
let eight = document.getElementById("eight");
let seven = document.getElementById("seven");
let multi = document.getElementById("multi");
let six = document.getElementById("six");
let five = document.getElementById("five");
let four = document.getElementById("four");
let soustr = document.getElementById("soustr");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");
let add = document.getElementById("add");
let zero = document.getElementById("zero");
let verg = document.getElementById("verg");
let egale = document.getElementById("egale");
let result = document.getElementById("result");
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn === clear) {
      result.innerHTML = "";
    } else if (btn === nega) {
      result.innerHTML = -result.innerHTML;
    } else if (btn === egale) {
      result.innerHTML = eval(result.innerHTML);
    } else {
      result.innerHTML += btn.innerHTML;
    }
  });
});

//   let a = result.innerHTML.split("X").reduce((cur, acc) => {
//     return (result.innerHTML = +cur * +acc);
//   });
//   let b = result.innerHTML.split("/").reduce((cur, acc) => {
//     return (result.innerHTML = +cur / +acc);
//   });
//   let c = result.innerHTML.split("+").reduce((cur, acc) => {
//     return (result.innerHTML = +cur + +acc);
//   });
//   let d = result.innerHTML.split("-").reduce((cur, acc) => {
//     return (result.innerHTML = +cur - +acc);
//   });
//   let e = result.innerHTML.split("%").reduce((cur, acc) => {
//     return (result.innerHTML = +cur % +acc);
//   });
