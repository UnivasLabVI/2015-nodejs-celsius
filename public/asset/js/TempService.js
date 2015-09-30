var TempService = {

	getIndex: function(celsius, callback) {
		$.ajax({
		  url: '/api/celsius', //end-point to backend
		  data: {'celsius': celsius},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},

    getDescription: function (index) {
		//Fazer em casa
		return "";
        
    }
}; 
