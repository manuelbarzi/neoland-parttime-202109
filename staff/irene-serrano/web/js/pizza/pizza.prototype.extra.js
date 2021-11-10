Pizza.prototype.extra = function (extras) {
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    this.extras[this.extras.length] = element;
  }
  return this.extras.length;
};
