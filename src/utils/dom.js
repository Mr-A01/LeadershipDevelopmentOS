// DOM helper utilities
export const $ = (sel)=> document.querySelector(sel);
export const $all = (sel)=> Array.from(document.querySelectorAll(sel));
export const create = (tag, attrs={}, children=[]) => {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=> el.setAttribute(k,v));
  children.forEach(c=> typeof c === 'string' ? el.appendChild(document.createTextNode(c)) : el.appendChild(c));
  return el;
};
