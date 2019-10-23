const InitialState = {
    name: "Минск",
    coords: {
        lat: 53.90208159,
        lng: 27.5622189
    },

    zoom: 11
}

const map_reducer = (state = InitialState, action) => {
    switch (action.type) {
        default: return state
    }

}

export default map_reducer;