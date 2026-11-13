// إصلاح مشغل الفيديو: iframe رسمي من YouTube
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
