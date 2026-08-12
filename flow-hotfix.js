/* EMERGENCY FLOW HOTFIX — guarantees the post-cake journey on every viewport. */
(function(){
  const $=s=>document.querySelector(s);
  const show=(id)=>{
    const screens=[...document.querySelectorAll('.screen')];
    screens.forEach(s=>{s.classList.remove('active','fade-in');s.classList.add('hidden-screen');s.style.removeProperty('display')});
    const n=document.getElementById(id); if(!n)return false;
    n.classList.remove('hidden-screen'); n.classList.add('active');
    n.style.setProperty('display',id==='partyScreen'||id==='panelScreen'?'block':'flex','important');
    requestAnimationFrame(()=>n.classList.add('fade-in'));
    window.scrollTo({top:0,left:0,behavior:'auto'});
    document.documentElement.scrollTop=0; document.body.scrollTop=0;
    return true;
  };
  const celebration=()=>{
    if(!show('celebrationScreen'))return;
    const btn=$('#celebrationScreen .giant');
    if(btn){btn.disabled=false;btn.style.setProperty('display','inline-flex','important');btn.style.setProperty('visibility','visible','important');}
  };
  const party=()=>show('partyScreen');

  document.addEventListener('click',function(e){
    const cut=e.target.closest('#cutBtn');
    if(cut && !cut.disabled){
      clearTimeout(window.__birthdayFlowTimer);
      window.__birthdayFlowTimer=setTimeout(celebration,1100);
      return;
    }
    const open=e.target.closest('#celebrationScreen .giant');
    if(open){e.preventDefault();e.stopImmediatePropagation();party();return;}
  },true);

  // If the original ceremony handler already completed before this script attached,
  // keep the next screen available rather than leaving a blank/hidden state.
  window.addEventListener('pageshow',()=>{
    const active=document.querySelector('.screen.active');
    if(!active && $('#cakeScreen'))show('cakeScreen');
  });
})();
