import * as Types from './../constants/index';

var initialState = {
    members:[]
};

const testRedux = (state=initialState,action)=>{
    switch(action.type){
        case Types.CHANGE_VALUE:{
            state.value = action.value;
            return{
                ...state
            }
        }
        case Types.SUBMIT_VALUE:{
            var members = state.members;
            members.push(action.value)
            return {
                ...state,
                members:[...members]
            }
        }   
        default: return {
            ...state
        };
    }
}

export default testRedux;