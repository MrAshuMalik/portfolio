const CFG={
  email:"ashrafmalik6740@gmail.com",
  site:"https://sites.google.com/view/ashrafhusain",
  location:"Lucknow, Uttar Pradesh, India",
  socials:{LinkedIn:"https://www.linkedin.com/in/ashraf-malik-521192379?utm_source=share_via&utm_content=profile&utm_medium=member_android",Instagram:"https://www.instagram.com/theashumalik18?jplx=cmVudWoxbzZpazE3",GitHub:"https://github.com/MrAshuMalik"}, // paste real URLs
  photo:"IMG-20260804-WA0039.jpg", // set to your photo path or data URI to replace the preview slot
};
const PROJECTS=[ // add {title,desc,tech:[],repo:"",demo:""}
  {title:"Your first project",desc:"Add a title, description, stack and links when a project is ready.",tech:["Java"],repo:"",demo:""},
  {title:"Next idea",desc:"Placeholder slot. Nothing here is a completed project.",tech:[],repo:"",demo:""},
  {title:"Coming soon",desc:"Placeholder slot for future work.",tech:[],repo:"",demo:""}];
const NAV=["Home","About","Education","Skills","Tools","Projects","Goals","Contact"];
const $=s=>document.querySelector(s);
const h=(id,html)=>$(id).innerHTML=html;

/* nav + footer links */
const nav=$("#nav");
NAV.forEach(n=>{const a=document.createElement("a");a.href="#"+n.toLowerCase();a.textContent=n.toUpperCase();nav.appendChild(a);a.onclick=()=>nav.classList.remove("open")});
$("#burger").onclick=()=>nav.classList.toggle("open");
$("#fnav").innerHTML=NAV.map(n=>`<a href="#${n.toLowerCase()}">${n}</a>`).join(" · ");
$("#yr").textContent=new Date().getFullYear();
$("#fmail").href="mailto:"+CFG.email;

