/*
開発メモ:
||scriptを実行不可にしてください by ko-math
||↑多分出来た by tiiima
履歴:
8:20 17:49 ko-math
8/20 17:55 tiiima
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
  preview.innerHTML = sanitizeHTML(html);
  // MathJax
  MathJax.startup.promise.then(function () {
    MathJax.typesetClear([preview]);
    return MathJax.typesetPromise([preview]);
  });
}
function sanitizeHTML(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    doc.querySelectorAll(
        "script, foreignObject, iframe, object, embed, applet, meta, link"
    ).forEach(el => el.remove());
    doc.querySelectorAll("*").forEach(el => {
        for (const attr of [...el.attributes]) {
            const name = attr.name.toLowerCase();
            const value = attr.value.trim();
            if (name.startsWith("on")) {
                el.removeAttribute(attr.name);
                continue;
            }
            if (
                ["href", "src", "action", "formaction", "xlink:href"].includes(name) &&
                /^\s*javascript\s*:/i.test(value)
            ) {
                el.removeAttribute(attr.name);
            }
        }
    });
    return doc.body.innerHTML;
}
textarea.addEventListener('input', renderMarkdown);
renderMarkdown();
