import{S as Ee,i as Ie,s as Ae,l as u,r as $,a as T,m as h,n as d,u as w,h as i,c as x,p as o,b as E,K as n,v as qe,E as P,ac as M,L as ue,M as Ne,X as ze,w as C,x as U,q as ke,y as K,f as X,t as J,B as Q}from"../chunks/index-be97b319.js";import{w as Oe}from"../chunks/website-a5c234d3.js";import{H as ce}from"../chunks/heroic-ed168941.js";import"../chunks/index-d12d9590.js";function Be(l){let e,a,t,s,c,p,I,g,m;return{c(){e=u("div"),a=u("h1"),t=$("\xA0"),s=u("span"),c=$(l[0]),p=$("\xA0"),I=T(),g=u("h1"),m=$("Fresh Ice"),this.h()},l(A){e=h(A,"DIV",{class:!0});var _=d(e);a=h(_,"H1",{class:!0});var b=d(a);t=w(b,"\xA0"),s=h(b,"SPAN",{class:!0,"data-heading":!0});var D=d(s);c=w(D,l[0]),D.forEach(i),p=w(b,"\xA0"),b.forEach(i),I=x(_),g=h(_,"H1",{class:!0,"data-heading":!0});var f=d(g);m=w(f,"Fresh Ice"),f.forEach(i),_.forEach(i),this.h()},h(){o(s,"class","freeze svelte-kx1uk3"),o(s,"data-heading",l[0]),o(a,"class","mb-0"),o(g,"class","freeze mb-5 svelte-kx1uk3"),o(g,"data-heading","Fresh Ice"),o(e,"class","text-7xl sm:text-8xl")},m(A,_){E(A,e,_),n(e,a),n(a,t),n(a,s),n(s,c),n(a,p),n(e,I),n(e,g),n(g,m)},p(A,[_]){_&1&&qe(c,A[0]),_&1&&o(s,"data-heading",A[0])},i:P,o:P,d(A){A&&i(e)}}}function me(l){return l||(l=Math.round(100+Math.random()*150)),new Promise(e=>setTimeout(e,l))}function Re(l,e,a){let t=["Glacial","Colder","Icier","Purer","Tastier","Alaska"],s=-1,c="";async function p(){let m=s+1;a(0,c=""),m>t.length-1&&(m=0),s=m,await I(t[s]),m===t.length-1?await me(5e3):await me(2e3),await g(),setTimeout(p,1e3)}async function I(m){for(;c.length<m.length;)a(0,c=m.substring(0,c.length+1)),await me(300)}async function g(){for(;c.length>0;)a(0,c=c.substring(0,c.length-1)),await me()}return p(),[c]}class Ye extends Ee{constructor(e){super(),Ie(this,e,Re,Be,Ae,{})}}function Fe(l){let e,a,t,s,c,p,I,g,m,A,_,b,D,f,S,W,V,Z;return{c(){e=u("div"),a=u("div"),t=u("input"),s=T(),c=u("div"),p=u("input"),I=T(),g=u("div"),m=u("input"),A=T(),_=u("div"),b=u("input"),D=T(),f=u("div"),S=u("a"),W=$("Start"),this.h()},l(k){e=h(k,"DIV",{class:!0});var y=d(e);a=h(y,"DIV",{class:!0});var j=d(a);t=h(j,"INPUT",{type:!0,placeholder:!0,class:!0}),j.forEach(i),s=x(y),c=h(y,"DIV",{class:!0});var q=d(c);p=h(q,"INPUT",{type:!0,placeholder:!0,class:!0}),q.forEach(i),I=x(y),g=h(y,"DIV",{class:!0});var G=d(g);m=h(G,"INPUT",{type:!0,placeholder:!0,class:!0}),G.forEach(i),A=x(y),_=h(y,"DIV",{class:!0});var N=d(_);b=h(N,"INPUT",{type:!0,placeholder:!0,class:!0}),N.forEach(i),D=x(y),f=h(y,"DIV",{class:!0});var H=d(f);S=h(H,"A",{href:!0,class:!0,target:!0});var z=d(S);W=w(z,"Start"),z.forEach(i),H.forEach(i),y.forEach(i),this.h()},h(){o(t,"type","text"),o(t,"placeholder","Name"),o(t,"class","input input-bordered"),o(a,"class","form-control"),o(p,"type","email"),o(p,"placeholder","Email"),o(p,"class","input input-bordered"),o(c,"class","form-control"),o(m,"type","text"),o(m,"placeholder","Phone"),o(m,"class","input input-bordered"),o(g,"class","form-control"),o(b,"type","text"),o(b,"placeholder","Full Business Address"),o(b,"class","input input-bordered"),o(_,"class","form-control"),o(S,"href",l[4]),o(S,"class","btn btn-primary"),o(S,"target","_blank"),o(f,"class","form-control mt-6"),o(e,"class","card-body")},m(k,y){E(k,e,y),n(e,a),n(a,t),M(t,l[0]),n(e,s),n(e,c),n(c,p),M(p,l[1]),n(e,I),n(e,g),n(g,m),M(m,l[2]),n(e,A),n(e,_),n(_,b),M(b,l[3]),n(e,D),n(e,f),n(f,S),n(S,W),V||(Z=[ue(t,"input",l[5]),ue(p,"input",l[6]),ue(m,"input",l[7]),ue(b,"input",l[8])],V=!0)},p(k,[y]){y&1&&t.value!==k[0]&&M(t,k[0]),y&2&&p.value!==k[1]&&M(p,k[1]),y&4&&m.value!==k[2]&&M(m,k[2]),y&8&&b.value!==k[3]&&M(b,k[3]),y&16&&o(S,"href",k[4])},i:P,o:P,d(k){k&&i(e),V=!1,Ne(Z)}}}function Me(l,e,a){let t="",s="",c="",p="",I="";function g(){t=this.value,a(0,t)}function m(){s=this.value,a(1,s)}function A(){c=this.value,a(2,c)}function _(){p=this.value,a(3,p)}return l.$$.update=()=>{if(l.$$.dirty&15){let b=new Date().toLocaleDateString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric"}),D="Ice Vending Location Assessment Request...";const f="%0D%0A";let S=`Dear sirs, ${f+f} Please analyze my address to determine suitability of placing an Alaska Fresh Ice Vending Machine.`+f+f+"Thank you,"+f+f+t+f+f+f+"==================================="+f+` Name:    ${t}`+f+` Address: ${p}`+f+` Email:     ${s}`+f+` Phone:   ${c}`+f+` Date:      ${b}`+f+"==================================="+f+f;a(4,I=`mailto:${Oe.contactEmail}?subject=${D}&body=${S}`)}},[t,s,c,p,I,g,m,A,_]}class We extends Ee{constructor(e){super(),Ie(this,e,Me,Fe,Ae,{})}}function je(l){let e,a;return{c(){e=u("span"),a=$("Better Ice means Loyalty"),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Better Ice means Loyalty"),s.forEach(i),this.h()},h(){o(e,"slot","title")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function Ge(l){let e,a;return{c(){e=u("span"),a=$("Ever hold a piece of clear, heavy glacial ice? It\u2019s incredibly pure and dense, so it lasts an amazingly long time. Our cutting-edge purification technology results in similarly dense, fresh-tasting ice which melts more slowly than ordinary ice. Bulk-ice customers notice that our ice lasts longer, and come back for more."),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Ever hold a piece of clear, heavy glacial ice? It\u2019s incredibly pure and dense, so it lasts an amazingly long time. Our cutting-edge purification technology results in similarly dense, fresh-tasting ice which melts more slowly than ordinary ice. Bulk-ice customers notice that our ice lasts longer, and come back for more."),s.forEach(i),this.h()},h(){o(e,"slot","desc")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function He(l){let e,a;return{c(){e=u("span"),a=$("Returning traffic for You"),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Returning traffic for You"),s.forEach(i),this.h()},h(){o(e,"slot","title")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function Le(l){let e,a;return{c(){e=u("span"),a=$("Arizona is hot. We have an entire sector of our economy which depends on ice for outdoor work. You\u2019ve seen their trucks with a cooler strapped to the back. These customers need bulk ice every day. And once they try our ice, they will love how long it lasts in their cooler. Then they will return every day for more \u2014 driving traffic to your store."),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Arizona is hot. We have an entire sector of our economy which depends on ice for outdoor work. You\u2019ve seen their trucks with a cooler strapped to the back. These customers need bulk ice every day. And once they try our ice, they will love how long it lasts in their cooler. Then they will return every day for more \u2014 driving traffic to your store."),s.forEach(i),this.h()},h(){o(e,"slot","desc")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function Ce(l){let e,a;return{c(){e=u("span"),a=$("Increased Revenue for You"),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Increased Revenue for You"),s.forEach(i),this.h()},h(){o(e,"slot","title")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function Ue(l){let e,a;return{c(){e=u("span"),a=$("Trucked ice simply cannot compete in quality or cost. While they might someday upgrade their filtering equipment, yet they just cannot get around the high-overhead of fuel and labor involved in handling, trucking and storage of legacy bagged ice. Our machines manufacture the ice onsite with no human contamination or cost. This allows us to sell better ice at a lower price with a higher profit margin -- allowing us to pay you more for a quality vending location."),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Trucked ice simply cannot compete in quality or cost. While they might someday upgrade their filtering equipment, yet they just cannot get around the high-overhead of fuel and labor involved in handling, trucking and storage of legacy bagged ice. Our machines manufacture the ice onsite with no human contamination or cost. This allows us to sell better ice at a lower price with a higher profit margin -- allowing us to pay you more for a quality vending location."),s.forEach(i),this.h()},h(){o(e,"slot","desc")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function Ke(l){let e,a;return{c(){e=u("span"),a=$("Fat Signing Bonus for You"),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Fat Signing Bonus for You"),s.forEach(i),this.h()},h(){o(e,"slot","title")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function Xe(l){let e,a;return{c(){e=u("span"),a=$("Our machines are expensive \u2014 20x the cost of a typical vending machine, which means quality placement is critical. So we put a premium on solid location contracts in the form of a significant signing bonus for you. That's right, in addition to healthy monthly rent, we pay you a fat cash signing bonus \u2014 putting money in your pocket from day one."),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Our machines are expensive \u2014 20x the cost of a typical vending machine, which means quality placement is critical. So we put a premium on solid location contracts in the form of a significant signing bonus for you. That's right, in addition to healthy monthly rent, we pay you a fat cash signing bonus \u2014 putting money in your pocket from day one."),s.forEach(i),this.h()},h(){o(e,"slot","desc")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function Je(l){let e,a;return{c(){e=u("span"),a=$("Broad Service across Arizona"),this.h()},l(t){e=h(t,"SPAN",{slot:!0});var s=d(e);a=w(s,"Broad Service across Arizona"),s.forEach(i),this.h()},h(){o(e,"slot","title")},m(t,s){E(t,e,s),n(e,a)},p:P,d(t){t&&i(e)}}}function Qe(l){let e,a,t,s;return{c(){e=u("span"),a=$("Our machines are expensive because they\u2019re engineered to require very little maintenance. Each machine has smart remote monitoring and even live customer chat support. This allows us to provide service across the entire state of Arizona. "),t=u("br"),s=$("If you own a gas station, an RV park, or a truck stop and would like to add an excellent additional income stream, contact us for a free site assessment."),this.h()},l(c){e=h(c,"SPAN",{slot:!0});var p=d(e);a=w(p,"Our machines are expensive because they\u2019re engineered to require very little maintenance. Each machine has smart remote monitoring and even live customer chat support. This allows us to provide service across the entire state of Arizona. "),t=h(p,"BR",{}),s=w(p,"If you own a gas station, an RV park, or a truck stop and would like to add an excellent additional income stream, contact us for a free site assessment."),p.forEach(i),this.h()},h(){o(e,"slot","desc")},m(c,p){E(c,e,p),n(e,a),n(e,t),n(e,s)},p:P,d(c){c&&i(e)}}}function Ze(l){let e=!1,a=()=>{e=!1},t,s,c,p,I,g,m,A,_,b,D,f,S,W,V,Z,k,y,j,q,G,N,H,z,he,R,de,Y,F,B,ee,ge,ve,te,ye,_e,se,$e,we,ae,L,fe,be,Te;return ze(l[1]),m=new Ye({}),y=new ce({props:{url:"/mckinly3_vert.png",dir:"left",id:"quality",$$slots:{desc:[Ge],title:[je]},$$scope:{ctx:l}}}),q=new ce({props:{url:"/Mount_McKinley_vert.jpg",dir:"right",id:"foot-traffic",$$slots:{desc:[Le],title:[He]},$$scope:{ctx:l}}}),N=new ce({props:{url:"/mckinly2_vert.png",dir:"left",id:"revenue",$$slots:{desc:[Ue],title:[Ce]},$$scope:{ctx:l}}}),z=new ce({props:{url:"/mckinly4_vert.png",dir:"right",id:"bonus",$$slots:{desc:[Xe],title:[Ke]},$$scope:{ctx:l}}}),R=new ce({props:{url:"/mckinley5_vert.png",dir:"left",id:"service",$$slots:{desc:[Qe],title:[Je]},$$scope:{ctx:l}}}),L=new We({}),{c(){s=u("div"),c=u("div"),p=T(),I=u("div"),g=u("div"),C(m.$$.fragment),A=T(),_=u("p"),b=$("Do you own a gas station, mini-mart or RV park? Acquire a new income stream while helping us bring the fresh taste of Alaska\u2019s cold, dense glacial Ice to your customers!"),D=T(),f=u("p"),S=$("Our machines are beautiful, popular, useful and provide you with an extra stream of income!"),W=T(),V=u("a"),Z=$("Get Started"),k=T(),C(y.$$.fragment),j=T(),C(q.$$.fragment),G=T(),C(N.$$.fragment),H=T(),C(z.$$.fragment),he=T(),C(R.$$.fragment),de=T(),Y=u("div"),F=u("div"),B=u("div"),ee=u("h1"),ge=$("Get Started Today!"),ve=T(),te=u("p"),ye=$("We\u2019ll conduct a thorough site assessemnt to estimate viability of your business location. Contact us today to get started."),_e=T(),se=u("p"),$e=$("If your site fits our criteria, we\u2019ll arrange a meeting, come to an agreement, and issue your cash signing bonus."),we=T(),ae=u("div"),C(L.$$.fragment),this.h()},l(r){s=h(r,"DIV",{class:!0,id:!0,style:!0});var v=d(s);c=h(v,"DIV",{class:!0}),d(c).forEach(i),p=x(v),I=h(v,"DIV",{class:!0});var ne=d(I);g=h(ne,"DIV",{class:!0});var O=d(g);U(m.$$.fragment,O),A=x(O),_=h(O,"P",{class:!0});var oe=d(_);b=w(oe,"Do you own a gas station, mini-mart or RV park? Acquire a new income stream while helping us bring the fresh taste of Alaska\u2019s cold, dense glacial Ice to your customers!"),oe.forEach(i),D=x(O),f=h(O,"P",{class:!0});var ie=d(f);S=w(ie,"Our machines are beautiful, popular, useful and provide you with an extra stream of income!"),ie.forEach(i),W=x(O),V=h(O,"A",{class:!0,href:!0});var le=d(V);Z=w(le,"Get Started"),le.forEach(i),O.forEach(i),ne.forEach(i),v.forEach(i),k=x(r),U(y.$$.fragment,r),j=x(r),U(q.$$.fragment,r),G=x(r),U(N.$$.fragment,r),H=x(r),U(z.$$.fragment,r),he=x(r),U(R.$$.fragment,r),de=x(r),Y=h(r,"DIV",{class:!0,id:!0});var xe=d(Y);F=h(xe,"DIV",{class:!0});var pe=d(F);B=h(pe,"DIV",{class:!0});var re=d(B);ee=h(re,"H1",{class:!0});var Se=d(ee);ge=w(Se,"Get Started Today!"),Se.forEach(i),ve=x(re),te=h(re,"P",{class:!0});var Pe=d(te);ye=w(Pe,"We\u2019ll conduct a thorough site assessemnt to estimate viability of your business location. Contact us today to get started."),Pe.forEach(i),_e=x(re),se=h(re,"P",{class:!0});var De=d(se);$e=w(De,"If your site fits our criteria, we\u2019ll arrange a meeting, come to an agreement, and issue your cash signing bonus."),De.forEach(i),re.forEach(i),we=x(pe),ae=h(pe,"DIV",{class:!0});var Ve=d(ae);U(L.$$.fragment,Ve),Ve.forEach(i),pe.forEach(i),xe.forEach(i),this.h()},h(){o(c,"class","hero-overlay bg-opacity-80"),ke(c,"opacity",1-l[0]/200,!1),o(_,"class","mb-2 text-lg bold shadow-text-white svelte-eacghx"),o(f,"class","mb-5 text-lg bold shadow-text-white svelte-eacghx"),o(V,"class","btn btn-primary"),o(V,"href","#start"),o(g,"class","max-w-md py-6"),o(I,"class","hero-content text-center text-neutral-content"),o(s,"class","hero mb-5 mt-0 max-h-screen bgscroll"),o(s,"id","quality"),ke(s,"background-image","url(/mckinley_horz.png)"),o(ee,"class","text-5xl font-bold"),o(te,"class","pt-6"),o(se,"class","pt-3 pb-6"),o(B,"class","text-center md:text-left"),o(ae,"class","card flex-shrink-0 w-full max-w-[300px] shadow-2xl bg-base-100"),o(F,"class","hero-content flex-col md:flex-row-reverse"),o(Y,"class","hero py-14 bg-base-300 shadow mt-20"),o(Y,"id","start")},m(r,v){E(r,s,v),n(s,c),n(s,p),n(s,I),n(I,g),K(m,g,null),n(g,A),n(g,_),n(_,b),n(g,D),n(g,f),n(f,S),n(g,W),n(g,V),n(V,Z),E(r,k,v),K(y,r,v),E(r,j,v),K(q,r,v),E(r,G,v),K(N,r,v),E(r,H,v),K(z,r,v),E(r,he,v),K(R,r,v),E(r,de,v),E(r,Y,v),n(Y,F),n(F,B),n(B,ee),n(ee,ge),n(B,ve),n(B,te),n(te,ye),n(B,_e),n(B,se),n(se,$e),n(F,we),n(F,ae),K(L,ae,null),fe=!0,be||(Te=ue(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(a,100),l[1]()}),be=!0)},p(r,[v]){v&1&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,r[0]),t=setTimeout(a,100)),v&1&&ke(c,"opacity",1-r[0]/200,!1);const ne={};v&4&&(ne.$$scope={dirty:v,ctx:r}),y.$set(ne);const O={};v&4&&(O.$$scope={dirty:v,ctx:r}),q.$set(O);const oe={};v&4&&(oe.$$scope={dirty:v,ctx:r}),N.$set(oe);const ie={};v&4&&(ie.$$scope={dirty:v,ctx:r}),z.$set(ie);const le={};v&4&&(le.$$scope={dirty:v,ctx:r}),R.$set(le)},i(r){fe||(X(m.$$.fragment,r),X(y.$$.fragment,r),X(q.$$.fragment,r),X(N.$$.fragment,r),X(z.$$.fragment,r),X(R.$$.fragment,r),X(L.$$.fragment,r),fe=!0)},o(r){J(m.$$.fragment,r),J(y.$$.fragment,r),J(q.$$.fragment,r),J(N.$$.fragment,r),J(z.$$.fragment,r),J(R.$$.fragment,r),J(L.$$.fragment,r),fe=!1},d(r){r&&i(s),Q(m),r&&i(k),Q(y,r),r&&i(j),Q(q,r),r&&i(G),Q(N,r),r&&i(H),Q(z,r),r&&i(he),Q(R,r),r&&i(de),r&&i(Y),Q(L),be=!1,Te()}}}function et(l,e,a){let t;function s(){a(0,t=window.pageYOffset)}return[t,s]}class nt extends Ee{constructor(e){super(),Ie(this,e,et,Ze,Ae,{})}}export{nt as default};