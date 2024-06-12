
const initialData = {
    game: "Cricket",
    player: "Virat Kohli"
}

const Reducer = (state = initialData, action) => {
    switch (action.type) {
        case 'Game_name':
            return {
                ...state,
                game: action.payload
            };


        case 'Player_name':
            return {
                ...state,
                player: action.payload
            }

        default:
            return state;
    }
}

export default Reducer;