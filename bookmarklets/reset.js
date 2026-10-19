javascript:(function(){
  const blackout = document.getElementById('bookmarklet-blackout');
  if (blackout) blackout.remove();

  const blurred = document.getElementById('bookmarklet-blurred');
  if (blurred) blurred.remove();

  const protanopiaFilter = document.getElementById('protanopia-filter');
  if (protanopiaFilter) protanopiaFilter.remove();

  const deuteranopiaFilter = document.getElementById('deuteranopia-filter');
  if (deuteranopiaFilter) deuteranopiaFilter.remove();

  const tritanopiaFilter = document.getElementById('tritanopia-filter');
  if (tritanopiaFilter) tritanopiaFilter.remove();

  document.documentElement.style.filter = '';
})();