/* content */
h("#aboutCards",[["🎓","Education","B.Tech Computer Science & Engineering"],["💡","Interests","Programming & Software Development"],["⌨️","Technical Skills","Java, C, Python"],["🎯","Career Goal","Professional Software Developer"]].map(c=>`<div class="card tilt"><div class="ic">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join(""));
h("#tl",`<div class="card now rv"><span class="tag">Ongoing · 2nd Year</span><h3 style="margin-top:8px">B.Tech – Computer Science &amp; Engineering</h3><p>Shri Ramswaroop Memorial University, Lucknow</p><p>Session 2025–2029</p></div>
<div class="card rv"><span class="tag g">Completed · 2024</span><h3 style="margin-top:8px">Class XII · UP Board · PCM</h3><p>Saraswati Vidhya Mandir Inter College, Bahraich</p><div class="pct" data-n="85.8">0%</div></div>
<div class="card rv"><span class="tag g">Completed · 2022</span><h3 style="margin-top:8px">Class X · UP Board</h3><p>Jai Maa Kali Inter College</p><div class="pct" data-n="87.83">0%</div></div>`);
const lv=(n,t)=>`<div class="lvl" aria-label="${t}">${[1,2,3].map(i=>`<i class="${i<=n?"f":""}"></i>`).join("")}</div><span class="tag">${t}</span>`;
const sk=[["Programming",[["☕","Java","Intermediate",2,"Core language for coursework and practice."],["⚙️","C Programming","Intermediate",2,"Foundation in low-level programming concepts."],["🐍","Python","Beginner",1,"Early-stage, exploring the basics."]]],
["Core Computer Science",[["🧩","Object-Oriented Programming","In practice",2,"Applied through Java."],["🌲","Data Structures & Algorithms","Learning",1,"Actively studying."]]],
["Problem Solving",[["🧠","Problem Solving","Core strength",2,"Breaking problems into clear steps."]]],
["Web Development",[["🌐","Web Development","Learning",1,"Currently building skills."]]]];
h("#skillBox",sk.map(c=>`<h3 class="cat rv">${c[0]}</h3><div class="grid g3">${c[1].map(s=>`<div class="card tilt"><div class="ic">${s[0]}</div><h3>${s[1]}</h3><p>${s[4]}</p>${lv(s[3],s[2])}</div>`).join("")}</div>`).join(""));
h("#toolBox",[["🧰","IntelliJ IDEA","Java development environment."],["📝","Visual Studio Code","Everyday code editor."],["🔀","Git & GitHub","Learning version control."]].map(t=>`<div class="card tilt"><div class="ic">${t[0]}</div><h3>${t[1]}</h3><p>${t[2]}</p></div>`).join(""));
h("#softBox",[["🤝","Teamwork","Works well with others toward a shared goal."],["⚡","Quick Learner","Picks up new concepts and tools fast."],["⏳","Time Management","Balances studies and practice with planning."]].map(t=>`<div class="card tilt" style="border-top:2px solid var(--gold)"><div class="ic">${t[0]}</div><h3>${t[1]}</h3><p>${t[2]}</p></div>`).join(""));
const lnk=(u,t)=>u?`<a class="tag g" href="${u}" target="_blank" rel="noopener">${t}</a>`:`<span class="tag" style="opacity:.55">${t}: add link</span>`;
h("#projBox",PROJECTS.map(p=>`<div class="card proj tilt"><div class="thumb">Thumbnail slot</div><h3>${p.title}</h3><p>${p.desc}</p><p>${p.tech.map(t=>`<span class="tag">${t}</span>`).join(" ")}</p><p style="margin-top:10px">${lnk(p.repo,"GitHub")} ${lnk(p.demo,"Live demo")}</p></div>`).join(""));
h("#focusBox",["Strong foundation in Computer Science","Programming & Problem Solving","Software Development & Continuous Technical Growth"].map(t=>`<div class="card tilt" style="border-left:3px solid var(--gold)"><h3>${t}</h3></div>`).join(""));
h("#road",["Advanced Java","Data Structures & Algorithms","Web Development","Backend Development","Spring Boot","AI & Generative AI"].map((t,i)=>`<div class="node rv">${t}<small>Learning interest</small></div>`).join(""));
h("#contactCards",`<a class="card" href="mailto:${CFG.email}" style="text-decoration:none"><h3>Email</h3><p>${CFG.email}</p></a>
<div class="card"><h3>Location</h3><p>${CFG.location}</p></div>
<a class="card" href="${CFG.site}" target="_blank" rel="noopener" style="text-decoration:none"><h3>Existing portfolio</h3><p>${CFG.site}</p></a>
<div class="card soc"><h3>Social</h3>${Object.entries(CFG.socials).map(([k,u])=>u?`<a href="${u}" target="_blank" rel="noopener">${k}</a>`:`<span class="off">${k}: add URL in config</span>`).join("")}</div>`);

/* photo */
const photo=$("#photo");
function setPhoto(src){photo.src=src;photo.style.display="block";$("#mono").style.display="none"}
if(CFG.photo)setPhoto(CFG.photo);
$("#pick").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>setPhoto(r.result);r.readAsDataURL(f)};

/* form */
$("#cf").onsubmit=e=>{e.preventDefault();
  const n=$("#fn").value.trim(),m=$("#fe").value.trim(),t=$("#fm").value.trim();
  $("#en").textContent=n?"":"Enter your name.";
  $("#ee").textContent=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)?"":"Enter a valid email address.";
  $("#em").textContent=t.length>=10?"":"Write at least 10 characters.";
  if(n&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)&&t.length>=10){
    location.href=`mailto:${CFG.email}?subject=${encodeURIComponent("Portfolio message from "+n)}&body=${encodeURIComponent(t+"\n\n"+n+" ("+m+")")}`;
    $("#ok").textContent="Opening your email app to send this."}};

/* motion */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const lowPower=(navigator.hardwareConcurrency||4)<=2;
setTimeout(()=>{const l=$("#load");l.style.opacity=0;setTimeout(()=>l.remove(),700)},reduce?0:1100);
const roles=["Java Developer","Problem Solver","DSA Learner","Aspiring Software Developer"];let ri=0,ci=0,del=false;
const roleEl=$("#role");
if(reduce)roleEl.textContent=roles.join(" · ");
else(function type(){const w=roles[ri];ci+=del?-1:1;roleEl.textContent=w.slice(0,ci);
  let d=del?35:70;if(!del&&ci===w.length){del=true;d=1300}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}setTimeout(type,d)})();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");
  e.target.querySelectorAll(".pct").forEach(c=>count(c));if(e.target.classList.contains("pct"))count(e.target);io.unobserve(e.target)}}),{threshold:.2});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
function count(c){if(c.dataset.d)return;c.dataset.d=1;const to=+c.dataset.n;if(reduce){c.textContent=to+"%";return}
  let s=null;(function f(t){s=s||t;const p=Math.min((t-s)/1400,1);c.textContent=(to*p).toFixed(2).replace(/\.?0+$/,"")+"%";if(p<1)requestAnimationFrame(f)})(performance.now())}
/* active nav */
const links=[...nav.querySelectorAll("a")];
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe&&
document.querySelectorAll("section").forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.hash==="#"+s.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe(s));
/* 3D tilt */
if(!reduce&&matchMedia("(hover:hover)").matches)document.querySelectorAll(".tilt").forEach(c=>{
  c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-3px)`};
  c.onmouseleave=()=>c.style.transform=""});
