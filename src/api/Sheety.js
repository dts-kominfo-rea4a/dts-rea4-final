import axios from "axios";

export const createNote = async (data) => {
  const request = await axios.post("https://api.sheety.co/fa8cd7ad9f48fa414498ba25538f9cc8/notes/sheet1", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("create");
  return request;
};
export const getNote = async (uid) => {
  const request = await axios.get(`https://api.sheety.co/fa8cd7ad9f48fa414498ba25538f9cc8/notes/sheet1?filter[userId]=${uid}&filter[deleted]=F&timestamp=${new Date().getTime()}`);
  console.log("get");
  return request;
};
export const getDeletedNote = async (uid) => {
  const request = await axios.get(`https://api.sheety.co/fa8cd7ad9f48fa414498ba25538f9cc8/notes/sheet1?filter[userId]=${uid}&filter[deleted]=T&timestamp=${new Date().getTime()}`);
  console.log("get");
  return request;
};

export const getNoteById = async (id) => {
  const request = await axios.get(`https://api.sheety.co/fa8cd7ad9f48fa414498ba25538f9cc8/notes/sheet1/${id}`);
  console.log("get");
  return request;
};

export const deleteNote = async (id) => {
  const request = await axios.delete(`https://api.sheety.co/fa8cd7ad9f48fa414498ba25538f9cc8/notes/sheet1/${id}`);
  console.log("delete");
  return request;
};

export const updateNote = async (id, data) => {
  const request = await axios.put(`https://api.sheety.co/fa8cd7ad9f48fa414498ba25538f9cc8/notes/sheet1/${id}`, data);
  console.log("update");
  return request;
};
