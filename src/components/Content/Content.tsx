import React from "react";
import BottomBanner from "../BottomBanner/BottomBanner";
import RulingsList from "../RulingsList/RulingsList";
import TopBanner from "../TopBanner/TopBanner";

const Content: React.FC = () => {
  return (
    <section className="max-centered">
      <TopBanner />
      <RulingsList />
      <BottomBanner />
    </section>
  );
};

export default Content;
