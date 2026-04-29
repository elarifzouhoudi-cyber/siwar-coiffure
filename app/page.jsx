"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const WIX = "https://static.wixstatic.com/media/";
const IMG = {
  devanture: "https://lh5.googleusercontent.com/p/AF1QipOqnHkxAL4ZeGdg2NreQXK96N7OW0piS2Owrxb4=w1600-h1000-k-no",
  interieur: WIX + "c0319c_5f5354e747924972bf6f69f198c901e9~mv2_d_4000_3000_s_4_2.jpg",
  about: WIX + "c0319c_870bac3afc0d476e8f2e3c4ece253582~mv2_d_2800_2772_s_4_2.jpg",
  coupes: [
    WIX + "c0319c_c1e7ec31282a432ebb1e596a0c702aba~mv2_d_3840_2160_s_2.jpg",
    WIX + "c0319c_2083c4022b6740a09890f053228ed7f6~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_5208605a157b4dbba2d0cad5568fff42~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_74bc1708a2f04d6a92fc1cf7b8c6f4b8~mv2_d_3840_2160_s_2.jpg",
  ],
  couleurs: [
    WIX + "c0319c_93cbe07c36514190953414d094b534b9~mv2.jpg",
    WIX + "c0319c_835c4c1696014754868abd0656749e54~mv2.jpg",
    WIX + "c0319c_02136d62716043b7ba5f162456d6e39e~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_581422f676cc4f32aca3d16638f477dc~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_29d04880374449d58e8cc8583799c466~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_51baf6ce8e2b4a3db4aa7af0be6e99ea~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_74b4fba2d50745f781530b85bd11f3a4~mv2.jpg",
    WIX + "c0319c_1e21d70e099f4f4d85990221630be754~mv2.jpg",
  ],
  chignons: [
    WIX + "c0319c_6d4046fe3419146e5e3af4af49d19aa5.jpg",
    WIX + "c0319c_28a125eee8d8cd951ec0fa2fe04e02d4.jpg",
    WIX + "c0319c_79bae243ea84fc79eb6f59170ecb38f0.jpg",
    WIX + "c0319c_8772de7e5dcef0c1a72ed3f0d2832aeb.jpg",
  ],
  lissages: [
    WIX + "c0319c_f1f8ab64139b4efa9b9a6d0fe4a437dc~mv2_d_2160_2346_s_2.jpg",
    WIX + "c0319c_1ac2080c9e404d77ac2b69a2a40772d5.jpg",
  ],
  meches: [
    WIX + "c0319c_83704e29790247d9b3168320413fc6c1~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_685d67f166294f3fa38d61a07fe745c3~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_8598bd5d6b8348039eb86b765e6d1aac~mv2_d_2160_3840_s_2.jpg",
    WIX + "c0319c_49e32a72f98d423396227adfb2df7541~mv2_d_3840_2160_s_2.jpg",
  ],
};

const SERVICES = [
  { n:"01", name:"Coupe et Brushing", desc:"Coupe de transformation adaptee a votre morphologie et votre style de vie.", sub:"Visagiste" },
  { n:"02", name:"Couleur et Coloration", desc:"Colorations personnalisees, retouches de racines, techniques avancees. Resultat eclatant garanti.", sub:"Coloriste" },
  { n:"03", name:"Meches et Balayage", desc:"Specialiste des meches et balayages pour un resultat naturel et lumineux.", sub:"Specialiste" },
  { n:"04", name:"Lissage Premium", desc:"Lissages bresilien, japonais, coreen et keratine. Cheveux lisses, brillants et disciplines.", sub:"Bresilien - Japonais" },
  { n:"05", name:"Chignons et Mariages", desc:"A deux pas de l Hotel de Ville, ideal pour les futures mariees. Coiffures evenementielles sur mesure.", sub:"Sur rendez-vous" },
  { n:"06", name:"Soins et Botox Capillaire", desc:"Traitement botox reparateur pour redonner vie, brillance et force a votre chevelure.", sub:"Soin reparateur" },
];

