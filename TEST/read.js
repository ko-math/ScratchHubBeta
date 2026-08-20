const head = document.querySelector('head');
const body = document.querySelector('body');
const headContent = `
  <title>hello</title>
  <meta charset="utf-8">
`; 
const bodyContent = `
  <h1>An article</h1>
  <p>Hello,World!</p>
`;
head.append(headContent);
body.append(bodyContent);
