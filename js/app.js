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

/* createFooter() */
const createFooter = () => {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  const disclaimer = document.createElement('p');
  disclaimer.classList.add('text');
  disclaimer.textContent = 'This program exists for exploratory purposes '
    + 'only and DOES NOT constitute financial advice. You as the user '
    + 'take full liability for any trades or actions '
    + 'taken as a result of using this program.';

  footer.appendChild(disclaimer);
  return footer;
}

/* Append container to body  */
const container = document.createElement('div');
container.classList.add('container');

document.body.appendChild(container);

/* Append navbar to container */
container.appendChild(createNavbar());

/* Append footer to container */
container.appendChild(createFooter());
