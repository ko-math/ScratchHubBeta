const checkCode = generateCode(init(),10,15));

const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',function(){
  const userName = document.querySelector('#userName').value;
  
});

//関数
function init(){
  const list = [];
  for(let i = 65;i <= 90;i++){
    list.push(String.fromCodePoint(i));
  }
  for(let i = 97;i <= 122;i++){
    list.push(String.fromCodePoint(i));
  }
  for(let i = 0;i < 10;i++){
    list.push(i.toString());
  }
  list.push('-');
  list.push('_');
  return list;
}
function random(a,b){
  return Math.floor((b - a + 1) * Math.random()) + a;
}
function generateCode(list,a,b){
  let check = '';
  let checkLength = random(a,b);
  for(let i = 0;i < checkLength;i++){
    check += list[random(0,list.length - 1)] 
  }
  return check;
}
