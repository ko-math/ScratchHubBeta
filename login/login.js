const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',async function(){
  const div = document.querySelector('#input');
  
  const userNameInput = document.querySelector('#userName');
  const userName = userNameInput.value;
  const inputType = document.querySelector('#inputType');
  
  inputType.textContent = '認証';
  userNameInput.remove();
  send1.remove();
  
  const p = document.createElement('p');
  p.textContent = '確認中です。お待ちください';
  div.append(p);
  
  const er = await getUser(userName,'isVaild');
  if(er){
    p.textContent = 'ユーザーが発見されませんでした。';
    window.alert('有効なユーザー名を入力してください。');
    location.reload();
    return 0;
  }
  inputType.textContent = '確認コード'; 
  p.textContent = 'タブが非アクティブになる前に認証してください。';
  //checkCode
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
  b.addEventListener('click' , async function () {
    const comments = await getUser('ko-math','project','1368761391');
    const verify = comments.some((c) => c.content === code && c.author.username === userName);
    if(verify){
      p.textContent = '認証が完了しました。';
    } else {
      p.textContent = '確認できませんでした。';
      location.reload();
    }
  });
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

async function getUser(u,type,project){
  //window.alert('debug');
  let res;
  let j;
  switch(type){
    case 'project':
      res = await fetch(`https://scapi.komath.workers.dev/scratch/projectComments?username=${u}&project=${project}`);
      if(!res.ok){
        window.alert('エラーが発生しました。ホームへ戻ります。');
        location.assign('../#');
        return 0;
      }
      j = await res.json();
      return j;
      break;
    case 'isVaild':
      res = await fetch('https://trampoline.turbowarp.org/api/users/' + u);
      j = await res.json()
      return Object.hasOwn(j,'error');
      break;
  }
} 
