// ربط القنوات بـ YouTube: بيجيب آخر فيديوهات كل قناة ويعرضها في الرئيسية
(function(){
  var KEY = 'AIzaSyCf1Jy5JxAXicOjjMa-RpusehjMybwckxM'; // مقيّد بموقعنا فقط
  var CH = [
    ['FilmFeEl5amsena','فيلم في الخمسينة'],['FilmGamed','فيلم جامد'],['Mekawi','ملخصات مكاوي'],
    ['GeorgeAshraf','جورج أشرف'],['Kokly','كوكلي'],['MoviesRoom','موفيز روم'],
    ['molakhasat7elwa','ملخصات حلوة'],['HDDRAMA','HD DRAMA'],['AlKholasaExtra','الخلاصة إكسترا'],
    ['FilmFeElBiko','فيلم في البيكو'],['Filmtchino','فيلمتشينو'],['FilmoAlaa','فيلمو علاء'],
    ['FilmCaps','Film Caps'],['filmalmashy','فيلم ع الماشي'],['molakhasataflam1','ملخصات أفلام'],
    ['ONdrama','ON drama'],['HashtagEnt','Hashtag Ent']
  ];
  var HOURS = 12, YT = [], base = null;

  function wrapped(){ return base().concat(YT); }
  setInterval(function(){ if(window.vids !== wrapped){ base = window.vids; window.vids = wrapped; } }, 300);

  function api(path){
    return fetch('https://www.googleapis.com/youtube/v3/' + path + '&key=' + KEY).then(function(r){ return r.json(); });
  }
  function load(c){
    return api('channels?part=contentDetails&forHandle=' + encodeURIComponent('@' + c[0])).then(function(j){
      var up = j.items && j.items[0] && j.items[0].contentDetails.relatedPlaylists.uploads;
      if(!up) return null;
      return api('playlistItems?part=snippet&maxResults=8&playlistId=' + up).then(function(p){
        var v = [];
        (p.items || []).forEach(function(it){
          var s = it.snippet, id = s.resourceId && s.resourceId.videoId;
          if(!id || s.title === 'Private video' || s.title === 'Deleted video') return;
          v.push({id:'yt-' + id, mid:null, title:s.title, ch:c[1],
            date:(s.publishedAt || '').slice(0,10).replace(/-/g,'/'), vid:id,
            bg:'url(https://i.ytimg.com/vi/' + id + '/mqdefault.jpg) center/cover'});
        });
        return v.length ? {name:c[1], v:v} : null;
      });
    }).catch(function(){ return null; });
  }
  function apply(res){
    var chans = [];
    YT.length = 0;
    res.forEach(function(r){
      if(!r) return;
      chans.push({name:r.name, ini:r.name.charAt(0), blurb:'ملخصات أفلام ومسلسلات'});
      r.v.forEach(function(x){ YT.push(x); });
    });
    if(chans.length){
      window.CHANNELS = chans;
      try{ if(window.S && S.screen === 'home') render(); }catch(e){}
    }
  }
  var cached = null;
  try{ cached = JSON.parse(localStorage.getItem('ytc1') || 'null'); }catch(e){}
  if(cached && Date.now() - cached.t < HOURS * 3600000){ apply(cached.d); return; }
  Promise.all(CH.map(load)).then(function(res){
    apply(res);
    try{ localStorage.setItem('ytc1', JSON.stringify({t:Date.now(), d:res})); }catch(e){}
  });
})();
