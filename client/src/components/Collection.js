import React, { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3001/api/collection";

function Collection(props) {
  const [collection, setCollection] = useState([]);
  const pokemon = props.addOrRemove.pokemon;
  const mode = props.addOrRemove.mode;
  console.log("COLLECTIOM", pokemon);
  useEffect(() => {
    console.log("modemodemodemode", mode);
    console.log("pokemon", pokemon);
    if (mode === "Catch") {
      axios
        .post(`http://localhost:3001/api/collection/catch`, pokemon)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
    // if (mode === 'Release'){
    //     axios
    //     .delete(`http://localhost:3001/api/collection/release/${}`, pokemon)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => console.log(error));
    // }
  });

  return <div></div>;
}

export default Collection;
