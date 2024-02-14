import React from "react";

const Filter = () => {
    return (
        <section className="filterContainer">
            <label htmlFor="male" className="filterBtn">
                <input type="radio" id="male" name="gender" />
                Male
            </label>
            <label htmlFor="female" className="filterBtn">
                <input type="radio" id="female" name="gender" />
                Female
            </label>

            <input type="range" min="1" max="240" />
            <p>240</p>
        </section>
    );
};

export default Filter;
