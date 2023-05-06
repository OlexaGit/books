import { array } from './support-ukraine-array';

const container = document.querySelector('#support-ukraine');
const loadMoreBtn = document.querySelector('button.button-support-ukraine');

// console.log(array);
(function () {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  console.log(vw);
  if (vw < 768) {
    renderListSupportForMobile(array);
  }
  renderListSupportForTableAndDesktop(array);
})();

function renderListSupportForMobile(array) {
  console.log(array);
  clearContainer();
  const markup = array
    .map(({ title, url, img }, index) => {
      index += 1;
      return `        
          <div class="logo-support-ukraine">
            0${index}<a
              href="${url}"
              title="${title}"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                src="${img}"
                alt="${title}"
                height="32"
            /></a>
                  </div>
  `;
    })
    .join('');

  // loadMoreBtn.style.display = 'inline-block';
  container.insertAdjacentHTML('beforeend', markup);
}
function renderListSupportForTableAndDesktop(array) {
  console.log(array);
  clearContainer();
  const markup = array
    .map(({ title, url, img, img2 }, index) => {
      index += 1;
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
    })
    .join('');

  // loadMoreBtn.style.display = 'inline-block';
  container.insertAdjacentHTML('beforeend', markup);
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
