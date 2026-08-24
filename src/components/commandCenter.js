// Command center and pages (scaffold)
// وظیفه: صفحات اصلی مانند مرکز فرماندهی، پروژه‌ها، اهداف و ...

export function renderCommandCenter(container = '#view'){
  const el = document.querySelector(container);
  if(!el) return;
  el.innerHTML = `<div class="page"><h2>در حال بارگذاری...</h2></div>`;
}
