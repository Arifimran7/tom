import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ item, handleCheck, handleDeleteRow }) => {
  return (
    <ul className="row">
      {item.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          ></input>
          <label>{item.item}</label>
          <FaTrashAlt role="button" onClick={() => handleDeleteRow(item.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
