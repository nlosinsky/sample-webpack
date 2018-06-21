const welcome = require('../welcome');
const moment = require('moment');

// welcome('home');

welcome('Home', moment(new Date()).locale('ru').format('DD MMM YYYY'));

document.getElementById('loginBtn').onclick = function() {
    require.ensure([], function(require) {
        const login = require('../login');
        login();
    }, 'auth');
};

document.getElementById('logoutBtn').onclick = function() {
    require.ensure([], function(require) {
        const logout = require('../logout');
        logout();
    }, 'auth');
};
