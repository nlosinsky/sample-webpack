// const moduleName = location.pathname.slice(1) || 'home';
// require('./routes/' + moduleName);

const context = require.context('bundle!./routes', false);

const moduleName = location.pathname.slice(1) || 'home';
context('./' + moduleName);