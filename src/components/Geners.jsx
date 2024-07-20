import generes from "../data/generesData";
const Geners = () => {
  return (
    <>
      {generes.map((item, index) => (
        <div key={index} className="flex gap-2 items-center m-5 cursor-pointer 
        dark:hover:bg-[#202020] p-2 hover:bg-gray-100
        duration-150 ease-in">
          <img
            className="w-12 h-8 object-cover rounded-md"
            src={item.image_background}
            alt="Generes Image"
          />
          <h5 className="dark:text-white text-lg">{item.name}</h5>
        </div>
      ))}
    </>
  );
};

export default Geners;
