const usable = [];
for(let i = 65;i <= 90;i++){
  usable.push(String.fromCodePoint(i));
}
alert(usable);

const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',function(){
  const userName = document.querySelector('#userName').value;
  alert(userName);
});
