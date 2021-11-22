function Chachay(){
	for (var i = 0; i < arguments.length;i++) {
		var element = arguments[i]

		this[i] = element
	}
	this.length = arguments.length
}
