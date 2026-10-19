// Blue/yellow blindness
javascript:(function(){
  if (!document.getElementById('tritanopia')) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.style.cssText = 'position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none; border: none; padding: 0; margin: 0;';
    svg.innerHTML = '<defs><filter id="tritanopia"><feColorMatrix type="matrix" values="1.256 -0.077 -0.179 0 0 -0.078 0.931 0.148 0 0 0.005 0.691 0.304 0 0 0 0 0 1 0"/></filter></defs>';
    document.documentElement.appendChild(svg);
  }
  document.documentElement.style.filter = 'url(#tritanopia)';
})();
