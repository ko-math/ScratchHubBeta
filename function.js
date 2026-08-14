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
//progress
class progress {
  constructor(parent,max,id){
    const pr = document.createElement('progress');
    pr.max = max;
    pr.value = 0;
    pr.id = id;
    this.max = max;
    this.value = 0;
    this.id = id;
    parent.append(pr);
  }
  update(value){
    const pr = document.querySelector('#' + this.id);
    this.value = value;
    pr.value = value;
  }
}
