console.log(window.location.search);

const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const quest = document.getElementById('choices');
quest.classList.add(id);
