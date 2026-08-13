const send1 = document.querySelector('#nameSend');
send1.addEventListener('click',async function(){
  const userName = document.querySelector('#userName').value;
  const er = await getUser(userName);
  if(er){
    window.alert('有効なユーザー名を入力してください。')
    return 0;
  }
  location.assign('./check.html');
});

async function getUser(u){
  //window.alert('debug');
  const res = await fetch('https://trampoline.turbowarp.org/api/users/' + u);
  const j = await res.json()
  return Object.hasOwn(j,'error');
} 
