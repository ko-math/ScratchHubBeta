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
alert(usable);

const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',function(){
  const userName = document.querySelector('#userName').value;
  alert(userName);
});
