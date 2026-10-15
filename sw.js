var C='bpc-v2';
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(['/', '/assets/real-hero.webp','/assets/logo-48.webp','/assets/logo-96.webp','/assets/real-toilets.webp','/assets/real-showers.webp','/assets/fittings.webp','/assets/real-accessories.webp','/assets/real-basins.webp','/assets/sinks.webp'])}))});
self.addEventListener('fetch',function(e){
  var r=e.request;
  if(r.method!=='GET'||r.url.indexOf(location.origin)!==0)return;
  e.respondWith(caches.match(r).then(function(hit){
    return hit||fetch(r).then(function(res){
      var cp=res.clone();caches.open(C).then(function(c){c.put(r,cp)});return res;
    }).catch(function(){return caches.match('/')});
  }));
});
