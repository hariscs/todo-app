const addForm = document.querySelector('.addForm');
const searchForm = document.querySelector('.searchForm');
const add = document.querySelector('.add');
const list = document.querySelector('.main ul');
const search = document.querySelector('.search');

// function for adding new todo
const addTodo = (todo) => {
	let html = `
			<li>
				<span>${todo}</span>
				<i class="fas fa-trash delete"></i>
			</li>
    `;

	list.innerHTML += html;
};

// eventListener for adding new todo
addForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const todo = add.value.trim();
	if (todo.length) {
		addTodo(todo);
		addForm.reset();
	}
});

// searching todoa
const filterTodo = (term) => {
	Array.from(list.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.add('filter'));

	Array.from(list.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.remove('filter'));
};

searchForm.addEventListener('keyup', () => {
	const term = search.value.trim().toLowerCase();
	filterTodo(term);
});

// delete todo
const deleteTodo = (e) => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
};

list.addEventListener('click', deleteTodo);
