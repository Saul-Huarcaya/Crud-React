import types from "../actions/action";

const reducer = (state,action) =>{
    switch(action.type){
        case types.ADD_STUDENT:
            return [...state,action.payload];
        case types.UPDATE_STUDENT:
            return state.map(student => student.id === action.payload.id
            ?{...state,
                id: action.payload.id,
                nombre:action.payload.nombre, 
                apellido:action.payload.apellido,
                edad:action.payload.edad}
            :student);
        case types.DELETE_STUDENT:
            return state.filter(student => student.id != action.payload);
        default:
            return state;
    }
}

export default reducer;