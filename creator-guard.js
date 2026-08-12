/* Hidden creator mode guard.
   Normal birthday visitors must never see Creator Studio.
   Creator-only access is explicit: append #creator to the URL.
*/
(function(){
  const studio = document.getElementById('localStudio');
  if (!studio) return;

  const creatorMode = window.location.hash === '#creator';

  // Kill any stale/accidental studio-open state before the first paint.
  studio.classList.remove('open');
  studio.setAttribute('aria-hidden', 'true');

  if (!creatorMode) {
    document.body.classList.remove('creator-mode');
    studio.style.setProperty('display', 'none', 'important');
    return;
  }

  document.body.classList.add('creator-mode');
  studio.style.removeProperty('display');
  studio.classList.add('open');
  studio.setAttribute('aria-hidden', 'false');

  // Keep accidental seven-tap opening harmless outside explicit creator mode.
  const observer = new MutationObserver(() => {
    if (!document.body.classList.contains('creator-mode')) {
      studio.classList.remove('open');
      studio.setAttribute('aria-hidden', 'true');
      studio.style.setProperty('display', 'none', 'important');
    }
  });
  observer.observe(studio, {attributes:true, attributeFilter:['class','aria-hidden']});
})();