const REVIEWS = [
  { text:"Une coloriste exceptionnelle, chaleureuse et de tres bons conseils. Depuis 6 ans je ne vais plus ailleurs.", name:"Fatima M.", src:"Google" },
  { text:"Jamais eu des meches d une telle qualite. Je suis ressortie toute emue. Je le conseille a tout le monde.", name:"Sophie L.", src:"Google" },
  { text:"Un lissage bresilien de qualite et une coupe a tres bon prix. Une veritable magicienne des cheveux.", name:"Nadia B.", src:"Pages Jaunes" },
  { text:"Une femme aux mains en or. Mes cheveux sont tres difficiles et elle reussit toujours a les rendre beaux.", name:"Isabelle P.", src:"Google" },
  { text:"Siwar sort du lot. Le prix est correct, le resultat toujours au rendez-vous.", name:"Karima D.", src:"Pages Jaunes" },
  { text:"J ai enfin trouve une coiffeuse talentueuse et a l ecoute. Je recommande vivement ce salon.", name:"Marie C.", src:"Google" },
];

const HOURS = [
  { day:"Lundi", time:"Ferme", closed:true },
  { day:"Mardi", time:"10h - 19h" },
  { day:"Mercredi", time:"10h - 19h" },
  { day:"Jeudi", time:"10h - 19h" },
  { day:"Vendredi", time:"10h - 19h" },
  { day:"Samedi", time:"10h - 19h" },
  { day:"Dimanche", time:"Ferme", closed:true },
];

