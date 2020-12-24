// import { createClient } from 'pexels';
// import refs from './refs';
// import template from '../templates/card.hbs';

// let key = '563492ad6f917000010000014af874ddadd1478ebe4110fa8beb085d';

// const client = createClient(key);

// // console.log(client);

// // client.photos.random().then(obj => {
// //   console.log(obj);
// //   img.src = obj.src.original;
// // });

// let query = 'lotus';
// // client.photos.search({ query, per_page: 10 }).then(obj => {
// //   console.log(obj.photos);
// //   const images = obj.photos.map(el => {
// //     const img = document.createElement('img');
// //     img.width = '300px';
// //     img.src = el.src.original;
// //     return img;
// //   });
// //   //   console.log(refs.gallery.append(...images));
// //   console.log(template(images));
// // });

// client.photos.search({ query, per_page: 10 }).then(result => {
//   console.log(result.photos);
//   const items = template(result.photos);
//   refs.gallery.insertAdjacentHTML('afterbegin', items);
// });
