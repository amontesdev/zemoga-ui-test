import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../reducers";
import RulingCard from "../RulingCard/RulingCard";
import "./RulingsListBody.scss";

const RulingsListBody: React.FC = () => {
  const { rulingsList } = useSelector((state: State) => state);

  return (
    <section className="rulings-list-body">
      {rulingsList.map((ruling, index) => {
        return <RulingCard key={index} ruling={ruling} />;
      })}
    </section>
  );
};

export default RulingsListBody;
