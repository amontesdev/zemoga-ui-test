import React from "react";
import Dropdown from "../../Dropdown/Dropdown";
import "./RullingsListHeader.scss";

const RulingsListHeader: React.FC = () => {
  return (
    <section className="rullings-header">
      <h1>Previous Rulings</h1>
      <div className="rullings-header__dropdown">
        <Dropdown />
      </div>
    </section>
  );
};

export default RulingsListHeader;
