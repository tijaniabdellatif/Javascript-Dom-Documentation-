//bubling and delegation.
const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Something New to do';
    ul.append(li);
});

const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('Event in LI');
        e.stopPropagation();//stop bubling 
        e.target.remove();
    });
});


/* 
 event bubling est un phenomene qui cherche si les element 
 ont des evenements attaché and utilise leur callback function. 
*/

ul.addEventListener('click', e => {
    console.log('Event in UL');
})