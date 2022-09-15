// MOCK DATA


const form = document.querySelector('.form')
const input = document.querySelector('input')
const list = document.querySelector('.todos')

todos = []
const storageTodos = JSON.parse(localStorage.getItem('todos')) || [];

const addTodo = (text) => {
  const li = createDOMListItem(text);
  todos.push(text)
  list.appendChild(li);
  localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (li) => {
  const itemIndex = Array.from(list.childNodes).indexOf(li)
  list.removeChild(li)
  todos.splice(itemIndex - 1, 1)
  localStorage.setItem('todos', JSON.stringify(todos))
}

const createDOMListItem = (text) => {
  const li = document.createElement('li');
  li.innerHTML = `
    📌 ${text}
  `;
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('remove-btn')
  deleteBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`
  deleteBtn.addEventListener('click', () => removeTodo(li))
  li.appendChild(deleteBtn)

  return li;
}


form.addEventListener('submit', (event) => {
  if (input.value) {
    event.preventDefault()
    addTodo(input.value)
    input.value = ''
  }
});

storageTodos.forEach(todo => {
  addTodo(todo)
})