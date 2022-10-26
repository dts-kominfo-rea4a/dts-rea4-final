import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { selectUser } from "../features/userSlice";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 

const AddToList = ({movie}) => {    
    const user = useSelector(selectUser);
    const addList = async (movie) => {
        try {
            const docRef = await addDoc(collection(db, "movieList"), {uid: user.uid, movies: movie});
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }   

    return (
      <>
        <Button
          onClick={() => addList(movie)}
          variant="outline"
          className="add-to-list"
          startIcon={<PlaylistAddIcon />}
          size="large"
        >
          Add to list
        </Button>
      </>
    );
    
}

export default AddToList;