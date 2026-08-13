const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',async function(){
  const userNameInput = document.querySelector('#userName');
  const userName = userNameInput.value;
  const er = await isVaild(userName);
  if(er){
    window.alert('有効なユーザー名を入力してください。')
    return 0;
  }
  send1.remove();
  userNameInput.remove();
  document.querySelector('#inputType').textContent = '確認コード';
  
  const div = document.querySelector('#input');
  const checkCode = document.createElement('p');
  const code = generateCode(init());
  checkCode.textContent = code;
  checkCode.classList.add('codeText');
  div.append(checkCode);
  addCopyButton(div,checkCode.textContent);
  await getUser('ko-math');  
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

function passwordRandom(a, b) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return a + (array[0] % (b - a + 1));
}

function generateCode(list){
  let check = '';
  let checkLength = 13;
  for(let i = 0;i < checkLength;i++){
    check += list[passwordRandom(0,list.length - 1)] 
  }
  return check;
}

async function getUser(u){
  //window.alert('debug');
  const res = await fetch('https://trampoline.turbowarp.org/api/users/' + u);
  if(!res.ok){
    window.alert('エラーが発生しました。ホームへ戻ります。');
    location.assign('../#');
    return 0;
  }
  const j = await res.json()
  const status = j.profile.bio;
  window.alert(status);
} 

async function isVaild(u){
  //window.alert('debug');
  const res = await fetch('https://trampoline.turbowarp.org/api/users/' + u);
  const j = await res.json()
  return Object.hasOwn(j,'error');
} 
