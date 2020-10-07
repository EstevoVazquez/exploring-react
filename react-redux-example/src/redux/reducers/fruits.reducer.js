import {ADD_FRUIT} from '../actions/fuits.actions'

const initialState = ['Fresa','Manzana']


const fruits = (state = initialState,  action) =>{



        switch (action.type){
            case ADD_FRUIT:
                return [
                    action.payload.fruit,
                    ...state
                  ]
            default:
                return state;
        }

}

export default fruits