import React, {useEffect, useState} from "react";


const Matrix = () => {
  let [pageNumber, updatePageNumber] = useState(1);  

  let [row, setRow] = useState(1);
  let [column, setColumn] = useState(1);

  return (
    <section>
      for(var i = 0; i < row; i++){
        console.log(i);
      } 

      <ItemList >
      {results?.map(character => (
          <Character character = {character} key= {character.id}/>
        ))}
      </ItemList>
      <button onClick={() => {updatePageNumber(pageNumber+1);}}>Click me</button>
    </section>
  );
};

export default Matrix;