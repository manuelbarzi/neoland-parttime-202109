function includes(str = "", searchStr = "", position = 0) {

    var copyStr = str;
    var copySearchString = searchStr;
    var copyPosition = position;

    var bool = false;

    // for (var index = 0; index < array.length; index++) { }
    for (
        let i = copyPosition;
        (i < copyStr.length && (i <= (copyStr.length - copySearchString.length)) && !bool);
        i++
    ) {

        var subStr = "";
        for (let j = 0; j < copySearchString.length; j++) {
            subStr += copyStr[i + j];
        }
        bool = (subStr === copySearchString) ? true : false;
    }

    return bool;
}