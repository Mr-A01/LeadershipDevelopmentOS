// bootstrap (module)
// Imports DB and RUN, attaches to window for the legacy app, then loads the large app script.
import { DB, RUN } from './data/db.js';

// Attach to window for backwards compatibility with existing non-module app.js
window.DB = DB;
window.RUN = RUN;

// Load the legacy app script dynamically (non-module). This preserves existing code.
(function(){
  const s = document.createElement('script');
  s.src = 'src/legacy/app.full.js';
  s.defer = true;
  document.body.appendChild(s);
})();
