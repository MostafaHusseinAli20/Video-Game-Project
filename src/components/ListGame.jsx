import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const ListGame = ({item}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    gap-10">
      {item.map((items , index) => (
        <Link to={`/detailGame/${items.id}`} key={index}>
          <img className="w-full object-cover mx-auto" src={items.background_image} 
          alt="Game Img" />
          <div className="dark:bg-[#202020] p-5 flex justify-between items-center
          shadow-lg">
          <h4 className="dark:text-white text-center line-clamp-1
          font-bold text-xl">{items.name}</h4>
          <h6 className="bg-[#344038] p-1 rounded-lg font-bold
          text-[#9AE699] px-2">92</h6>
          </div>
          <h4 className="dark:text-white">
            {item.genres}
          </h4>
        </Link>
      ))}
    </div>
  )
}

export default ListGame