//header
(() => {
  const div = document.querySelector('#header');
  const header = document.createElement('header');
  header.innerHTML = `
    <h2>募集</h2>
    <button id="login">ログイン</button>
  `;
  div.append(header);
})();
