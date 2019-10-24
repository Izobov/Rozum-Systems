const SET_MARKER_POSITION = 'SET_MARKER_POSITION';

const InitialState = {
    name: "Минск",
    coords: {
        lat: 53.90208159,
        lng: 27.5622189
    },
    defaultZoom: 11,

    isMarkerShown: false,
    markerPosition: {
    },
    zoom: null,
}

const map_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_MARKER_POSITION:

            return {
                ...state,
                coords: action.coords,
                zoom: 18,
                isMarkerShown: true,
                markerPosition: action.coords
            }

        default: return state
    }

}

export const SetMarkerPosition = (coords) => ({ type: SET_MARKER_POSITION, coords });

export default map_reducer;

