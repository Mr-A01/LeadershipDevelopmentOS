// Chart helpers (thin wrapper)
export function makeSparkline(id, data, color='rgba(79,70,229,1)'){
  if(typeof Chart === 'undefined') return;
  const el = document.getElementById(id);
  if(!el) return;
  // keep original mkChart usage inside app.js; this wrapper can be expanded
}
