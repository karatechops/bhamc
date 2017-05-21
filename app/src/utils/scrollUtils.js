// @flow

export type HeaderState = 'NotPinned' | 'Pinned' | 'Unpinned';
export function calculateHeaderState(
  scrollElement: Element,
  element: HTMLElement,
  currentState: HeaderState,
  lastPosition: number,
): HeaderState {
  if (typeof scrollElement !== 'undefined') {
    const currentPosition = scrollElement.scrollTop;
    const headerHeight = element.offsetHeight;
    if (currentPosition < headerHeight &&
      (currentPosition === 0 || currentPosition > lastPosition)
    ) {
      return 'NotPinned';
    } else if (currentPosition < lastPosition) {
      return 'Pinned';
    } else if (currentPosition > lastPosition) {
      return 'Unpinned';
    }
  }
  return 'NotPinned';
}

export function hashLinkScroll() {
  if (window) {
    const { hash } = window.location;
    if (hash !== '') {
      const id = hash.replace('#', '');

      // It said that this interval was here for dev only, but
      // it looks like the scroll was failing on the prod site also.
      let intervalGap = 0;
      const scrollInterval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          clearInterval(scrollInterval);
          element.scrollIntoView({ behavior: 'smooth' });
        }
        intervalGap = 1000;
      }, intervalGap);
    }
  }
}

export function scrollToTop() {
  if (window) {
    const { hash } = window.location;
    if (hash === '' || !hash) {
      window.scrollTo(0, 0);
      const element = document.getElementById('content-scroll-element');
      if (element && element.parentElement) {
        element.parentElement.scrollTop = 0;
      }
    }
  }
}

export default function scrollHandler() {
  hashLinkScroll();
  scrollToTop();
}
