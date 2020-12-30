import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../redux/actions/gamesActions";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames());
    });
    return (
        <div>
            Home Page
        </div>
    )
}

export default Home
