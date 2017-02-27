// MAIN CONTROLLER
function mainController($scope) {

    this.data = [];

    this.add = () => {
    	this.user = {
    		"firstname" : this.firstname,
    		"lastname" : this.lastname,
    		"address" :  this.address,
    	};

    	this.data.push(this.user);
    };
}
