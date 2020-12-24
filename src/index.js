import './styles.css';
import fetchObject from './js/fetch';
import x from './js/refs';
// import libs from './js/libs';

const { form, searchBtn, gallery } = x;
// console.log(form, searchBtn, gallery);

form.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();
  // console.log(e.target.elements.query.inputValue);
  const inputValue = e.target.elements.query.value;
  fetchObject.getFetch(inputValue, gallery);
}

// console.log(libs.client);
