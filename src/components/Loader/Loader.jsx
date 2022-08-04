import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function startLoader() {
  Loading.pulse({
    svgColor: '#ff6b08',
    backgroundColor: 'transparent',
    svgSize: '100px',
  });
}

export function stopLoader() {
  Loading.remove(200);
}

export function Loader() {
  startLoader();
  stopLoader();
}
