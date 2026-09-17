const MovieCard = ({ movie, seeDetails }) => {
  const { name, image, rating, premiered } = movie;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col">
      <img
        src={image?.medium}
        alt={name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col gap-6 flex-1">
        <h3 className="text-lg font-semibold text-gray-200 line-clamp-1">
          {name}
        </h3>
        <p className="text-sm text-gray-400 flex justify-between">
          <div>⭐ {rating?.average ?? "N/A"} </div>
          <div> 📅 {premiered || "N/A"}</div>
        </p>
        <button
          type="button"
          onClick={() => seeDetails(movie)}
          className="mt-auto bg-blue-500 hover:bg-blue-600 transition-colors text-white py-1.3 rounded-md text-sm font-medium"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
