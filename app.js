const TARGET = new Date('2026-08-13T00:00:00+05:30').getTime();
const MONTHS=['June 2025','July 2025','August 2025','September 2025','October 2025','November 2025','December 2025','January 2026','February 2026','March 2026','April 2026','May 2026','June 2026','July 2026'];
const $=s=>document.querySelector(s);
const screens=[...document.querySelectorAll('.screen')];
const go=id=>{screens.forEach(s=>{s.classList.remove('active');s.classList.add('hidden-screen')});const n=document.getElementById(id);if(!n)return;n.classList.remove('hidden-screen');n.classList.add('active','fade-in');scrollTo({top:0,behavior:'instant'})};

// COUNTDOWN + temporary sprint unlock
function countdown(){const diff=TARGET-Date.now();if(diff<=0){$('#countdown').innerHTML='<div class="unit"><b>00</b><span>UNLOCKED</span></div>';unlock();return}const d=Math.floor(diff/86400000),h=Math.floor(diff/3600000)%24,m=Math.floor(diff/60000)%60,s=Math.floor(diff/1000)%60;$('#countdown').innerHTML=[[d,'DAYS'],[h,'HOURS'],[m,'MIN'],[s,'SEC']].map(([n,l])=>`<div class="unit"><b>${String(n).padStart(2,'0')}</b><span>${l}</span></div>`).join('')}
let tempUnlocked=localStorage.getItem('tempBirthdayUnlock')==='1';
function unlock(){tempUnlocked=true;localStorage.setItem('tempBirthdayUnlock','1');if($('#lockScreen').classList.contains('active'))setTimeout(()=>go('unlockScreen'),400)}
$('#tempUnlock').addEventListener('click',()=>{unlock()});
if(tempUnlocked||Date.now()>=TARGET){$('#lockScreen').classList.add('hidden-screen');$('#lockScreen').classList.remove('active')}
countdown();setInterval(countdown,1000);

// Navigation
document.addEventListener('click',e=>{const nav=e.target.closest('[data-go]');if(nav){go(nav.dataset.go);return}const card=e.target.closest('.party-card');if(card){go('panelScreen');document.querySelectorAll('.room').forEach(r=>r.classList.add('hidden'));const room=document.getElementById(card.dataset.panel);if(room)room.classList.remove('hidden')}});
$('#backBtn').addEventListener('click',()=>go('partyScreen'));

// CAKE CEREMONY — kept intact
let lit=false,wished=false;
$('#lightBtn').addEventListener('click',()=>{if(lit)return;lit=true;$('#cakeWrap').classList.add('lit');$('#wishBtn').disabled=false;$('#lightBtn').textContent='Candles are glowing ✨';$('#cakeStatus').textContent='Take a breath. Make a wish. 🤫'});
$('#wishBtn').addEventListener('click',()=>{if(!lit||wished)return;wished=true;$('#cakeWrap').classList.add('blown');$('#wishBtn').disabled=true;$('#cutBtn').disabled=false;$('#lightBtn').textContent='Wish made ✦';$('#cakeStatus').textContent='Your wish stays yours. Now cut the cake!'});
$('#cutBtn').addEventListener('click',()=>{if(!wished)return;$('#cakeWrap').classList.add('cut');$('#cutBtn').disabled=true;$('#cakeStatus').textContent='🎉 HAPPY BIRTHDAY, PURVI! 🎉';makeConfetti();setTimeout(()=>go('celebrationScreen'),1800)});
function makeConfetti(){const box=$('#confetti');box.innerHTML='';for(let i=0;i<70;i++){const p=document.createElement('span');p.style.left=Math.random()*100+'%';p.style.setProperty('--x',Math.random()*180-90+'px');p.style.animationDelay=Math.random()*.45+'s';box.appendChild(p)}setTimeout(()=>box.innerHTML='',2800)}

// Local file upload: functional without a server. Object URLs last for this page session.
function bindUpload(inputId,buttonId,nameId,playerId,wrapId){const input=$('#'+inputId),button=$('#'+buttonId),name=$('#'+nameId),player=$('#'+playerId),wrap=$('#'+wrapId);button.addEventListener('click',()=>input.click());input.addEventListener('change',()=>{const file=input.files?.[0];if(!file)return;const url=URL.createObjectURL(file);name.textContent='✓ '+file.name;player.src=url;wrap.classList.remove('empty');wrap.classList.add('has-media');player.style.display='block';});}
bindUpload('videoFile','videoUploadBtn','videoFileName','videoPlayer','videoPlayerWrap');
bindUpload('audioFile','audioUploadBtn','audioFileName','audioPlayer','audioPlayerWrap');
$('#saveVideoTitle').addEventListener('click',()=>{localStorage.setItem('videoTitle',$('#videoTitle').value);$('#saveVideoTitle').textContent='Saved ✓';setTimeout(()=>$('#saveVideoTitle').textContent='Save title',1200)});
$('#videoTitle').value=localStorage.getItem('videoTitle')||'';

// Letter editor: creator-written only.
$('#saveLetter').addEventListener('click',()=>{localStorage.setItem('letterTitle',$('#letterTitle').value);localStorage.setItem('letterBody',$('#letterBody').value);$('#letterSaved').textContent='Saved on this device ✓';setTimeout(()=>$('#letterSaved').textContent='',1800)});
$('#letterTitle').value=localStorage.getItem('letterTitle')||'';$('#letterBody').value=localStorage.getItem('letterBody')||'';

// Empty memory chapters. Nothing is prefilled.
$('#months').innerHTML=MONTHS.map((m,i)=>`<button class="memory-month" data-month="${m}"><span>${String(i+1).padStart(2,'0')}</span><b>${m}</b><small>empty · add manually</small></button>`).join('');
$('#months').addEventListener('click',e=>{const card=e.target.closest('.memory-month');if(!card)return;const month=card.dataset.month;const old=localStorage.getItem('memory_'+month)||'';const value=prompt('Write your own memory for '+month+'. Leave blank to keep empty:',old);if(value===null)return;if(!value.trim())localStorage.removeItem('memory_'+month);else localStorage.setItem('memory_'+month,value.trim());card.querySelector('small').textContent=value.trim()?'saved locally ✓':'empty · add manually'});
MONTHS.forEach(m=>{const c=document.querySelector(`[data-month="${CSS.escape(m)}"]`);if(localStorage.getItem('memory_'+m)&&c)c.querySelector('small').textContent='saved locally ✓'});
