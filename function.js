function addCopyButton(parent,copyText){
  const b = document.createElement('button');
  b.textContent = 'copy';
  parent.append(b);
  b.addEventListener('click',function (){
    navigator.clipboard.writeText(text);
    window.alert('copied: ' + text);
  });
}
