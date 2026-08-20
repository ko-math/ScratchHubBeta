/*
開発メモ:
scriptを実行不可にしてください

履歴:
8:20 17:49 ko-math
*/


const textarea = document.querySelector('#textarea');
const preview = document.querySelector('#preview');
const markdown = window.markdownit({
html: true,
breaks: false
});
function renderMarkdown() {
  let text = textarea.value;
  //text = text.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '');
  const mathBlocks = [];
  text = text.replace(/\\\[[\s\S]*?\\\]/g, function (match) {
    const id = mathBlocks.length;
    mathBlocks.push(match);
    return `<!--MATH_BLOCK_${id}-->`;
  });
  let html = markdown.render(text);
  html = html.replace(
    /<!--MATH_BLOCK_(\d+)-->/g,
    function (match, id) {
      return mathBlocks[id];
    }
  );
  preview.innerHTML = html;
  // MathJax
  MathJax.startup.promise.then(function () {
    MathJax.typesetClear([preview]);
    return MathJax.typesetPromise([preview]);
  });
}
textarea.addEventListener('input', renderMarkdown);
renderMarkdown();
