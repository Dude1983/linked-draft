let loadButton = document.getElementById('btnLoad');

let postMessage = document.getElementsByClassName(
  'mentions-texteditor__content'
)[0].innerText;

console.log(postMessage);

localStorage.setItem('message', 'Hello WOrld');
alert('Message saved: ' + localStorage.getItem('message'));
