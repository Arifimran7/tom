import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Project1 = () => {
  const [item, setItem] = useState([
    { id: 1, checked: true, item: "laptops & mobile" },
    { id: 2, checked: false, item: "mobileCause" },
    { id: 3, checked: true, item: "wires and chargers" },
  ]);
  console.log(item);
  return (
    <main>
      <p>wjorhfuieri</p>
      <ul className="row">
        {item.map((item) => (
          <li className="item">
            <input type="checkbox" checked={item.checked}></input>
            <lable>{item.item}</lable>
            <FaTrashAlt role="button" tabIndex="01" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Project1;
