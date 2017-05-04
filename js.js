var tabH = document.getElementsByClassName('tab-h');
var tabB = document.getElementsByClassName('tab-b');

for (var i=0; i<tabH.length; i++) {
  tabH[i].onclick = tabbble;
}

function tabbble() {
  for (var i=0; i<tabH.length; i++) {
  tabH[i].classList.add('non-active');
  tabB[i].classList.add('non-active');
  console.log(tabH[i].classList);
  console.log(tabB[i].classList);
}
  this.classList.remove('non-active');
  var x = Number(this.getAttribute('data-tab'));
  console.log(x);
  x=x-1;//т.к. индекс в массиве начинается с 0, то нам нужно уменьшить наш показатель на 1.
  console.log(x);
  tabB[x].classList.remove('non-active');
  // tabH[i].style.background='grey';

}
