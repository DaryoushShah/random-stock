import companies from '../json/companies.json' assert {type: 'json'};

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

/* getRandomStock() */
const getRandomStock = (list) => {
  const len = Object.keys(list).length;

  const randomNumber = Math.floor(Math.random() * len);

  return list[randomNumber];
}

const renderHomePage = () => {
  document.querySelector('.panel').remove();
  document.querySelector('#back-button').remove();

  document.querySelector('.viewport').append(createFindNewStockButton());
}

/* renderRandomStockPanel() */
const renderRandomStockPanel = () => {
  /* Remove find new stock button */
  document.querySelector('#find-new-stock-button').remove();

  const panel = document.createElement('div');
  panel.classList.add('panel');

  /* Get random stock */
  const company = getRandomStock(companies);

  const companyName = Object.values(company)[2];
  const companyTicker = Object.values(company)[1];

  /* Add stock information */
  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = companyName;

  const ticker = document.createElement('p');
  ticker.classList.add('ticker');
  ticker.textContent = `$${companyTicker}`;

  panel.appendChild(title);
  panel.appendChild(ticker);

  /* Add Yahoo Finance button */
  const yahooLink = document.createElement('a');
  yahooLink.setAttribute('href', `https://finance.yahoo.com/quote/${companyTicker}`);
  yahooLink.setAttribute('target', '_blank');
  
  const yahooButton = document.createElement('button');
  yahooButton.classList.add('button');
  yahooButton.textContent = 'Check Me Out On Yahoo!'

  yahooLink.appendChild(yahooButton);

  panel.appendChild(yahooLink);

  /* Create back button */
  const backButton = document.createElement('button');
  backButton.classList.add('button');
  backButton.setAttribute('id', 'back-button');
  backButton.textContent = 'Back';
  backButton.onclick = renderHomePage;

  const viewport = document.querySelector('.viewport');
  
  viewport.append(panel);
  viewport.append(backButton);
}

/* createFindNewStockButton() */
const createFindNewStockButton = () => {
  /* Add button */
  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('id', 'find-new-stock-button');
  button.textContent = 'Find New Stock!';
  button.onclick = renderRandomStockPanel;

  return button;
}

/* Create viewport */
const createViewport = () => {
  const viewport = document.createElement('div');
  viewport.classList.add('viewport');

  viewport.appendChild(createFindNewStockButton());
  
  return viewport;
}

/* Append container to body  */
const container = document.createElement('div');
container.classList.add('container');

document.body.appendChild(container);

/* Append navbar to container */
container.appendChild(createNavbar());

/* Append viewport to container */
container.appendChild(createViewport());

/* Append footer to container */
container.appendChild(createFooter());
