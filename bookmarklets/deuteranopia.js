// Red/green blindness
javascript:(function(){
  if (!document.getElementById('deuteranopia')) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.style.cssText = 'position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none; border: none; padding: 0; margin: 0;';
    svg.innerHTML = '<defs><filter id="deuteranopia"><feColorMatrix type="matrix" values="0.367 0.861 -0.228 0 0 0.28 0.673 0.047 0 0 -0.012 0.043 0.969 0 0 0 0 0 1 0"/></filter></defs>';
    document.documentElement.appendChild(svg);
  }
  document.documentElement.style.filter = 'url(#deuteranopia)';
})();
