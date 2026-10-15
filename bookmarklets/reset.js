javascript:(function(){
  var blackout = document.getElementById('bookmarklet-blackout');
  if (blackout) blackout.remove();

  var blurred = document.getElementById('bookmarklet-blurred');
  if (blurred) blurred.remove();

  var protanopiaFilter = document.getElementById('protanopia-filter');
  if (protanopiaFilter) protanopiaFilter.remove();

  var deuteranopiaFilter = document.getElementById('deuteranopia-filter');
  if (deuteranopiaFilter) deuteranopiaFilter.remove();

  var tritanopiaFilter = document.getElementById('tritanopia-filter');
  if (tritanopiaFilter) tritanopiaFilter.remove();

  document.body.style.filter = '';
})();