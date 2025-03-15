Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'mausritter-ukrainian',
			lang: 'uk',
			dir: 'compendium'
		});
	}
});
