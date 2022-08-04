import axios from 'axios';

const API_KEY = '250f014fd6a936550e378176122f5d39';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  try {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getMoviesByName(searchQuery) {
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getMoviesDetails(id) {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export async function getMovieCredits(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getMovieReview(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};