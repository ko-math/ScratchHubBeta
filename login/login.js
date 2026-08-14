const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',async function(){
  const userNameInput = document.querySelector('#userName');
  const userName = userNameInput.value;

  const inputType = document.querySelector('#inputType');
  inputType.textContent = '確認中です。お待ちください';
  userNameInput.remove();
  send1.remove();
  
  const er = await getUser(userName,'isVaild');
  if(er){
    inputType.textContent = 'ユーザーが発見されませんでした。';
    window.alert('有効なユーザー名を入力してください。');
    location.reload();
    return 0;
  }
  inputType.remove();
  const h1 = 
  
  inputType.textContent = '確認コード';
  //checkCode
  const div = document.querySelector('#input');
  const checkCode = document.createElement('p');
  const code = generateCode(init());
  checkCode.textContent = code;
  checkCode.classList.add('codeText');
  const br = document.createElement('br');
  //認証
  const b = document.createElement('button');
  b.id = 'verify';
  b.textContent = '認証';
  
  div.append(checkCode);
  addCopyButton(div,checkCode.textContent);
  div.append(br);
  div.append(b);
  const bio = await getUser(userName,'get');
  if(bio.includes(code)){
    
  } else {
    inputType.textContent = '確認できませんでした。';
    location.reload();
  }
},{once: true});

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

async function getUser(u,type){
  //window.alert('debug');
  const res = await fetch('https://trampoline.turbowarp.org/api/users/' + u);
  let j;
  switch(type){
    case 'get':
      if(!res.ok){
        window.alert('エラーが発生しました。ホームへ戻ります。');
        location.assign('../#');
        return 0;
      }
      j = await res.json();
      const bio = j.profile.bio;
      return bio;
      break;
    case 'isVaild':
      j = await res.json()
      return Object.hasOwn(j,'error');
      break;
  }
} 
