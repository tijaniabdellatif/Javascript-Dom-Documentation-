//delegation 

const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Something New to do';
    ul.append(li);
});

ul.addEventListener('click', e => {

    //console.log('Event in UL');
if(e.target.tagName ==='LI'){

    e.target.remove();
}
})