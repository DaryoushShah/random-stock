/* createNavbar() */
const createNavbar = () => {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Random Stock';

  navbar.appendChild(title);

  return navbar;
}

/* Append container to body  */
const container = document.createElement('div');
container.classList.add('container');

document.body.appendChild(container);

/* Append Navbar to container */
container.appendChild(createNavbar());
