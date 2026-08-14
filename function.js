/*
構成
・ページ内固定要素
・機能
*/

//固定要素
(() => {
  const div = document.querySelector('#header');
  const header = document.createElement('header');
  header.innerHTML = `
    <h2>募集</h2>
  `;
  div.append(header);
})();
//機能
function addCopyButton(parent,copyText){
  const b = document.createElement('button');
  b.textContent = 'copy';
  parent.append(b);
  b.addEventListener('click',function (){
    navigator.clipboard.writeText(copyText);
    window.alert('copied: ' + copyText);
  });
}
