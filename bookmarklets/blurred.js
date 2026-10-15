javascript:(function(){
  if (!document.getElementById('bookmarklet-blurred')) {
    var div       = document.createElement('div');
    div.id        = 'bookmarklet-blurred';
    div.className = 'blurred';
    Object.assign(div.style, {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '2147483647',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
      pointerEvents: 'none'
    });
    document.body.appendChild(div);
  }
})();
