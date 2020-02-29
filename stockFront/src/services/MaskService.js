import { serverUrl } from '../config/config.js';

export default new (class MaskService {
    integerMask(value) {
        const parsedValue = parseInt(value);
        return Number.isNaN(parsedValue) ? '0' : parsedValue + '';
    }

    floatMask(value) {
        return value;
        // const dottedValue = value.replace(',', '.'),
        //       valueArr = value.split('');
        // let   dotIndex = dottedValue.indexOf('.');

        // valueArr.splice(dotIndex, 1);

        // if (valueArr[0] === '0')
        //     valueArr.shift();
        // else 
        //     dotIndex++;

        // valueArr.splice(dotIndex, 0, '.');

        // const parsedValue = parseFloat(valueArr.join('')).toFixed(2);

        // return Number.isNaN(parsedValue)
        //     ? valueArr.pop().join('')
        //     : (parsedValue + '').replace('.', ',');
    }
})();