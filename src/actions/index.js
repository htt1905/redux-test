import * as Types from '../constants/index';
export const actChangeValue= (value) => {
    return {
        type: Types.CHANGE_VALUE,
        value
    }
}
export const actSubmitValue= (value) => {
    console.log(value)
    return {
        type: Types.SUBMIT_VALUE,
        value
    }
}