(function(){
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(reg){
        console.log('ServiceWorker registered:', reg.scope);
      }).catch(function(err){ console.warn('SW registration failed:', err); });
    });
  }
  // PWA install prompt handling
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredPrompt = e;
    document.documentElement.classList.add('pwa-install-available');
    window.deferredPWAInstall = deferredPrompt; // expose for debugging
  });
  window.promptPWAInstall = async function(){
    if(!deferredPrompt) return false;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.documentElement.classList.remove('pwa-install-available');
    return choice && choice.outcome === 'accepted';
  };
})();
