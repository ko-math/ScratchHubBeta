//copyButton
function addCopyButton(parent,copyText,id){
  const b = document.createElement('button');
  b.textContent = 'copy';
  b.id = id;
  parent.append(b);
  b.addEventListener('click',function (){
    navigator.clipboard.writeText(copyText);
    window.alert('copied: ' + copyText);
  });
}
