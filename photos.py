import re

WIX = "https://static.wixstatic.com/media/"

new_imgs = '''const WIX = "https://static.wixstatic.com/media/";
const IMG = {
  devanture: WIX + "1fe871bf139c4c8892c591944e708241.jpg",
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
};'''

# Also build the new gallery section with categories
new_gallery = '''        <section id="ga" style={{padding:"clamp(4rem,8vw,9rem) clamp(1.5rem,4vw,3.5rem)",maxWidth:1440,margin:"0 auto"}}>
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
        </section>'''

with open('app/page.jsx', 'r') as f:
    content = f.read()

# Replace IMG block
content = re.sub(
    r'const WIX = ".*?";.*?const IMG = \{.*?\};',
    new_imgs,
    content,
    flags=re.DOTALL
)

# Replace hero background - use devanture
content = content.replace(
    'backgroundImage:"url("+IMG.devanture+")"',
    'backgroundImage:"url("+IMG.devanture+")"'
)

# Replace about image - use about photo
content = content.replace(
    'src={IMG.hair2}',
    'src={IMG.about}'
)

# Replace gallery section
content = re.sub(
    r'<section id="ga".*?</section>',
    new_gallery,
    content,
    flags=re.DOTALL
)

with open('app/page.jsx', 'w') as f:
    f.write(content)
print('OK - photos updated')
