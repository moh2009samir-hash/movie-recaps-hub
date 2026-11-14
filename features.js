// Club Stream: رسالة الترحيب + عداد الوقت + فيديوهات لانهائية في الصفحة + الإعدادات (سياسة الخصوصية والتواصل)
(function(){
  // ---------- الستايل ----------
  var css = '' +
    '#cs_wel{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px}' +
    '.cs-wbox{background:#19191F;border:1px solid #2a2a33;border-radius:18px;padding:22px;max-width:360px;color:#fff;line-height:1.9;text-align:right}' +
    '.cs-wbox h3{margin:0 0 8px;font-size:19px;color:#A855F7}' +
    '.cs-wbox p{margin:0 0 10px;font-size:14px;color:#ddd}' +
    '.cs-wbox button{width:100%;background:#7C3AED;color:#fff;border:0;border-radius:12px;padding:11px;font-size:16px;cursor:pointer;margin-top:6px}' +
    '.cs-tm{font-size:11px;color:#9a9aa5;white-space:nowrap}' +
    '.cs-card{background:#19191F;border:1px solid #2a2a33;border-radius:14px;padding:16px;margin:0 0 12px;color:#fff}' +
    '.cs-card h4{margin:0 0 10px;font-size:16px}' +
    '.cs-card p{margin:0;font-size:13px;color:#b5b5c0;line-height:1.9}' +
    '.cs-wa{display:block;text-align:center;background:#16a34a;color:#fff;text-decoration:none;border-radius:12px;padding:12px;font-size:15px;margin-top:6px}' +
    '.cs-feedttl{font-size:17px;font-weight:700;margin:18px 0 10px;color:#fff}' +
    '.cs-fgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}' +
    '.cs-fc{background:none;border:0;padding:0;color:#fff;text-align:right;cursor:pointer;font:inherit}' +
    '.cs-fi{display:block;width:100%;aspect-ratio:16/9;border-radius:12px;background-size:cover;background-position:center;margin-bottom:6px}' +
    '.cs-fc b{display:block;font-size:13px;line-height:1.4}' +
    '.cs-fc small{display:block;font-size:11px;color:#9a9aa5;margin-top:2px}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // ---------- عداد الوقت ----------
  var TM_KEY = 'cs_time';
  function getSec(){ try{ return parseInt(localStorage.getItem(TM_KEY) || '0', 10) || 0; }catch(e){ return 0; } }
  function fmt(s){
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return 'قضيت: ' + h + ' ساعة و' + m + ' دقيقة';
  }
  setInterval(function(){
    if(document.hidden) return;
    var s = getSec() + 1;
    try{ localStorage.setItem(TM_KEY, String(s)); }catch(e){}
    var el = document.getElementById('cs_tm');
    if(el) el.textContent = fmt(s);
  }, 1000);

  // ---------- الهيدر: اسم Club Stream + العداد ----------
  window.topbar = function(){
    return '<div class="topbar"><div class="brand">Club<span> Stream</span></div>' +
      '<div class="cs-tm" id="cs_tm">' + fmt(getSec()) + '</div>' +
      '<div><button class="iconbtn" onclick="go(\'search\')">' + ic(P.search) + '</button>' +
      '<button class="iconbtn" onclick="go(\'settings\')">' + ic(P.menu) + '</button></div></div>';
  };

  // ---------- رسالة الترحيب (تظهر مرة واحدة) ----------
  function showWelcome(){
    try{ if(localStorage.getItem('cs_welcomed')) return; }catch(e){ return; }
    var d = document.createElement('div');
    d.id = 'cs_wel';
    d.innerHTML = '<div class="cs-wbox">' +
      '<h3>أهلاً بيك في Club Stream</h3>' +
      '<p>أنا <b>Mohammed Samir</b>، صانع ومشرف البرنامج.</p>' +
      '<p>الهدف من البرنامج ده إنه يساعدك تتخلص من التعفن الدماغي، ويخليك تشوف محتوى مفيد ومسلي من أحسن قنوات يوتيوب في مكان واحد.</p>' +
      '<p>خد وقتك واختار اللي يفيدك، ومتنساش تقفل الفون وتتمشى شوية.</p>' +
      '<button id="cs_wbtn">تم</button></div>';
    document.body.appendChild(d);
    document.getElementById('cs_wbtn').onclick = function(){
      try{ localStorage.setItem('cs_welcomed', '1'); }catch(e){}
      d.remove();
    };
  }

  // ---------- الإعدادات: بدل لوحة المشرف ----------
  function card(title, body){
    return '<div class="cs-card"><h4>' + title + '</h4>' + body + '</div>';
  }
  SCR.settings = function(){
    return '<button class="cs-back" onclick="go(\'home\')">رجوع</button>' +
      card('معلومات التطبيق',
        '<p>Club Stream بيجمع كل قنوات يوتيوب المختارة في مكان واحد: أفلام ومسلسلات، رياضة، أنمي، تقنية، علوم، أخبار، تلاوات، سفر، طبخ، وأكتر.</p>') +
      card('سياسة الخصوصية',
        '<p>التطبيق مش بيجمع بياناتك الشخصية ولا بيبعتها لحد. الاسم اللي بتكتبه للمتابعة بيتحفظ على جهازك بس.</p>' +
        '<p>الفيديوهات بتتشغل من مشغل يوتيوب الرسمي، والتطبيق مش بيحمّل ولا بيعيد نشر أي فيديو.</p>' +
        '<p>لو عايز تمسح كل بياناتك، امسح بيانات الموقع من إعدادات المتصفح.</p>') +
      card('تواصل',
        '<p>لأي استفسار أو اقتراح كلمني على واتساب:</p>' +
        '<a class="cs-wa" href="https://wa.me/201009714231" target="_blank" rel="noopener">واتساب: 01009714231</a>');
  };

  // ---------- صفحة الفيديو: فيديوهات عشوائية بلا نهاية ----------
  function shuffle(a){
    for(var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  var FEED = [], FEED_I = 0, OBS = null;
  function feedCard(v){
    return '<button class="cs-fc" onclick="play(\'' + v.id + '\')">' +
      '<span class="cs-fi" style="background:' + (v.bg || '#19191F') + '"></span>' +
      '<b>' + esc(v.title) + '</b><small>' + esc(v.ch || '') + '</small></button>';
  }
  function fillFeed(){
    var g = document.getElementById('cs_fgrid');
    if(!g || !FEED.length) return;
    var html = '';
    for(var k = 0; k < 12; k++){
      if(FEED_I >= FEED.length){ FEED = shuffle(FEED.slice()); FEED_I = 0; }
      html += feedCard(FEED[FEED_I++]);
    }
    g.insertAdjacentHTML('beforeend', html);
  }
  var origPlayer = SCR.player;
  SCR.player = function(){
    var page = origPlayer();
    FEED = shuffle(window.vids().filter(function(v){
      return String(v.id).indexOf('yt-') === 0 && v.id !== S.vid;
    }));
    FEED_I = 0;
    setTimeout(function(){
      fillFeed();
      var sentinel = document.getElementById('cs_more');
      if(OBS) OBS.disconnect();
      if(sentinel && 'IntersectionObserver' in window){
        OBS = new IntersectionObserver(function(entries){
          if(entries[0].isIntersecting) fillFeed();
        }, {rootMargin: '300px'});
        OBS.observe(sentinel);
      }
    }, 0);
    return page + '<div class="cs-feedttl">فيديوهات مقترحة</div>' +
      '<div class="cs-fgrid" id="cs_fgrid"></div><div id="cs_more" style="height:1px"></div>';
  };

  // ---------- تشغيل ----------
  render();
  setTimeout(showWelcome, 2600);
})();
