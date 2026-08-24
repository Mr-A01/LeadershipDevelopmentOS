// Sidebar component (scaffold)
// وظیفه: رندر ساختار ناوبری و کار با تعاملات مربوط به سایدبار
// نکته: این فایل ساختاری اولیه است؛ در گام‌های بعدی منطق رندرینگ از app.js به این ماژول منتقل خواهد شد.

export function mountSidebar(rootSelector = '#sidebar') {
  const root = document.querySelector(rootSelector);
  if (!root) return;
  // نمونه محتوا تا زمانی که رندر اصلی منتقل شود
  root.innerHTML = `
    <div class="sb-brand">
      <div class="sb-logo">${'<svg/>'}</div>
      <div><h1>مسیر رهبری</h1><span>Leadership Development OS</span></div>
    </div>
    <nav class="sb-nav"></nav>
  `;
}
