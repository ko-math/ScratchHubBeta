const checkCode = document.createElement('p');
checkCode.textContent = generateCode(init(),10,15);
checkCode.classList.add('codeText');
div.append(checkCode);
addCopyButton(div,checkCode.textContent);

//関数
function init(){
  const list = [];
  for(let i = 65;i <= 90;i++){
    list.push(String.fromCodePoint(i));
  }
  for(let i = 97;i <= 122;i++){
    list.push(String.fromCodePoint(i));
  }
  for(let i = 0;i < 10;i++){
    list.push(i.toString());
  }
  list.push('-');
  list.push('_');
  return list;
}

function passwordRandom(a, b) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return a + (array[0] % (b - a + 1));
}

function generateCode(list,a,b){
  let check = '';
  let checkLength = 13;
  for(let i = 0;i < checkLength;i++){
    check += list[passwordRandom(0,list.length - 1)] 
  }
  return check;
}
