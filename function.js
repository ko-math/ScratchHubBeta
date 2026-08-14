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
function addProgressBar(parent,max,id){
  const pr = document.createElement('progress');
  pr.max = max;
  pr.value = 0;
  pr.id = id;
  parent.append(pr);
}

function updateProgress(id,value){
  const pr = document.querySelector('#' + id);
  pr.value = value;
}
