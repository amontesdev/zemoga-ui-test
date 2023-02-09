import React from "react";
import RulingsListBody from "./RulingsListBody/RulingsListBody";
import RulingsListHeader from "./RullingsListHeader/RullingsListHeader";

const RulingsList: React.FC = () => {
    return (
        <main className="rulings-list" role="main">
            <RulingsListHeader />
            <RulingsListBody />
        </main>
    )
}

export default RulingsList;