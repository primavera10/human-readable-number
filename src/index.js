module.exports = function toReadable(number) {

    const tens = Math.floor(number / 10)

    if (tens === 0) {
        return getUnits(number);
    }
    if (tens === 1) {
        return getTeen(number)
    }
    if (tens > 1 && tens < 10) {
        let str = '';
        const stringified = number.toString()
        for (let i = 0; i < stringified.length; i++) {
            if (i === 0) {
                str += getTens(+stringified[i]) + ' '
            }
            if (i === 1 && stringified[i] !== '0') {
                str += getUnits(+stringified[i])
            }
        }
        return str.trim();
    } else {
        let str = '';
        const stringified = number.toString()
        for(let i = 0; i < stringified.length; i++){
            if(i === 0){
                str+= getHundreds(+stringified[i]) + ' '
            }
            if (i === 1 && stringified[i]!== '0') {
                if (stringified[i] !== '1'){
                    str+= getTens(+stringified[i]) + ' '
                } else {
                    let teen = +(stringified[i] + stringified[i+1])
                    str += getTeen(teen)
                    return str.trim()
                }
            }
            if (i === 2 && stringified[i] !== '0') {
                str+= getUnits(+stringified[i])
            }
        }
        return str.trim()
    }
}

function getUnits(u) {
    switch (u) {
        case 0:
            return 'zero';

        case 1:
            return 'one';

        case 2:
            return 'two';

        case 3:
            return 'three';

        case 4:
            return 'four';

        case 5:
            return 'five';

        case 6:
            return 'six';

        case 7:
            return 'seven';

        case 8:
            return 'eight';

        case 9:
            return 'nine'
    }
}

function getTeen(u) {
    switch (u) {
        case 10:
            return 'ten';

        case 11:
            return 'eleven';

        case 12:
            return 'twelve';

        case 13:
            return 'thirteen';

        case 14:
            return 'fourteen';

        case 15:
            return 'fifteen';

        case 16:
            return 'sixteen';

        case 17:
            return 'seventeen';

        case 18:
            return 'eighteen';

        case 19:
            return 'nineteen'
    }
}

function getTens(u) {
    switch (u) {

        case 1:
            return 'ten';

        case 2:
            return 'twenty';

        case 3:
            return 'thirty';

        case 4:
            return 'forty';

        case 5:
            return 'fifty';

        case 6:
            return 'sixty';

        case 7:
            return 'seventy';

        case 8:
            return 'eighty';

        case 9:
            return 'ninety'
    }
}

function getHundreds(u) {
    switch (u) {

        case 1:
            return 'one hundred';

        case 2:
            return 'two hundred';

        case 3:
            return 'three hundred';

        case 4:
            return 'four hundred';

        case 5:
            return 'five hundred';

        case 6:
            return 'six hundred';

        case 7:
            return 'seven hundred';

        case 8:
            return 'eight hundred';

        case 9:
            return 'nine hundred'
    }
}
