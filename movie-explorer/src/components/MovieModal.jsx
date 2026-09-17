const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const { name, image, rating, premiered, summary, genres } = movie;

  const backdropUrl =
    image?.original ||
    image?.medium ||
    "https://via.placeholder.com/600x338?text=No+Image";

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg max-w-2xl w-full overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 "
        >
          X
        </button>
        <img
          src={backdropUrl}
          alt={name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-200">{name}</h2>
          <p className="text-sm text-gray-400">
            ⭐ Rating: {rating?.average ?? "N/A"} &nbsp; | &nbsp; 📅 Release:{" "}
            {premiered || "N/A"}
          </p>

          {genres?.length > 0 && (
            <p className="tex-sm text-gray-400">Genre: {genres.join(",")}</p>
          )}
          <div>
            <h3 className="text-md font-semibold text-gray-200 mb-1">
              Overview:
            </h3>
          </div>
          <p
            className="text-sm text-gray-400"
            dangerouslySetInnerHTML={{
              __html: summary || "No summary available.",
            }}
          />
        </div>
        <div className="flex justify-end px-6 py-6">
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            {" "}
            ❌ Close{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
