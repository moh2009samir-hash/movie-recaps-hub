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
