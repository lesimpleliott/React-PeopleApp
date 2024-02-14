import React from "react";
import Card from "./Card";

const CardsContainer = ({ userData }) => {
  return (
    <section className="cardsContainer">
      {userData &&
        userData.map((user) => <Card key={user.login.uuid} user={user} />)}
    </section>
  );
};

export default CardsContainer;
