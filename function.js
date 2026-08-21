//copyButton
function addCopyButton(parent,copyText,id){
  const b = document.createElement('button');
  b.textContent = 'copy';
  b.id = id;
  b.classList.add('cbutton');
  parent.append(b);
  b.addEventListener('click',function (){
    navigator.clipboard.writeText(copyText);
    window.alert('copied: ' + copyText);
  });
  return b;
}
//progress
class ProgressBar {
  constructor(parent,max,id){
    this.pr = document.createElement('progress');
    this.pr.max = max;
    this.pr.value = 0;
    this.pr.id = id;
    parent.append(this.pr);
  }
  update(value){
    this.pr.value = value;
  }
}
