//header
(() => {
  const div = document.querySelector('#header');
  const header = document.createElement('header');
  header.innerHTML = `
    <h2>募集</h2>
    <button id="login" class="header">ログイン</button>
  `;
  div.append(header);
})();

const button = document.querySelector('#login'); //遅.getElementById
button.addEventListener('click',function(){
  location.assign('./login/login.html');                    
});
