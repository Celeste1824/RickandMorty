const initialState = {
    myFavorites: [],
    allCharacters: []

};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.myFavorites, action.payload]
            }
            case "REMOVE_FAV":
                
                const filteredFavs = state.allCharacters.filter((fav) => fav.id !== Number(action.payload));
                return {
                    ...state,
                    allCharacters: filteredFavs,
                    myFavorites: filteredFavs
                }
                case "FILTER":
               
                if(action.payload === "All") return {
                    ...state,
                    myFavorites: state.allCharacters
                }
                const filteredCharacters = state.allCharacters.filter(
                    char => char.gender === action.payload
                    );
                    return {
                        ...state,
                        myFavorites: filteredCharacters
                    }
                    case "ORDER":
                    
                    let orderCopy = [ ...state.myFavorites ];
                    if(action.payload === "A") {
                        orderCopy.sort(
                            (a, b) => {
                                if(a.name > b.name) return 1;
                                else return -1;
                            }
                        )
                    } else if (action.payload === "D") {
                        orderCopy.sort(
                            (a, b) => {
                                if(a.name < b.name) return 1;
                                else return -1;
                            }
                        )
                    }
                    return {
                        ...state,
                        myFavorites: orderCopy
                    }
                    
            default:
                return { ...state }
        }
    };
    
    
    export default reducer;