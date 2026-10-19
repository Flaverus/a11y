// Red blindness
javascript:(function(){
  if (!document.getElementById('protanopia')) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.style.cssText = 'position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none; border: none; padding: 0; margin: 0;';
    svg.innerHTML = '<defs><filter id="protanopia"><feColorMatrix type="matrix" values="0.152 1.053 -0.205 0 0 0.115 0.786 0.099 0 0 -0.004 -0.048 1.052 0 0 0 0 0 1 0"/></filter></defs>';
    document.documentElement.appendChild(svg);
  }
  document.documentElement.style.filter = 'url(#protanopia)';
})();
