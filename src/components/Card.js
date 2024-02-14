import React from "react";

const Card = ({ user }) => {
    const localeBirth = new Date(user.dob.date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const localeConnection = new Date(user.registered.date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "short",
    });


    return (
        <div className={`card ${user.gender === "female" ? "female" : "male"}`}>
            <img
                src={user.picture.large}
                alt={"Photo " + user.name.first + " " + user.name.last}
            />
            <h3>
                {user.name.first} {user.name.last}
            </h3>
            <p className="birth">{localeBirth}</p>
            <p className="location">
                {user.location.country + " - " + user.location.city}
            </p>
            <p className="connection">
                {"Connected since: " + localeConnection}
            </p>
        </div>
    );
};

export default Card;
