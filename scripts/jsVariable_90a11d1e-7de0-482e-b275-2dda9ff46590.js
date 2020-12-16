function evaluate() {
	logger.debug("Computing value of js variable");
	return new function() {
		this.TS = Date.now();
	};
}