'use strict';
/* ================= ICONS ================= */
const IC={
logo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="M12 11l8-4.5M12 11v9M12 11L4 6.5"/></svg>',
grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>',
target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>',
clipboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h4"/></svg>',
layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
pie:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
briefcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>',
users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
msg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>',
user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>',
x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>',
alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12" y2="17.01"/></svg>',
check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
checkc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><polyline points="22 4 12 14 9 11"/></svg>',
up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 12 6 7 11"/><line x1="12" y1="6" x2="12" y2="18"/></svg>',
down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"/><line x1="12" y1="18" x2="12" y2="6"/></svg>',
plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
more:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="8.01"/></svg>',
filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/></svg>',
lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
headphones:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>'
};

/* ================= HELPERS ================= */
const $=s=>document.querySelector(s);
const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const r1=n=>Math.round(n*10)/10;

/* ================= CONFIG + DATA ================= */
const CONFIG={gap:{critical:1.5,moderate:0.75},balance:{e:70,s:20,f:10}};

const DB={
  user:{name:'محمد احمدی',role:'مدیر ارشد فناوری اطلاعات',dept:'فناوری اطلاعات',bu:'فناوری و نوآوری',curRole:'مدیر ارشد',tgtRole:'مدیر حوزه فناوری',start:'۱۳۹۸/۰۴/۱۵'},
  competencies:[
    {id:'c1',name:'تفکر استراتژیک',cat:'رهبری',cur:3.8,tgt:5,trend:[2.8,3.0,3.2,3.4,3.6,3.8],def:'تحلیل مسائل پیچیده، دیدن روندها و تبدیل آن‌ها به تصمیم‌های استراتژیک',ind:['تصمیم‌های من با راهبرد بلندمدت سازمان هم‌راستا است.','روندهای آینده بازار و فناوری را به‌صورت منظم تحلیل می‌کنم.']},
    {id:'c2',name:'توسعه دیگران',cat:'رهبری',cur:3.0,tgt:5,trend:[2.4,2.5,2.7,2.8,2.9,3.0],def:'کوچینگ، بازخورد مؤثر و ایجاد مسیر رشد برای اعضای تیم',ind:['برای اعضای تیم برنامه رشد فردی تنظیم می‌کنم.','بازخورد سازنده را به‌موقع و مشخص ارائه می‌دهم.']},
    {id:'c3',name:'مدیریت تغییر',cat:'رهبری',cur:3.0,tgt:4,trend:[2.6,2.7,2.8,2.9,3.0,3.0],def:'راهبری افراد و سازمان در تغییرات با کمترین افت بهره‌وری',ind:['در برابر تغییر، تیم را همراه و آرام نگه می‌دارم.','برنامه ارتباطی تغییر را از قبل طراحی می‌کنم.']},
    {id:'c4',name:'رهبری تیم',cat:'مدیریت',cur:4.0,tgt:5,trend:[3.2,3.4,3.5,3.7,3.9,4.0],def:'ایجاد تیم هم‌راستا، باانگیزه و پاسخگو',ind:['فضای امن برای بیان دیدگاه‌ها ایجاد می‌کنم.','مسئولیت‌ها را شفاف تفویض می‌کنم.']},
    {id:'c5',name:'حل مسئله پیچیده',cat:'شناختی',cur:4.0,tgt:5,trend:[3.0,3.2,3.4,3.5,3.8,4.0],def:'شکستن مسائل پیچیده و رسیدن به راه‌حل‌های قابل‌اجرا',ind:['ریشه مسائل را با داده شناسایی می‌کنم.','راه‌حل‌ها را با سناریوهای جایگزین می‌سنجم.']},
    {id:'c6',name:'ارتباط مؤثر',cat:'بین‌فردی',cur:4.0,tgt:4,trend:[3.6,3.7,3.8,3.9,4.0,4.0],def:'انتقال شفاف پیام و گوش دادن فعال در سطوح مختلف',ind:['پیام‌ها را متناسب با مخاطب تنظیم می‌کنم.','در گفتگوها گوش دادن فعال را رعایت می‌کنم.']},
    {id:'c7',name:'هوش تجاری',cat:'شناختی',cur:3.4,tgt:4,trend:[3.0,3.1,3.2,3.3,3.4,3.4],def:'درک مدل درآمدی، هزینه و ارزش‌آفرینی کسب‌وکار',ind:['تأثیر مالی تصمیم‌ها را برآورد می‌کنم.','شاخص‌های کسب‌وکاری حوزه خود را می‌شناسم.']},
    {id:'c8',name:'نوآوری',cat:'شناختی',cur:3.2,tgt:4,trend:[2.8,2.9,3.0,3.1,3.2,3.2],def:'ایجاد و اجرای ایده‌های جدید برای بهبود مستمر',ind:['ایده‌های بهبود را به‌طور منظم مطرح می‌کنم.','اجرای آزمایشی ایده‌ها را تسهیل می‌کنم.']}
  ],
  goals:[
    {id:'g1',title:'ارتقای تفکر استراتژیک به سطح ۴',comp:'c1',tgt:4,dl:'اسفند ۱۴۰۳',prog:68,status:'ontrack',kpi:'۲ پروژه استراتژیک + بهبود امتیاز ارزیابی',pri:'high'},
    {id:'g2',title:'توانمندسازی و توسعه اعضای تیم',comp:'c2',tgt:4,dl:'بهمن ۱۴۰۳',prog:52,status:'ontrack',kpi:'۲۰ ساعت کوچینگ + تدوین برنامه رشد ۳ نفر',pri:'critical'},
    {id:'g3',title:'رهبری موفق تغییر در شعبه جدید',comp:'c3',tgt:4,dl:'خرداد ۱۴۰۴',prog:31,status:'atrisk',kpi:'راه‌اندازی بدون افت بهره‌وری تیم',pri:'high'},
    {id:'g4',title:'تقویت هوش تجاری در تصمیم‌ها',comp:'c7',tgt:4,dl:'اردیبهشت ۱۴۰۴',prog:22,status:'ontrack',kpi:'ارائه تحلیل مالی ۲ طرح',pri:'medium'}
  ],
  projects:[
    {id:'p1',name:'تحول دیجیتال واحد فناوری',comp:'c1',goal:'g1',status:'ontrack',prog:85,start:'مهر ۱۴۰۳',end:'اسفند ۱۴۰۳',sponsor:'مدیرعامل',mentor:'مهندس کریمی',obj:'بازطراحی فرآیندها و زیرساخت‌های دیجیتال برای چابکی بیشتر',risk:'کم',
      miles:[{t:'تحلیل وضعیت موجود',s:'done'},{t:'طراحی نقشه راه',s:'done'},{t:'اجرای فاز اول',s:'cur'},{t:'ارزیابی اثرگذاری',s:'next'}],
      tasks:[{t:'جلسه هم‌راستایی با مدیران واحدها',done:true},{t:'تهیه داشبورد شاخص‌های فاز یک',done:false},{t:'مستندسازی درس‌آموخته‌ها',done:false}],
      evidence:[{n:'نقشه راه تحول دیجیتال',k:'file',d:'آبان ۱۴۰۳'},{n:'گزارش فاز اول اجرا',k:'chart',d:'آذر ۱۴۰۳'}]},
    {id:'p2',name:'بهینه‌سازی فرآیندهای عملیاتی',comp:'c5',goal:'g1',status:'atrisk',prog:45,start:'آبان ۱۴۰۳',end:'بهمن ۱۴۰۳',sponsor:'معاون عملیات',mentor:'دکتر رضایی',obj:'کاهش ۲۰٪ زمان چرخه عملیات با حذف گلوگاه‌ها',risk:'زیاد',
      miles:[{t:'شناسایی گلوگاه‌ها',s:'done'},{t:'طراحی راه‌حل',s:'cur'},{t:'اجرای آزمایشی',s:'next'},{t:'استقرار نهایی',s:'next'}],
      tasks:[{t:'تحلیل داده چرخه ۶ ماه اخیر',done:true},{t:'کارگاه طراحی راه‌حل با تیم',done:false},{t:'تعریف سنجه‌های پایش',done:false}],
      evidence:[{n:'نمودار گلوگاه‌ها',k:'chart',d:'آبان ۱۴۰۳'}]},
    {id:'p3',name:'راه‌اندازی شعبه جدید',comp:'c3',goal:'g3',status:'ontrack',prog:30,start:'آذر ۱۴۰۳',end:'خرداد ۱۴۰۴',sponsor:'مدیرعامل',mentor:'مهندس کریمی',obj:'راه‌اندازی شعبه جدید با تیم توانمند و فرهنگ هم‌راستا',risk:'متوسط',
      miles:[{t:'امکان‌سنجی',s:'done'},{t:'تیم‌سازی و جذب',s:'cur'},{t:'زیرساخت و استقرار',s:'next'},{t:'راه‌اندازی رسمی',s:'next'}],
      tasks:[{t:'تدوین شرح نقش‌ها',done:true},{t:'مصاحبه با نامزدهای کلیدی',done:false}],
      evidence:[]}
  ],
  learning:[
    {id:'l1',type:'دوره',icon:'play',title:'رهبری استراتژیک در عمل',dur:'۸ ساعت',comp:'c1',prog:60,why:'شکاف بحرانی در تفکر استراتژیک دارید؛ این دوره مستقیماً هدف سطح ۴ را پوشش می‌دهد.',diff:'پیشرفته',col:'var(--brand-soft)',cc:'var(--brand-2)'},
    {id:'l2',type:'پادکست',icon:'headphones',title:'پادکست تفکر سیستمی',dur:'۶ ساعت',comp:'c1',prog:100,why:'تکمیل‌کننده هدف توسعه «تفکر استراتژیک» و مکمل دوره رهبری استراتژیک.',diff:'متوسط',col:'var(--info-soft)',cc:'var(--info)'},
    {id:'l3',type:'مقاله',icon:'file',title:'مدل‌های تصمیم‌گیری استراتژیک',dur:'۴۵ دقیقه',comp:'c1',prog:0,why:'مرتبط با شکاف «تفکر استراتژیک»؛ مطالعه سریع و کاربردی برای پروژه تحول.',diff:'پیشرفته',col:'var(--ok-soft)',cc:'var(--ok)'},
    {id:'l4',type:'میکرولرنینگ',icon:'zap',title:'رهبری چابک در ۸ دقیقه',dur:'۸ دقیقه',comp:'c3',prog:0,why:'پیشنهاد کوتاه این هفته؛ مرتبط با پروژه شعبه جدید و هدف مدیریت تغییر.',diff:'مقدماتی',col:'var(--warn-soft)',cc:'var(--warn)'},
    {id:'l5',type:'ویدیو',icon:'video',title:'کارگاه مدیریت تغییر سازمانی',dur:'۳ ساعت',comp:'c3',prog:30,why:'مستقیماً به هدف «رهبری موفق تغییر در شعبه جدید» متصل است.',diff:'متوسط',col:'var(--warn-soft)',cc:'var(--warn)'},
    {id:'l6',type:'دوره',icon:'play',title:'کوچینگ برای مدیران',dur:'۵ ساعت',comp:'c2',prog:0,why:'شکاف بحرانی «توسعه دیگران»؛ این دوره مهارت کوچینگ شما را می‌سازد.',diff:'متوسط',col:'var(--brand-soft)',cc:'var(--brand-2)'},
    {id:'l7',type:'مقاله',icon:'file',title:'هوش تجاری برای مدیران غیرمالی',dur:'۳۰ دقیقه',comp:'c7',prog:0,why:'مرتبط با هدف «تقویت هوش تجاری در تصمیم‌ها».',diff:'مقدماتی',col:'var(--ok-soft)',cc:'var(--ok)'},
    {id:'l8',type:'آزمون',icon:'clipboard',title:'ارزیابی سبک رهبری',dur:'۲۰ دقیقه',comp:'c4',prog:100,why:'شناخت سبک رهبری؛ پایه توسعه رهبری تیم.',diff:'مقدماتی',col:'var(--info-soft)',cc:'var(--info)'}
  ],
  feedback:[
    {from:'مدیر مستقیم',role:'معاون فناوری',comp:'c1',date:'۱۰ آذر ۱۴۰۳',text:'در ارائه نقشه راه تحول، دیدگاه بلندمدت و تسلط بسیار قوی‌تری نسبت به شش ماه گذشته داشتید؛ سناریوهای جایگزین شما هوشمندانه بود.',tr:'up'},
    {from:'کوچ',role:'دکتر سارا رضایی',comp:'c4',date:'۳ آذر ۱۴۰۳',text:'فضای امن‌تری در جلسات تیمی ایجاد کرده‌اید؛ اعضا راحت‌تر ایده می‌دهند. همین مسیر را ادامه دهید.',tr:'up'},
    {from:'همکار همتا',role:'مدیر عملیات',comp:'c6',date:'۲۵ آبان ۱۴۰۳',text:'شفافیت ارتباط بین‌واحدی بهتر شده، اما در جلسات پرتنش گاهی نتیجه‌گیری سریع‌تر از شنیدن کامل دیدگاه‌ها اتفاق می‌افتد.',tr:'flat'},
    {from:'منتور',role:'مهندس کریمی',comp:'c2',date:'۲۰ آبان ۱۴۰۳',text:'برای جانشین‌پروری به برنامه ساختاریافته‌تری نیاز دارید؛ پیشنهاد می‌کنم برای دو نفر از اعضای تیم برنامه رشد مکتوب بنویسید.',tr:'down'},
    {from:'عضو تیم',role:'کارشناس ارشد',comp:'c2',date:'۱۲ آبان ۱۴۰۳',text:'بازخوردهای شما در ماه‌های اخیر مشخص‌تر و کاربردی‌تر شده است؛ قدردان وقتی هستم که برای رشد من وقت می‌گذارید.',tr:'up'}
  ],
  reflections:[
    {date:'۱۲ آذر ۱۴۰۳',title:'ارائه نقشه راه به کمیته اجرایی',what:'ارائه با تأخیر ۵ دقیقه‌ای شروع شد اما واکنش کمیته مثبت بود.',learn:'آماده‌سازی سناریوهای جایگزین، اعتمادبه‌نفس و عمق پاسخ‌هایم را بالا برد.',next:'تمرین سناریونویسی برای جلسه امکان‌سنجی شعبه جدید.',comp:'c1',shared:true},
    {date:'۲۸ آبان ۱۴۰۳',title:'جلسه مدیریت تعارض تیم',what:'اختلاف دو عضو تیم بر سر مالکیت یک ماژول بالا گرفته بود.',learn:'شنیدن فعال پیش از قضاوت، تعارض را به گفتگوی سازنده تبدیل می‌کند.',next:'به‌کارگیری ساختار «اول شنیدن، بعد تصمیم» در جلسات هفتگی.',comp:'c4',shared:false}
  ],
  coach:{name:'دکتر سارا رضایی',title:'کوچ ارشد رهبری · دارای گواهینامه ICF PCC',done:8,total:12,eff:78,focus:['تفکر استراتژیک','حضور اجرایی'],
    sessions:[{d:'۱۷ آذر',h:'۱۴:۰۰',t:'تفکر استراتژیک — جلسه ۹',s:'next'},{d:'۱۰ آذر',h:'—',t:'تحلیل نتایج بازخورد ۳۶۰ درجه',s:'done',note:'الگوی رفتاری در ارائه‌ها بررسی شد؛ تمرین سناریونویسی توافق شد.',acts:['تمرین سناریونویسی استراتژیک','مرور یادداشت‌های جلسه قبل']},{d:'۲۵ آبان',h:'—',t:'مدیریت تعارض در تیم',s:'done',note:'تکنیک‌های میانجی‌گری تمرین شد.',acts:['بازخورد به دو عضو تیم']},{d:'۱۰ آبان',h:'—',t:'تفکر استراتژیک — جلسه ۷',s:'done',note:'چارچوب تحلیل روندها مرور شد.',acts:[]}]},
  mentor:{name:'مهندس علی کریمی',title:'مدیرعامل پیشین · منتور ارشد سازمان',done:6,total:8,focus:['مسیر شغلی','شبکه‌سازی سازمانی'],
    sessions:[{d:'۲۰ آذر',h:'۱۰:۰۰',t:'مسیر شغلی بلندمدت',s:'next'},{d:'۵ آذر',h:'—',t:'مدیریت بحران سازمانی',s:'done',note:'تجربه مدیریت بحران سال ۹۹ به اشتراک گذاشته شد.',acts:['مطالعه مورد کاوی بحران‌ها']},{d:'۲۰ آبان',h:'—',t:'شبکه‌سازی سازمانی',s:'done',note:'نقشه ذی‌نفعان کلیدی ترسیم شد.',acts:['برنامه تماس با ۳ مدیر کلیدی']}]},
  assessments:{cycle:'ارزیابی رهبری ۱۴۰۳',method:'۳۶۰ درجه',parts:[
    {name:'خودارزیابی',status:'done',score:null,date:'۱ آذر ۱۴۰۳'},
    {name:'ارزیابی مدیر مستقیم',status:'done',score:3.8,date:'۵ آذر ۱۴۰۳'},
    {name:'ارزیابی همتایان',status:'cur',score:null,date:'سررسید: ۲۰ آذر'},
    {name:'ارزیابی اعضای تیم',status:'next',score:null,date:'سررسید: ۳۰ آذر'}
  ],history:[{cycle:'رهبری ۱۴۰۳',method:'۳۶۰ درجه',avg:3.6,st:'ontrack'},{cycle:'رهبری ۱۴۰۲',method:'۳۶۰ درجه',avg:3.1,st:'done'},{cycle:'شایستگی‌های شناختی ۱۴۰۲',method:'خودارزیابی + مدیر',avg:3.0,st:'done'}]},
  team:[{n:'سارا محمدی',r:'مدیر محصول',av:4.1,prog:81,goals:2,av_c:'#6D66F2'},{n:'رضا قاسمی',r:'مدیر زیرساخت',av:3.6,prog:64,goals:3,av_c:'#1D7FC2'},{n:'نگار حسینی',r:'مدیر داده',av:3.9,prog:73,goals:2,av_c:'#0E9268'},{n:'امیر تهرانی',r:'مدیر امنیت',av:3.3,prog:48,goals:3,av_c:'#C77414'}],
  notifs:[
    {ic:'alert',tn:'danger',t:'نقطه عطف معوق شد',d:'«طراحی راه‌حل» در پروژه بهینه‌سازی فرآیندها امروز سررسید داشت. برای جلوگیری از تأخیر زنجیره‌ای اقدام کنید.',tm:'۱۵ دقیقه پیش',un:true,ct:'باز کردن پروژه',act:'open-project',aid:'p2'},
    {ic:'chat',tn:'brand',t:'یادآوری جلسه کوچینگ',d:'جلسه با دکتر رضایی فردا ساعت ۱۴:۰۰ برگزار می‌شود. دستور جلسه: تفکر استراتژیک.',tm:'۱ ساعت پیش',un:true,ct:'مشاهده کوچینگ',nav:'coaching'},
    {ic:'checkc',tn:'ok',t:'نقطه عطف تکمیل شد',d:'«اجرای فاز اول» پروژه تحول دیجیتال توسط اسپانسر تأیید شد.',tm:'۳ ساعت پیش',un:true,ct:'مشاهده پروژه',act:'open-project',aid:'p1'},
    {ic:'clipboard',tn:'info',t:'ارزیابی همتایان در انتظار',d:'۲ ارزیابی همتا از ۴ تکمیل شده است. سررسید: ۲۰ آذر.',tm:'دیروز',un:false,ct:'مشاهده ارزیابی',nav:'assessment'},
    {ic:'book',tn:'ok',t:'محتوای جدید پیشنهاد شد',d:'مقاله «مدل‌های تصمیم‌گیری استراتژیک» بر اساس شکاف تفکر استراتژیک پیشنهاد شد.',tm:'دیروز',un:false,ct:'مشاهده یادگیری',nav:'learning'}
  ],
  calEvents:{3:[['proj','سررسید نقطه عطف بهینه‌سازی']],7:[['learn','میکرولرنینگ رهبری چابک']],10:[['goal','بازبینی هدف توانمندسازی']],11:[['coach','کوچینگ ۱۴:۰۰']],14:[['assess','سررسید ارزیابی همتایان']],15:[['mentor','منتورینگ ۱۰:۰۰']],18:[['proj','کارگاه طراحی راه‌حل']],20:[['learn','ادامه دوره رهبری استراتژیک']],22:[['coach','کوچینگ ۱۴:۰۰']],25:[['learn','مرور پادکست تفکر سیستمی']],28:[['proj','گزارش ماهانه تحول']],30:[['assess','سررسید ارزیابی تیم']]},
  achvDefs:[
    {id:'a1',ic:'award',tn:'brand',t:'ارتقای سطح شایستگی',d:'یک شایستگی به سطح هدف برسد',chk:s=>s.competencies.some(c=>c.cur>=c.tgt)},
    {id:'a2',ic:'briefcase',tn:'warn',t:'تکمیل نقطه عطف',d:'۵ نقطه عطف پروژه را تکمیل کنید',chk:s=>s.milesDone>=5},
    {id:'a3',ic:'book',tn:'ok',t:'یادگیرنده مستمر',d:'۳ محتوای آموزشی را کامل کنید',chk:s=>s.learnDone>=3},
    {id:'a4',ic:'chat',tn:'brand',t:'نقطه عطف کوچینگ',d:'۸ جلسه کوچینگ را کامل کنید',chk:s=>s.coachDone>=8},
    {id:'a5',ic:'edit',tn:'info',t:'اهل تأمل',d:'۳ تأمل ساختاریافته ثبت کنید',chk:s=>s.reflCount>=3},
    {id:'a6',ic:'trend',tn:'ok',t:'پیشرفت پایدار',d:'پیشرفت کلی توسعه به ۸۰٪ برسد',chk:s=>s.overall>=80},
    {id:'a7',ic:'clipboard',tn:'danger',t:'ارزیابی کامل',d:'یک خودارزیابی کامل ثبت کنید',chk:s=>s.assessDone},
    {id:'a8',ic:'layers',tn:'info',t:'اجرای متعادل',d:'تعادل ۷۰/۲۰/۱۰ در محدوده هدف قرار گیرد',chk:s=>s.balanced}
  ]
};

