// Club Stream: مقدمة أول مرة + عداد الوقت + الرئيسية العشوائية + ريلز + متابعة + حسابي + الإعدادات
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
    '.cs-chrow{display:flex;justify-content:space-between;align-items:center;gap:10px;background:#19191F;border:1px solid #2a2a33;border-radius:12px;padding:12px 14px;margin-bottom:8px;color:#fff}' +
    '.cs-chrow b{font-size:14px}' +
    '.cs-chrow button{background:#2a2a33;color:#fff;border:0;border-radius:10px;padding:7px 12px;font-family:inherit;font-size:13px;cursor:pointer}' +
    '#cs_reels{position:fixed;left:0;right:0;top:0;bottom:66px;background:#000;z-index:300;overflow-y:auto;scroll-snap-type:y mandatory}' +
    '.cs-rl{position:relative;height:100%;scroll-snap-align:start;background:#000;overflow:hidden}' +
    '.cs-rbg{position:absolute;inset:0;background-size:cover;background-position:center;filter:blur(18px) brightness(.5)}' +
    '.cs-rl iframe{position:absolute;inset:0;width:100%;height:100%;border:0}' +
    '.cs-rplay{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:76px;height:76px;border-radius:50%;border:0;background:rgba(124,58,237,.92);color:#fff;font-size:30px;cursor:pointer;padding-left:6px}' +
    '.cs-rl.on .cs-rplay{display:none}' +
    '.cs-cov{position:absolute;left:0;right:0;z-index:2;pointer-events:auto;cursor:default}' +
    '.cs-cov.t{top:0;height:60px;background:#000}' +
    '.cs-cov.b{bottom:0;height:95px;background:linear-gradient(transparent,#000 45%)}' +
    '.cs-cov.pt{top:0;height:64px;background:#000}' +
    '.cs-cov.pb{bottom:0;height:64px;background:#000}' +
    '.cs-rinfo{position:absolute;bottom:20px;right:14px;left:70px;z-index:3;color:#fff;text-align:right;text-shadow:0 1px 4px #000;pointer-events:none}' +
    '.cs-rinfo b{display:block;font-size:15px;line-height:1.4}' +
    '.cs-rinfo small{display:block;font-size:12px;color:#ddd}' +
    '.cs-rfol{pointer-events:auto;margin-top:10px;background:#7C3AED;color:#fff;border:0;border-radius:20px;padding:8px 16px;font-size:13px;font-family:inherit;cursor:pointer}' +
    '.cs-rfol.on{background:#2a2a33}' +
    '#cs_rclose{position:fixed;top:12px;left:12px;z-index:301;background:rgba(0,0,0,.6);color:#fff;border:0;border-radius:50%;width:40px;height:40px;font-size:18px;cursor:pointer}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function shuffle(a){
    for(var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // أيقونة الحساب
  P.account = 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0';

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

  // ---------- المستخدم والمتابعة ----------
  function getUserName(){ try{ return localStorage.getItem('cs_user') || ''; }catch(e){ return ''; } }
  function getFollowList(){
    var u = getUserName(); if(!u) return [];
    try{ return JSON.parse(localStorage.getItem('cs_f_' + u) || '[]'); }catch(e){ return []; }
  }
  function isFollowed(name){ return getFollowList().indexOf(name) >= 0; }
  function saveFollowList(f){
    var u = getUserName(); if(!u) return;
    try{ localStorage.setItem('cs_f_' + u, JSON.stringify(f)); }catch(e){}
  }
  // تبديل المتابعة لقناة بالاسم. لو مش مسجل، بيفتح صفحة حسابي
  window.csxToggle = function(name, btn){
    if(!getUserName()){ go('account'); return; }
    var f = getFollowList();
    var i = f.indexOf(name);
    if(i >= 0) f.splice(i, 1); else f.push(name);
    saveFollowList(f);
    if(btn){
      var on = i < 0;
      btn.textContent = on ? '✓ متابع' : '+ متابعة';
      btn.classList.toggle('on', on);
    } else {
      render();
    }
  };
  window.csxRF = function(btn){ window.csxToggle(btn.getAttribute('data-ch'), btn); };
  window.csxUnf = function(btn){ window.csxToggle(btn.getAttribute('data-ch'), null); };

  // ---------- رجوع: دايماً يرجع للرئيسية ----------
  window.back = function(){ S.screen = 'home'; render(); };

  // ---------- الهيدر (بحث + القائمة فوق) ----------
  window.topbar = function(){
    return '<div class="topbar"><div class="brand">Club<span> Stream</span></div>' +
      '<div class="cs-tm" id="cs_tm">' + fmt(getSec()) + '</div>' +
      '<div><button class="iconbtn" aria-label="بحث" onclick="go(\'search\')">' + ic(P.search) + '</button>' +
      '<button class="iconbtn" aria-label="القائمة" onclick="go(\'settings\')">' + ic(P.menu) + '</button></div></div>';
  };

  // ---------- الشريط السفلي: ثابت دايماً (حتى في الريلز والفيديو) ----------
  window.nav = function(){
    var items = [['home','الرئيسية',P.home],['cats','الأقسام',P.cats],null,['channels','القنوات',P.channels],['account','حسابي',P.account]];
    return '<nav class="nav2">' + items.map(function(n){
      if(!n) return '<button class="playc" onclick="playLatest()" aria-label="تشغيل">' + ic('M8 5v14l11-7z', true) + '</button>';
      return '<button class="' + (S.screen === n[0] ? 'on' : '') + '" onclick="go(\'' + n[0] + '\')">' + ic(n[2]) + '<span>' + n[1] + '</span></button>';
    }).join('') + '</nav>';
  };

  // ---------- تغطية شعار يوتيوب في مشغل الفيديو العادي ----------
  function coverFrames(){
    var fr = document.querySelectorAll('#app iframe');
    Array.prototype.forEach.call(fr, function(f){
      var src = f.getAttribute('src') || '';
      if(src.indexOf('youtube') < 0) return;
      if(f.closest && f.closest('#cs_reels')) return;
      var p = f.parentNode;
      if(!p || p.getAttribute('data-cov')) return;
      p.setAttribute('data-cov', '1');
      if(getComputedStyle(p).position === 'static') p.style.position = 'relative';
      p.style.overflow = 'hidden';
      p.insertAdjacentHTML('beforeend', '<div class="cs-cov pt"></div><div class="cs-cov pb"></div>');
    });
  }
  setInterval(coverFrames, 1000);

  // ---------- الرندر ----------
  window.render = function(){
    var a = document.getElementById('app');
    if(S.screen === 'splash'){
      a.innerHTML = '<div class="splash"><div class="logo">CLUB<small>STREAM</small></div><div class="muted">ملخصات ومحتوى من أفضل القنوات في مكان واحد</div></div>';
      return;
    }
    var main = ['home','channels','search','cats','favs','account','player','reels'].indexOf(S.screen) >= 0;
    var top = main && S.screen !== 'reels';
    a.innerHTML = '<div class="screen">' + (top ? topbar() : '') + SCR[S.screen]() + '</div>' + (main ? nav() : '');
    setTimeout(coverFrames, 300);
  };

  // ---------- مقدمة أول مرة ----------
  var SLIDES = [
    '<h3>أهلاً بيك في Club Stream</h3>' +
      '<p>ده تطبيق بيجمع لك أحسن قنوات يوتيوب في مكان واحد، من أفلام ومسلسلات ورياضة وأنمي وتقنية وعلوم وتلاوات وسفر وطبخ، وأكتر.</p>',
    '<h3>إيه اللي جوه التطبيق؟</h3>' +
      '<ul><li>الرئيسية فيها فيديوهات عشوائية بلا نهاية.</li>' +
      '<li>زرار الريلز في النص بيفتحلك شورتس طولي بلا نهاية.</li>' +
      '<li>تقدر تتابع أي قناة، وتلاقيها في صفحة حسابي.</li></ul>',
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

  // ---------- حسابي: تسجيل الدخول + القنوات اللي بتتابعها ----------
  function loginBox(){
    var u = getUserName();
    if(u) return '<div class="cs-login"><span>أهلاً يا <b>' + esc(u) + '</b></span><button onclick="csLogout()">خروج</button></div>';
    return '<div class="cs-login"><input id="cs_name" placeholder="اكتب اسمك عشان تتابع القنوات"><button onclick="csLogin()">دخول</button></div>';
  }
  SCR.account = function(){
    var u = getUserName(), f = getFollowList();
    var h = '<div class="pad"><h1>حسابي</h1>';
    if(!u){
      h += loginBox() +
        card('سجّل دخولك', '<p>اكتب اسمك عشان تتابع القنوات وتلاقيها هنا. الاسم بيتحفظ على جهازك بس.</p>');
      return h + '</div>';
    }
    h += '<div class="cs-card"><h4>أهلاً يا ' + esc(u) + '</h4>' +
      '<p>' + fmt(getSec()) + '</p>' +
      '<p>بتتابع <b>' + f.length + '</b> قناة</p></div>';
    h += '<div class="cs-feedttl">القنوات اللي بتتابعها</div>';
    if(!f.length){
      h += '<div class="cs-card"><p>لسه مش متابع أي قناة. ادخل على القنوات واضغط متابعة.</p></div>' +
        '<button class="cs-back" onclick="go(\'channels\')">تصفح القنوات</button>';
    } else {
      h += f.map(function(n){
        return '<div class="cs-chrow"><b>' + esc(n) + '</b><button data-ch="' + esc(n) + '" onclick="csxUnf(this)">إلغاء المتابعة</button></div>';
      }).join('');
    }
    h += '<div class="cs-feedttl">اختصارات</div>' +
      '<button class="cs-back" onclick="go(\'favs\')">المفضلة</button>' +
      '<button class="cs-back" onclick="go(\'settings\')">الإعدادات وسياسة الخصوصية</button>' +
      '<button class="cs-back" onclick="csLogout()">تسجيل الخروج</button>';
    return h + '</div>';
  };

  // ---------- الريلز: شورتس طولي بلا نهاية + زرار متابعة ----------
  var REELS = [], RI = 0, ROBS = null, RLOBS = null;
  function reelItem(v){
    var fol = isFollowed(v.ch);
    return '<div class="cs-rl" data-vid="' + v.vid + '">' +
      '<div class="cs-rbg" style="background-image:' + (v.bg || 'none') + '"></div>' +
      '<button class="cs-rplay" aria-label="تشغيل">▶</button>' +
      '<div class="cs-cov t"></div><div class="cs-cov b"></div>' +
      '<div class="cs-rinfo"><b>' + esc(v.title) + '</b><small>' + esc(v.ch || '') + '</small>' +
      '<button class="cs-rfol' + (fol ? ' on' : '') + '" data-ch="' + esc(v.ch || '') + '" onclick="csxRF(this)">' +
      (fol ? '✓ متابع' : '+ متابعة') + '</button></div></div>';
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
    frame.src = 'https://www.youtube.com/embed/' + vid + '?autoplay=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3';
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

  // ---------- كروت الفيديو (مشتركة) ----------
  function feedCard(v){
    return '<button class="cs-fc" onclick="play(\'' + v.id + '\')">' +
      '<span class="cs-fi" style="background:' + (v.bg || '#19191F') + '"></span>' +
      '<b>' + esc(v.title) + '</b><small>' + esc(v.ch || '') + '</small></button>';
  }

  // ---------- الرئيسية: فيديوهات عشوائية بلا نهاية ----------
  var HF = [], HI = 0, HOBS = null, HTRY = 0;
  function fillHome(){
    var g = document.getElementById('cs_hgrid');
    if(!g || !HF.length) return;
    var html = '';
    for(var k = 0; k < 12; k++){
      if(HI >= HF.length){ HF = shuffle(HF.slice()); HI = 0; }
      html += feedCard(HF[HI++]);
    }
    g.insertAdjacentHTML('beforeend', html);
  }
  SCR.home = function(){
    var list = window.vids().filter(function(v){ return String(v.id).indexOf('yt-') === 0; });
    if(!list.length){
      // الفيديوهات لسه بتتحمل: نعيد الرسم شوية لحد ما تيجي
      if(HTRY++ < 20) setTimeout(function(){ if(S.screen === 'home') render(); }, 1000);
      return '<p style="text-align:center;color:#9a9aa5;padding:40px 0">جاري تحميل الفيديوهات...</p>';
    }
    HTRY = 0;
    HF = shuffle(list.slice());
    HI = 0;
    setTimeout(function(){
      fillHome();
      var sen = document.getElementById('cs_hmore');
      if(HOBS) HOBS.disconnect();
      if(sen && 'IntersectionObserver' in window){
        HOBS = new IntersectionObserver(function(entries){
          if(entries[0].isIntersecting) fillHome();
        }, {rootMargin: '300px'});
        HOBS.observe(sen);
      }
    }, 0);
    return '<div class="cs-feedttl">فيديوهات عشوائية</div>' +
      '<div class="cs-fgrid" id="cs_hgrid"></div><div id="cs_hmore" style="height:1px"></div>';
  };

  // ---------- صفحة الفيديو: فيديوهات مقترحة بلا نهاية ----------
  var FEED = [], FEED_I = 0, OBS = null;
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
