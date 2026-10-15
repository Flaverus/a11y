// Red blindness
javascript:(function(){
  if (!document.getElementById('deuteranopia')) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.style.cssText = 'position: absolute !important; width: 0 !important; height: 0 !important; overflow: hidden !important; pointer-events: none !important; border: none !important; padding: 0 !important; margin: 0 !important;';
    svg.innerHTML = '<defs><filter id="deuteranopia"><feColorMatrix type="matrix" values="0.152 1.053 -0.205 0 0 0.115 0.786 0.099 0 0 -0.004 -0.048 1.052 0 0 0 0 0 1 0"/></filter></defs>';
    document.body.appendChild(svg);
  }
  document.body.style.filter='url(#deuteranopia)';
})();
