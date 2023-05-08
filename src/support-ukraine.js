import { array } from './support-ukraine-array';

const container = document.querySelector('#support-ukraine');
const loadMoreBtn = document.querySelector('button.button-support-ukraine');
let limit = 0;
let inc = 1;

(function () {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  console.log(vw);
  if (vw < 768) {
    limit = 4;
    renderListSupport(array, limit);
  } else {
    limit = 6;
    renderListSupport(array, limit);
  }
})();

function renderListSupport(array, limit) {
  // console.log(array);
  clearContainer();
  const markup = array
    .map(({ title, url, img, img2 }, index) => {
      index += 1;
      if (index < limit + 1) {
        // console.log(index);
        return `        
          <div class="logo-support-ukraine">
            0${index}<a
              href="${url}"
              title="${title}"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                srcset="${img} 1x, ${img2} 2x"
                src="${img}"
                alt="${title}"
                height="32"
            /></a>
            </div>
  `;
      }
    })
    .join('');

  // loadMoreBtn.style.display = 'inline-block';
  container.insertAdjacentHTML('beforeend', markup);
}

loadMoreBtn.addEventListener('click', scrolList);

function scrolList() {
  clearContainer();
  // inc += 1;
  // if (inc > 4) {
  //   inc = 1;
  //   renderListScrol(array, limit, inc);
  // }
  renderListScrol(array, limit);
  // console.log(limit);
  console.log('inc', inc);
}

function renderListScrol(array, limit) {
  // inc += 1;
  // if (inc > 9) {
  //   inc = 1;
  // }
  console.log('inc', inc);
  // clearContainer();
  const markup = array
    .map(({ title, url, img, img2 }, index) => {
      index += 1;
      console.log('index', index);
      console.log('limit', limit);
      if (index >= inc && index < limit + inc) {
        console.log('index', index);
        console.log('limit', limit);
        return `        
          <div class="logo-support-ukraine">
            0${index}<a
              href="${url}"
              title="${title}"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                srcset="${img} 1x, ${img2} 2x"
                src="${img}"
                alt="${title}"
                height="32"
            /></a>
            </div>
  `;
      }
    })
    .join('');

  // loadMoreBtn.style.display = 'inline-block';
  container.innerHTML = markup;
}

function clearContainer() {
  container.innerHTML = '';
  // loadMoreBtn.style.display = 'none';
}

// console.log(window.innerWidth);
//  or
// const vw = Math.max(
//   document.documentElement.clientWidth || 0,
//   window.innerWidth || 0
// );
// console.log(vw);
