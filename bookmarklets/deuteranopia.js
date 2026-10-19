// Red/green blindness
javascript:(function(){
  if (!document.getElementById('deuteranopia')) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.style.cssText = 'position: absolute !important; width: 0 !important; height: 0 !important; overflow: hidden !important; pointer-events: none !important; border: none !important; padding: 0 !important; margin: 0 !important;';
    svg.innerHTML = '<defs><filter id="deuteranopia"><feColorMatrix type="matrix" values="0.367 0.861 -0.228 0 0 0.28 0.673 0.047 0 0 -0.012 0.043 0.969 0 0 0 0 0 1 0"/></filter></defs>';
    document.documentElement.appendChild(svg);
  }
  document.documentElement.style.filter='url(#deuteranopia)';
})();
