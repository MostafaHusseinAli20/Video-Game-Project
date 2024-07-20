/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { getListGame } from "../services/conectApi";
import Geners from '../components/Geners';
import ListGame from '../components/ListGame';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getListGame()
      .then(res => {
        setGames(res);
        // console.log(res.genres)
      })
      .catch(error => {
        console.error("Error fetching games:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4">
      <div className='max-h-full dark:text-white hidden md:block'><Geners/></div>
      <div className="col-span-4 md:col-span-3"> 
        {
          games.length > 0 && <ListGame item={games}/>
        }
      </div>
    </div>
  )
}

export default Home