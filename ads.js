(function(){
var st=document.createElement('style');
st.textContent='.ad{flex:none;margin:12px 16px;height:60px;border:1px dashed #2c2c36;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#A8A8B3;font-size:12px;background:#19191F}';
document.head.appendChild(st);
function addAds(){
var a=document.getElementById('app');var sc=a.querySelector('.screen');if(!sc)return;
var ad='<div class="ad">مساحة إعلان</div>';
if(S.screen==='player')return;
var nav=a.querySelector('.nav');if(nav)nav.insertAdjacentHTML('beforebegin',ad);
if(S.screen==='home'){var s=sc.querySelectorAll('.section');if(s[1])s[1].insertAdjacentHTML('afterend',ad)}
if(S.screen==='details'){var r=sc.querySelector('.review');if(r)r.insertAdjacentHTML('afterend',ad)}
}
var old=render;
render=function(){old();addAds()};
})();
