const API_KEY = process.env.REACT_APP_API_KEY;
const URL = 'https://www.omdbapi.com/';

export const getMoviesByTitle = async (query) => {
  const encoded = encodeURIComponent(query);

  return new Promise((resolve, reject) => {
    fetch(`${URL}?apikey=${API_KEY}&s=${encoded}&type=movie`, {
      method: 'GET',
    }).then(res => {
      resolve(res.json());
    }).catch(err => {
      reject(err);
    })
  })
}