const imageSrc =
  'https://www.timeoutdubai.com/public/styles/full_img/public/images/2020/07/13/IMG-Dubai-UAE.jpg?itok=ZxMZvtVv';

/**
 *
 * @param {string} src
 * @returns {Promise<HTMLImageElement, Error>}
 */
function loadImage(src) {
  const loadImagePromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const img = document.createElement('img'); // HTMLImageElement => HTMLElement => Element => Node => EventTarget => Object

      img.addEventListener('load', function () {
        resolve(img);
      });

      img.addEventListener('error', function () {
        reject(new Error("image didn't load"));
      });

      img.setAttribute('src', src);
    }, 4000);
  });

  return loadImagePromise;
}

console.log(1);

loadImage(
  'https://i.pinimg.om/originals/75/89/a3/7589a3fc5ec4006bc0a0dc00eb6e5d58.jpg'
).then(appendImage, error => {
  const imageWrapper = document.getElementById('root');
  imageWrapper.innerHTML = '';
  imageWrapper.append(document.createTextNode('Oops'));
});

console.log(3);

function appendImage(img) {
  console.log(2);
  const imageWrapper = document.getElementById('root');
  imageWrapper.replaceChild(img, imageWrapper.firstChild);
}

//

fetch('./data.json')
  .then(response => response.json(), console.error)
  .then(console.table);
