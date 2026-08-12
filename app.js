const TARGET = new Date('2026-08-13T00:00:00+05:30').getTime();
const MONTHS = [
  'June 2025','July 2025','August 2025','September 2025','October 2025','November 2025','December 2025',
  'January 2026','February 2026','March 2026','April 2026','May 2026','June 2026','July 2026'
];
const $ = (s) => document.querySelector(s);
const screens = [...document.querySelectorAll('.screen')];
const go = (id) => {
  screens.forEach(s => { s.classList.remove('active'); s.classList.add('hidden-screen'); });
  const next = document.getElementById(id); if (!next) return;
  next.classList.remove('hidden-screen'); next.classList.add('active','fade-in');
  window.scrollTo({top:0,behavior:'instant'});
};

function countdown(){
  const diff = TARGET-Date.now();
  if(diff <= 0){
    $('#countdown').innerHTML='<div class="unit"><b>00</b><span>UNLOCKED</span></div>';
    unlock(); return;
  }
  const d=Math.floor(diff/86400000), h=Math.floor(diff/3600000)%24, m=Math.floor(diff/60000)%60, s=Math.floor(diff/1000)%60;
  $('#countdown').innerHTML=[[d,'DAYS'],[h,'HOURS'],[m,'MIN'],[s,'SEC']].map(([n,l])=>`<div class="unit"><b>${String(n).padStart(2,'0')}</b><span>${l}</span></div>`).join('');
}
let unlocked=localStorage.getItem('birthdayUnlocked')==='1';
function unlock(){if(!unlocked){localStorage.setItem('birthdayUnlocked','1');unlocked=true;} if($('#lockScreen').classList.contains('active')) setTimeout(()=>go('unlockScreen'),700);}
if(unlocked || Date.now()>=TARGET){$('#lockScreen').classList.add('hidden-screen');$('#lockScreen').classList.remove('active');}
countdown();setInterval(countdown,1000);

document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-go]'); if(btn) go(btn.dataset.go);
  const card=e.target.closest('.world-card'); if(card){
    go('panelScreen'); document.querySelectorAll('.panel').forEach(p=>p.classList.add('hidden'));
    document.getElementById(card.dataset.panel).classList.remove('hidden');
  }
});
$('#backBtn').addEventListener('click',()=>go('worldScreen'));

let lit=false, wished=false;
$('#lightBtn').addEventListener('click',()=>{
  if(lit)return; lit=true; $('#cakeWrap').classList.add('lit'); $('#wishBtn').disabled=false;
  $('#lightBtn').textContent='Candles are glowing'; $('#cakeStatus').textContent='Take a breath. Make a wish.';
});
$('#wishBtn').addEventListener('click',()=>{
  if(!lit||wished)return; wished=true; $('#cakeWrap').classList.add('blown'); $('#wishBtn').disabled=true; $('#cutBtn').disabled=false;
  $('#lightBtn').textContent='Wish made ✦'; $('#cakeStatus').textContent='Your wish stays yours. Now cut the cake.';
});
$('#cutBtn').addEventListener('click',()=>{
  if(!wished)return; $('#cakeWrap').classList.add('cut'); $('#cutBtn').disabled=true; $('#cakeStatus').textContent='✦ Happy Birthday, Purvi. ✦'; makeConfetti();
  setTimeout(()=>go('worldScreen'),1800);
});
function makeConfetti(){const box=$('#confetti');box.innerHTML='';for(let i=0;i<44;i++){const p=document.createElement('span');p.style.left=(Math.random()*100)+'%';p.style.setProperty('--x',(Math.random()*140-70)+'px');p.style.animationDelay=(Math.random()*.4)+'s';box.appendChild(p);}setTimeout(()=>box.innerHTML='',2600);}

const monthsEl=$('#months');
monthsEl.innerHTML=MONTHS.map(m=>`<button class="month-card" data-month="${m}"><strong>${m}</strong><small>Empty — add verified memories manually</small></button>`).join('');
monthsEl.addEventListener('click',e=>{
  const card=e.target.closest('.month-card');if(!card)return;
  const month=card.dataset.month;
  const value=prompt(`Add a verified memory for ${month}. Leave blank to keep it empty:`,'');
  if(value===null||!value.trim())return;
  localStorage.setItem('memory_'+month,value.trim()); card.querySelector('small').textContent='Saved locally — edit anytime';
});

function save(key){const value=document.querySelector(`[data-store="${key}"]`)?.value||'';localStorage.setItem(key,value);return value;}
$('#saveVoice').addEventListener('click',()=>{save('voiceTitle');const url=save('voiceUrl');$('#voicePreview').innerHTML=url?`<audio controls src="${escapeAttr(url)}"></audio>`:'<p class="microcopy">No audio added yet.</p>';});
$('#saveVideo').addEventListener('click',()=>{save('videoTitle');const url=save('videoUrl');$('#videoPreview').innerHTML=url?`<video controls playsinline src="${escapeAttr(url)}"></video>`:'<p class="microcopy">No video added yet.</p>';});
$('#saveLetter').addEventListener('click',()=>{save('letterTitle');save('letterBody');$('#letterSaved').textContent='Saved locally on this device. You can edit it anytime.';});
function escapeAttr(v){return v.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');}
['voiceTitle','voiceUrl','videoTitle','videoUrl','letterTitle','letterBody'].forEach(k=>{const el=document.querySelector(`[data-store="${k}"]`);if(el)el.value=localStorage.getItem(k)||'';});
