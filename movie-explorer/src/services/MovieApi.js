export const getAllShows = async () => {
  try {
    const url = "https://api.tvmaze.com/shows";
    const res = await fetch(url);

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "getallshow");
    throw err;
  }
};

export const searchShows = async (query) => {
  try {
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
    const res = await fetch(url);

    const data = await res.json();
    return data.map((item) => item.show);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
