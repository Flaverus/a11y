javascript:(function(){
  if (!document.getElementById('bookmarklet-blackout')) {
    var div       = document.createElement('div');
    div.id        = 'bookmarklet-blackout';
    div.className = 'blackout';
    Object.assign(div.style, {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '2147483647',
      backgroundColor: 'black',
      pointerEvents: 'none'
    });
    document.body.appendChild(div);
  }
})();
