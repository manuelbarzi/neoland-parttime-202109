console.log('----- FILL TEST -----')

console.log('CASE 1')

var array = [1, 2, 3, 4]
var filled = fill(array, 1, 2, 4)

if (filled.length === 4
    && filled[0]=== 1
    && filled[1]=== 2
    && filled[2]=== 1
    && filled[3]=== 1
    && filled == array
    ) console.log('✅')
    else console.error('🖕')

console.log('CASE 2')

    var array = [1, 2, 3, 4]
    var filled = fill(array, 1, 2, 10)
    
    if (filled.length === 4
        && filled[0]=== 1
        && filled[1]=== 2
        && filled[2]=== 1
        && filled[3]=== 1
        && filled[4]=== undefined
        && filled == array
        ) console.log('✅')
        else console.error('🖕')


console.log('CASE 3')

var array = [1, 2, 3, 4]
var filled = fill(array, 0)

if (filled.length === 4
    && filled[0]=== 0
    && filled[1]=== 0
    && filled[2]=== 0
    && filled[3]=== 0
    && filled == array
    ) console.log('✅')
    else console.error('🖕')


    console.log('CASE 4')

    var array = [1, 2, 3, 4]
    var filled = fill(array, 0, 2)
    
    if (filled.length === 4
        && filled[0]=== 1
        && filled[1]=== 2
        && filled[2]=== 0
        && filled[3]=== 0
        && filled == array
        ) console.log('✅')
        else console.error('🖕')

console.log('CASE 5')

        var array = [1, 2, 3, 4]
        var filled = fill(array, 0, -3)
        
        if (filled.length === 4
            && filled[0]=== 1
            && filled[1]=== 0
            && filled[2]=== 0
            && filled[3]=== 0
            && filled == array
            ) console.log('✅')
            else console.error('🖕')

console.log('CASE 6')

var array = [1, 2, 3, 4, 5, 6, 7]
var filled = fill(array, 0, -4, -2)

if (filled.length === 7
    && filled[0]=== 1
    && filled[1]=== 2
    && filled[2]=== 3
    && filled[3]=== 0
    && filled[4]=== 0
    && filled[5]=== 6
    && filled[6]=== 7
    && filled == array
    ) console.log('✅')
    else console.error('🖕')

    console.log('CASE 7')

    var array = [1, 2, 3, 4, 5, 6, 7]
    var filled = fill(array, 0, -4, 6)
    
    if (filled.length === 7
        && filled[0]=== 1
        && filled[1]=== 2
        && filled[2]=== 3
        && filled[3]=== 0
        && filled[4]=== 0
        && filled[5]=== 0
        && filled[6]=== 7
        && filled == array
        ) console.log('✅')
        else console.error('🖕')
    
        console.log('CASE 8')

        var array = [1, 2, 3, 4, 5, 6, 7]
        var filled = fill(array, 0, -10)
        
        if (filled.length === 7
            && filled[0]=== 0
            && filled[1]=== 0
            && filled[2]=== 0
            && filled[3]=== 0
            && filled[4]=== 0
            && filled[5]=== 0
            && filled[6]=== 0
            && filled == array
            ) console.log('✅')
            else console.error('🖕')

            console.log('CASE 9')

            var array = [1, 2, 3, 4, 5, 6, 7]
            var filled = fill(array, 0, -10, 3)
            
            if (filled.length === 7
                && filled[0]=== 0
                && filled[1]=== 0
                && filled[2]=== 0
                && filled[3]=== 4
                && filled[4]=== 5
                && filled[5]=== 6
                && filled[6]=== 7
                && filled == array
                ) console.log('✅')
                else console.error('🖕')
                