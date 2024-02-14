import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import HeaderContainer from "./components/HeaderContainer";

const App = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get("https://randomuser.me/api/?results=240")
            .then((res) => setUserData(res.data.results));
    }, []);

    return (
        //<div className="appContainer">
        //     <HeaderContainer />
        //     <Filter />
        //     <CardsContainer userData={userData} />
        // </div>

        <div className="appContainer">
            <HeaderContainer />

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

            <section className="cardsContainer">
                {userData &&
                    userData.map((user) => (
                        <Card key={user.login.uuid} user={user} />
                    ))}
            </section>
        </div>
    );
};

export default App;