/* particles + holographic sphere */
const cv=$("#fx"),cx=cv.getContext("2d");let W,H,P=[],mx=0,my=0;
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight}size();addEventListener("resize",size);
addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY});
const N=reduce||lowPower?0:Math.min(70,Math.floor(innerWidth/18));
for(let i=0;i<N;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,g:i%3===0?["{ }","</>","( )",";","[ ]","&&","=>","#"][i%8]:null});
const pts=[];for(let i=0;i<90;i++){const a=Math.acos(1-2*(i+.5)/90),b=Math.PI*(1+5**.5)*i;pts.push([Math.sin(a)*Math.cos(b),Math.cos(a),Math.sin(a)*Math.sin(b)])}
let rot=0;
(function draw(){cx.clearRect(0,0,W,H);
  cx.fillStyle="rgba(95,217,184,.5)";cx.font="14px Space Grotesk,monospace";
  P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
    const dx=p.x-mx,dy=p.y-my;if(dx*dx+dy*dy<9000){p.x+=dx*.01;p.y+=dy*.01}p.g?cx.fillText(p.g,p.x,p.y):cx.fillRect(p.x,p.y,1.6,1.6)});
  if(!reduce&&!lowPower&&innerWidth>860){rot+=.004;const R=Math.min(110,W*.09),ox=W*.08+R,oy=H*.85;
    pts.forEach(q=>{const x=q[0]*Math.cos(rot)-q[2]*Math.sin(rot),z=q[0]*Math.sin(rot)+q[2]*Math.cos(rot);
      cx.fillStyle=`rgba(227,184,91,${.25+.4*(z+1)/2})`;cx.fillRect(ox+x*R,oy+q[1]*R,2,2)})}
  requestAnimationFrame(draw)})();
if(!reduce&&matchMedia("(hover:hover) and (pointer:fine)").matches){
const c=document.createElement("div");c.id="cur";document.body.appendChild(c);let ax=0,ay=0,tx=0,ty=0;
addEventListener("pointermove",e=>{tx=e.clientX;ty=e.clientY});
(function m(){ax+=(tx-ax)*.18;ay+=(ty-ay)*.18;c.style.transform=`translate(${ax}px,${ay}px)`;requestAnimationFrame(m)})();
document.querySelectorAll("a,button,.card,label").forEach(el=>{el.addEventListener("pointerenter",()=>document.body.classList.add("hov"));el.addEventListener("pointerleave",()=>document.body.classList.remove("hov"))});
document.querySelectorAll(".btn").forEach(b=>{b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener("pointerleave",()=>b.style.transform="")})}