import axios from "axios";

export const createNote = async (data) => {
  const request = await axios.post("https://api.sheety.co/c212e6f3587d2fc1e7d75372adea790c/notes/sheet1", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(request);
};
export const getNote = async () => {
  const request = await axios.get("https://api.sheety.co/c212e6f3587d2fc1e7d75372adea790c/notes/sheet1");
  console.log(request);
};

export const getNoteById = async (id) => {
  const request = await axios.get(`https://api.sheety.co/c212e6f3587d2fc1e7d75372adea790c/notes/sheet1/${id}`);
  console.log(request);
};

export const deleteNote = async (id) => {
  const request = await axios.delete(`https://api.sheety.co/c212e6f3587d2fc1e7d75372adea790c/notes/sheet1/${id}`);
  console.log(request);
};

export const updateNote = async (id, data) => {
//   let body = {
//     sheet1: { idNote: "X", note: "Y", createdAt: new Date(), updatedAt: new Date(), userId: "ok" },
//   };
  const request = await axios.put(`https://api.sheety.co/c212e6f3587d2fc1e7d75372adea790c/notes/sheet1/${id}`, data);
  console.log(request);
};
