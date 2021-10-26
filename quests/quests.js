console.log(window.location.search);

const params = new URLSearchParams(window.location.search);

const id = params.get('id');
id.classList.add('h1');

id.append(id);

return id;