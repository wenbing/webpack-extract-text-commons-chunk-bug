require('./main.gss');

if (location.search.indexOf('a') !== -1) {
	require.ensure(['./a.page'], function() {
		require('./a.page');
	}, 'aPage')
}

if (location.search.indexOf('b') !== -1) {
    require.ensure(['./b.page'], function() {
		require('./b.page');
	}, 'bPage')
}
