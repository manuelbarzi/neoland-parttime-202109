Pizza.prototype.extra = function (items) {
  // console.log(arguments.length)

  for (var i = 0; i < arguments.length; i++) {
    var element = "extra " + arguments[i];
    this[this.length] = element;
    this.length++;
  }

  return this.length;
};
