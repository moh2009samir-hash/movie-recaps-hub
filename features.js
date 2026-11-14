// Club Stream: مقدمة أول مرة + عداد الوقت + ريلز لانهائي + فيديوهات مقترحة + الإعدادات + الرئيسية المفلترة
(function(){
  // ---------- الستايل ----------
  var css = '' +
    '#cs_wel{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px}' +
    '.cs-wbox{background:#19191F;border:1px solid #2a2a33;border-radius:18px;padding:22px;max-width:360px;width:100%;color:#fff;line-height:1.9;text-align:right}' +
    '.cs-wbox h3{margin:0 0 8px;font-size:19px;color:#A855F7}' +
    '.cs-wbox p{margin:0 0 10px;font-size:14px;color:#ddd}' +
    '.cs-wbox ul{margin:0 0 10px;padding-right:18px;font-size:14px;color:#ddd}' +
    '.cs-wdots{text-align:center;margin:6px 0 10px;color:#5a5a66;letter-spacing:4px}' +
    '.cs-wbtns{display:flex;gap:8px}' +
    '.cs-wbtns button{flex:1;background:#7C3AED;color:#fff;border:0;border-radius:12px;padding:11px;font-size:16px;cursor:pointer}' +
    '.cs-wbtns button.ghost{background:#2a2a33}' +
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
    '.cs-fc small{display:block;font-size:11px;color:#9a9aa5;margin-top:2px}' +
    '#cs_reels{position:fixed;inset:0;background:#000;z-index:300;overflow-y:auto;scroll-snap-type:y mandatory}' +
    '.cs-rl{position:relative;height:100vh;height:100dvh;scroll-snap-align:start;background:#000;overflow:hidden}' +
    '.cs-rbg{position:absolute;inset:0;background-size:cover;background-position:center;filter:blur(18px) brightness(.5)}' +
    '.cs-rl iframe{position:absolute;inset:0;width:100%;height:100%;border:0}' +
    '.cs-rplay{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:76px;height:76px;border-radius:50%;border:0;background:rgba(124,58,237,.92);color:#fff;font-size:30px;cursor:pointer;padding-left:6px}' +
    '.cs-rl.on .cs-rplay{display:none}' +
    '.cs-rinfo{position:absolute;bottom:22px;right:14px;left:70px;color:#fff;text-align:right;text-shadow:0 1px 4px #000;pointer-events:none}' +
    '.cs-rinfo b{display:block;font-size:15px;line-height:1.4}' +
    '.cs-rinfo small{font-size:12px;color:#ddd}' +
    '#cs_rclose{position:fixed;top:12px;left:12px;z-index:301;background:rgba(0,0,0,.6);color:#fff;border:0;border-radius:50%;width:40px;height:40px;font-size:18px;cursor:pointer}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function shuffle(a){
    for(var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

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

  // ---------- الهيدر ----------
  window.topbar = function(){
    return '<div class="topbar"><div class="brand">Club<span> Stream</span></div>' +
      '<div class="cs-tm" id="cs_tm">' + fmt(getSec()) + '</div>' +
      '<div><button class="iconbtn" onclick="go(\'search\')">' + ic(P.search) + '</button>' +
      '<button class="iconbtn" onclick="go(\'settings\')">' + ic(P.menu) + '</button></div></div>';
  };

  // ---------- مقدمة أول مرة ----------
  var SLIDES = [
    '<h3>أهلاً بيك في Club Stream</h3>' +
      '<p>ده تطبيق بيجمع لك أحسن قنوات يوتيوب في مكان واحد، من أفلام ومسلسلات ورياضة وأنمي وتقنية وعلوم وتلاوات وسفر وطبخ، وأكتر.</p>',
    '<h3>إيه اللي جوه التطبيق؟</h3>' +
      '<ul><li>كل قناة ليها صفحة فيها كل فيديوهاتها وشورتسها.</li>' +
      '<li>الأقسام مرتبة لوحدها، تختار اللي يهمك.</li>' +
      '<li>زرار الريلز في النص بيفتحلك شورتس طولي بلا نهاية.</li>' +
      '<li>تقدر تتابع أي قناة وتظهرلك في الرئيسية.</li></ul>',
    '<h3>ليه التطبيق ده؟</h3>' +
      '<p>أنا <b>Mohammed Samir</b>، صانع ومشرف البرنامج. هدفه إنه يساعدك تتخلص من التعفن الدماغي، ويخليك تشوف محتوى مفيد ومسلي.</p>' +
      '<p>خد وقتك واختار اللي يفيدك، ومتنساش تتمشى شوية بعيد عن الشاشة.</p>'
  ];
  var SI = 0;
  function renderSlide(d){
    var last = SI === SLIDES.length - 1;
    d.querySelector('.cs-wbody').innerHTML = SLIDES[SI];
    d.querySelector('.cs-wdots').textContent = SLIDES.map(function(_, i){ return i === SI ? '●' : '○'; }).join(' ');
    var nxt = d.querySelector('#cs_wnext');
    nxt.textContent = last ? 'تم' : 'التالي';
  }
  function closeWelcome(d){
    try{ localStorage.setItem('cs_welcomed', '1'); }catch(e){}
    d.remove();
  }
  function showWelcome(){
    try{ if(localStorage.getItem('cs_welcomed')) return; }catch(e){ return; }
    SI = 0;
    var d = document.createElement('div');
    d.id = 'cs_wel';
    d.innerHTML = '<div class="cs-wbox"><div class="cs-wbody"></div>' +
      '<div class="cs-wdots"></div>' +
      '<div class="cs-wbtns"><button class="ghost" id="cs_wskip">تخطي</button><button id="cs_wnext">التالي</button></div></div>';
    document.body.appendChild(d);
    renderSlide(d);
    d.querySelector('#cs_wskip').onclick = function(){ closeWelcome(d); };
    d.querySelector('#cs_wnext').onclick = function(){
      if(SI === SLIDES.length - 1){ closeWelcome(d); return; }
      SI++;
      renderSlide(d);
    };
  }

  // ---------- الإعدادات ----------
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

  // ---------- الريلز: شورتس طولي بلا نهاية ----------
  var REELS = [], RI = 0, ROBS = null, RLOBS = null;
  function reelItem(v){
    return '<div class="cs-rl" data-vid="' + v.vid + '">' +
      '<div class="cs-rbg" style="background-image:' + (v.bg || 'none') + '"></div>' +
      '<button class="cs-rplay" aria-label="تشغيل">▶</button>' +
      '<div class="cs-rinfo"><b>' + esc(v.title) + '</b><small>' + esc(v.ch || '') + '</small></div></div>';
  }
  function addReels(){
    var box = document.getElementById('cs_rlist');
    if(!box || !REELS.length) return;
    var html = '';
    for(var k = 0; k < 8; k++){
      if(RI >= REELS.length){ REELS = shuffle(REELS.slice()); RI = 0; }
      html += reelItem(REELS[RI++]);
    }
    box.insertAdjacentHTML('beforeend', html);
    bindReels();
  }
  function loadReel(el){
    var f = el.querySelector('iframe');
    if(f) return;
    var vid = el.getAttribute('data-vid');
    var frame = document.createElement('iframe');
    frame.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    frame.setAttribute('allowfullscreen', '');
    frame.src = 'https://www.youtube.com/embed/' + vid + '?autoplay=1&playsinline=1&rel=0&modestbranding=1';
    el.appendChild(frame);
    el.classList.add('on');
  }
  function unloadReel(el){
    var f = el.querySelector('iframe');
    if(f){ f.remove(); el.classList.remove('on'); }
  }
  function bindReels(){
    var root = document.getElementById('cs_reels');
    if(!root || !('IntersectionObserver' in window)) return;
    if(!ROBS){
      ROBS = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          var el = en.target;
          if(en.isIntersecting && en.intersectionRatio > 0.6){
            // شغّل الحالي ووقّف الباقي عشان مفيش صوت فوق بعض
            Array.prototype.forEach.call(root.querySelectorAll('.cs-rl.on'), function(o){
              if(o !== el) unloadReel(o);
            });
            loadReel(el);
          }
        });
      }, {root: root, threshold: [0, 0.6, 1]});
    }
    if(!RLOBS){
      RLOBS = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting) addReels();
      }, {root: root, rootMargin: '400px'});
    }
    Array.prototype.forEach.call(root.querySelectorAll('.cs-rl:not([data-b])'), function(el){
      el.setAttribute('data-b', '1');
      ROBS.observe(el);
      var btn = el.querySelector('.cs-rplay');
      if(btn) btn.onclick = function(){ loadReel(el); };
    });
    var more = document.getElementById('cs_rmore');
    if(more){ RLOBS.disconnect(); RLOBS.observe(more); }
  }
  SCR.reels = function(){
    REELS = shuffle((window.CS_SHORTS || []).slice());
    RI = 0;
    if(ROBS){ ROBS.disconnect(); ROBS = null; }
    if(RLOBS){ RLOBS.disconnect(); RLOBS = null; }
    setTimeout(function(){
      var root = document.getElementById('cs_reels');
      if(root) root.scrollTop = 0;
      addReels();
    }, 0);
    return '<div id="cs_reels"><button id="cs_rclose" onclick="go(\'home\')">✕</button>' +
      '<div id="cs_rlist"></div><div id="cs_rmore" style="height:1px"></div></div>';
  };
  // زرار النص (المثلث) بيفتح الريلز بدل ما يشغل فيديو واحد
  window.playLatest = function(){
    S.screen = 'reels';
    render();
  };

  // ---------- صفحة الفيديو: فيديوهات مقترحة بلا نهاية ----------
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

  // ---------- الرئيسية: لو عامل حساب ومتابع قنوات، تظهر بس القنوات دي ----------
  var MAIN = ['الأفلام والمسلسلات','الرياضة','الألعاب','الأنمي','التقنية','العلوم','الأخبار'];
  var CAT_STYLE = {
    'الأفلام والمسلسلات':['#7C3AED','#2e1065','🎬'], 'الرياضة':['#15803d','#052e16','⚽'],
    'الألعاب':['#2563eb','#0b1d4d','🎮'], 'الأنمي':['#ea580c','#431407','🍥'],
    'التقنية':['#0891b2','#083344','💻'], 'العلوم':['#4f46e5','#1e1b4b','🔭'],
    'الأخبار':['#b91c1c','#3f0d0d','📰'], 'شورتس':['#E50914','#450a0a','▶']
  };
  function catBg2(g){ var s = CAT_STYLE[g] || CAT_STYLE['شورتس']; return 'linear-gradient(135deg,' + s[0] + ',' + s[1] + ')'; }
  function catIco2(g){ var s = CAT_STYLE[g] || CAT_STYLE['شورتس']; return s[2]; }
  function getUserName(){ try{ return localStorage.getItem('cs_user') || ''; }catch(e){ return ''; } }
  function getFollowList(){
    var u = getUserName(); if(!u) return [];
    try{ return JSON.parse(localStorage.getItem('cs_f_' + u) || '[]'); }catch(e){ return []; }
  }
  function loginBox(){
    var u = getUserName();
    if(u) return '<div class="cs-login"><span>أهلاً يا <b>' + esc(u) + '</b></span><button onclick="csLogout()">خروج</button></div>';
    return '<div class="cs-login"><input id="cs_name" placeholder="اكتب اسمك عشان تتابع القنوات"><button onclick="csLogin()">دخول</button></div>';
  }
  function miniCard(v){
    return '<button class="cs-fc" onclick="play(\'' + v.id + '\')"><span class="cs-fi" style="background:' + (v.bg || '#19191F') + '"></span><b>' + esc(v.title) + '</b><small>' + esc(v.ch || '') + '</small></button>';
  }
  function shortTile(v){
    return '<button class="cs-short" style="background:' + (v.bg || '#19191F') + '" onclick="play(\'' + v.id + '\')"></button><div class="cs-st">' + esc(v.title) + '</div>';
  }
  SCR.home = function(){
    var u = getUserName(), f = getFollowList();
    var filt = !!(u && f.length);
    function mine(x){ return !filt || f.indexOf(x.ch) >= 0; }
    var yt = window.vids().filter(function(v){ return String(v.id).indexOf('yt-') === 0 && mine(v); });
    var shorts = (window.CS_SHORTS || []).filter(mine);
    var s = loginBox();
    if(u && !f.length){
      return s + '<div class="cs-card"><h4>ابدأ بمتابعة القنوات</h4><p>اختار القنوات اللي تحبها، وهتظهر هنا فيديوهاتها بس.</p></div>' +
        '<button class="cs-back" onclick="go(\'channels\')">تصفح القنوات</button>';
    }
    if(filt && !yt.length && !shorts.length){
      return s + '<p style="text-align:center;color:#9a9aa5;padding:30px 0">القنوات اللي متابعها لسه مفيهاش فيديوهات</p>';
    }
    var h = yt[0];
    if(h){
      s += '<a class="cs-hero" href="javascript:void(0)" onclick="play(\'' + h.id + '\')"><span class="cs-badge">جديد</span>' +
        '<div class="cs-hbody"><h2>' + esc(h.title) + '</h2><p>' + esc(h.ch || '') + '</p><span class="cs-go">▶ مشاهدة الآن</span></div></a>';
    }
    if(yt.length){
      s += '<div class="cs-feedttl">أحدث الفيديوهات</div><div class="cs-fgrid">' + yt.slice(0, 6).map(miniCard).join('') + '</div>';
    }
    var cats = MAIN.concat(['شورتس']).map(function(g){
      var isS = g === 'شورتس';
      return '<button class="cs-catg" style="background:' + catBg2(g) + '" onclick="' + (isS ? "pickCat('شورتس')" : "csOpen('" + g + "')") + '"><span class="cs-ico">' + catIco2(g) + '</span><b>' + esc(g) + '</b></button>';
    }).join('');
    s += '<div class="cs-feedttl">الأقسام</div><div class="cs-cats">' + cats + '</div>';
    if(shorts.length){
      s += '<div class="cs-feedttl">شورتس</div><div class="cs-grid2">' + shorts.slice(0, 12).map(shortTile).join('') + '</div>';
    }
    MAIN.forEach(function(g){
      var vs = yt.filter(function(x){ return x.grp === g; }).slice(0, 12);
      if(vs.length){
        s += '<div class="cs-feedttl">' + esc(g) + '</div><div class="cs-fgrid">' + vs.map(miniCard).join('') + '</div>';
      }
    });
    return s;
  };

  // ---------- تشغيل ----------
  render();
  setTimeout(showWelcome, 2600);
})();
