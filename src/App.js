import ih from  './components/ih';

const heading = document.createElement('h1');
heading.classList.add('article');
heading.textContent = 'Как интересно!';
heading.appendChild(ih);

export default heading;