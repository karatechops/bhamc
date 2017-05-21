export Functors from './functors';

/* eslint-disable */
export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


/* eslint-disable */
// helper to insert mark tags
function insertMarkTag(sourceString, subString) {
  return sourceString.replace(new RegExp("(" + subString + ")", "i"), "<mark>$1</mark>");
}

function insertBoldTag(sourceString, subString) {
  return sourceString.replace(new RegExp("(" + subString + ")", "i"), "<b>$1</b>");
}

// helper to get right content snippet containing the search term
function setPreviewSnippet(searchTerm, text){
  /**
    TODO: make sure the text is not sliced in the middle of a <mark> tag
  **/
  let start, end;
  const offset = 200;
  const pos =  text.toLowerCase().indexOf(searchTerm.toLowerCase());
  if (pos > offset) {
    start = pos - offset;
    end = pos + offset;
  }else {
    start = 0;
    end = offset + offset - pos;
  }
  return text.slice(start, end);
}

export const highlightContent = (searchTerm, text, truncate = true) => {
  if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
    const formattedText = insertBoldTag(text, searchTerm);
    return setPreviewSnippet(searchTerm, formattedText);
  } else {
    if (truncate) {
      return shortenText(text, 200);
    }
    return text;
  }
};

export function uuid() {
  var i, random;
  var uuid = '';
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }

    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
  }

  return uuid;
}

export function isLetter(e) {
  return e.keyCode >= 65 && e.keyCode <= 90;
}

export function shortenText(text, maxLength) {
  var ret = text;
  if (ret.length > maxLength) {
    ret = ret.substr(0,maxLength-3) + "...";
  }
  return ret;
}
/* eslint-disable */
// from: https://davidwalsh.name/javascript-debounce-function
export function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
/* eslint-enable */

export function unslugify(text = '') {
  if (text.includes('-')) {
    return text.split('-')
      .map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
      .join(' ');
  }
  return [text]
    .map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)[0];
}

export const objArrayFind = (valueToFind, obj) =>
  obj.value === valueToFind;

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validEmail = (email) =>
  emailRegex.test(email);

export const getEmailDomain = (email) => {
  const domainAndExt = email.split("@")[1];
  return domainAndExt.split('.')[0];
  // email.replace(/.*@/, '');
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}