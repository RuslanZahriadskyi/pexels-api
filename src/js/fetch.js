import template from '../templates/card.hbs';

export default {
  query: 'moon',
  page: 1,
  perPage: 4,

  baseUrl: `https://api.pexels.com/v1`,

  get queryValue() {
    return this.query;
  },

  set queryValue(value) {
    return (this.query = value);
  },

  getFetch(value, place) {
    // console.log(this.query);
    let key = '563492ad6f917000010000014af874ddadd1478ebe4110fa8beb085d';
    this.query = value;
    let params = `/search?query=${this.query}`;
    let url = this.baseUrl + params;
    let options = {
      method: 'GET',
      headers: {
        Authorization: key,
      },
    };
    return fetch(url, options)
      .then(r => {
        console.log(r);
        return r.json();
      })
      .then(({ photos }) => {
        const items = template(photos);
        place.insertAdjacentHTML('afterbegin', items);
      });
  },
};
