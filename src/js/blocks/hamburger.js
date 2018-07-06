const $html = $('html');
const $burger = $('.hamburger');
const $hook = $('.js-burger');

$hook.on('click', () => {
  $html.toggleClass('no-scroll');
  $burger.toggleClass('is-active');
});

export default $burger;
