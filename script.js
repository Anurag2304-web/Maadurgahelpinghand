

const nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>50));
const hbg=document.getElementById('hamburger'),mob=document.getElementById('mobileMenu');
document.getElementById('mobileClose').addEventListener('click',closeMenu);
hbg.addEventListener('click',()=>{hbg.classList.toggle('active');mob.classList.toggle('open');});
document.querySelectorAll('.mobile-link').forEach(l=>l.addEventListener('click',closeMenu));
function closeMenu(){hbg.classList.remove('active');mob.classList.remove('open');}
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));
function fmt(n){if(n>=100000)return Math.round(n/1000)+'K';if(n>=1000)return n.toLocaleString('en-IN');return n;}
const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,t=parseInt(el.dataset.target),d=2200,s=performance.now();const go=now=>{const p=Math.min((now-s)/d,1),ease=1-Math.pow(1-p,3);el.textContent=fmt(Math.floor(ease*t));if(p<1)requestAnimationFrame(go);else el.textContent=fmt(t);};requestAnimationFrame(go);cObs.unobserve(el);});},{threshold:0.3});
document.querySelectorAll('.cnt-num').forEach(el=>cObs.observe(el));
const msgs={501:'🙏 ₹501 से एक गरीब बच्चे को एक माह की शिक्षा सामग्री मिलती है।',1001:'🙏 ₹1,001 से एक परिवार को एक सप्ताह का राशन मिलता है।',2100:'🙏 ₹2,100 से पाँच जरूरतमंदों को निःशुल्क चिकित्सा मिलती है।',5100:'🙏 ₹5,100 से एक धार्मिक कार्यक्रम आयोजित होता है।',11000:'🙏 ₹11,000 से एक बच्ची की पूरे वर्ष की शिक्षा प्रायोजित होती है।',21000:'🙏 ₹21,000 से एक यज्ञ/हवन का आयोजन होता है।'};
let curAmt=1001;
function selAmt(btn,a){document.querySelectorAll('.amt-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');curAmt=a;document.getElementById('impNote').textContent=msgs[a]||'🙏 आपका दान समाज का कल्याण करेगा।';document.getElementById('donBtn').textContent='🙏 ₹'+a.toLocaleString('en-IN')+' दान करें — Donate Now';document.getElementById('custAmt').value='';}
document.getElementById('custAmt').addEventListener('input',function(){const v=parseInt(this.value);if(v>0){curAmt=v;document.querySelectorAll('.amt-btn').forEach(b=>b.classList.remove('active'));document.getElementById('donBtn').textContent='🙏 ₹'+v.toLocaleString('en-IN')+' दान करें — Donate Now';document.getElementById('impNote').textContent='🙏 ₹'+v.toLocaleString('en-IN')+' से माँ दुर्गा का आशीर्वाद मिलेगा।';}});
function handleDon(e){e.preventDefault();alert('🙏 जय माँ दुर्गा!\n\nआपने ₹'+curAmt.toLocaleString('en-IN')+' दान देने का संकल्प लिया।\n\nUPI: 9820716922@upi\nसंपर्क: 9820716922 (अखिलेश पांडेय)\n\nआपको 80G कर छूट प्रमाण-पत्र मिलेगा।\n\nधन्यवाद 🙏');}
function loadVid(id,el){document.querySelectorAll('.pl-item').forEach(i=>i.classList.remove('active'));el.classList.add('active');document.getElementById('mainVideo').src='https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1';}
const track=document.getElementById('testiTrack'),cards=document.querySelectorAll('.t-card'),dots=document.getElementById('tDots');
let cur=0;
const cpv=()=>window.innerWidth<768?1:window.innerWidth<1024?2:3;
let cpvN=cpv();
const total=()=>Math.ceil(cards.length/cpvN);
function buildDots(){dots.innerHTML='';for(let i=0;i<total();i++){const d=document.createElement('div');d.className='td'+(i===0?' active':'');d.addEventListener('click',()=>goto(i));dots.appendChild(d);}}
buildDots();
function goto(n){cpvN=cpv();cur=Math.max(0,Math.min(n,total()-1));const w=cards[0].offsetWidth+20;track.style.transform='translateX(-'+(cur*cpvN*w)+'px)';document.querySelectorAll('.td').forEach((d,i)=>d.classList.toggle('active',i===cur));}
document.getElementById('tPrev').addEventListener('click',()=>goto(cur-1));
document.getElementById('tNext').addEventListener('click',()=>goto((cur+1)%total()));
setInterval(()=>goto((cur+1)%total()),5500);
function handleVol(e){e.preventDefault();const reqs=e.target.querySelectorAll('[required]');let ok=true;reqs.forEach(f=>{if(!f.value.trim()){ok=false;f.style.borderColor='var(--red)';}else f.style.borderColor='';});if(!ok)return;const btn=e.target.querySelector('.fsub');btn.textContent='⏳ प्रस्तुत हो रहा है...';btn.disabled=true;setTimeout(()=>{e.target.querySelectorAll('input,select,textarea').forEach(f=>f.value='');document.getElementById('volSuccess').style.display='block';btn.textContent='🙏 स्वयंसेवक के रूप में जुड़ें';btn.disabled=false;setTimeout(()=>document.getElementById('volSuccess').style.display='none',7000);},1800);}
const btt=document.getElementById('btt');
window.addEventListener('scroll',()=>btt.classList.toggle('visible',window.scrollY>500));
btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
window.addEventListener('resize',()=>{cpvN=cpv();buildDots();goto(0);});
