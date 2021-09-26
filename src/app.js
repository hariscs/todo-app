const addForm = document.querySelector('.addForm');
const add = document.querySelector('.add');
const list = document.querySelector('.main ul');

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

// delete todo
const deleteTodo = (e) => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
};

list.addEventListener('click', deleteTodo);
