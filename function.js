function addCopyButton(parent,copyText){
  const b = document.createElement('button');
  b.textContent = 'copy';
  b.classList.add('button');
  parent.append(b);
  b.addEventListener('click',function (){
    navigator.clipboard.writeText(copyText);
    window.alert('copied: ' + copyText);
  });
}
