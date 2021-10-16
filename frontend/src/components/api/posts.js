import axios from "axios";

export const addComment = (data) =>axios.post("http://127.0.0.1:8000/2/comments/", data)