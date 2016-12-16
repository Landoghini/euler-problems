/* Answer 1 */

var answer1 = function(){
  var multiples = [];
  var sum = 0;
  
  for (var i = 1;i <1000;i++){
    if (i % 3 === 0 || i % 5 ===0){
      multiples.push(i);
      sum += i;
    }
  }
  return sum;
};
document.querySelector('#answer1 input[type=button]').onclick = function(){
	document.querySelector('#answer1 .answer').value = answer1();
};