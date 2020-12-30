import axios from "axios";
import { popularGamesURL,newGamesURL,
  upcomingGamesURL } from "../../api.js";
import { FETCH_GAMES } from "../../constants/index";

//Actions creators

export const loadGames = () => async dispatch => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  console.log("popularData", popularData);
  dispatch({
    type: FETCH_GAMES,
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    }
  });
};
