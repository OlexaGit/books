console.log(window.innerWidth);
//  or
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
console.log(vw);