const RUN={milesDone:3,learnDone:2,coachDone:8,reflCount:2,assessDone:false,seenAchv:new Set(['a1','a4'])};

/* ================= DERIVED ================= */
const compById=id=>DB.competencies.find(c=>c.id===id);
const goalById=id=>DB.goals.find(g=>g.id===id);
const gapOf=c=>r1(c.tgt-c.cur);
const gapClass=g=>g>=CONFIG.gap.critical?'crit':g>=CONFIG.gap.moderate?'mod':g>0.01?'low':'ont';
const gapBadge=g=>{const k=gapClass(g);const m={crit:['b-danger','بحرانی'],mod:['b-warn','متوسط'],low:['b-info','جزئی'],ont:['b-ok','در هدف']};return `<span class="badge ${m[k][0]}"><i></i>${m[k][1]}</span>`};
const stBadge=s=>{const m={ontrack:['b-ok','در مسیر'],atrisk:['b-warn','در ریسک'],delayed:['b-danger','با تأخیر'],done:['b-ok','تکمیل شد'],cur:['b-brand','در حال انجام'],next:['b-neutral','آینده'],upcoming:['b-brand','پیش رو']};const v=m[s]||m.next;return `<span class="badge ${v[0]}"><i></i>${v[1]}</span>`};
const toneC=t=>({brand:['var(--brand-soft)','var(--brand-2)'],ok:['var(--ok-soft)','var(--ok)'],warn:['var(--warn-soft)','var(--warn)'],danger:['var(--danger-soft)','var(--danger)'],info:['var(--info-soft)','var(--info)'],neutral:['#EFF1F4','var(--ink-3)']}[t]);

function balance(){
  let e=0,s=0,f=0;
  DB.projects.forEach(p=>{e+=p.prog>=100?30:18+p.prog/10});
  e+=DB.projects.length*6;
  s=RUN.coachDone*3+DB.mentor.done*3+DB.feedback.length*1.5+6;
  f=DB.learning.reduce((a,l)=>a+(l.prog/100)*(parseInt(l.dur)||2)*2,0)+6;
  const t=e+s+f;
  return {e:Math.round(e/t*100),s:Math.round(s/t*100),f:Math.round(f/t*100)};
}
function overallProgress(){
  const gp=DB.goals.reduce((a,g)=>a+g.prog,0)/DB.goals.length;
  const pp=DB.projects.reduce((a,p)=>a+p.prog,0)/DB.projects.length;
  const lp=DB.learning.reduce((a,l)=>a+l.prog,0)/DB.learning.length;
  const cp=DB.competencies.reduce((a,c)=>a+Math.min(100,c.cur/c.tgt*100),0)/DB.competencies.length;
  return Math.round(gp*.35+pp*.3+lp*.15+cp*.2);
}
function achvState(){
  const b=balance();
  const st={...RUN,competencies:DB.competencies,overall:overallProgress(),reflCount:DB.reflections.length,balanced:Math.abs(b.e-70)<=8&&Math.abs(b.s-20)<=7&&Math.abs(b.f-10)<=5};
  return DB.achvDefs.map(a=>({...a,ok:a.chk(st)}));
}

/* ================= COMPONENTS ================= */
const card=(hd,body,cls='')=>`<section class="card ${cls}">${hd?`<div class="card-hd">${hd}</div>`:''}${body}</section>`;
const kpi=(lb,val,sub,iconName,tn,sparkId,attrs='')=>`
  <div class="card kpi ${attrs?'click':''}" ${attrs}>
    <div class="kpi-top"><span class="kpi-lb">${lb}</span><span class="kpi-ic" style="background:${toneC(tn)[0]};color:${toneC(tn)[1]}">${IC[iconName]}</span></div>
    <div class="kpi-v">${val}</div>
    <div class="kpi-sub">${sub}</div>
    ${sparkId?`<canvas class="spark" id="${sparkId}"></canvas>`:''}
  </div>`;
const prgRow=(v,cls='')=>`<div class="prg-row"><div class="prg ${cls}"><i style="width:${v}%"></i></div><b>${fa(v)}٪</b></div>`;
const emptySt=(icn,t,p,btn='')=>`<div class="empty"><div class="empty-ic">${IC[icn]}</div><h4>${t}</h4><p>${p}</p>${btn}</div>`;

/* sparkline */
function sparkline(id,data,color){
  const cv=document.getElementById(id);if(!cv)return;
  const dpr=window.devicePixelRatio||1,w=cv.clientWidth||92,h=cv.clientHeight||34;
  cv.width=w*dpr;cv.height=h*dpr;const x=cv.getContext('2d');x.scale(dpr,dpr);
  const mn=Math.min(...data),mx=Math.max(...data),pad=4;
  const pt=(i)=>[pad+i*(w-2*pad)/(data.length-1),h-pad-((data[i]-mn)/((mx-mn)||1))*(h-2*pad)];
  x.beginPath();data.forEach((_,i)=>{const[px,py]=pt(i);i?x.lineTo(px,py):x.moveTo(px,py)});
  x.strokeStyle=color;x.lineWidth=1.8;x.lineJoin='round';x.lineCap='round';x.stroke();
  x.lineTo(pt(data.length-1)[0],h);x.lineTo(pt(0)[0],h);x.closePath();
  x.fillStyle=color.replace(')',',0.09)').replace('rgb','rgba');x.fill();
  const[ex,ey]=pt(data.length-1);x.beginPath();x.arc(ex,ey,2.4,0,7);x.fillStyle=color;x.fill();
}

/* charts registry */
const CH={};
function mkChart(id,cfg){
  const el=document.getElementById(id);if(!el)return;
  if(CH[id])CH[id].destroy();
  CH[id]=new Chart(el,cfg);
}
if(window.Chart){
  Chart.defaults.font.family='Vazirmatn';Chart.defaults.font.size=10.5;Chart.defaults.color='#69707D';
}
const GRD={color:'rgba(20,23,29,.05)'};
const LEG={position:'bottom',rtl:true,labels:{usePointStyle:true,pointStyle:'circle',boxWidth:6,boxHeight:6,padding:16,font:{size:10.5,family:'Vazirmatn'}}};
const TT={rtl:true,titleFont:{family:'Vazirmatn'},bodyFont:{family:'Vazirmatn'},padding:10,cornerRadius:8,displayColors:false};

/* ================= PAGES ================= */
function priorities(){
  const list=[];
  DB.projects.forEach(p=>{
    const m=p.miles.find(x=>x.s==='cur');
    if(m&&p.status==='atrisk')list.push({tag:'فوری',tc:'var(--danger-soft)',tt:'var(--danger)',ic:'alert',t:`نقطه عطف «${m.t}» ${p.name}`,d:'سررسید گذشته — نیازمند اقدام امروز',ct:'باز کردن پروژه',act:'open-project',aid:p.id});
    else if(m)list.push({tag:'پیش رو',tc:'var(--warn-soft)',tt:'var(--warn)',ic:'clock',t:`نقطه عطف «${m.t}» — ${p.name}`,d:'در حال انجام؛ پایش تا سررسید',ct:'باز کردن پروژه',act:'open-project',aid:p.id});
  });
  list.push({tag:'امروز',tc:'var(--brand-soft)',tt:'var(--brand-2)',ic:'chat',t:'جلسه کوچینگ با '+DB.coach.name,d:'فردا ساعت ۱۴:۰۰ — تفکر استراتژیک',ct:'مشاهده کوچینگ',nav:'coaching'});
  const micro=DB.learning.find(l=>l.type==='میکرولرنینگ'&&l.prog<100);
  if(micro)list.push({tag:'پیشنهاد',tc:'var(--ok-soft)',tt:'var(--ok)',ic:'zap',t:micro.title,d:'فقط '+micro.dur+' — مرتبط با هدف مدیریت تغییر',ct:'شروع یادگیری',act:'open-learning',aid:micro.id});
  return list.slice(0,4);
}

