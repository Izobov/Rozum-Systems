import { CardsAPI } from "../../api/api";

const SET_COORDINATS = 'SET_COORDINATS';

const InitialState = {
    Cardscoords: [
    ]
}

const cards_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_COORDINATS:
            return {
                ...state,
                Cardscoords: action.coords
            }
        default: return state
    }

}

const Coords = (coords) => ({ type: SET_COORDINATS, coords })

export const setCards = () => {
    return (dispatch) => {
        let response = CardsAPI.getCards()
        dispatch(Coords(response))

    }



}

export default cards_reducer;