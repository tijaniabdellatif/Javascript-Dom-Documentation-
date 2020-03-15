const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Something New to do';
    ul.append(li); //the the bottom
    //ul.prepend(li); //to the top
});
const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', (e) => {
        //e.target.style.textDecoration = 'line-through';
        e.target.remove();
    });
});
