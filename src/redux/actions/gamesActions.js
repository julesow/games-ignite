import axios from "axios";
import { popularGamesURL } from "../../api.js";
import { FETCH_GAMES } from "../../constants/index";

//Actions creators

export const loadGames = () => async dispatch => {
  const popularData = await axios.get(popularGamesURL());
  console.log("popularData", popularData);
  dispatch({
    type: FETCH_GAMES,
    payload: {
      popular: popularData.data.results
    }
  });
};
