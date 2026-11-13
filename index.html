// إصلاح 1: مشغل الفيديو يعرض iframe رسمي من YouTube
SCR.player = function(){
  var v = vids().filter(function(x){ return x.id === S.vid; })[0];
  if(!v) return '<div class="pad"><h1>الفيديو مش موجود</h1></div>';
  return '<div class="pad">'
    + '<button class="btn" onclick="back()">رجوع</button>'
    + '<div style="position:relative;width:100%;aspect-ratio:16/9;margin:12px 0">'
    + '<iframe src="https://www.youtube.com/embed/' + v.vid + '" allowfullscreen'
    + ' style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe></div>'
    + '<h1>' + esc(v.title) + '</h1>'
    + '<p>' + esc(v.ch || '') + ' · ' + esc(v.date || '') + '</p>'
    + '</div>';
};

// إصلاح 2: غلاف الفيلم من صورة الفيديو الرسمية على YouTube
var _bgOld = bg;
bg = function(m){
  var v = vids().filter(function(x){ return x.mid === m.id; })[0];
  if(v && v.vid){
    return 'linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.85)),url(https://img.youtube.com/vi/' + v.vid + '/hqdefault.jpg) center/cover no-repeat';
  }
  return _bgOld(m);
};

// إصلاح 3: الفيديو والمشرف ومساحة الإعلان في صفحة الفيلم
SCR.details = function(){
  var m = mv(S.sel);
  if(!m) return '<div class="pad">الفيلم غير موجود</div>';
  var f = S.favs.indexOf(m.id) >= 0;
  var V = vids().filter(function(v){ return v.mid === m.id; });
  var first = V[0];
  var player = first && first.vid
    ? '<div style="position:relative;width:100%;aspect-ratio:16/9;margin:12px 0">'
      + '<iframe src="https://www.youtube.com/embed/' + first.vid + '" allowfullscreen'
      + ' style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe></div>'
    : '';
  return '<div class="cover" style="background:' + bg(m) + '"><div class="shade"></div>'
    + '<button class="back" onclick="back()">' + ic(P.chev) + '</button>'
    + '<button class="back favbtn" style="color:' + (f ? '#E50914' : '#fff') + '" onclick="toggleFav(' + m.id + ')">' + ic(P.favs, f) + '</button></div>'
    + '<div class="pad" style="margin-top:-40px;position:relative">'
    + '<h1 style="font-size:28px">' + esc(m.title) + '</h1>'
    + '<div class="muted">' + esc(m.cat) + ' · ' + m.year + ' · ' + m.mins + ' دقيقة</div>'
    + player
    + '<div class="card" style="margin-top:14px"><b>رأي المشرف</b><p style="line-height:1.9;font-size:14px;color:#E6E6EC">' + esc(m.op) + '</p><div class="score">' + m.rating.toFixed(1) + '<span class="muted"> / 10</span></div></div>'
    + '<div class="ad" style="margin:14px 0;padding:18px;text-align:center;border:1px dashed #333;border-radius:12px;color:#888">مساحة إعلان</div>'
    + '<h2 style="font-size:17px;margin:22px 0 10px">فيديوهات التلخيص</h2>'
    + V.map(function(v){ return '<button class="item" onclick="play(\'' + v.id + '\')"><div class="img" style="width:120px;height:68px;background:' + v.bg + '"></div><div><b style="font-size:14px">' + esc(v.title) + '</b><div class="muted">' + esc(v.ch) + ' · ' + v.date + '</div></div></button>'; }).join('')
    + '</div>';
};
