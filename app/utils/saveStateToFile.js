// const storage = localStorage.getItem('accounts');
// if (storage === null) {
//   alert('You dont have accounts yet!');
//   return false;
// }
// const blob = new Blob([storage], {type: "text/json"});
// const url = URL.createObjectURL(blob);
// const resConteiner = document.getElementById('resConteiner');
// const link = document.createElement('a');
// const linkText = 'download file';
// link.href = url;
// link.download = 'accounts.json';
// link.innerHTML = 'download';
// resConteiner.innerHTML = '';
// resConteiner.appendChild(link);

export default () => {
  const storage = localStorage.getItem('state');
  const blob = new Blob([storage], { type: 'text/json' });
  const url = URL.createObjectURL(blob);
  const resConteiner = document.getElementById('resConteiner');
  const link = document.createElement('a');
  link.href = url;
  link.download = 'accounts.json';
  link.innerHTML = 'download file';
  resConteiner.innerHTML = '';
  resConteiner.appendChild(link);

  link.onclick = () => {
    resConteiner.innerHTML = '';
  };
};
