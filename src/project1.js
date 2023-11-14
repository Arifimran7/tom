import React, { useState } from "react";
import ItemList from "./itemList";

const Project1 = ({ item, handleCheck, handleDeleteRow }) => {
  return (
    <main>
      {item.length ? (
        <ItemList
          item={item}
          handleCheck={handleCheck}
          handleDeleteRow={handleDeleteRow}
        />
      ) : (
        <p className="text-3xl font-bold underline"> page is empty</p>
      )}
    </main>
  );
};

export default Project1;
