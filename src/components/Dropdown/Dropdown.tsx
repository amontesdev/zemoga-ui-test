import React, { useState } from "react";
import "./Dropdown.scss";

type ListType = "Grid" | "List";

const Dropdown: React.FC = () => {
  const [styleSelected, setStyleSelected] = useState<ListType>("Grid");

  const changeListStyle = (option: ListType) => {
    const rulingsList = document.querySelector(".rulings-list-body");
    setStyleSelected(option);
    if (option === "Grid") {
      rulingsList?.classList.remove("listStyle");
    } else {
      rulingsList?.classList.add("listStyle");
    }
  };

  return (
    <div className="dropdown">
      <span>{styleSelected}</span>
      <ul className="dropdown__options">
        <li onClick={() => changeListStyle("Grid")}>Grid</li>
        <li onClick={() => changeListStyle("List")}>List</li>
      </ul>
    </div>
  );
};

export default Dropdown;
