import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleGame } from "../services/conectApi";

const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleGame(id)
    .then((res) => setDetails(res))
    .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 h-[100vh]">
        <div>
          <div className="dark:text-white">
            <h1 className="md:text-4xl font-bold text-xl">{details.name}</h1>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="mt-8">
              <h5 className="text-gray-400 font-bold text-lg">Platform:</h5>
              <h3 className="dark:text-white font-medium">PlayStation</h3>
              <h3 className="dark:text-white font-medium">Xbox</h3>
              <h3 className="dark:text-white font-medium">PC</h3>
            </div>
            <div className="mt-8">
              <h5 className="text-gray-400 font-bold text-lg">Genres:</h5>
              <h3 className="dark:text-white font-medium">Action</h3>
              <h3 className="dark:text-white font-medium">RPG</h3>
              <h3 className="dark:text-white font-medium">Indie</h3>
            </div>
            <div className="mt-8">
              <h5 className="text-gray-400 font-bold text-lg">Rating:</h5>
              <h3 className="dark:text-white font-medium">{details.rating}</h3>
            </div>
            <div className="mt-8">
              <h5 className="text-gray-400 font-bold text-lg">Released:</h5>
              <h3 className="dark:text-white font-medium">
                {details.released}
              </h3>
            </div>
          </div>
        </div>

        <div>
          <img src={details.background_image} alt="Game Banner" />
        </div>
      </div>
    </>
  );
};

export default Details;
