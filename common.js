//header
(() => {
  const div = document.querySelector('#header');
  const header = document.createElement('header');
  header.innerHTML = `
    <h2>(募集)</h2>
    <button id="login" class="header" style="left:75%;">ログイン</button>
  `;
  div.append(header);
})();

const button = document.querySelector('#login'); //遅.getElementById
button.addEventListener('click',function(){
  location.assign('https://ko-math.github.io/ScratchTechnologyNote/login/login.html');                    
});
