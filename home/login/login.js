const usable = [];
for(let i = 65;i <= 90;i++){
  usable.push(String.fromCodePoint(i));
}
for(let i = 97;i <= 122;i++){
  usable.push(String.fromCodePoint(i));
}
for(let i = 0;i < 10;i++){
  usable.push(i.toString());
}
usable.push('-');
usable.push('_');
let check = '';
let checkLength = random(5,10);
for(let i = 0;i < checkLength;i++){
  check += usable[random(0,usable.length - 1)] 
}
alert(check);


const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',function(){
  const userName = document.querySelector('#userName').value;
  alert(userName);
});

function random(a,b){
  return Math.floor((b - a + 1) * Math.random()) + a;
}