/* ---------- COMMAND CENTER ---------- */
function renderCommand(){
  const ov=overallProgress(),b=balance(),crit=DB.competencies.filter(c=>gapClass(gapOf(c))==='crit');
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div>
      <h2 style="font-size:19px;font-weight:800">سلام، محمد</h2>
      <p style="font-size:12px;color:var(--ink-3);margin-top:2px">امروز ${fa(15)} آذر ${fa(1403)} — مسیر توسعه شما <b style="color:var(--ok)">در وضعیت سلامت</b> است${crit.length?`؛ <b style="color:var(--danger)">${fa(crit.length)} شکاف بحرانی</b> نیازمند توجه است`:''}.</p>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-g" data-action="export-report">${IC.download} گزارش دوره</button>
      <button class="btn btn-p" data-action="start-assessment">${IC.clipboard} ادامه خودارزیابی</button>
    </div>
  </div>

  <div class="grid g4">
    ${kpi('پیشرفت کلی توسعه',fa(ov)+'<small>٪</small>',`<b style="color:var(--ok)">+${fa(8)}٪</b> نسبت به دوره قبل`,'trend','brand','sp1','data-nav="analytics"')}
    ${kpi('پیشرفت برنامه (IDP)',fa(Math.round(DB.goals.reduce((a,g)=>a+g.prog,0)/DB.goals.length))+'<small>٪</small>',`${fa(DB.goals.length)} هدف فعال · ${fa(1)} در ریسک`,'layers','ok','sp2','data-nav="idp"')}
    ${kpi('پروژه‌های فعال',fa(DB.projects.length),`${fa(DB.projects.filter(p=>p.status==='atrisk').length)} در ریسک · میانگین ${fa(Math.round(DB.projects.reduce((a,p)=>a+p.prog,0)/DB.projects.length))}٪ پیشرفت`,'briefcase','warn','sp3','data-nav="projects"')}
    ${kpi('تعادل ۷۰/۲۰/۱۰',`${fa(b.e)}<small>/${fa(b.s)}/${fa(b.f)}</small>`,b.e<65?'آموزش‌محورتر از هدف — تنظیم کنید':'نزدیک به الگوی مطلوب','pie','info','sp4','data-nav="model"')}
  </div>

  <div class="grid g21 mt">
    ${card(`<div><h3>اولویت‌های شما</h3><p>بر اساس سررسیدها، ریسک‌ها و اهداف توسعه — مرتب‌شده با قوانین سیستم</p></div>`,
    `<div class="card-bd" style="padding-top:4px;display:flex;flex-direction:column;gap:10px">
      ${priorities().map(p=>`
      <div class="prio">
        <span class="prio-tag" style="background:${p.tc};color:${p.tt}">${p.tag}</span>
        <span class="prio-ic" style="background:${p.tc};color:${p.tt}">${IC[p.ic]}</span>
        <div class="prio-bd"><h4>${p.t}</h4><p>${p.d}</p></div>
        <button class="btn btn-s btn-sm" ${p.act?`data-action="${p.act}" data-id="${p.aid||''}"`:`data-nav="${p.nav}"`}>${p.ct}</button>
      </div>`).join('')}
    </div>`)}
    ${card(`<div><h3>سلامت توسعه</h3><p>پیشرفت به تفکیک حوزه‌ها</p></div>`,
    `<div class="card-bd" style="padding-top:6px">
      ${[
        ['پیشرفت شایستگی‌ها',Math.round(DB.competencies.reduce((a,c)=>a+Math.min(100,c.cur/c.tgt*100),0)/DB.competencies.length),''],
        ['پیشرفت یادگیری',Math.round(DB.learning.reduce((a,l)=>a+l.prog,0)/DB.learning.length),'ok'],
        ['کوچینگ و منتورینگ',Math.round((RUN.coachDone+DB.mentor.done)/(DB.coach.total+DB.mentor.total)*100),''],
        ['پیشرفت اهداف',Math.round(DB.goals.reduce((a,g)=>a+g.prog,0)/DB.goals.length),'warn']
      ].map(x=>`<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;font-size:11.5px;margin-bottom:6px"><span style="color:var(--ink-3)">${x[0]}</span><b>${fa(x[1])}٪</b></div><div class="prg ${x[2]}"><i style="width:${x[1]}%"></i></div></div>`).join('')}
      <div class="divider"></div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:11.5px;color:var(--ink-3)">وضعیت کلی دوره</span>
        <span class="badge b-ok"><i></i>سلامت — ادامه دهید</span>
      </div>
    </div>`)}
  </div>

  <div class="card mt">
    <div class="card-hd"><div><h3>نقشه راه توسعه شما</h3><p>موقعیت فعلی در چرخه توسعه رهبری</p></div><button class="linkb" data-nav="idp">مشاهده IDP ${IC.arrow}</button></div>
    <div class="card-bd" style="padding-top:10px">
      <div class="roadmap">
        ${[['ارزیابی','مهر ۱۴۰۳','done'],['تحلیل شکاف','مهر ۱۴۰۳','done'],['اهداف توسعه','آبان ۱۴۰۳','done'],['فعالیت‌های ۷۰/۲۰/۱۰','در حال اجرا','cur'],['ثبت شواهد','—','next'],['ارزیابی مجدد','فروردین ۱۴۰۴','next']]
        .map((s,i)=>`<div class="rm ${s[2]}"><div class="rm-dot">${s[2]==='done'?IC.check:fa(i+1)}</div><h5>${s[0]}</h5><span>${s[1]}</span></div>`).join('')}
      </div>
    </div>
  </div>

  <div class="grid g21 mt">
    ${card(`<div><h3>روند شایستگی‌های کلیدی</h3><p>شش ماه گذشته — پاسخ به سؤال «آیا در حال رشد هستم؟»</p></div>`,
    `<div class="card-bd" style="padding-top:6px"><div class="chbox"><canvas id="chTrend"></canvas></div></div>`)}
    ${card(`<div><h3>بیشترین شکاف‌ها</h3><p>اولویت‌بندی توسعه بر اساس اندازه شکاف</p></div>`,
    `<div class="card-bd" style="padding-top:6px;display:flex;flex-direction:column;gap:4px">
      ${[...DB.competencies].sort((a,cc)=>gapOf(cc)-gapOf(a)).slice(0,4).map(c=>`
        <div class="cmp-row" data-action="open-comp" data-id="${c.id}">
          <div class="cmp-nm"><h4>${c.name}</h4><span>${c.cat}</span></div>
          <div class="cmp-bar"><i class="${gapClass(gapOf(c))==='crit'?'crit':gapClass(gapOf(c))==='mod'?'low':''}" style="width:${c.cur/5*100}%"></i><span class="tm" style="inset-inline-start:${c.tgt/5*100}%"></span></div>
          <div class="cmp-num"><b>${fa(c.cur)}</b><span>/ ${fa(c.tgt)}</span></div>
        </div>`).join('')}
      <button class="linkb" data-nav="competencies" style="align-self:flex-start;margin-top:8px">تحلیل کامل شکاف‌ها ${IC.arrow}</button>
    </div>`)}
  </div>

  <div class="grid g2 mt">
    ${card(`<div><h3>پروژه‌های فعال</h3><p>بخش تجربی برنامه شما (۷۰٪)</p></div><button class="linkb" data-nav="projects">همه پروژه‌ها ${IC.arrow}</button>`,
    `<div class="card-bd" style="padding-top:6px;display:flex;flex-direction:column;gap:14px">
      ${DB.projects.map(p=>`
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;gap:8px">
          <button class="linkb" style="font-size:12.5px;padding:0" data-action="open-project" data-id="${p.id}">${p.name}</button>${stBadge(p.status)}
        </div>
        ${prgRow(p.prog,p.status==='atrisk'?'warn':'')}
        <div style="font-size:10.5px;color:var(--ink-4);margin-top:6px">شایستگی: ${compById(p.comp).name} · سررسید: ${p.end}</div>
      </div>`).join('')}
    </div>`)}
    ${card(`<div><h3>جلسات پیش رو</h3><p>کوچینگ، منتورینگ و سررسیدها</p></div><button class="linkb" data-nav="calendar">تقویم کامل ${IC.arrow}</button>`,
    `<div class="card-bd" style="padding-top:6px;display:flex;flex-direction:column;gap:10px">
      ${[['فردا','کوچینگ — '+DB.coach.name,'var(--brand-soft)','var(--brand-2)','coaching'],['۲۰ آذر','منتورینگ — '+DB.mentor.name,'var(--info-soft)','var(--info)','mentoring'],['۲۰ آذر','سررسید ارزیابی همتایان','var(--danger-soft)','var(--danger)','assessment'],['۲۸ آذر','گزارش ماهانه پروژه تحول','var(--warn-soft)','var(--warn)','projects']].map(x=>`
      <div class="prio" data-nav="${x[4]}" style="cursor:pointer;padding:9px 12px">
        <span style="width:56px;flex-shrink:0;font-size:11px;font-weight:800;color:${x[3]};background:${x[2]};text-align:center;padding:5px 0;border-radius:8px">${x[0]}</span>
        <span style="font-size:12px;flex:1">${x[1]}</span>
      </div>`).join('')}
    </div>`)}
  </div>
  </div>`;
}
function chartsCommand(){
  mkChart('chTrend',{type:'line',data:{labels:['تیر','مرداد','شهریور','مهر','آبان','آذر'],
    datasets:[
      {label:'تفکر استراتژیک',data:compById('c1').trend,borderColor:'#4F46E5',backgroundColor:'rgba(79,70,229,.07)',fill:true,tension:.35,borderWidth:2,pointRadius:2.5,pointBackgroundColor:'#4F46E5'},
      {label:'توسعه دیگران',data:compById('c2').trend,borderColor:'#C77414',tension:.35,borderWidth:2,pointRadius:2.5,pointBackgroundColor:'#C77414'},
      {label:'رهبری تیم',data:compById('c4').trend,borderColor:'#0E9268',tension:.35,borderWidth:2,pointRadius:2.5,pointBackgroundColor:'#0E9268'}
    ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:LEG,tooltip:TT},scales:{y:{min:2,max:5,grid:GRD,ticks:{stepSize:1}},x:{grid:{display:false}}}}});
  requestAnimationFrame(()=>{
    sparkline('sp1',[62,65,68,70,74,overallProgress()],'rgb(79,70,229)');
    sparkline('sp2',[40,46,52,55,58,Math.round(DB.goals.reduce((a,g)=>a+g.prog,0)/DB.goals.length)],'rgb(14,146,104)');
    sparkline('sp3',[22,30,38,44,50,Math.round(DB.projects.reduce((a,p)=>a+p.prog,0)/DB.projects.length)],'rgb(199,116,20)');
    sparkline('sp4',[48,52,55,58,60,balance().e],'rgb(29,127,194)');
  });
}

/* ---------- COMPETENCIES ---------- */
function renderCompetencies(){
  const sorted=[...DB.competencies].sort((a,b)=>gapOf(b)-gapOf(a));
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">شایستگی‌های من</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">سطح فعلی در برابر هدف · بر اساس آخرین ارزیابی و شواهد توسعه</p></div>
    <button class="btn btn-g" data-action="export-report">${IC.download} خروجی پروفایل</button>
  </div>
  <div class="grid g21">
    ${card(`<div><h3>سطح فعلی در برابر هدف</h3><p>نشانگر عمودی = سطح هدف · برای جزئیات روی هر ردیف بزنید</p></div>`,
    `<div class="card-bd" style="padding-top:4px">
      ${DB.competencies.map(c=>{const g=gapOf(c),gc=gapClass(g);return `
      <div class="cmp-row" data-action="open-comp" data-id="${c.id}" role="button" tabindex="0">
        <div class="cmp-nm"><h4>${c.name}</h4><span>${c.cat}</span></div>
        <div class="cmp-bar"><i class="${gc==='crit'?'crit':gc==='mod'?'low':''}" style="width:${c.cur/5*100}%"></i><span class="tm" style="inset-inline-start:${c.tgt/5*100}%"></span></div>
        <div class="cmp-num"><b>${fa(c.cur)}</b><span>/ ${fa(c.tgt)}</span>${gapBadge(g)}</div>
      </div>`}).join('')}
    </div>`)}
    ${card(`<div><h3>نمای رادار</h3><p>توزیع شایستگی‌ها و فاصله تا هدف</p></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="chbox lg"><canvas id="chRadar"></canvas></div></div>`)}
  </div>
  <div class="card mt">
    <div class="card-hd"><div><h3>تحلیل شکاف و اولویت توسعه</h3><p>آستانه‌ها: بحرانی ≥ ${fa(1.5)} · متوسط ≥ ${fa(0.75)} — قابل تنظیم توسط مدیر سامانه</p></div></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>شایستگی</th><th>فعلی</th><th>هدف</th><th>شکاف</th><th>اولویت</th><th>هدف توسعه مرتبط</th><th style="min-width:150px">پیشرفت هدف</th></tr></thead>
    <tbody>
      ${sorted.map(c=>{const g=gapOf(c);const gl=DB.goals.find(x=>x.comp===c.id);return `
      <tr style="cursor:pointer" data-action="open-comp" data-id="${c.id}">
        <td><b>${c.name}</b><div style="font-size:10px;color:var(--ink-4)">${c.cat}</div></td>
        <td><b>${fa(c.cur)}</b></td><td>${fa(c.tgt)}</td><td><b>${fa(g)}</b></td><td>${gapBadge(g)}</td>
        <td style="font-size:11.5px">${gl?gl.title:'—'}</td>
        <td>${gl?prgRow(gl.prog,gl.status==='atrisk'?'warn':''):'<span style="color:var(--ink-4);font-size:11px">بدون هدف</span>'}</td>
      </tr>`}).join('')}
    </tbody></table></div>
  </div>
  </div>`;
}
function chartsCompetencies(){
  mkChart('chRadar',{type:'radar',data:{labels:DB.competencies.map(c=>c.name),datasets:[
    {label:'سطح فعلی',data:DB.competencies.map(c=>c.cur),borderColor:'#4F46E5',backgroundColor:'rgba(79,70,229,.12)',borderWidth:2,pointRadius:2.5,pointBackgroundColor:'#4F46E5'},
    {label:'سطح هدف',data:DB.competencies.map(c=>c.tgt),borderColor:'#9AA1AD',borderDash:[4,4],borderWidth:1.5,pointRadius:2,pointBackgroundColor:'#9AA1AD',backgroundColor:'transparent'}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:LEG,tooltip:TT},scales:{r:{min:0,max:5,ticks:{stepSize:1,backdropColor:'transparent',font:{size:9}},grid:GRD,pointLabels:{font:{size:10,family:'Vazirmatn'}}}}}});
}

/* ---------- ASSESSMENT ---------- */
function renderAssessment(){
  const A=DB.assessments;
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">ارزیابی من</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">چرخه فعال: ${A.cycle} · روش ${A.method}</p></div>
    <button class="btn btn-p" data-action="start-assessment">${IC.edit} شروع / ادامه خودارزیابی</button>
  </div>
  <div class="grid g4">
    ${A.parts.map(p=>`
      <div class="card kpi">
        <div class="kpi-top"><span class="kpi-lb">${p.name}</span>${stBadge(p.status)}</div>
        <div class="kpi-v" style="font-size:19px">${p.score?fa(p.score):'—'}</div>
        <div class="kpi-sub">${p.date}</div>
      </div>`).join('')}
  </div>
  <div class="grid g21 mt">
    ${card(`<div><h3>نتایج در برابر دوره قبل</h3><p>مقایسه میانگین شایستگی‌ها</p></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="chbox lg"><canvas id="chAssess"></canvas></div></div>`)}
    <div style="display:flex;flex-direction:column;gap:16px">
      ${card(`<div><h3>پیامدهای توسعه</h3><p>نتایج ارزیابی چگونه به برنامه شما متصل شد</p></div>`,
      `<div class="card-bd" style="padding-top:6px;display:flex;flex-direction:column;gap:10px">
        <div class="callout brand">${IC.info}<div>شکاف بحرانی «توسعه دیگران» منجر به ایجاد هدف توانمندسازی تیم و اتصال جلسات کوچینگ شد.</div></div>
        <div class="callout warn">${IC.info}<div>شکاف «تفکر استراتژیک» به پروژه تحول دیجیتال و دوره رهبری استراتژیک متصل شد.</div></div>
      </div>`)}
      ${card(`<div><h3>تاریخچه ارزیابی</h3></div>`,
      `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>چرخه</th><th>روش</th><th>میانگین</th><th>وضعیت</th></tr></thead><tbody>
        ${A.history.map(h=>`<tr><td><b>${h.cycle}</b></td><td style="font-size:11px">${h.method}</td><td><b>${fa(h.avg)}</b></td><td>${stBadge(h.st)}</td></tr>`).join('')}
      </tbody></table></div>`)}
    </div>
  </div>
  </div>`;
}
function chartsAssessment(){
  mkChart('chAssess',{type:'bar',data:{labels:DB.competencies.map(c=>c.name),datasets:[
    {label:'دوره قبل',data:DB.competencies.map(c=>r1(c.trend[0])),backgroundColor:'rgba(154,161,173,.45)',borderRadius:5,barThickness:13},
    {label:'دوره فعلی',data:DB.competencies.map(c=>c.cur),backgroundColor:'rgba(79,70,229,.8)',borderRadius:5,barThickness:13}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:LEG,tooltip:TT},scales:{y:{min:0,max:5,grid:GRD},x:{grid:{display:false},ticks:{font:{size:9}}}}}});
}

/* ---------- IDP ---------- */
function renderIdp(){
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">برنامه توسعه فردی (IDP)</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">دوره مهر ۱۴۰۳ تا شهریور ۱۴۰۴ · متصل به نتایج ارزیابی</p></div>
    <button class="btn btn-p" data-action="new-goal">${IC.plus} هدف توسعه جدید</button>
  </div>
  <div class="grid g4">
    ${kpi('پیشرفت کلی',fa(Math.round(DB.goals.reduce((a,g)=>a+g.prog,0)/DB.goals.length))+'<small>٪</small>','میانگین وزنی اهداف','layers','brand','')}
    ${kpi('اهداف فعال',fa(DB.goals.length),`${fa(DB.goals.filter(g=>g.status==='atrisk').length)} هدف در ریسک`,'flag','warn','')}
    ${kpi('فعالیت‌های متصل',fa(DB.projects.length+DB.learning.length+3),'پروژه، یادگیری، کوچینگ و منتورینگ','zap','ok','')}
    ${kpi('شواهد ثبت‌شده',fa(DB.projects.reduce((a,p)=>a+p.evidence.length,0)+2),'پروژه‌ها و ارزیابی‌ها','shield','info','')}
  </div>
  <div class="grid g12 mt">
    ${card(`<div><h3>توزیع فعالیت‌ها</h3><p>به تفکیک مدل ۷۰/۲۰/۱۰</p></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="chbox lg"><canvas id="chIdp"></canvas></div></div>`)}
    ${card(`<div><h3>اهداف توسعه</h3><p>هر هدف به شایستگی، فعالیت و شاخص کلیدی متصل است</p></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="tl">
      ${DB.goals.map(g=>{const c=compById(g.comp);const pr=DB.projects.filter(p=>p.goal===g.id);const lr=DB.learning.filter(l=>l.comp===g.comp);return `
      <div class="tl-it ${g.status==='atrisk'?'cur':'done'}">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><h4>${g.title}</h4>${stBadge(g.status)}<span class="badge ${g.pri==='critical'?'b-danger':g.pri==='high'?'b-warn':'b-neutral'}"><i></i>${g.pri==='critical'?'اولویت بحرانی':g.pri==='high'?'اولویت بالا':'اولویت متوسط'}</span></div>
        <p>شایستگی: ${c.name} · ${fa(c.cur)} → ${fa(g.tgt)} · سررسید: ${g.dl}</p>
        <div style="margin:9px 0 3px;max-width:340px">${prgRow(g.prog,g.status==='atrisk'?'warn':'')}</div>
        <div class="tl-meta"><span>شاخص: ${g.kpi}</span><span>فعالیت‌ها: ${fa(pr.length)} پروژه · ${fa(lr.length)} محتوا</span></div>
      </div>`}).join('')}
    </div></div>`)}
  </div>
  </div>`;
}
function chartsIdp(){
  mkChart('chIdp',{type:'doughnut',data:{labels:['۷۰٪ تجربی — پروژه‌ها','۲۰٪ اجتماعی — کوچینگ و منتورینگ','۱۰٪ رسمی — یادگیری'],
    datasets:[{data:[DB.projects.length*2,RUN.coachDone+DB.mentor.done,DB.learning.length],backgroundColor:['#4F46E5','#1D7FC2','#0E9268'],borderWidth:0,spacing:3,borderRadius:5}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'62%',plugins:{legend:LEG,tooltip:TT}}});
}

/* ---------- 70/20/10 ---------- */
function renderModel(){
  const b=balance(),T=CONFIG.balance;
  const msgs=[];
  if(b.e<T.e-6)msgs.push('برنامه شما در حال حاضر بیشتر آموزش‌محور است تا تجربی؛ افزایش سهم پروژه‌ها و مأموریت‌های کششی توصیه می‌شود.');
  if(b.s>T.s+6)msgs.push('سهم یادگیری اجتماعی بالاست؛ بخشی از زمان کوچینگ را به کاربست در پروژه منتقل کنید.');
  if(b.f>T.f+4)msgs.push('سهم آموزش رسمی فراتر از الگو است؛ یادگیری رسمی را مکمل تجربه قرار دهید نه جایگزین آن.');
  if(!msgs.length)msgs.push('تعادل برنامه توسعه شما در محدوده مطلوب مدل ۷۰/۲۰/۱۰ قرار دارد.');
  return `<div class="page">
  <div style="margin-bottom:18px"><h2 style="font-size:19px;font-weight:800">مدل ۷۰/۲۰/۱۰</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">تعادل واقعی فعالیت‌های توسعه در برابر الگوی هدف</p></div>
  <div class="card">
    <div class="card-hd"><div><h3>تحلیل تعادل</h3><p>سهم واقعی در برابر سهم هدف (نشانگر عمودی)</p></div></div>
    <div class="card-bd" style="padding-top:4px">
      ${[['یادگیری تجربی','پروژه‌ها، مأموریت‌های کششی، چالش‌های کسب‌وکاری',b.e,T.e,'#4F46E5'],
         ['یادگیری اجتماعی','کوچینگ، منتورینگ، بازخورد، یادگیری همتایان',b.s,T.s,'#1D7FC2'],
         ['یادگیری رسمی','دوره‌ها، کارگاه‌ها، میکرولرنینگ، مطالعه',b.f,T.f,'#0E9268']].map(x=>`
        <div class="bal">
          <div><h4>${x[0]}</h4><span>${x[1]}</span></div>
          <div class="bal-bar"><span class="tz" style="inset-inline-start:${x[3]}%"></span><i style="width:${Math.min(100,x[2])}%;background:${x[4]}"></i></div>
          <div class="bal-v"><b>${fa(x[2])}٪</b><span>هدف: ${fa(x[3])}٪ · ${Math.abs(x[2]-x[3])<=4?'در محدوده':x[2]<x[3]?'کمتر از هدف':'بیشتر از هدف'}</span></div>
        </div>`).join('')}
      <div class="callout ${msgs[0].includes('آموزش‌محور')?'warn':'ok'}" style="margin-top:14px">${IC.info}<div>${msgs.join(' ')}</div></div>
    </div>
  </div>
  <div class="grid g3 mt">
    ${[['۷۰٪ تجربی','#4F46E5',DB.projects.map(p=>({t:p.name,s:p.prog>=100?'done':p.prog>0?'cur':'next',v:fa(p.prog)+'٪'}))],
       ['۲۰٪ اجتماعی','#1D7FC2',[...DB.coach.sessions.filter(s=>s.s==='done').map(s=>({t:'کوچینگ — '+s.t,s:'done',v:'تکمیل'})),...DB.mentor.sessions.filter(s=>s.s==='done').map(s=>({t:'منتورینگ — '+s.t,s:'done',v:'تکمیل'})),{t:'بازخورد ۳۶۰ درجه',s:'cur',v:fa(DB.feedback.length)+' دریافت'}]],
       ['۱۰٪ رسمی','#0E9268',DB.learning.map(l=>({t:l.title,s:l.prog>=100?'done':l.prog>0?'cur':'next',v:l.prog>=100?'تکمیل':fa(l.prog)+'٪'}))]].map(col=>`
    <div class="card">
      <div class="card-hd"><div><h3 style="color:${col[1]}">${col[0]}</h3><p>${fa(col[2].length)} فعالیت</p></div></div>
      <div class="card-bd" style="padding-top:4px;display:flex;flex-direction:column;gap:9px;max-height:340px;overflow-y:auto">
        ${col[2].map(a=>`
        <div style="display:flex;align-items:center;gap:9px;font-size:12px">
          <span style="width:8px;height:8px;border-radius:50%;background:${a.s==='done'?'var(--ok)':a.s==='cur'?'var(--warn)':'#D5DAE2'};flex-shrink:0"></span>
          <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.t}</span>
          <b style="font-size:10.5px;color:var(--ink-3)">${a.v}</b>
        </div>`).join('')}
      </div>
    </div>`).join('')}
  </div>
  <div class="card mt">
    <div class="card-hd"><div><h3>ساعت توسعه به تفکیک ماه</h3><p>آیا مدل واقعاً اجرا می‌شود؟</p></div></div>
    <div class="card-bd" style="padding-top:4px"><div class="chbox"><canvas id="chMix"></canvas></div></div>
  </div>
  </div>`;
}
function chartsModel(){
  mkChart('chMix',{type:'bar',data:{labels:['مهر','آبان','آذر'],datasets:[
    {label:'تجربی',data:[24,30,33],backgroundColor:'#4F46E5',stack:'s',borderRadius:3},
    {label:'اجتماعی',data:[9,12,13],backgroundColor:'#1D7FC2',stack:'s',borderRadius:3},
    {label:'رسمی',data:[7,7,8],backgroundColor:'#0E9268',stack:'s',borderRadius:3}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:LEG,tooltip:TT},scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,grid:GRD,ticks:{callback:v=>v+' ساعت'}}}}});
}

/* ---------- PROJECTS ---------- */
function renderProjects(){
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">پروژه‌های من</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">یادگیری تجربی · متصل به اهداف توسعه و شایستگی‌ها</p></div>
    <div style="display:flex;gap:8px">
      <input class="inp" id="projSearch" placeholder="جستجوی پروژه…" style="width:210px;padding:8px 13px">
      <button class="btn btn-p" data-action="new-project">${IC.plus} پیشنهاد پروژه</button>
    </div>
  </div>
  <div class="grid g4">
    ${kpi('فعال',fa(DB.projects.length),`${fa(DB.projects.filter(p=>p.status==='ontrack').length)} در مسیر`,'briefcase','brand','')}
    ${kpi('در ریسک',fa(DB.projects.filter(p=>p.status==='atrisk').length),'نیازمند توجه امروز','alert','danger','')}
    ${kpi('نقاط عطف تکمیل‌شده',fa(RUN.milesDone),'در این دوره','checkc','ok','')}
    ${kpi('میانگین پیشرفت',fa(Math.round(DB.projects.reduce((a,p)=>a+p.prog,0)/DB.projects.length))+'<small>٪</small>','وزن‌دهی یکسان','trend','info','')}
  </div>
  <div class="grid g3 mt" id="projGrid">
    ${DB.projects.map(p=>`
    <div class="card" style="display:flex;flex-direction:column" data-pname="${p.name}">
      <div class="card-hd" style="margin-bottom:8px">
        <div><h3 style="font-size:13px">${p.name}</h3><p>${compById(p.comp).name} · سررسید ${p.end}</p></div>${stBadge(p.status)}
      </div>
      <div style="padding:0 20px">
        ${prgRow(p.prog,p.status==='atrisk'?'warn':'')}
        <div style="font-size:10.5px;color:var(--ink-4);margin:10px 0 12px">اسپانسر: ${p.sponsor} · ریسک: ${p.risk}</div>
        <div style="border-top:1px solid var(--line-2);padding:12px 0 14px">
          <div style="font-size:10px;font-weight:800;color:var(--ink-4);margin-bottom:8px;letter-spacing:.5px">نقاط عطف</div>
          ${p.miles.map(m=>`
          <div style="display:flex;align-items:center;gap:8px;font-size:11.5px;margin-bottom:6px">
            <span style="width:15px;height:15px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;${m.s==='done'?'background:var(--ok);color:#fff':m.s==='cur'?'background:var(--brand);color:#fff':'background:#EDEFF3;color:var(--ink-4)'}">${m.s==='done'?IC.check.replace('<svg','<svg style="width:8px"'):''}</span>
            <span style="${m.s==='next'?'color:var(--ink-4)':''}">${m.t}</span>
          </div>`).join('')}
        </div>
      </div>
      <div style="margin-top:auto;padding:12px 20px;border-top:1px solid var(--line-2);display:flex;gap:8px">
        <button class="btn btn-s btn-sm" style="flex:1" data-action="open-project" data-id="${p.id}">جزئیات و شواهد</button>
        <button class="btn btn-g btn-sm" data-action="quick-progress" data-id="${p.id}">ثبت پیشرفت</button>
      </div>
    </div>`).join('')}
  </div>
  </div>`;
}

/* ---------- COACHING ---------- */
function renderCoaching(){
  const c=DB.coach;
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">کوچینگ</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">رابطه کوچینگ فعال، جلسات و اقدامات پیگیری</p></div>
    <button class="btn btn-p" data-action="new-session" data-kind="coach">${IC.plus} درخواست جلسه جدید</button>
  </div>
  <div class="grid g12">
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="card card-bd" style="display:flex;gap:14px;align-items:center">
        <div class="av lg" style="background:linear-gradient(135deg,#6D66F2,#4338CA)">س‌ر</div>
        <div style="flex:1"><h3 style="font-size:14px;font-weight:800">${c.name}</h3><p style="font-size:11px;color:var(--ink-4)">${c.title}</p>
          <div style="display:flex;gap:6px;margin-top:7px">${c.focus.map(f=>`<span class="badge b-brand"><i></i>${f}</span>`).join('')}</div></div>
        ${stBadge('ontrack')}
      </div>
      <div class="card">
        <div class="card-hd"><div><h3>عملکرد رابطه</h3></div></div>
        <div class="card-bd" style="padding-top:4px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
          <div style="background:var(--surface-2);border-radius:10px;padding:12px;text-align:center"><b style="font-size:17px">${fa(c.done)}/${fa(c.total)}</b><div style="font-size:10px;color:var(--ink-4);margin-top:2px">جلسات</div></div>
          <div style="background:var(--surface-2);border-radius:10px;padding:12px;text-align:center"><b style="font-size:17px">${fa(c.eff)}٪</b><div style="font-size:10px;color:var(--ink-4);margin-top:2px">اثربخشی</div></div>
          <div style="background:var(--surface-2);border-radius:10px;padding:12px;text-align:center"><b style="font-size:17px">${fa(2)}</b><div style="font-size:10px;color:var(--ink-4);margin-top:2px">اقدام باز</div></div>
        </div>
      </div>
      ${card(`<div><h3>اقدامات پیگیری</h3><p>برای تکمیل کلیک کنید</p></div>`,
      `<div class="card-bd" style="padding-top:4px;display:flex;flex-direction:column;gap:9px" id="coachTasks">
        ${['تمرین سناریونویسی استراتژیک','مرور یادداشت‌های جلسه قبل','تهیه فهرست چالش‌های فعلی برای جلسه بعد'].map((t,i)=>`
        <label data-taskrow style="display:flex;align-items:center;gap:10px;font-size:12.5px;cursor:pointer;padding:9px 12px;border:1px solid var(--line);border-radius:10px;transition:all var(--fast)">
          <input type="checkbox" data-action="toggle-act" style="width:15px;height:15px;accent-color:var(--brand)">
          <span>${t}</span>${i===0?'<span class="badge b-danger" style="margin-inline-start:auto"><i></i>معوق</span>':''}
        </label>`).join('')}
      </div>`)}
    </div>
    ${card(`<div><h3>جلسات</h3><p>تاریخچه و جلسات پیش رو</p></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="tl">
      ${c.sessions.map(s=>`
      <div class="tl-it ${s.s==='done'?'done':'cur'}">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><h4>${s.t}</h4>${s.s==='next'?'<span class="badge b-brand"><i></i>پیش رو — '+s.d+' ساعت '+s.h+'</span>':''}</div>
        ${s.note?`<p>${s.note}</p>`:''}
        ${s.acts&&s.acts.length?`<div style="margin-top:7px">${s.acts.map(a=>`<span class="badge b-neutral" style="margin:2px"><i></i>${a}</span>`).join('')}</div>`:''}
        <div class="tl-meta"><span>${s.d}</span>${s.h!=='—'?`<span>ساعت ${s.h}</span>`:''}</div>
      </div>`).join('')}
    </div></div>`)}
  </div>
  </div>`;
}

/* ---------- MENTORING ---------- */
function renderMentoring(){
  const m=DB.mentor;
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">منتورینگ</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">رابطه منتورینگ و اهداف بلندمدت</p></div>
    <button class="btn btn-p" data-action="new-session" data-kind="mentor">${IC.plus} درخواست جلسه جدید</button>
  </div>
  <div class="grid g12">
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="card card-bd" style="display:flex;gap:14px;align-items:center">
        <div class="av lg" style="background:linear-gradient(135deg,#3FA4E8,#1D7FC2)">ع‌ک</div>
        <div style="flex:1"><h3 style="font-size:14px;font-weight:800">${m.name}</h3><p style="font-size:11px;color:var(--ink-4)">${m.title}</p>
          <div style="display:flex;gap:6px;margin-top:7px">${m.focus.map(f=>`<span class="badge b-info"><i></i>${f}</span>`).join('')}</div></div>
        ${stBadge('ontrack')}
      </div>
      ${card(`<div><h3>اهداف منتورینگ</h3></div>`,
      `<div class="card-bd" style="padding-top:4px">
        ${[['شفاف‌سازی مسیر شغلی ۳ ساله',72],['گسترش شبکه ارتباطی سازمانی',55],['یادگیری مدیریت بحران',40]].map(g=>`
        <div style="margin-bottom:13px"><div style="display:flex;justify-content:space-between;font-size:11.5px;margin-bottom:6px"><span style="color:var(--ink-3)">${g[0]}</span><b>${fa(g[1])}٪</b></div><div class="prg"><i style="width:${g[1]}%"></i></div></div>`).join('')}
        <div class="callout gray" style="margin-top:6px">${IC.info}<div>تمرکز سه ماه آینده: آماده‌سازی برای نقش «مدیر حوزه فناوری» و ساخت شبکه ذی‌نفعان.</div></div>
      </div>`)}
    </div>
    ${card(`<div><h3>جلسات</h3><p>${fa(m.done)} از ${fa(m.total)} جلسه انجام شده</p></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="tl">
      ${m.sessions.map(s=>`
      <div class="tl-it ${s.s==='done'?'done':'cur'}">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><h4>${s.t}</h4>${s.s==='next'?'<span class="badge b-info"><i></i>پیش رو — '+s.d+' ساعت '+s.h+'</span>':''}</div>
        ${s.note?`<p>${s.note}</p>`:''}
        ${s.acts&&s.acts.length?`<div style="margin-top:7px">${s.acts.map(a=>`<span class="badge b-neutral" style="margin:2px"><i></i>${a}</span>`).join('')}</div>`:''}
        <div class="tl-meta"><span>${s.d}</span></div>
      </div>`).join('')}
    </div></div>`)}
  </div>
  </div>`;
}

/* ---------- LEARNING ---------- */
function renderLearning(){
  const rec=DB.learning.filter(l=>{const c=compById(l.comp);return gapClass(gapOf(c))==='crit'||gapClass(gapOf(c))==='mod'}).slice(0,3);
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">یادگیری</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">کتابخانه محتوا · پیشنهادهای قانون‌محور بر اساس شکاف‌های شما</p></div>
    <div class="chips" id="learnChips">
      ${['همه','دوره','میکرولرنینگ','مقاله','پادکست','ویدیو','آزمون'].map((f,i)=>`<button class="chip ${i===0?'on':''}" data-action="filter-learn" data-f="${f}">${f}</button>`).join('')}
    </div>
  </div>
  ${card(`<div><h3>پیشنهاد برای توسعه شما</h3><p>چرا این محتوا؟ چون با شکاف شایستگی، سطح هدف و فعالیت‌های جاری شما هم‌راستا است.</p></div>`,
  `<div class="card-bd" style="padding-top:6px;display:flex;flex-direction:column;gap:10px">
    ${rec.map(l=>`
    <div style="display:flex;align-items:center;gap:13px;border:1px solid var(--brand-line);background:var(--brand-soft);border-radius:12px;padding:12px 15px;flex-wrap:wrap">
      <span class="prio-ic" style="background:#fff;color:var(--brand-2)">${IC[l.icon]}</span>
      <div style="flex:1;min-width:200px"><h4 style="font-size:12.5px;font-weight:800">${l.title}</h4><p style="font-size:11px;color:var(--ink-3);margin-top:2px">${compById(l.comp).name} · ${l.dur}</p></div>
      <span style="font-size:11px;color:#3B35B8;flex:2;min-width:200px">${l.why}</span>
      <button class="btn btn-p btn-sm" data-action="open-learning" data-id="${l.id}">${l.prog>0?'ادامه':'شروع'}</button>
    </div>`).join('')}
  </div>`)}
  <div class="grid g4 mt" id="learnGrid">
    ${DB.learning.map(l=>`
    <div class="card learn-c" data-ltype="${l.type}" data-lcomp="${l.comp}">
      <div class="learn-th" style="background:${l.col};color:${l.cc}">
        ${IC[l.icon]}<span class="tag" style="color:${l.cc}">${l.type}</span>
      </div>
      <div style="padding:14px 15px;display:flex;flex-direction:column;flex:1">
        <h4 style="font-size:12.5px;font-weight:800;line-height:1.6">${l.title}</h4>
        <p style="font-size:10.5px;color:var(--ink-4);margin:4px 0 10px">${compById(l.comp).name} · ${l.dur} · سطح ${l.diff}</p>
        <div style="margin-top:auto">
          ${prgRow(l.prog,l.prog===100?'ok':'')}
          <button class="btn ${l.prog===100?'btn-g':'btn-s'} btn-sm btn-block" style="margin-top:10px" data-action="open-learning" data-id="${l.id}">${l.prog===100?'مرور محتوا':l.prog>0?'ادامه از '+fa(l.prog)+'٪':'شروع'}</button>
        </div>
      </div>
    </div>`).join('')}
  </div>
  </div>`;
}

/* ---------- FEEDBACK ---------- */
function renderFeedback(){
  const byComp={};DB.feedback.forEach(f=>{byComp[f.comp]=(byComp[f.comp]||0)+1});
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">بازخورد</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">بازخوردهای دریافتی متصل به شایستگی‌ها — ${fa(DB.feedback.length)} دریافت در این دوره</p></div>
    <button class="btn btn-p" data-action="request-feedback">${IC.send} درخواست بازخورد</button>
  </div>
  <div class="grid g2">
    <div style="display:flex;flex-direction:column;gap:12px">
      ${DB.feedback.map(f=>`
      <div class="card card-bd">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:9px">
          <div style="display:flex;gap:11px;align-items:center">
            <div class="av" style="background:var(--ink-2)">${f.from.slice(0,2)}</div>
            <div><b style="font-size:12.5px">${f.from}</b><div style="font-size:10px;color:var(--ink-4)">${f.role} · ${f.date}</div></div>
          </div>
          <span class="badge ${f.tr==='up'?'b-ok':f.tr==='down'?'b-danger':'b-neutral'}"><i></i>${f.tr==='up'?'روند صعودی':f.tr==='down'?'نیازمند توجه':'بدون تغییر'}</span>
        </div>
        <p style="font-size:12.5px;color:var(--ink-2);line-height:1.9">${f.text}</p>
        <div style="margin-top:11px"><span class="badge b-brand"><i></i>${compById(f.comp).name}</span></div>
      </div>`).join('')}
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      ${card(`<div><h3>توزیع بازخورد بر اساس شایستگی</h3></div>`,
      `<div class="card-bd" style="padding-top:4px">
        ${Object.entries(byComp).map(([cid,n])=>{const c=compById(cid);return `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:11px">
          <span style="width:120px;font-size:11.5px;flex-shrink:0">${c.name}</span>
          <div class="prg" style="flex:1"><i style="width:${n/DB.feedback.length*100}%"></i></div>
          <b style="font-size:11px">${fa(n)}</b>
        </div>`}).join('')}
        <div class="callout gray" style="margin-top:10px">${IC.info}<div>بیشترین بازخورد روی «${compById(Object.keys(byComp).sort((a,b)=>byComp[b]-byComp[a])[0]).name}» متمرکز است و با اولویت توسعه شما هم‌خوانی دارد.</div></div>
      </div>`)}
      ${card(`<div><h3>درخواست‌های در انتظار</h3></div>`,
      `<div class="card-bd" style="padding-top:4px">
        ${[['۲ همکار همتا','ارزیابی ۳۶۰','۲۰ آذر'],['۳ عضو تیم','ارزیابی ۳۶۰','۳۰ آذر']].map(x=>`
        <div class="stat-row"><span>${x[0]} — ${x[1]}</span><span class="badge b-warn"><i></i>سررسید ${x[2]}</span></div>`).join('')}
      </div>`)}
    </div>
  </div>
  </div>`;
}

/* ---------- REFLECTIONS ---------- */
function renderReflections(){
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">تأملات</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">مجله تأمل ساختاریافته — ${fa(DB.reflections.length)} ثبت</p></div>
    <button class="btn btn-p" data-action="new-reflection">${IC.plus} تأمل جدید</button>
  </div>
  <div class="grid g2" id="reflGrid">
    ${DB.reflections.map(r=>`
    <div class="card card-bd">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap">
        <b style="font-size:13px">${r.title}</b>
        <span class="badge ${r.shared?'b-info':'b-neutral'}"><i></i>${r.shared?'اشتراک با کوچ':'خصوصی'}</span>
      </div>
      <div style="font-size:10px;color:var(--ink-4);margin-bottom:12px">${r.date} · شایستگی: ${compById(r.comp).name}</div>
      <div style="display:flex;flex-direction:column;gap:10px;font-size:12px">
        <div><span style="display:block;font-size:10px;font-weight:800;color:var(--ink-4);margin-bottom:3px">چه اتفاقی افتاد؟</span><span style="color:var(--ink-2)">${r.what}</span></div>
        <div><span style="display:block;font-size:10px;font-weight:800;color:var(--ink-4);margin-bottom:3px">چه آموختم؟</span><span style="color:var(--ink-2)">${r.learn}</span></div>
        <div><span style="display:block;font-size:10px;font-weight:800;color:var(--ink-4);margin-bottom:3px">گام بعدی</span><span style="color:var(--brand-2);font-weight:600">${r.next}</span></div>
      </div>
    </div>`).join('')}
  </div>
  </div>`;
}

/* ---------- GOALS ---------- */
function renderGoals(){
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">اهداف توسعه</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">اهداف فعال، شاخص‌ها و وضعیت</p></div>
    <div style="display:flex;gap:8px">
      <input class="inp" id="goalSearch" placeholder="جستجوی هدف…" style="width:200px;padding:8px 13px">
      <button class="btn btn-p" data-action="new-goal">${IC.plus} هدف جدید</button>
    </div>
  </div>
  <div class="card">
    <div class="tbl-wrap"><table class="tbl" id="goalTbl"><thead><tr>
      <th>هدف</th><th>شایستگی</th><th>شاخص کلیدی</th><th>سررسید</th><th>پیشرفت</th><th>وضعیت</th><th></th>
    </tr></thead><tbody>
      ${DB.goals.map(g=>`
      <tr data-gtitle="${g.title}">
        <td><b>${g.title}</b><div style="font-size:10px;color:var(--ink-4);margin-top:2px">اولویت: ${g.pri==='critical'?'بحرانی':g.pri==='high'?'بالا':'متوسط'}</div></td>
        <td style="font-size:11.5px">${compById(g.comp).name}<div style="font-size:10px;color:var(--ink-4)">${fa(compById(g.comp).cur)} → ${fa(g.tgt)}</div></td>
        <td style="font-size:11px">${g.kpi}</td>
        <td style="font-size:11.5px">${g.dl}</td>
        <td style="min-width:140px">${prgRow(g.prog,g.status==='atrisk'?'warn':'')}</td>
        <td>${stBadge(g.status)}</td>
        <td><button class="btn btn-g btn-sm" data-action="edit-goal" data-id="${g.id}">ویرایش</button></td>
      </tr>`).join('')}
    </tbody></table></div>
  </div>
  </div>`;
}

/* ---------- CALENDAR ---------- */
function renderCalendar(){
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">تقویم توسعه</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">آذر ${fa(1403)} · جلسات، سررسیدها و رویدادهای توسعه</p></div>
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
      ${[['coach','کوچینگ'],['mentor','منتورینگ'],['learn','یادگیری'],['proj','پروژه'],['assess','ارزیابی'],['goal','هدف']].map(x=>`<span style="display:inline-flex;align-items:center;gap:5px;font-size:10.5px;color:var(--ink-3)"><span class="cev ${x[0]}" style="width:9px;height:9px;border-radius:3px;padding:0"></span>${x[1]}</span>`).join('')}
    </div>
  </div>
  <div class="grid g21">
    <div class="card" style="overflow:hidden"><div class="card-bd" style="padding:16px"><div class="cal" id="calGrid"></div></div></div>
    ${card(`<div><h3>برنامه روز انتخابی</h3><p id="calDayLbl">۱۵ آذر — امروز</p></div>`,
    `<div class="card-bd" style="padding-top:4px" id="calAgenda"></div>`)}
  </div>
  </div>`;
}
function buildCalendar(sel){
  const off=5,dim=30,today=15;
  const g=$('#calGrid');if(!g)return;
  let h=['ش','ی','د','س','چ','پ','ج'].map(d=>`<div class="cal-h">${d}</div>`).join('');
  for(let i=0;i<off;i++)h+=`<div class="cal-d oth"><div class="dn">${fa(30-off+1+i)}</div></div>`;
  for(let d=1;d<=dim;d++){
    const evs=DB.calEvents[d]||[];
    h+=`<div class="cal-d ${d===today?'today':''} ${d===sel?'sel':''}" data-action="cal-day" data-day="${d}"><div class="dn">${fa(d)}</div>${evs.map(e=>`<div class="cev ${e[0]}">${e[1]}</div>`).join('')}</div>`;
  }
  g.innerHTML=h;
  showAgenda(sel||today);
}
function showAgenda(d){
  const box=$('#calAgenda'),lbl=$('#calDayLbl');if(!box)return;
  if(lbl)lbl.textContent=`${fa(d)} آذر ${d===15?'— امروز':''}`;
  const evs=DB.calEvents[d]||[];
  box.innerHTML=evs.length?evs.map(e=>`
    <div style="display:flex;gap:11px;align-items:center;padding:11px 13px;border:1px solid var(--line);border-radius:11px;margin-bottom:9px">
      <span class="cev ${e[0]}" style="margin:0;padding:5px 10px;font-size:10px">${e[0]==='coach'?'کوچینگ':e[0]==='mentor'?'منتورینگ':e[0]==='learn'?'یادگیری':e[0]==='proj'?'پروژه':e[0]==='assess'?'ارزیابی':'هدف'}</span>
      <span style="font-size:12px;flex:1">${e[1]}</span>
    </div>`).join('')
  :emptySt('cal','رویدادی در این روز نیست','برای برنامه‌ریزی توسعه، جلسات و سررسیدها به‌صورت خودکار در تقویم قرار می‌گیرند.');
}

/* ---------- ANALYTICS ---------- */
function renderAnalytics(){
  return `<div class="page">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px">
    <div><h2 style="font-size:19px;font-weight:800">تحلیل‌های من</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">سنجه‌ها و روندهای توسعه فردی — دوره مهر تا آذر ۱۴۰۳</p></div>
    <button class="btn btn-g" data-action="export-report">${IC.download} خروجی گزارش</button>
  </div>
  <div class="grid g4">
    ${kpi('ساعت یادگیری',fa(46),'<b style="color:var(--ok)">+۶</b> نسبت به دوره قبل','book','ok','')}
    ${kpi('جلسات کوچینگ و منتورینگ',fa(RUN.coachDone+DB.mentor.done),`${fa(DB.coach.total+DB.mentor.total)} برنامه‌ریزی‌شده`,'chat','brand','')}
    ${kpi('بازخورد دریافتی',fa(DB.feedback.length),'از ۴ منبع مختلف','msg','info','')}
    ${kpi('تأمل ثبت‌شده',fa(DB.reflections.length),'میانگین ۲ در ماه','edit','warn','')}
  </div>
  <div class="grid g2 mt">
    ${card(`<div><h3>بهبود شایستگی‌ها</h3><p>قبل از برنامه توسعه در برابر اکنون</p></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="chbox"><canvas id="chImprove"></canvas></div></div>`)}
    ${card(`<div><h3>ترکیب فعالیت توسعه</h3><p>سهم هر نوع فعالیت از زمان شما</p></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="chbox"><canvas id="chDonut"></canvas></div></div>`)}
  </div>
  <div class="card mt">
    <div class="card-hd"><div><h3>همبستگی فعالیت‌ها و بهبود</h3><p>زیرساخت تحلیل ارتباط — بدون تفسیر علّی</p></div></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>متغیر اول</th><th>متغیر دوم</th><th>ضریب همبستگی</th><th>تفسیر</th></tr></thead><tbody>
      ${[['ساعات کوچینگ','بهبود رهبری تیم','۰٫۷۸','همبستگی مثبت قوی','ok'],['تکمیل پروژه‌ها','بهبود تفکر استراتژیک','۰٫۷۲','همبستگی مثبت قوی','ok'],['جلسات منتورینگ','گسترش شبکه ارتباطی','۰٫۶۸','همبستگی مثبت قوی','ok'],['آموزش رسمی','بهبود دانش تخصصی','۰٫۵۵','همبستگی مثبت متوسط','info']].map(r=>`
      <tr><td>${r[0]}</td><td>${r[1]}</td><td><b style="color:var(--${r[4]})">${r[2]}</b></td><td style="font-size:11.5px">${r[3]}</td></tr>`).join('')}
    </tbody></table></div>
    <div class="card-bd" style="padding-top:0"><div class="callout gray">${IC.info}<div>همبستگی به معنای رابطه علت‌ومعلولی نیست؛ این اعداد صرفاً رابطه آماری متغیرها را نشان می‌دهند و مبنای تصمیم علّی قرار نمی‌گیرند.</div></div></div>
  </div>
  </div>`;
}
function chartsAnalytics(){
  mkChart('chImprove',{type:'bar',data:{labels:DB.competencies.map(c=>c.name),datasets:[
    {label:'قبل از برنامه',data:DB.competencies.map(c=>c.trend[0]),backgroundColor:'rgba(154,161,173,.45)',borderRadius:5,barThickness:11},
    {label:'اکنون',data:DB.competencies.map(c=>c.cur),backgroundColor:'rgba(14,146,104,.75)',borderRadius:5,barThickness:11}
  ]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:LEG,tooltip:TT},scales:{x:{min:0,max:5,grid:GRD},y:{grid:{display:false},ticks:{font:{size:10}}}}}});
  mkChart('chDonut',{type:'doughnut',data:{labels:['پروژه‌ها','کوچینگ','منتورینگ','دوره و میکرولرنینگ','مطالعه و بازخورد'],
    datasets:[{data:[36,22,13,18,11],backgroundColor:['#4F46E5','#1D7FC2','#7A74EE','#0E9268','#9AA1AD'],borderWidth:0,spacing:3,borderRadius:4}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'64%',plugins:{legend:LEG,tooltip:TT}}});
}

/* ---------- ACHIEVEMENTS ---------- */
function renderAchievements(){
  const st=achvState();
  return `<div class="page">
  <div style="margin-bottom:18px"><h2 style="font-size:19px;font-weight:800">دستاوردها</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">نقاط عطف معنادار مسیر توسعه — ${fa(st.filter(a=>a.ok).length)} از ${fa(st.length)} کسب شده</p></div>
  <div class="grid g4">
    ${st.map(a=>`
    <div class="achv ${a.ok?'':'lock'}">
      <div class="achv-ic" style="background:${toneC(a.tn)[0]};color:${toneC(a.tn)[1]}">${a.ok?IC[a.ic]:IC.lock}</div>
      <div><h4>${a.t}</h4><p>${a.d}</p>
      <div style="font-size:9.5px;font-weight:800;margin-top:7px;color:${a.ok?'var(--ok)':'var(--ink-4)'}">${a.ok?'✓ کسب شد':'در مسیر کسب'}</div></div>
    </div>`).join('')}
  </div>
  <div class="card mt">
    <div class="card-hd"><div><h3>گذرنامه رهبری</h3><p>پیشرفت سطح شایستگی‌ها به همراه شواهد</p></div></div>
    <div class="card-bd" style="padding-top:4px;display:flex;flex-direction:column;gap:12px">
      ${DB.competencies.filter(c=>gapOf(c)>0).slice(0,4).map(c=>`
      <div style="border:1px solid var(--line);border-radius:12px;padding:15px">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:9px;flex-wrap:wrap">
          <b style="font-size:13px">${c.name}</b>
          <span style="font-size:11.5px;color:var(--ink-3)">سطح ${fa(Math.floor(c.cur))} <span style="color:var(--ink-4)">←</span> <b style="color:var(--brand-2)">سطح ${fa(Math.floor(c.cur)+(c.cur%1>=.5?1:0))}</b> ${gapBadge(gapOf(c))}</span>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <span class="badge b-neutral"><i></i>${fa(DB.projects.filter(p=>p.comp===c.id).length)} پروژه</span>
          <span class="badge b-neutral"><i></i>${fa(DB.feedback.filter(f=>f.comp===c.id).length)} بازخورد</span>
          <span class="badge b-neutral"><i></i>${fa(DB.learning.filter(l=>l.comp===c.id&&l.prog===100).length)} یادگیری کامل</span>
          <span class="badge ${c.trend[5]>c.trend[0]?'b-ok':'b-neutral'}"><i></i>بهبود ارزیابی ${fa(r1(c.trend[5]-c.trend[0]))}</span>
        </div>
      </div>`).join('')}
    </div>
  </div>
  </div>`;
}

/* ---------- TEAM ---------- */
function renderTeam(){
  return `<div class="page">
  <div style="margin-bottom:18px"><h2 style="font-size:19px;font-weight:800">تیم من</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">نمای توسعه اعضای تیم — بدون نمایش جزئیات محرمانه ارزیابی</p></div>
  <div class="callout gray" style="margin-bottom:16px">${IC.shield}<div>مطابق سیاست دسترسی، فقط اطلاعات تجمیعی و مجاز نمایش داده می‌شود؛ نتایج ارزیابی افراد محرمانه باقی می‌ماند.</div></div>
  <div class="grid g4">
    ${DB.team.map(m=>`
    <div class="card team-c">
      <div style="display:flex;gap:11px;align-items:center;margin-bottom:13px">
        <div class="av" style="background:${m.av_c}">${m.n.slice(0,2)}</div>
        <div><b style="font-size:12.5px">${m.n}</b><div style="font-size:10px;color:var(--ink-4)">${m.r}</div></div>
      </div>
      <div class="stat-row"><span>میانگین شایستگی</span><b>${fa(m.av)}</b></div>
      <div style="margin:10px 0 4px;display:flex;justify-content:space-between;font-size:11px"><span style="color:var(--ink-3)">پیشرفت توسعه</span><b>${fa(m.prog)}٪</b></div>
      <div class="prg ${m.prog<55?'warn':''}"><i style="width:${m.prog}%"></i></div>
      <div class="stat-row" style="margin-top:9px"><span>اهداف فعال</span><b>${fa(m.goals)}</b></div>
    </div>`).join('')}
  </div>
  <div class="grid g2 mt">
    ${card(`<div><h3>وضعیت کلی تیم</h3></div>`,
    `<div class="card-bd" style="padding-top:4px"><div class="chbox sm"><canvas id="chTeam"></canvas></div></div>`)}
    ${card(`<div><h3>سررسیدهای پیش روی تیم</h3></div>`,
    `<div class="card-bd" style="padding-top:4px;display:flex;flex-direction:column;gap:9px">
      ${[['سارا محمدی','سررسید هدف توسعه','۲۰ آذر','b-warn'],['رضا قاسمی','نقطه عطف پروژه','۲۲ آذر','b-warn'],['امیر تهرانی','خودارزیابی','۲۵ آذر','b-danger'],['نگار حسینی','جلسه کوچینگ','۲۶ آذر','b-brand']].map(x=>`
      <div style="display:flex;align-items:center;gap:10px;font-size:12px;padding:10px 13px;border:1px solid var(--line);border-radius:11px">
        <span style="flex:1"><b>${x[0]}</b> — ${x[1]}</span><span class="badge ${x[3]}"><i></i>${x[2]}</span>
      </div>`).join('')}
    </div>`)}
  </div>
  </div>`;
}
function chartsTeam(){
  mkChart('chTeam',{type:'bar',data:{labels:DB.team.map(m=>m.n.split(' ')[0]),datasets:[
    {label:'میانگین شایستگی',data:DB.team.map(m=>m.av),backgroundColor:'rgba(79,70,229,.75)',borderRadius:5,barThickness:20},
    {label:'پیشرفت توسعه (نرمال)',data:DB.team.map(m=>m.prog/20),backgroundColor:'rgba(14,146,104,.6)',borderRadius:5,barThickness:20}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:LEG,tooltip:TT},scales:{y:{min:0,max:5,grid:GRD,ticks:{stepSize:1}},x:{grid:{display:false}}}}});
}

/* ---------- PROFILE ---------- */
function renderProfile(){
  const u=DB.user,ready=64;
  return `<div class="page">
  <div style="margin-bottom:18px"><h2 style="font-size:19px;font-weight:800">پروفایل</h2><p style="font-size:12px;color:var(--ink-3);margin-top:2px">اطلاعات فردی، آمادگی شغلی و تنظیمات</p></div>
  <div class="grid g21">
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="card card-bd">
        <div style="display:flex;gap:16px;align-items:center">
          <div class="av lg av-ring" style="background:linear-gradient(135deg,#6D66F2,#4338CA)">م‌ا</div>
          <div><h3 style="font-size:16px;font-weight:800">${u.name}</h3><p style="font-size:12px;color:var(--ink-3)">${u.role}</p><p style="font-size:11px;color:var(--ink-4)">${u.bu} · ${u.dept} · عضویت از ${u.start}</p></div>
        </div>
        <div class="divider"></div>
        <div class="stat-row"><span>نقش فعلی</span><b>${u.curRole}</b></div>
        <div class="stat-row"><span>نقش هدف</span><b>${u.tgtRole}</b></div>
        <div class="stat-row"><span>چرخه ارزیابی فعال</span><b>${DB.assessments.cycle}</b></div>
        <div class="stat-row"><span>کوچ / منتور</span><b>رضایی / کریمی</b></div>
        <div style="display:flex;gap:8px;margin-top:16px">
          <button class="btn btn-g btn-sm" data-action="edit-profile">${IC.edit} ویرایش اطلاعات</button>
          <button class="btn btn-g btn-sm" data-action="export-report">${IC.download} پورتفولیوی رهبری</button>
        </div>
      </div>
      ${card(`<div><h3>تنظیمات اعلان‌ها</h3><p>انتخاب کانال و نوع اعلان</p></div>`,
      `<div class="card-bd" style="padding-top:4px">
        ${[['یادآوری سررسیدها',1],['یادآوری جلسات کوچینگ و منتورینگ',1],['پیشنهاد محتوای یادگیری',1],['خلاصه هفتگی پیشرفت',0]].map(x=>`
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--line-2)">
          <span style="font-size:12.5px">${x[0]}</span>
          <span class="sw ${x[1]?'on':''}" data-action="toggle-sw" role="switch" aria-checked="${!!x[1]}" tabindex="0"></span>
        </div>`).join('')}
      </div>`)}
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      ${card(`<div><h3>آمادگی شغلی</h3><p>ابزار توسعه سازمانی — نه پیش‌بینی یا وعده ارتقا</p></div>`,
      `<div class="card-bd" style="padding-top:4px">
        <div style="display:flex;align-items:center;gap:18px;margin-bottom:18px;flex-wrap:wrap">
          <div class="ring">
            <svg width="86" height="86"><circle cx="43" cy="43" r="36" fill="none" stroke="#EDEFF3" stroke-width="8"/><circle cx="43" cy="43" r="36" fill="none" stroke="var(--brand)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${2*Math.PI*36}" stroke-dashoffset="${2*Math.PI*36*(1-ready/100)}"/></svg>
            <span class="rv" style="font-size:17px">${fa(ready)}٪</span>
          </div>
          <div style="flex:1;min-width:180px"><b style="font-size:13.5px">آمادگی برای «${u.tgtRole}»</b><p style="font-size:11.5px;color:var(--ink-4);margin-top:4px">بر اساس شواهد فعلی توسعه، ارزیابی‌ها و بازخوردها</p></div>
        </div>
        ${[['تفکر استراتژیک',76,''],['توسعه دیگران',55,'warn'],['مدیریت تغییر',60,''],['هوش تجاری',48,'warn'],['دید کسب‌وکاری',70,'']].map(x=>`
        <div style="margin-bottom:11px"><div style="display:flex;justify-content:space-between;font-size:11.5px;margin-bottom:6px"><span style="color:var(--ink-3)">${x[0]}</span><b>${fa(x[1])}٪</b></div><div class="prg ${x[2]}"><i style="width:${x[1]}%"></i></div></div>`).join('')}
        <div class="callout brand" style="margin-top:12px">${IC.info}<div>برای افزایش آمادگی، تمرکز بر «توسعه دیگران» بیشترین اثر را دارد؛ این شایستگی در نقش «مدیر حوزه» وزن بالاتری دارد.</div></div>
      </div>`)}
      ${card(`<div><h3>پورتفولیوی رهبری</h3><p>خلاصه قابل ارائه از مسیر توسعه</p></div>`,
      `<div class="card-bd" style="padding-top:4px;display:flex;flex-direction:column;gap:9px">
        ${[['briefcase',`${fa(DB.projects.length)} پروژه توسعه‌ای فعال و ${fa(2)} تکمیل‌شده`],['award',`${fa(achvState().filter(a=>a.ok).length)} دستاورد کسب‌شده`],['msg',`${fa(DB.feedback.length)} بازخورد ساختاریافته از ۴ منبع`],['book',`${fa(DB.learning.filter(l=>l.prog===100).length)} محتوای آموزشی تکمیل‌شده`],['trend','بهبود میانگین شایستگی از ۳٫۱ به ۳٫۶ در دو دوره']].map(x=>`
        <div style="display:flex;gap:11px;align-items:center;padding:11px 13px;background:var(--surface-2);border-radius:11px;font-size:12px">
          <span class="kpi-ic" style="background:#fff;color:var(--brand-2);width:30px;height:30px">${IC[x[0]]}</span>${x[1]}
        </div>`).join('')}
      </div>`)}
    </div>
  </div>
  </div>`;
}

/* ================= ROUTER ================= */
const PAGES={
  command:{t:'مرکز فرماندهی',r:renderCommand,c:chartsCommand},
  competencies:{t:'شایستگی‌های من',r:renderCompetencies,c:chartsCompetencies},
  assessment:{t:'ارزیابی من',r:renderAssessment,c:chartsAssessment},
  idp:{t:'برنامه توسعه فردی',r:renderIdp,c:chartsIdp},
  model:{t:'مدل ۷۰/۲۰/۱۰',r:renderModel,c:chartsModel},
  projects:{t:'پروژه‌های من',r:renderProjects},
  coaching:{t:'کوچینگ',r:renderCoaching},
  mentoring:{t:'منتورینگ',r:renderMentoring},
  learning:{t:'یادگیری',r:renderLearning},
  feedback:{t:'بازخورد',r:renderFeedback},
  reflections:{t:'تأملات',r:renderReflections},
  goals:{t:'اهداف توسعه',r:renderGoals},
  calendar:{t:'تقویم توسعه',r:renderCalendar,post:()=>buildCalendar(15)},
  analytics:{t:'تحلیل‌های من',r:renderAnalytics,c:chartsAnalytics},
  achievements:{t:'دستاوردها',r:renderAchievements},
  team:{t:'تیم من',r:renderTeam,c:chartsTeam},
  profile:{t:'پروفایل',r:renderProfile}
};
const NAVG=[
  {g:'اصلی',items:[['command','grid','مرکز فرماندهی']]},
  {g:'توسعه فردی',items:[['competencies','target','شایستگی‌های من'],['assessment','clipboard','ارزیابی من'],['idp','layers','برنامه توسعه (IDP)'],['model','pie','مدل ۷۰/۲۰/۱۰'],['goals','flag','اهداف']]},
  {g:'اجرا',items:[['projects','briefcase','پروژه‌های من'],['learning','book','یادگیری'],['calendar','cal','تقویم']]},
  {g:'همراهی و بازخورد',items:[['coaching','chat','کوچینگ'],['mentoring','users','منتورینگ'],['feedback','msg','بازخورد'],['reflections','edit','تأملات']]},
  {g:'بینش',items:[['analytics','chart','تحلیل‌های من'],['achievements','award','دستاوردها'],['team','users','تیم من'],['profile','user','پروفایل']]}
];
let curPage='command';
function nav(id){
  if(!PAGES[id])return;
  curPage=id;
  document.querySelectorAll('.sb-it').forEach(e=>e.classList.toggle('on',e.dataset.nav===id));
  document.querySelectorAll('.mn-it').forEach(e=>e.classList.toggle('on',e.dataset.nav===id));
  $('#tbTitle').textContent=PAGES[id].t;
  $('#crumbPage').textContent=PAGES[id].t;
  closeAll();
  const v=$('#view');
  v.innerHTML=`<div class="page" style="display:flex;flex-direction:column;gap:16px">
    <div class="skel" style="height:28px;width:240px"></div>
    <div class="skel" style="height:13px;width:340px"></div>
    <div class="grid g4">${'<div class="skel" style="height:110px"></div>'.repeat(4)}</div>
    <div class="grid g21"><div class="skel" style="height:290px"></div><div class="skel" style="height:290px"></div></div>
  </div>`;
  v.scrollTop=0;
  setTimeout(()=>{
    v.innerHTML=`<div class="page-in">${PAGES[id].r()}</div>`;
    if(PAGES[id].c)PAGES[id].c();
    if(PAGES[id].post)PAGES[id].post();
  },230);
}

/* ================= OVERLAYS ================= */
function closeAll(){
  $('#scrim').classList.remove('on');
  $('#drawer').classList.remove('on');
  $('#npanel').classList.remove('on');
  $('#sidebar').classList.remove('on');
  $('#pal').classList.remove('on');
  $('#mroot').classList.remove('on');
}
function toast(msg,type='ok'){
  const icons={ok:'checkc',warn:'alert',danger:'alert',info:'info'};
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`${IC[icons[type]]}<span>${msg}</span>`;
  $('#toasts').appendChild(el);
  setTimeout(()=>{el.classList.add('out');setTimeout(()=>el.remove(),240)},3400);
}
function openDrawer(title,body,foot){
  $('#drTitle').innerHTML=title;$('#drBody').innerHTML=body;
  $('#drFoot').innerHTML=foot||'';
  $('#drFoot').style.display=foot?'flex':'none';
  $('#scrim').classList.add('on');$('#drawer').classList.add('on');
}
function openModal(title,body,foot,wide){
  $('#mTitle').textContent=title;$('#mBody').innerHTML=body;$('#mFoot').innerHTML=foot||'';
  $('#modal').classList.toggle('wide',!!wide);
  $('#scrim').classList.add('on');$('#mroot').classList.add('on');
}
function closeModalOnly(){
  $('#mroot').classList.remove('on');
  if(!$('#drawer').classList.contains('on')&&!$('#npanel').classList.contains('on'))$('#scrim').classList.remove('on');
}

/* ================= PROJECT DRAWER (with tabs) ================= */
function openProject(id,tab='ov'){
  const p=DB.projects.find(x=>x.id===id);if(!p)return;
  const c=compById(p.comp),g=goalById(p.goal);
  const tabs=`
    <div class="drtabs">
      <button class="drtab ${tab==='ov'?'on':''}" data-grp="proj" data-tab="ov" data-action="dr-tab">نمای کلی</button>
      <button class="drtab ${tab==='ms'?'on':''}" data-grp="proj" data-tab="ms" data-action="dr-tab">نقاط عطف و وظایف</button>
      <button class="drtab ${tab==='ev'?'on':''}" data-grp="proj" data-tab="ev" data-action="dr-tab">شواهد</button>
    </div>`;
  const ov=`
    <div class="dr-pane" data-grp="proj" data-tab="ov" style="${tab==='ov'?'':'display:none'}">
      <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">${stBadge(p.status)}<span class="badge b-brand"><i></i>${c.name}</span><span class="badge b-neutral"><i></i>ریسک: ${p.risk}</span></div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">${prgRow(p.prog,p.status==='atrisk'?'warn':'')}</div>
      <div style="font-size:11px;color:var(--ink-4);margin-bottom:16px">${p.start} تا ${p.end} · اسپانسر: ${p.sponsor} · منتور: ${p.mentor}</div>
      <div class="field"><label>هدف و زمینه کسب‌وکاری</label><p style="font-size:12px;color:var(--ink-3);line-height:1.9">${p.obj}. این پروژه فعالیت تجربی (۷۰٪) برای توسعه «${c.name}» است و به هدف «${g?g.title:'—'}» متصل شده است.</p></div>
      <div class="callout brand">${IC.target}<div>برای به‌روزرسانی پیشرفت یا ثبت شاهد، از تب‌های بالا یا دکمه‌های پایین استفاده کنید.</div></div>
    </div>`;
  const ms=`
    <div class="dr-pane" data-grp="proj" data-tab="ms" style="${tab==='ms'?'':'display:none'}">
      <div class="field"><label>نقاط عطف</label>
        <div class="tl" style="margin-top:9px">
          ${p.miles.map((m,mi)=>`
          <div class="tl-it ${m.s==='done'?'done':m.s==='cur'?'cur':''}">
            <div style="display:flex;align-items:center;gap:9px;flex-wrap:wrap">
              <h4>${m.t}</h4>
              ${m.s==='cur'?`<button class="btn btn-s btn-sm" data-action="mile-done" data-pid="${p.id}" data-mi="${mi}">${IC.check} تکمیل نقطه عطف</button>`:''}
              ${m.s==='done'?'<span class="badge b-ok"><i></i>تکمیل شد</span>':''}
            </div>
          </div>`).join('')}
        </div>
      </div>
      <div class="field"><label>وظایف</label>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
          ${p.tasks.map((t,ti)=>`
          <label style="display:flex;align-items:center;gap:10px;font-size:12.5px;padding:10px 13px;border:1px solid var(--line);border-radius:10px;cursor:pointer;${t.done?'opacity:.6':''}">
            <input type="checkbox" ${t.done?'checked':''} data-action="task-tgl" data-pid="${p.id}" data-ti="${ti}" style="width:15px;height:15px;accent-color:var(--brand)">
            <span style="${t.done?'text-decoration:line-through':''}">${t.t}</span>
          </label>`).join('')}
        </div>
      </div>
    </div>`;
  const ev=`
    <div class="dr-pane" data-grp="proj" data-tab="ev" style="${tab==='ev'?'':'display:none'}">
      <div class="field"><label>شواهد توسعه (${fa(p.evidence.length)})</label>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
          ${p.evidence.length?p.evidence.map(e=>`
          <div style="display:flex;align-items:center;gap:10px;padding:10px 13px;background:var(--surface-2);border-radius:10px;font-size:12px">
            <span class="kpi-ic" style="background:#fff;color:var(--brand-2);width:28px;height:28px">${IC[e.k==='file'?'file':'chart']}</span>
            <span style="flex:1">${e.n}</span><span style="font-size:10px;color:var(--ink-4)">${e.d}</span>
          </div>`).join(''):emptySt('file','هنوز شاهدی ثبت نشده','شواهد، مستنداتی هستند که توسعه شما را اثبات می‌کنند؛ گزارش، ارائه یا تصویر نتیجه.')}
          <button class="btn btn-g btn-sm" data-action="add-evidence" data-pid="${p.id}">${IC.plus} افزودن شاهد</button>
        </div>
      </div>
    </div>`;
  openDrawer(`پروژه — ${p.name}`,tabs+ov+ms+ev,
    `<button class="btn btn-g" data-action="close-all">بستن</button><button class="btn btn-p" data-action="quick-progress" data-id="${p.id}">${IC.trend} به‌روزرسانی پیشرفت</button>`);
}

/* ================= COMPETENCY DRAWER ================= */
function openComp(id){
  const c=DB.competencies.find(x=>x.id===id);if(!c)return;
  const g=gapOf(c),gl=DB.goals.find(x=>x.comp===id);
  const acts=[...DB.projects.filter(p=>p.comp===id).map(p=>({ic:'briefcase',t:p.name,s:stBadge(p.status)})),
              ...DB.learning.filter(l=>l.comp===id).map(l=>({ic:l.icon,t:l.title,s:l.prog>=100?'<span class="badge b-ok"><i></i>تکمیل</span>':`<span class="badge b-info"><i></i>${fa(l.prog)}٪</span>`}))];
  openDrawer(`شایستگی — ${c.name}`,`
    <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px"><span class="badge b-brand"><i></i>${c.cat}</span>${gapBadge(g)}</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px">
      <div style="background:var(--surface-2);border-radius:11px;padding:13px;text-align:center"><b style="font-size:19px">${fa(c.cur)}</b><div style="font-size:10px;color:var(--ink-4);margin-top:2px">سطح فعلی</div></div>
      <div style="background:var(--surface-2);border-radius:11px;padding:13px;text-align:center"><b style="font-size:19px">${fa(c.tgt)}</b><div style="font-size:10px;color:var(--ink-4);margin-top:2px">سطح هدف</div></div>
      <div style="background:var(--surface-2);border-radius:11px;padding:13px;text-align:center"><b style="font-size:19px;color:${g>=1.5?'var(--danger)':'var(--ink)'}">${fa(g)}</b><div style="font-size:10px;color:var(--ink-4);margin-top:2px">شکاف</div></div>
    </div>
    <div class="field"><label>تعریف شایستگی</label><p style="font-size:12px;color:var(--ink-3);line-height:1.9">${c.def}</p></div>
    <div class="field"><label>روند پیشرفت (۶ ماه اخیر)</label><div class="chbox sm" style="margin-top:8px"><canvas id="chCompTr"></canvas></div></div>
    ${gl?`<div class="callout brand" style="margin-bottom:16px">${IC.target}<div>هدف توسعه مرتبط: <b>${gl.title}</b> — ${fa(gl.prog)}٪ پیشرفت</div></div>`:''}
    <div class="field"><label>فعالیت‌های توسعه متصل (${fa(acts.length)})</label>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        ${acts.length?acts.map(a=>`
        <div style="display:flex;align-items:center;gap:10px;padding:10px 13px;border:1px solid var(--line);border-radius:10px;font-size:12px">
          <span class="kpi-ic" style="background:var(--brand-soft);color:var(--brand-2);width:28px;height:28px">${IC[a.ic]}</span>
          <span style="flex:1">${a.t}</span>${a.s}
        </div>`).join(''):emptySt('zap','فعالیتی متصل نیست','برای توسعه این شایستگی، فعالیت ۷۰/۲۰/۱۰ تعریف کنید.')}
      </div>
    </div>
    <div class="field"><label>شواهد و بازخوردها</label>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        ${DB.feedback.filter(f=>f.comp===id).map(f=>`
        <div style="padding:11px 13px;background:var(--surface-2);border-radius:10px;font-size:12px">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px"><b style="font-size:11px">${f.from}</b><span style="font-size:10px;color:var(--ink-4)">${f.date}</span></div>
          <span style="color:var(--ink-3);line-height:1.8">${f.text}</span>
        </div>`).join('')||emptySt('msg','بازخوردی ثبت نشده','پس از دریافت بازخورد، موارد مرتبط با این شایستگی اینجا نمایش داده می‌شوند.')}
      </div>
    </div>
  `,`${gl?`<button class="btn btn-s" data-nav="idp">${IC.layers} مشاهده هدف توسعه</button>`:''}<button class="btn btn-g" data-action="close-all">بستن</button>`);
  requestAnimationFrame(()=>{
    mkChart('chCompTr',{type:'line',data:{labels:['تیر','مرداد','شهریور','مهر','آبان','آذر'],
      datasets:[{label:c.name,data:c.trend,borderColor:'#4F46E5',backgroundColor:'rgba(79,70,229,.08)',fill:true,tension:.35,borderWidth:2,pointRadius:3,pointBackgroundColor:'#4F46E5'}]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:TT},scales:{y:{min:1,max:5,grid:GRD,ticks:{stepSize:1}},x:{grid:{display:false}}}}});
  });
}

/* ================= LEARNING MODAL ================= */
function openLearning(id){
  const l=DB.learning.find(x=>x.id===id);if(!l)return;
  const c=compById(l.comp);
  openModal(l.title,`
    <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
      <span class="badge b-brand"><i></i>${l.type}</span>
      <span class="badge b-neutral"><i></i>${l.dur}</span>
      <span class="badge b-neutral"><i></i>سطح ${l.diff}</span>
      <span class="badge b-info"><i></i>${c.name}</span>
    </div>
    <div style="height:120px;border-radius:12px;background:${l.col};color:${l.cc};display:flex;align-items:center;justify-content:center;margin-bottom:16px"><span style="width:44px;height:44px">${IC[l.icon]}</span></div>
    <div class="callout brand" style="margin-bottom:16px">${IC.info}<div><b>چرا این محتوا؟</b> ${l.why}</div></div>
    <div class="field"><label>پیشرفت شما</label>${prgRow(l.prog,l.prog===100?'ok':'')}</div>
  `,`${l.prog<100?`<button class="btn btn-p" data-action="learn-complete" data-id="${l.id}">${IC.checkc} تکمیل محتوا</button>`:''}
     <button class="btn btn-g" data-action="close-modal">بستن</button>`);
}

/* ================= ASSESSMENT WIZARD ================= */
const WIZ={step:0,answers:{}};
function startAssessment(){
  WIZ.step=0;WIZ.answers={};
  renderWiz();
  $('#scrim').classList.add('on');$('#mroot').classList.add('on');
}
function renderWiz(){
  const comps=DB.competencies,total=comps.length+2;
  let body='',foot='',title='';
  if(WIZ.step===0){
    title='خودارزیابی — '+DB.assessments.cycle;
    body=`
      <div style="display:flex;gap:7px;margin-bottom:14px"><span class="badge b-brand"><i></i>روش: ${DB.assessments.method}</span><span class="badge b-neutral"><i></i>${fa(comps.length)} شایستگی · ${fa(comps*2)} شاخص</span></div>
      <p style="font-size:12.5px;color:var(--ink-3);line-height:2;margin-bottom:14px">در این خودارزیابی، ${fa(comps*2)} شاخص رفتاری را بر اساس رفتار واقعی خود در <b>سه ماه گذشته</b> از ۱ (کاملاً مخالفم) تا ۵ (کاملاً موافقم) ارزیابی می‌کنید.</p>
      <div class="callout gray">${IC.shield}<div>پاسخ‌ها محرمانه هستند، به‌صورت خودکار ذخیره می‌شوند و فقط در اختیار شما، مدیر مستقیم و HR قرار می‌گیرند. می‌توانید در هر زمان خارج شوید و بعداً ادامه دهید.</div></div>`;
    foot=`<button class="btn btn-g" data-action="close-modal">بعداً ادامه می‌دهم</button><button class="btn btn-p" data-action="wiz-next">شروع ارزیابی</button>`;
  }else if(WIZ.step<=comps.length){
    const c=comps[WIZ.step-1];
    title=`شاخص ${fa(WIZ.step)} از ${fa(comps.length)} — ${c.name}`;
    body=`
      <div style="margin-bottom:14px"><span class="badge b-brand"><i></i>${c.cat}</span>
      <p style="font-size:12px;color:var(--ink-3);margin-top:9px;line-height:1.9">${c.def}</p></div>
      ${c.ind.map((ind,ii)=>`
      <div class="field" style="padding:14px;border:1px solid var(--line);border-radius:12px;margin-bottom:12px">
        <label style="font-size:12.5px;line-height:1.8">${fa(ii+1)}. ${ind}</label>
        <div class="rate-row" style="margin-top:9px">
          ${[1,2,3,4,5].map(v=>`<button class="rate ${(WIZ.answers[c.id]||{})[ii]===v?'on':''}" data-action="wiz-rate" data-cid="${c.id}" data-ii="${ii}" data-v="${v}" aria-label="امتیاز ${v}">${fa(v)}</button>`).join('')}
        </div>
        <div class="hint">۱ = کاملاً مخالفم · ۵ = کاملاً موافقم</div>
      </div>`).join('')}
      <div class="field"><label>توضیح اختیاری</label><textarea class="txa" id="wizNote" placeholder="مثال یا شاهدی برای این ارزیابی…">${(WIZ.answers[c.id]||{}).note||''}</textarea></div>`;
    foot=`<button class="btn btn-g" data-action="wiz-prev">${IC.arrow} قبلی</button><button class="btn btn-p" data-action="wiz-next">ذخیره و ادامه</button>`;
  }else if(WIZ.step===comps.length+1){
    title='بازبینی و ثبت نهایی';
    body=`<p style="font-size:12px;color:var(--ink-3);margin-bottom:14px">نتایج خودارزیابی شما به شرح زیر است. پس از ثبت، نتایج در تاریخچه ارزیابی ذخیره شده و به تحلیل شکاف‌ها اضافه می‌شود.</p>
      ${comps.map(c=>{const a=WIZ.answers[c.id];const avg=a?r1(((a[0]||0)+(a[1]||0))/2):0;return `
      <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--line-2);font-size:12.5px">
        <span style="flex:1"><b>${c.name}</b></span>
        <span class="badge b-brand"><i></i>میانگین: ${fa(avg)}</span>
        <button class="linkb" data-action="wiz-edit" data-s="${DB.competencies.indexOf(c)+1}">ویرایش</button>
      </div>`}).join('')}`;
    foot=`<button class="btn btn-g" data-action="wiz-prev">${IC.arrow} قبلی</button><button class="btn btn-p" data-action="wiz-submit">${IC.checkc} ثبت نهایی ارزیابی</button>`;
  }else{
    title='ارزیابی با موفقیت ثبت شد';
    body=`
      <div style="text-align:center;padding:10px 0 18px">
        <div style="width:64px;height:64px;border-radius:50%;background:var(--ok-soft);color:var(--ok);display:flex;align-items:center;justify-content:center;margin:0 auto 14px"><span style="width:28px;height:28px">${IC.checkc}</span></div>
        <h4 style="font-size:15px;font-weight:800">خودارزیابی شما ثبت شد</h4>
        <p style="font-size:12px;color:var(--ink-3);margin-top:6px">نتایج در «ارزیابی من» قابل مشاهده است و در محاسبه شکاف‌ها لحاظ می‌شود.</p>
      </div>
      ${comps.map(c=>{const a=WIZ.answers[c.id];const avg=a?r1(((a[0]||0)+(a[1]||0))/2):0;const d=r1(avg-c.cur);return `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;font-size:12px;border-bottom:1px solid var(--line-2)">
        <span style="flex:1">${c.name}</span>
        <span style="color:var(--ink-4)">فعلی ${fa(c.cur)}</span>
        <span class="badge ${d>=0?'b-ok':'b-danger'}"><i></i>خودارزیابی ${fa(avg)}</span>
      </div>`}).join('')}`;
    foot=`<button class="btn btn-p" data-nav="assessment" data-action="close-modal">مشاهده نتایج</button>`;
  }
  const prog=WIZ.step===0?0:Math.min(100,Math.round(WIZ.step/(total-1)*100));
  $('#mTitle').textContent=title;
  $('#mBody').innerHTML=`${WIZ.step>0&&WIZ.step<=comps.length+1?`<div style="display:flex;align-items:center;gap:10px;margin-bottom:18px"><div class="prg" style="flex:1"><i style="width:${prog}%"></i></div><b style="font-size:11px">${fa(prog)}٪</b></div>`:''}${body}`;
  $('#mFoot').innerHTML=foot;
}
function wizNext(){
  const comps=DB.competencies;
  if(WIZ.step>=1&&WIZ.step<=comps.length){
    const c=comps[WIZ.step-1];
    const a=WIZ.answers[c.id]||{};
    if(!a[0]||!a[1]){toast('لطفاً هر دو شاخص رفتاری را ارزیابی کنید.','warn');return}
    const noteEl=document.getElementById('wizNote');
    if(noteEl)a.note=noteEl.value;
    WIZ.answers[c.id]=a;
  }
  WIZ.step++;renderWiz();
}
function wizSubmit(){
  RUN.assessDone=true;
  DB.assessments.parts[0].status='done';
  DB.assessments.history.unshift({cycle:'خودارزیابی میان‌دوره ۱۴۰۳',method:'خودارزیابی',avg:3.5,st:'done'});
  WIZ.step++;renderWiz();
  notify('checkc','ok','خودارزیابی ثبت شد','خودارزیابی میان‌دوره با موفقیت ثبت شد و در تحلیل شکاف‌ها لحاظ خواهد شد.','مشاهده نتایج','assessment');
  checkAchv();
}

/* ================= NOTIFICATIONS ================= */
function notify(icn,tn,t,d,ct,navId){
  DB.notifs.unshift({ic:icn,tn,t,d,tm:'هم‌اکنون',un:true,ct,nav:navId});
  renderNotifs();
}
function renderNotifs(){
  const un=DB.notifs.filter(n=>n.un).length;
  $('#notifDot').style.display=un?'block':'none';
  $('#npList').innerHTML=DB.notifs.map((n,i)=>`
    <div class="notif ${n.un?'un':''}" data-ni="${i}">
      <span class="notif-ic" style="background:${toneC(n.tn)[0]};color:${toneC(n.tn)[1]}">${IC[n.ic]}</span>
      <div style="flex:1">
        <h4>${n.t}</h4><p>${n.d}</p><div class="tm">${n.tm}</div>
        ${n.ct?`<button class="btn btn-s btn-sm" style="margin-top:8px" ${n.act?`data-action="${n.act}" data-id="${n.aid||''}"`:`data-nav="${n.nav}"`}>${n.ct}</button>`:''}
      </div>
    </div>`).join('');
}

/* ================= ACHIEVEMENTS CHECK ================= */
function checkAchv(){
  achvState().forEach(a=>{
    if(a.ok&&!RUN.seenAchv.has(a.id)){
      RUN.seenAchv.add(a.id);
      toast(`دستاورد جدید: «${a.t}» کسب شد`,'ok');
    }
  });
}

/* ================= ACTION HANDLER ================= */
function handleAction(el){
  const a=el.dataset.action,id=el.dataset.id;
  switch(a){
    case 'close-all':closeAll();break;
    case 'close-modal':closeModalOnly();break;
    case 'open-project':closeAll();openProject(id);break;
    case 'open-comp':openComp(id);break;
    case 'open-learning':openLearning(id);break;
    case 'start-assessment':startAssessment();break;
    case 'export-report':toast('گزارش در حال آماده‌سازی است؛ نسخه PDF به‌زودی دانلود می‌شود.','info');break;
    case 'new-goal':case 'edit-goal':openGoalModal(id);break;
    case 'save-goal':saveGoal(el.dataset.id);break;
    case 'new-project':openModal('پیشنهاد پروژه توسعه‌ای',`
      <div class="field"><label>نام پروژه</label><input class="inp" id="npName" placeholder="مثلاً: چالش کاهش هزینه زیرساخت"></div>
      <div class="field"><label>هدف توسعه</label><textarea class="txa" id="npObj" placeholder="این پروژه چه مسئله کسب‌وکاری را حل می‌کند؟"></textarea></div>
      <div class="field"><label>شایستگی هدف</label><select class="sel" id="npComp">${DB.competencies.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
      <div class="callout gray">${IC.info}<div>پس از تأیید اسپانسر و مدیر منابع انسانی، پروژه به برنامه ۷۰٪ شما اضافه می‌شود.</div></div>`,
      `<button class="btn btn-g" data-action="close-modal">انصراف</button><button class="btn btn-p" data-action="submit-project">ارسال پیشنهاد</button>`);break;
    case 'submit-project':{
      if(!$('#npName').value.trim()){toast('نام پروژه را وارد کنید.','warn');return}
      closeModalOnly();toast('پیشنهاد پروژه برای اسپانسر و HR ارسال شد.','ok');
      notify('briefcase','info','پیشنهاد پروژه ثبت شد','پیشنهاد «'+$('#npName').value+'» در انتظار تأیید اسپانسر است.','مشاهده پروژه‌ها','projects');
      break;
    }
    case 'new-session':openModal('درخواست جلسه '+(el.dataset.kind==='coach'?'کوچینگ':'منتورینگ'),`
      <div class="field"><label>موضوع جلسه</label><input class="inp" id="nsTop" placeholder="مثلاً: مرور پیشرفت هدف توسعه"></div>
      <div class="field"><label>تاریخ پیشنهادی</label><input class="inp" id="nsDate" placeholder="مثلاً: ۲۵ آذر"></div>
      <div class="field"><label>ساعت پیشنهادی</label><input class="inp" id="nsTime" placeholder="مثلاً: ۱۵:۰۰"></div>`,
      `<button class="btn btn-g" data-action="close-modal">انصراف</button><button class="btn btn-p" data-action="submit-session">${IC.send} ارسال درخواست</button>`);break;
    case 'submit-session':{
      if(!$('#nsTop').value.trim()){toast('موضوع جلسه را وارد کنید.','warn');return}
      closeModalOnly();toast('درخواست جلسه ارسال شد؛ پس از تأیید در تقویم ثبت می‌شود.','ok');
      break;
    }
    case 'request-feedback':openModal('درخواست بازخورد',`
      <div class="field"><label>انتخاب منبع بازخورد</label><select class="sel" id="rfSrc"><option>همکار همتا</option><option>عضو تیم</option><option>مدیر واحد دیگر</option></select></div>
      <div class="field"><label>شایستگی مورد نظر</label><select class="sel" id="rfComp">${DB.competencies.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
      <div class="field"><label>توضیح برای فرد (اختیاری)</label><textarea class="txa" placeholder="در کدام موقعیت می‌خواهید بازخورد بگیرید؟"></textarea></div>`,
      `<button class="btn btn-g" data-action="close-modal">انصراف</button><button class="btn btn-p" data-action="submit-feedbackreq">${IC.send} ارسال درخواست</button>`);break;
    case 'submit-feedbackreq':{
      closeModalOnly();toast('درخواست بازخورد ارسال شد.','ok');
      notify('msg','info','درخواست بازخورد ارسال شد','درخواست بازخورد «'+$('#rfSrc').value+'» برای شایستگی «'+compById($('#rfComp').value).name+'» ارسال شد.','مشاهده بازخوردها','feedback');
      break;
    }
    case 'new-reflection':openModal('ثبت تأمل جدید',`
      <div class="field"><label>عنوان</label><input class="inp" id="rfTitle" placeholder="مثلاً: پس از جلسه کمیته اجرایی"></div>
      <div class="field"><label>چه اتفاقی افتاد؟</label><textarea class="txa" id="rfWhat"></textarea></div>
      <div class="field"><label>چه آموختم؟</label><textarea class="txa" id="rfLearn"></textarea></div>
      <div class="field"><label>گام بعدی من چیست؟</label><textarea class="txa" id="rfNext"></textarea></div>
      <div class="field"><label>کدام شایستگی توسعه یافت؟</label><select class="sel" id="rfCompSel">${DB.competencies.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
      <label style="display:flex;gap:9px;align-items:center;font-size:12.5px;cursor:pointer"><span class="sw" id="rfShare" data-action="toggle-sw" role="switch" tabindex="0"></span>اشتراک‌گذاری با کوچ</label>`,
      `<button class="btn btn-g" data-action="close-modal">انصراف</button><button class="btn btn-p" data-action="submit-reflection">${IC.checkc} ثبت تأمل</button>`);break;
    case 'submit-reflection':{
      const t=$('#rfTitle').value.trim();
      if(!t||!$('#rfLearn').value.trim()){toast('عنوان و «چه آموختم» الزامی است.','warn');return}
      DB.reflections.unshift({date:'۱۵ آذر ۱۴۰۳',title:t,what:$('#rfWhat').value||'—',learn:$('#rfLearn').value,next:$('#rfNext').value||'—',comp:$('#rfCompSel').value,shared:$('#rfShare').classList.contains('on')});
      closeModalOnly();toast('تأمل شما ثبت شد.','ok');
      checkAchv();nav('reflections');
      break;
    }
    case 'mile-done':{
      const p=DB.projects.find(x=>x.id===el.dataset.pid);
      const mi=+el.dataset.mi;
      p.miles[mi].s='done';RUN.milesDone++;
      if(mi+1<p.miles.length)p.miles[mi+1].s='cur';
      p.prog=Math.min(100,p.prog+12);
      toast(`نقطه عطف «${p.miles[mi].t}» تکمیل شد.`,'ok');
      notify('checkc','ok','نقطه عطف تکمیل شد',`«${p.miles[mi].t}» در پروژه ${p.name} تکمیل شد. پیشرفت به ${fa(p.prog)}٪ رسید.`,'مشاهده پروژه','projects');
      checkAchv();openProject(p.id,'ms');break;
    }
    case 'task-tgl':{
      const p=DB.projects.find(x=>x.id===el.dataset.pid);
      const t=p.tasks[+el.dataset.ti];t.done=!t.done;
      if(t.done)toast('وظیفه تکمیل شد.','ok');
      openProject(p.id,'ms');break;
    }
    case 'add-evidence':{
      const p=DB.projects.find(x=>x.id===el.dataset.pid);
      p.evidence.push({n:'گزارش پیشرفت — آذر ۱۴۰۳',k:'file',d:'امروز'});
      toast('شاهد توسعه با موفقیت ثبت شد.','ok');openProject(p.id,'ev');break;
    }
    case 'quick-progress':openModal('به‌روزرسانی پیشرفت پروژه',`
      <div class="field"><label>درصد پیشرفت (${fa(0)} تا ${fa(100)})</label><input class="inp" type="number" min="0" max="100" id="qpVal" value="${DB.projects.find(x=>x.id===id)?.prog||0}" style="direction:ltr;text-align:end"></div>
      <div class="field"><label>شرح پیشرفت</label><textarea class="txa" id="qpNote" placeholder="چه چیزی انجام شد؟ چه مانعی وجود دارد؟"></textarea></div>`,
      `<button class="btn btn-g" data-action="close-modal">انصراف</button><button class="btn btn-p" data-action="save-quickprog" data-id="${id}">ثبت</button>`);break;
    case 'save-quickprog':{
      const v=parseInt($('#qpVal').value,10);
      if(isNaN(v)||v<0||v>100){toast('عدد معتبر بین ۰ تا ۱۰۰ وارد کنید.','warn');return}
      const p=DB.projects.find(x=>x.id===id);
      p.prog=v;if(v>=60&&p.status==='atrisk')p.status='ontrack';
      closeModalOnly();toast(`پیشرفت «${p.name}» به ${fa(v)}٪ به‌روزرسانی شد.`,'ok');
      nav(curPage);break;
    }
    case 'learn-complete':{
      const l=DB.learning.find(x=>x.id===id);
      l.prog=100;RUN.learnDone=DB.learning.filter(x=>x.prog===100).length;
      closeModalOnly();toast(`«${l.title}» تکمیل شد؛ به پیشرفت ۱۰٪ رسمی اضافه شد.`,'ok');
      checkAchv();nav('learning');break;
    }
    case 'filter-learn':{
      document.querySelectorAll('#learnChips .chip').forEach(c=>c.classList.remove('on'));
      el.classList.add('on');
      const f=el.dataset.f;
      document.querySelectorAll('#learnGrid .learn-c').forEach(c=>{
        c.style.display=(f==='همه'||c.dataset.ltype===f)?'':'none';
      });break;
    }
    case 'toggle-act':{
      const row=el.closest('[data-taskrow]');
      if(el.checked&&row){row.style.opacity='.55';const sp=row.querySelector('span');if(sp)sp.style.textDecoration='line-through';toast('اقدام پیگیری تکمیل شد.','ok')}
      else if(row){row.style.opacity='';const sp=row.querySelector('span');if(sp)sp.style.textDecoration=''}
      break;
    }
    case 'toggle-sw':el.classList.toggle('on');el.setAttribute('aria-checked',el.classList.contains('on'));break;
    case 'cal-day':buildCalendar(+el.dataset.day);break;
    case 'notif-readall':DB.notifs.forEach(n=>n.un=false);renderNotifs();toast('همه اعلان‌ها خوانده شدند.','info');break;
    case 'edit-profile':toast('حالت ویرایش پروفایل فعال شد.','info');break;
    case 'dr-tab':{
      const grp=el.dataset.grp,tab=el.dataset.tab;
      document.querySelectorAll(`.drtab[data-grp="${grp}"]`).forEach(b=>b.classList.toggle('on',b.dataset.tab===tab));
      document.querySelectorAll(`.dr-pane[data-grp="${grp}"]`).forEach(p=>p.style.display=(p.dataset.tab===tab)?'':'none');
      break;
    }
    case 'wiz-next':wizNext();break;
    case 'wiz-prev':WIZ.step=Math.max(0,WIZ.step-1);renderWiz();break;
    case 'wiz-edit':WIZ.step=+el.dataset.s;renderWiz();break;
    case 'wiz-rate':{
      WIZ.answers[el.dataset.cid]=WIZ.answers[el.dataset.cid]||{};
      WIZ.answers[el.dataset.cid][+el.dataset.ii]=+el.dataset.v;
      el.parentElement.querySelectorAll('.rate').forEach(r=>r.classList.remove('on'));
      el.classList.add('on');break;
    }
    case 'wiz-submit':wizSubmit();break;
  }
}

function openGoalModal(id){
  const g=id?goalById(id):null;
  openModal(g?'ویرایش هدف توسعه':'هدف توسعه جدید',`
    <div class="field"><label>عنوان هدف</label><input class="inp" id="gTitle" value="${g?g.title:''}" placeholder="مثلاً: ارتقای مدیریت تغییر به سطح ۴"></div>
    <div class="grid g2">
      <div class="field"><label>شایستگی مرتبط</label><select class="sel" id="gComp">${DB.competencies.map(c=>`<option value="${c.id}" ${g&&g.comp===c.id?'selected':''}>${c.name} (فعلی ${fa(c.cur)})</option>`).join('')}</select></div>
      <div class="field"><label>سطح هدف</label><select class="sel" id="gTgt">${[3,4,5].map(v=>`<option value="${v}" ${g&&g.tgt===v?'selected':''}>سطح ${fa(v)}</option>`).join('')}</select></div>
    </div>
    <div class="field"><label>سررسید</label><input class="inp" id="gDl" value="${g?g.dl:''}" placeholder="مثلاً: خرداد ۱۴۰۴"></div>
    <div class="field"><label>شاخص کلیدی موفقیت (KPI)</label><input class="inp" id="gKpi" value="${g?g.kpi:''}" placeholder="موفقیت چگونه سنجیده می‌شود؟"></div>
    <div class="field"><label>اولویت</label><select class="sel" id="gPri"><option value="high" ${g&&g.pri==='high'?'selected':''}>بالا</option><option value="critical" ${g&&g.pri==='critical'?'selected':''}>بحرانی</option><option value="medium" ${g&&g.pri==='medium'?'selected':''}>متوسط</option></select></div>`,
    `<button class="btn btn-g" data-action="close-modal">انصراف</button><button class="btn btn-p" data-action="save-goal" data-id="${id||''}">${IC.checkc} ${g?'ذخیره تغییرات':'ایجاد هدف'}</button>`);
}
function saveGoal(id){
  const t=$('#gTitle').value.trim();
  if(!t){toast('عنوان هدف را وارد کنید.','warn');return}
  if(id){
    const g=goalById(id);
    Object.assign(g,{title:t,comp:$('#gComp').value,tgt:+$('#gTgt').value,dl:$('#gDl').value||g.dl,kpi:$('#gKpi').value||g.kpi,pri:$('#gPri').value});
    toast('هدف توسعه به‌روزرسانی شد.','ok');
  }else{
    DB.goals.push({id:'g'+Date.now(),title:t,comp:$('#gComp').value,tgt:+$('#gTgt').value,dl:$('#gDl').value||'—',prog:0,status:'ontrack',kpi:$('#gKpi').value||'—',pri:$('#gPri').value});
    toast('هدف توسعه با موفقیت ایجاد شد.','ok');
  }
  closeModalOnly();nav(curPage);
}

/* ================= PALETTE ================= */
function palIndex(){
  return [
    {g:'صفحات',items:NAVg.flatMap(x=>x.items).map(n=>({ic:n[1],t:n[2],nav:n[0],hint:'صفحه'}))},
    {g:'شایستگی‌ها',items:DB.competencies.map(c=>({ic:'target',t:c.name,comp:c.id,hint:'شایستگی'}))},
    {g:'پروژه‌ها',items:DB.projects.map(p=>({ic:'briefcase',t:p.name,proj:p.id,hint:'پروژه'}))},
    {g:'اهداف توسعه',items:DB.goals.map(g=>({ic:'flag',t:g.title,nav:'goals',hint:'هدف'}))},
    {g:'محتوای یادگیری',items:DB.learning.map(l=>({ic:l.icon,t:l.title,learn:l.id,hint:l.type}))}
  ];
}
function palRender(q=''){
  const box=$('#palList');let h='',n=0;
  palIndex().forEach(gr=>{
    const its=gr.items.filter(i=>!q||i.t.includes(q));
    if(!its.length)return;
    h+=`<div class="pal-g">${gr.g}</div>`;
    its.slice(0,6).forEach(it=>{
      h+=`<button class="pal-it ${n===0?'sel':''}" ${it.proj?`data-proj="${it.proj}"`:it.comp?`data-comp="${it.comp}"`:it.learn?`data-learn="${it.learn}"`:`data-nav="${it.nav}"`}>${IC[it.ic]}<span>${it.t}</span><span class="hint">${it.hint}</span></button>`;
      n++;
    });
  });
  box.innerHTML=n?h:`<div class="pal-empty">نتیجه‌ای برای «${q}» یافت نشد.</div>`;
}
function palOpen(){closeAll();$('#pal').classList.add('on');$('#palInput').value='';palRender();setTimeout(()=>$('#palInput').focus(),90)}
function palClose(){$('#pal').classList.remove('on')}
function palActivate(sel){
  if(sel.dataset.proj){palClose();openProject(sel.dataset.proj)}
  else if(sel.dataset.comp){palClose();openComp(sel.dataset.comp)}
  else if(sel.dataset.learn){palClose();openLearning(sel.dataset.learn)}
  else if(sel.dataset.nav){palClose();nav(sel.dataset.nav)}
}

/* ================= BUILD NAV ================= */
function buildNav(){
  $('#sbNav').innerHTML=NAVG.map(g=>`
    <div class="sb-g"><div class="sb-gt">${g.g}</div>
      ${g.items.map(n=>`<button class="sb-it ${n[0]===curPage?'on':''}" data-nav="${n[0]}">${IC[n[1]]}<span>${n[2]}</span></button>`).join('')}
    </div>`).join('');
  $('#mnav').innerHTML=[['command','grid','خانه'],['competencies','target','شایستگی'],['idp','layers','IDP'],['projects','briefcase','پروژه‌ها'],['learning','book','یادگیری']]
    .map(m=>`<button class="mn-it ${m[0]===curPage?'on':''}" data-nav="${m[0]}">${IC[m[1]]}<span>${m[2]}</span></button>`).join('');
}

/* ================= EVENTS ================= */
document.addEventListener('click',e=>{
  // skip double-handling of checkboxes (handled once via click)
  const navEl=e.target.closest('[data-nav]');
  if(navEl){e.stopPropagation();nav(navEl.dataset.nav);return}
  const actEl=e.target.closest('[data-action]');
  if(actEl){handleAction(actEl);return}
  const palIt=e.target.closest('.pal-it');
  if(palIt){palActivate(palIt);return}
  const nEl=e.target.closest('.notif');
  if(nEl){DB.notifs[+nEl.dataset.ni].un=false;renderNotifs();return}
});
document.addEventListener('input',e=>{
  if(e.target.id==='projSearch'){
    const q=e.target.value.trim();
    document.querySelectorAll('#projGrid .card').forEach(c=>{c.style.display=c.dataset.pname.includes(q)?'':'none'});
  }
  if(e.target.id==='goalSearch'){
    const q=e.target.value.trim();
    document.querySelectorAll('#goalTbl tbody tr').forEach(r=>{r.style.display=r.dataset.gtitle.includes(q)?'':'none'});
  }
});
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#pal').classList.contains('on')?palClose():palOpen();return}
  if(e.key==='Escape'){closeAll();return}
  if($('#pal').classList.contains('on')){
    const items=[...document.querySelectorAll('.pal-it')];
    let idx=items.findIndex(i=>i.classList.contains('sel'));
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){
      e.preventDefault();
      idx=e.key==='ArrowDown'?Math.min(items.length-1,idx+1):Math.max(0,idx-1);
      items.forEach((i,n)=>i.classList.toggle('sel',n===idx));
      if(items[idx])items[idx].scrollIntoView({block:'nearest'});
    }
    if(e.key==='Enter'&&items[idx]){palActivate(items[idx])}
  }
});

/* ================= INIT ================= */
function init(){
  $('#sbLogo').innerHTML=IC.logo;
  $('#hambBtn').innerHTML=IC.menu;
  $('#bellIco').innerHTML=IC.bell;
  $('#tbSearchIco').innerHTML=IC.search;
  $('#palIco').innerHTML=IC.search;
  $('#drClose').innerHTML=IC.x;$('#npClose').innerHTML=IC.x;$('#mClose').innerHTML=IC.x;
  buildNav();renderNotifs();
  $('#hambBtn').addEventListener('click',()=>{$('#sidebar').classList.add('on');$('#scrim').classList.add('on')});
  $('#palOpen').addEventListener('click',palOpen);
  $('#palInput').addEventListener('input',e=>palRender(e.target.value));
  $('#notifBtn').addEventListener('click',()=>{closeAll();$('#scrim').classList.add('on');$('#npanel').classList.add('on')});
  $('#drClose').addEventListener('click',closeAll);
  $('#npClose').addEventListener('click',closeAll);
  $('#mClose').addEventListener('click',closeModalOnly);
  $('#mbg').addEventListener('click',closeModalOnly);
  $('#scrim').addEventListener('click',()=>{
    if($('#mroot').classList.contains('on'))closeModalOnly();else closeAll();
  });
  nav('command');
  setTimeout(()=>toast('به سامانه توسعه رهبری خوش آمدید، محمد. امروز ۳ اولویت دارید.','info'),700);
}
init();

