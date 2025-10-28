
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/front-insurance-service/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/front-insurance-service"
  },
  {
    "renderMode": 2,
    "redirectTo": "/front-insurance-service",
    "route": "/front-insurance-service/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24795, hash: 'c2e8004c61deb4eb97b9e8042ea028653301120f0db7340ed5a92551bb5b56d3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17223, hash: 'd26ae124957be93570acb31490193999946790e1b5fa31fb0722b9503fcab9fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 66818, hash: 'b6fc82d29faa123e2b8cb63f18e954ef2ea24bacf7d08073dcdde9af32d8e7e7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
