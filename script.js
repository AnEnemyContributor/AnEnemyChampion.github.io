/* ========================= */
/* FILE: script.js           */
/* ========================= */
(function(){
  const support = document.querySelector('.btn-support');
  if(support){
    support.addEventListener('mouseenter', ()=>{
      support.setAttribute('aria-live','polite');
      support.dataset.boost = 'true';
    });
    support.addEventListener('mouseleave', ()=>{
      delete support.dataset.boost;
    });
    support.addEventListener('click', (e)=>{
      // playful wiggle without requiring JS for core
      support.style.transform='translateY(1px) scale(0.99)';
      setTimeout(()=>support.style.transform='', 140);
    });
  }
})();