const TODAY = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"][new Date().getDay()];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);

  function boot() {
    const G = window.gsap;
    const ST = window.ScrollTrigger;
    if (!G || !ST) return;
    G.registerPlugin(ST);
    if (window.Lenis) {
      const lenis = new window.Lenis({ duration:1.2, easing: t => Math.min(1,1.001-Math.pow(2,-10*t)) });
      G.ticker.add(t => lenis.raf(t*1000));
      G.ticker.lagSmoothing(0);
      lenis.on("scroll", ST.update);
    }
    const nav = document.getElementById("nw");
    window.addEventListener("scroll", () => nav && nav.classList.toggle("scrolled", window.scrollY>50), {passive:true});
    const dot = document.getElementById("cd");
    const ring = document.getElementById("cr");
    if (dot && ring && matchMedia("(pointer:fine)").matches) {
      let mx=0,my=0,rx=0,ry=0;
      document.addEventListener("mousemove", e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px";},{passive:true});
      (function l(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(l)})();
    }
    G.timeline({delay:.1})
      .to("#hl",{opacity:1,y:0,duration:.8,ease:"power2.out"})
      .to(".htl",{y:"0%",duration:1.1,ease:"expo.out",stagger:.12},"-=.45")
      .to("#hs",{opacity:1,duration:.7,ease:"power2.out"},"-=.5")
      .to("#hd",{opacity:1,scaleY:1,duration:.55,ease:"power2.out"},"-=.3")
      .to("#hb",{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=.25")
      .to("#hsc",{opacity:1,duration:.5},"-=.2");
    G.to("#hbg",{yPercent:30,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:true}});
    G.to("#al",{scaleY:1,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:"#ab",start:"top 72%"}});
    G.to(".abtl",{y:"0%",duration:1.05,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:"#ab",start:"top 72%"}});
    G.to("#ai",{yPercent:-12,ease:"none",scrollTrigger:{trigger:"#ab",start:"top bottom",end:"bottom top",scrub:true}});
    G.from(".at",{opacity:0,y:20,duration:.65,stagger:.1,scrollTrigger:{trigger:"#ab",start:"top 65%"}});
    G.from(".ast",{opacity:0,y:16,duration:.6,stagger:.1,scrollTrigger:{trigger:"#abs",start:"top 85%"}});
    [["#sv",".svtl"],["#ga",".gatl"],["#rv",".rvtl"],["#ct",".cttl"]].forEach(([s,c])=>{
      G.to(c,{y:"0%",duration:1.05,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:s,start:"top 72%"}});
    });
    G.from(".sc",{opacity:0,y:28,duration:.65,stagger:.08,scrollTrigger:{trigger:"#sg",start:"top 82%"}});
    G.from(".gi",{opacity:0,y:32,duration:.7,stagger:.09,scrollTrigger:{trigger:"#gg",start:"top 82%"}});
    G.from(".rc",{opacity:0,y:24,duration:.65,stagger:.08,scrollTrigger:{trigger:"#rg",start:"top 82%"}});
    G.from(".ci",{opacity:0,y:16,duration:.6,stagger:.07,scrollTrigger:{trigger:"#ct",start:"top 65%"}});
    document.querySelectorAll(".mag").forEach(btn=>{
      btn.addEventListener("mousemove",e=>{
        const r=btn.getBoundingClientRect();
        G.to(btn,{x:(e.clientX-r.left-r.width/2)*.28,y:(e.clientY-r.top-r.height/2)*.28,duration:.4,ease:"power2.out"});
      });
      btn.addEventListener("mouseleave",()=>G.to(btn,{x:0,y:0,duration:.6,ease:"elastic.out(1,.4)"}));
    });
  }

  useEffect(()=>{ if(ready) boot(); },[ready]);

  const sl = { fontSize:11, letterSpacing:".42em", textTransform:"uppercase", color:"var(--accent)", fontWeight:400, display:"block", marginBottom:"1rem" };
  const tl = { display:"block", transform:"translateY(110%)" };
  const h2s = (vw) => ({ fontFamily:"var(--serif)", fontSize:"clamp(40px,"+vw+"vw,86px)", fontWeight:300, lineHeight:.94, letterSpacing:"-.02em", overflow:"hidden" });

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive"
        onLoad={()=>{
          const a=document.createElement("script");
          a.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
          a.onload=()=>{
            const b=document.createElement("script");
            b.src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js";
            b.onload=()=>setReady(true);
            document.head.appendChild(b);
          };
          document.head.appendChild(a);
        }}
      />
      <div id="cd" className="cursor-dot"/>
      <div id="cr" className="cursor-ring"/>
      <div className={"mobile-menu"+(menuOpen?" open":"")}>
        {["#ab","#sv","#ga","#rv","#ct"].map((h,i)=>(
          <a key={h} href={h} onClick={()=>setMenuOpen(false)}>
            {["A Propos","Services","Galerie","Avis","Contact"][i]}
          </a>
        ))}
        <a href="tel:+33695553468" onClick={()=>setMenuOpen(false)} style={{color:"var(--accent)"}}>06 95 55 34 68</a>
      </div>
      <nav id="nw" className="nav-wrap">
        <a href="#hero" className="nav-logo">SIWAR COIFFURE</a>
        <ul className="nav-links">
          {[["#ab","A Propos"],["#sv","Services"],["#ga","Galerie"],["#rv","Avis"],["#ct","Contact"]].map(([h,l])=>(
            <li key={h}><a href={h}>{l}</a></li>
          ))}
        </ul>
        <a href="tel:+33695553468" className="btn-nav mag">Prendre RDV</a>
        <button className={"hamburger"+(menuOpen?" open":"")} onClick={()=>setMenuOpen(p=>!p)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>
      <main>
        <section id="hero" style={{minHeight:"100svh",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
          <div id="hbg" className="hero-bg" style={{backgroundImage:"url("+IMG.devanture+")"}}/>
          <div className="hero-overlay"/>
          <div style={{position:"relative",zIndex:10,textAlign:"center",padding:"0 1.5rem",maxWidth:900,width:"100%"}}>
            <div id="hl" style={{...sl,opacity:0,transform:"translateY(18px)",marginBottom:"1.75rem"}}>Aix-en-Provence - Depuis 2002</div>
            <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(62px,11vw,170px)",fontWeight:300,lineHeight:.88,letterSpacing:"-.02em",marginBottom:"1.75rem",overflow:"hidden"}}>
              <span className="htl" style={{display:"block",transform:"translateY(108%)"}}>SIWAR</span>
              <span className="htl" style={{display:"block",transform:"translateY(108%)"}}>COIFFURE</span>
            </h1>
            <p id="hs" style={{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:"clamp(16px,2vw,26px)",color:"var(--text-d)",letterSpacing:".1em",marginBottom:"3rem",opacity:0}}>
              Visagiste - Coloriste - Specialiste couleur
            </p>
            <div id="hd" style={{width:1,height:52,background:"var(--accent)",margin:"0 auto 2.5rem",transformOrigin:"top",opacity:0,transform:"scaleY(0)"}}/>
            <a id="hb" href="tel:+33695553468" className="btn-primary mag" style={{opacity:0,transform:"translateY(18px)"}}>Prendre Rendez-vous</a>
          </div>
          <div id="hsc" style={{position:"absolute",bottom:"2.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:".75rem",opacity:0}}>
            <span style={{fontSize:10,letterSpacing:".35em",textTransform:"uppercase",color:"var(--text-m)"}}>Decouvrir</span>
            <div className="scroll-line"/>
          </div>
        </section>
        <div style={{overflow:"hidden",padding:"1.4rem 0",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
          <div className="marquee-track">
            {["Coupe","Couleur","Balayage","Meches","Lissage","Chignons","Botox Capillaire","Extensions","Coupe","Couleur","Balayage","Meches","Lissage","Chignons","Botox Capillaire","Extensions"].map((t,i)=>(
              <span key={i} className="marquee-item">{t}<b style={{color:"var(--accent)",margin:"0 .35rem",fontWeight:300}}>-</b></span>
            ))}
          </div>
        </div>
        <section id="ab" style={{padding:"clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)",maxWidth:1440,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"clamp(3rem,6vw,7rem)",alignItems:"center"}}>
          <div>
            <span style={sl}>A Propos du Salon</span>
            <h2 style={h2s(4.5)}>
              <span className="abtl" style={tl}>L excellence</span>
              <span className="abtl" style={tl}>au service</span>
              <span className="abtl" style={tl}>de votre beaute</span>
            </h2>
            <div style={{marginTop:"2.2rem"}}>
              <p className="at" style={{fontSize:15.5,color:"var(--text-d)",lineHeight:1.85,marginBottom:"1.4rem"}}>Depuis 2002, Siwar vous accueille au coeur d Aix-en-Provence, a deux pas de l Hotel de Ville. Un espace entierement dedie aux femmes et aux enfants.</p>
              <p className="at" style={{fontSize:15.5,color:"var(--text-d)",lineHeight:1.85}}>Visagiste et coloriste de talent, elle prend le temps d ecouter, de conseiller et d accompagner chaque cliente vers la version la plus belle d elle-meme.</p>
            </div>
            <div id="abs" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2rem",marginTop:"3.5rem",paddingTop:"3rem",borderTop:"1px solid var(--line)"}}>
              {[["+ 20","Ans expertise"],["5 etoiles","Avis clients"],["100%","Sur mesure"]].map(([n,l])=>(
                <div key={l} className="ast">
                  <div style={{fontFamily:"var(--serif)",fontSize:46,fontWeight:300,color:"var(--accent)",lineHeight:1}}>{n}</div>
                  <div style={{fontSize:10,letterSpacing:".22em",textTransform:"uppercase",color:"var(--text-m)",marginTop:".4rem"}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{position:"relative",height:"clamp(360px,50vw,620px)",overflow:"hidden",borderRadius:2}}>
            <div id="al" style={{position:"absolute",top:"-5%",left:-1,width:2,height:"110%",background:"var(--accent)",transform:"scaleY(0)",transformOrigin:"top",zIndex:2}}/>
            <img id="ai" src={IMG.about} alt="Realisation Siwar Coiffure" loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>
          </div>
        </section>
        <section id="sv" style={{background:"var(--bg2)",padding:"clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)",borderTop:"1px solid var(--line)"}}>
          <div style={{maxWidth:1440,margin:"0 auto 5rem"}}>
            <span style={sl}>Nos Prestations</span>
            <h2 style={h2s(5.5)}>
              <span className="svtl" style={tl}>Ce que nous</span>
              <span className="svtl" style={tl}>faisons pour vous</span>
            </h2>
          </div>
          <div id="sg" style={{maxWidth:1440,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:1,background:"var(--line)",border:"1px solid var(--line)",borderRadius:4,overflow:"hidden"}}>
            {SERVICES.map(s=>(
              <div key={s.n} className="sc" style={{background:"var(--bg2)",padding:"3.2rem 2.8rem",transition:"background .3s"}}
                onMouseEnter={e=>e.currentTarget.style.background="var(--surf)"}
                onMouseLeave={e=>e.currentTarget.style.background="var(--bg2)"}>
                <div style={{fontFamily:"var(--serif)",fontSize:54,fontWeight:300,color:"var(--accent-d)",lineHeight:1,marginBottom:"1.5rem"}}>{s.n}</div>
                <div style={{fontFamily:"var(--serif)",fontSize:25,fontWeight:300,marginBottom:"1rem"}}>{s.name}</div>
                <p style={{fontSize:14,color:"var(--text-d)",lineHeight:1.75}}>{s.desc}</p>
                <div style={{marginTop:"1.75rem",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"var(--accent)"}}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>
                <section id="ga" style={{padding:"clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)",maxWidth:1440,margin:"0 auto"}}>
          <div style={{marginBottom:"4.5rem"}}>
            <span style={sl}>Nos Realisations</span>
            <h2 style={h2s(5.5)}>
              <span className="gatl" style={tl}>La galerie</span>
              <span className="gatl" style={tl}>du salon</span>
            </h2>
          </div>
          <div style={{marginBottom:"4rem"}}>
            <div style={{fontSize:11,letterSpacing:".3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"1.5rem"}}>Coupes</div>
            <div id="gg" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:12}}>
              {IMG.coupes.map((src,i)=>(
                <div key={i} className="gal-item gi" style={{overflow:"hidden",borderRadius:2}}>
                  <img src={src} alt={"Coupe Siwar Coiffure "+i} loading="lazy" style={{width:"100%",height:280,objectFit:"cover",display:"block",transition:"transform .65s ease,filter .5s ease",filter:"brightness(.88) saturate(.85)"}}/>
                </div>
              ))}
            </div>
          </div>
          <div style={{marginBottom:"4rem"}}>
            <div style={{fontSize:11,letterSpacing:".3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"1.5rem"}}>Couleurs et Balayages</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:12}}>
              {IMG.couleurs.map((src,i)=>(
                <div key={i} className="gal-item gi" style={{overflow:"hidden",borderRadius:2}}>
                  <img src={src} alt={"Couleur Siwar Coiffure "+i} loading="lazy" style={{width:"100%",height:280,objectFit:"cover",display:"block",transition:"transform .65s ease,filter .5s ease",filter:"brightness(.88) saturate(.85)"}}/>
                </div>
              ))}
            </div>
          </div>
          <div style={{marginBottom:"4rem"}}>
            <div style={{fontSize:11,letterSpacing:".3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"1.5rem"}}>Meches</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:12}}>
              {IMG.meches.map((src,i)=>(
                <div key={i} className="gal-item gi" style={{overflow:"hidden",borderRadius:2}}>
                  <img src={src} alt={"Meches Siwar Coiffure "+i} loading="lazy" style={{width:"100%",height:280,objectFit:"cover",display:"block",transition:"transform .65s ease,filter .5s ease",filter:"brightness(.88) saturate(.85)"}}/>
                </div>
              ))}
            </div>
          </div>
          <div style={{marginBottom:"4rem"}}>
            <div style={{fontSize:11,letterSpacing:".3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"1.5rem"}}>Chignons et Mariages</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:12}}>
              {IMG.chignons.map((src,i)=>(
                <div key={i} className="gal-item gi" style={{overflow:"hidden",borderRadius:2}}>
                  <img src={src} alt={"Chignon Siwar Coiffure "+i} loading="lazy" style={{width:"100%",height:280,objectFit:"cover",display:"block",transition:"transform .65s ease,filter .5s ease",filter:"brightness(.88) saturate(.85)"}}/>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:11,letterSpacing:".3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"1.5rem"}}>Lissages</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:12}}>
              {IMG.lissages.map((src,i)=>(
                <div key={i} className="gal-item gi" style={{overflow:"hidden",borderRadius:2}}>
                  <img src={src} alt={"Lissage Siwar Coiffure "+i} loading="lazy" style={{width:"100%",height:360,objectFit:"cover",display:"block",transition:"transform .65s ease,filter .5s ease",filter:"brightness(.88) saturate(.85)"}}/>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="rv" style={{background:"var(--bg2)",padding:"clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)",borderTop:"1px solid var(--line)"}}>
          <div style={{maxWidth:1440,margin:"0 auto"}}>
            <div style={{marginBottom:"5rem"}}>
              <span style={sl}>Temoignages Clients</span>
              <h2 style={h2s(5.5)}>
                <span className="rvtl" style={tl}>Elles nous font</span>
                <span className="rvtl" style={tl}>confiance</span>
              </h2>
            </div>
            <div id="rg" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:"1.5rem"}}>
              {REVIEWS.map((r,i)=>(
                <div key={i} className="rc" style={{background:"var(--surf)",border:"1px solid var(--line)",borderRadius:4,padding:"2.75rem",transition:"border-color .3s"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(200,169,110,.38)"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor="var(--line)"}>
                  <span style={{fontSize:13,color:"var(--accent)",letterSpacing:".1em",display:"block",marginBottom:"1.5rem"}}>*****</span>
                  <p style={{fontFamily:"var(--serif)",fontSize:17,fontStyle:"italic",lineHeight:1.65,marginBottom:"2rem"}}>{r.text}</p>
                  <div style={{fontSize:11,letterSpacing:".22em",textTransform:"uppercase",color:"var(--accent)"}}>{r.name}</div>
                  <div style={{fontSize:12,color:"var(--text-m)",marginTop:".3rem"}}>Cliente fidele - {r.src}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="ct" style={{padding:"clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)",maxWidth:1440,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"clamp(3rem,6vw,7rem)",alignItems:"start"}}>
          <div>
            <span style={sl}>Nous Trouver</span>
            <h2 style={{...h2s(5),marginBottom:"3rem"}}>
              <span className="cttl" style={tl}>Venez nous</span>
              <span className="cttl" style={tl}>rendre visite</span>
            </h2>
            {[
              {l:"Adresse", v:<a href="https://maps.google.com/?q=8+rue+du+Puits+Neuf+13100+Aix-en-Provence" target="_blank" rel="noopener noreferrer">8 rue du Puits Neuf<br/>13100 Aix-en-Provence</a>},
              {l:"Telephone", v:<><a href="tel:+33695553468">06 95 55 34 68</a><br/><a href="tel:+33952822049" style={{fontSize:16,color:"var(--text-d)"}}>09 52 82 20 49</a></>},
              {l:"Reservation", v:<a href="tel:+33695553468">Appelez pour reserver</a>},
              {l:"Clientele", v:<span style={{fontSize:16,color:"var(--text-d)"}}>Femmes - Enfants - Etudiants</span>},
            ].map(({l,v})=>(
              <div key={l} className="ci" style={{marginBottom:"2.5rem"}}>
                <span style={{fontSize:11,letterSpacing:".32em",textTransform:"uppercase",color:"var(--accent)",display:"block",marginBottom:".7rem"}}>{l}</span>
                <div style={{fontFamily:"var(--serif)",fontSize:19,fontWeight:300,color:"var(--text)",lineHeight:1.5}}>{v}</div>
              </div>
            ))}
            <a href="tel:+33695553468" className="btn-primary mag" style={{marginTop:".5rem"}}>Reserver par telephone</a>
          </div>
          <div>
            <span style={{...sl,marginBottom:"1.5rem"}}>Horaires d Ouverture</span>
            <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:".7rem 2.5rem",marginBottom:"3rem"}}>
              {HOURS.map(h=>(
                <>
                  <span key={"d"+h.day} style={{fontSize:13,color:h.day===TODAY?"var(--accent)":"var(--text-d)"}}>{h.day}</span>
                  <span key={"t"+h.day} style={{fontSize:13,color:h.day===TODAY?"var(--accent)":"var(--text-m)"}}>{h.time}</span>
                </>
              ))}
            </div>
            <div style={{background:"var(--surf)",border:"1px solid var(--line)",borderRadius:4,padding:"2rem 2.2rem",marginBottom:"1.5rem"}}>
              <div style={{fontSize:11,letterSpacing:".3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"1rem"}}>Localisation</div>
              <p style={{fontFamily:"var(--serif)",fontSize:16,color:"var(--text-d)",lineHeight:1.7,marginBottom:"1.25rem"}}>Au coeur du centre-ville d Aix-en-Provence, a deux pas de l Hotel de Ville.</p>
              <a href="https://maps.google.com/?q=8+rue+du+Puits+Neuf+13100+Aix-en-Provence" target="_blank" rel="noopener noreferrer" style={{fontSize:11,letterSpacing:".18em",textTransform:"uppercase",color:"var(--accent)",textDecoration:"none"}}>Voir sur Google Maps</a>
            </div>
            <div style={{background:"var(--surf)",border:"1px solid var(--line)",borderRadius:4,padding:"2rem 2.2rem"}}>
              <div style={{fontSize:11,letterSpacing:".3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"1rem"}}>Reseaux Sociaux</div>
              <div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
                <a href="https://www.facebook.com/coiffeuraixenprovence/" target="_blank" rel="noopener noreferrer" style={{fontSize:11,letterSpacing:".18em",textTransform:"uppercase",color:"var(--accent)",textDecoration:"none"}}>Facebook</a>
                <a href="https://www.instagram.com/siwarcoiffure/" target="_blank" rel="noopener noreferrer" style={{fontSize:11,letterSpacing:".18em",textTransform:"uppercase",color:"var(--accent)",textDecoration:"none"}}>Instagram</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer style={{borderTop:"1px solid var(--line)",padding:"clamp(1.5rem,2.5vw,2.2rem) clamp(1.5rem,4vw,3.5rem)",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1rem"}}>
        <div style={{fontFamily:"var(--serif)",fontSize:".95rem",letterSpacing:".15em",color:"var(--text-m)"}}>SIWAR COIFFURE - Aix-en-Provence</div>
        <div style={{fontSize:11,color:"var(--text-m)",letterSpacing:".1em",textAlign:"center"}}>2024 Siwar Coiffure - 8 rue du Puits Neuf, 13100</div>
        <a href="https://www.facebook.com/coiffeuraixenprovence/" target="_blank" rel="noopener noreferrer" style={{fontSize:11,color:"var(--text-m)",letterSpacing:".15em",textTransform:"uppercase",textDecoration:"none"}}>Facebook</a>
      </footer>
    </>
  );
}
