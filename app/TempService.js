var TempService = {
    
	getIndex: function(celsius) {
		if(typeof(celsius) === 'number') {
			return (celsius * 1.8 + 32);
		}
		return null;
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};

module.exports = TempService;