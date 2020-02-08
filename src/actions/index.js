import {
  GET_EDUCATION_VIDEOS,
  GET_EDUCATION_GAMES,
  GET_READING_BOOKS,
  GET_MOVIE,
  GET_LISTEN_BOOKS,
  GET_GAMES,
  UPDATE_CHILD
} from "./types";
import axios from "axios";

export const geteducationVideos = () => dispatch => {
  axios
    .get("/video")
    .then(res => dispatch({ type: GET_EDUCATION_VIDEOS, payload: res.data }))
    .catch(err => console.log(err));
};
export const geteducationGames = () => dispatch => {
  axios
    .get("/educationgames")
    .then(res => dispatch({ type: GET_EDUCATION_GAMES, payload: res.data }))
    .catch(err => console.log(err));
};
export const getreadingbooks = () => dispatch => {
  axios
    .get("/readingbooks")
    .then(res => dispatch({ type: GET_READING_BOOKS, payload: res.data }))
    .catch(err => console.log(err));
};
export const getMovie = () => dispatch => {
  axios
    .get("/movie")
    .then(res => dispatch({ type: GET_MOVIE, payload: res.data }))
    .catch(err => console.log(err));
};
export const getlistengbooks = () => dispatch => {
  axios
    .get("/listningbooks")
    .then(res => dispatch({ type: GET_LISTEN_BOOKS, payload: res.data }))
    .catch(err => console.log(err));
};
export const getgames = () => dispatch => {
  axios
    .get("/games")
    .then(res => dispatch({ type: GET_GAMES, payload: res.data }))
    .catch(err => console.log(err));
};
export const updateChild = childUpdate => dispatch => {
  axios
    .put(`/user/update`, childUpdate)
    .then(res => console.log("child updated"))
    .catch(err => console.log(err));
};
