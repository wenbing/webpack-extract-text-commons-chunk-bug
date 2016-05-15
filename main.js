require('./main.gss');

if (location.search.indexOf('a') !== -1) {
  require.ensure([], function() {
    require('./a.page');
  }, 'a');
}

if (location.search.indexOf('b') !== -1) {
  require.ensure([], function() {
    require('./b.page');
  }, 'b');
}
