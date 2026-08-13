const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',async function(){
  const userName = document.querySelector('#userName').value;
  await getUser(userName);
  //削除
  document.querySelector('#inputType').remove();
  document.querySelector('#userName').remove();
  send1.remove();
  //追加
  const div = document.querySelector('#input');
  const p = document.createElement('p');
  p.textContent = '確認コード';
  
  const checkCode = document.createElement('p');
  checkCode.textContent = generateCode(init(),10,15);
  checkCode.classList.add('codeText');
  
  div.append(p);
  div.append(checkCode);
  addCopyButton(div,checkCode.textContent);
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

async function getUser(u){
  //window.alert('debug');
  const res = await fetch('https://trampoline.turbowarp.org/api/users/' + u);
  const j = await res.json()
  const er = Object.hasOwn(j,'error');
  window.alert(j);
} 
