Chachay.prototype.fill = function(value, start, end) {
    if (start < 0)
        if ((start = this.length + start) < 0)
            start = 0
            
    if (end > this.length)
        end = this.length
    else if (end < 0)
        end = this.length + end

    for (var i = start; i < end; i++)
        this[i] = value

    return this
}