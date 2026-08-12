const SUPABASE_URL='https://zvvkfevppxjtkziyubvc.supabase.co';
const SUPABASE_KEY='sb_publishable_q3--z_x6JLXWimyKF12wmQ_WQBTgcX5';
const julyApi=async(path,opt={})=>{const r=await fetch(SUPABASE_URL+path,{...opt,headers:{apikey:SUPABASE_KEY,Authorization:`Bearer ${SUPABASE_KEY}`,'Content-Type':'application/json',...(opt.headers||{})}});if(!r.ok)throw Error(await r.text());return r.status===204?null:r.json()};
const jEsc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
const julyMemories=['mem-2025-07-30-inter-house','mem-2025-07-30-raksha-bandhan','mem-2025-07-31-failed-recording','mem-2025-07-31-fresh-start'];
const nicknameSeeds=[
 {name:'Karond',family:['Karondd','Karonnnddd','Karondddddd','Karond valo','Karond vali'],note:'Repeated playful address; the supplied July extract connects “By born 😁” to the Karond wording, but does not establish a deeper origin story.'},
 {name:'Beta',family:[],note:'Term of address used by Akshat in the supplied July extract; no specific origin is established.'},
 {name:'Cutiiee / cutie',family:['cutiiee','cutie'],note:'Affectionate/playful address appearing in the supplied July extract.'},
 {name:'Poorvi / Puvi',family:['Poorvi','Puvi','Poorvii'],note:'Name variants used in the supplied July extract.'},
 {name:'Pgll',family:[],note:'Single playful address in the supplied July extract.'},
 {name:'Gndi ladki',family:[],note:'Single teasing address immediately following Purvi’s firm refusal.'}
];
let nicknameEvidence=[];
async function loadNicknameEvidence(){
 const ids=julyMemories.map(encodeURIComponent).join(',');
 const links=await julyApi(`/rest/v1/memory_chat_messages?memory_id=in.(${ids})&select=memory_id,chat_message_id,chat_messages(id,message_date,message_time,sender,body,raw_line)&order=created_at.asc`);
 return links.map(x=>x.chat_messages).filter(Boolean);
}
function addJulyNav(){
 const nav=document.querySelector('.navlinks'); if(!nav||nav.querySelector('[data-july="nicknames"]')) return;
 nav.insertAdjacentHTML('beforeend','<button data-july="nicknames">Nicknames</button><button data-july="karond">🎭 Karond Chaos</button>');
 nav.querySelector('[data-july="nicknames"]').onclick=()=>renderNicknames();
 nav.querySelector('[data-july="karond"]').onclick=()=>renderKarond();
}
function julyObserver(){addJulyNav();new MutationObserver(addJulyNav).observe(document.querySelector('#app'),{childList:true,subtree:true});}
function basePage(inner){document.querySelector('#app').innerHTML=`<div class="world"><nav><button class="logo" onclick="location.reload()">♡ Purvi</button><div class="navlinks"><button onclick="location.reload()">← World</button><button data-july="nicknames">Nicknames</button><button data-july="karond">🎭 Karond Chaos</button></div></nav>${inner}</div>`;addJulyNav();}
async function renderNicknames(){
 basePage(`<main class="july-page"><section class="chapter"><span class="chapter-no">JULY 2025 · ARCHIVE</span><p class="eyebrow">THINGS YOU CALLED HER</p><h1>The Nickname Archive</h1><p>Built from the verified July extract and linked exact source messages. Nothing here changes the raw archive.</p></section><section id="nicknameGrid" class="nickname-grid"><p class="soft">Loading exact evidence…</p></section></main>`);
 try{nicknameEvidence=await loadNicknameEvidence();const cards=nicknameSeeds.map((n,i)=>{const terms=[n.name,...n.family].map(x=>x.toLowerCase());const hits=nicknameEvidence.filter(m=>terms.some(t=>(m.body||'').toLowerCase().includes(t))).slice(0,20);return `<article class="nickname-card"><div class="nickname-top"><span class="nickname-number">${String(i+1).padStart(2,'0')}</span><span class="nickname-source">JULY 2025</span></div><h2>${jEsc(n.name)}</h2>${n.family.length?`<p class="nickname-variants">${n.family.map(jEsc).join(' · ')}</p>`:''}<p>${jEsc(n.note)}</p><details><summary>${hits.length} exact source occurrence${hits.length===1?'':'s'}</summary><div class="nickname-evidence">${hits.map(m=>`<article class="chat-result"><small>${jEsc(m.message_date)} · ${jEsc(String(m.message_time||'').slice(0,5))} · ${jEsc(m.sender)}</small><p>${jEsc(m.body)}</p><details><summary>Exact raw line</summary><pre>${jEsc(m.raw_line||m.body)}</pre></details></article>`).join('')||'<p class="soft">No linked occurrence found.</p>'}</div></details></article>`}).join('');document.querySelector('#nicknameGrid').innerHTML=cards}catch(e){document.querySelector('#nicknameGrid').innerHTML=`<p class="soft">Could not load linked evidence: ${jEsc(e.message)}</p>`}
}
const karondSteps=[
 {label:'Karond',time:'30/07/25 · 14:00',text:'Karondd!! Chup chap chalegii tu kal'},
 {label:'Karonnnddd',time:'30/07/25 · 14:07',text:'Karonnnddd'},
 {label:'Karondddddd',time:'30/07/25 · 14:15',text:'Karondddddd!!'},
 {label:'Karond valo / Vali',time:'30/07/25 · 14:16',text:'Karond valo / Vali'},
 {label:'Karond',time:'30/07/25 · 14:17',text:'Tataaaa! Karond 🖐🏻👋🏻'},
 {label:'Karond',time:'31/07/25 · 22:56',text:'☺️👺karond To hai hi smkhdar khud karleti sb hena!?'}
];
let karondIndex=0;
function renderKarond(){karondIndex=0;basePage(`<main class="july-page karond-page"><section class="chapter"><span class="chapter-no">HISTORICAL EASTER EGG · JULY 2025</span><p class="eyebrow">THE KAROND CHAOS</p><h1>How many d's can Karond survive? 😭</h1><p>This is a playful reconstruction of the exact July nickname sequence. It does not impersonate Purvi or invent replies.</p></section><section class="karond-stage"><div class="karond-bubble" id="karondBubble"><small>30/07/25 · 14:00</small><strong>Karond</strong><p>Ready?</p></div><div class="karond-meter"><span id="karondCount">0 / ${karondSteps.length}</span><div class="meter-track"><i id="karondFill"></i></div></div><button class="primary" id="karondNext">Reveal the next Karond →</button><p class="soft" id="karondHint">The sequence is revealed one historical step at a time.</p></section></main>`);document.querySelector('#karondNext').onclick=advanceKarond}
function advanceKarond(){const s=karondSteps[karondIndex];if(!s)return;document.querySelector('#karondBubble').innerHTML=`<small>${jEsc(s.time)}</small><strong>${jEsc(s.label)}</strong><p>${jEsc(s.text)}</p>`;document.querySelector('#karondCount').textContent=`${karondIndex+1} / ${karondSteps.length}`;document.querySelector('#karondFill').style.width=`${((karondIndex+1)/karondSteps.length)*100}%`;karondIndex++;if(karondIndex>=karondSteps.length){document.querySelector('#karondNext').textContent='Replay the chaos ↻';document.querySelector('#karondHint').textContent='End of the verified July sequence. Replay keeps the same historical evidence.';document.querySelector('#karondNext').onclick=renderKarond}}
julyObserver();
