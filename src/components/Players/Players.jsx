import styles from "./Players.module.css";
import { useState } from "react";
import Card from "../Card/Card";

const Players = () => {
  const [players, setPlayers] = useState([
    {
      cardBg: "#de685e",
      point: "5,312",
      level: "13",
      detailColor: "#fff",
      name: "Jane Doe",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
      scores: {
        award: 2,
        matches: 27,
        pals: 123,
      },
    },
    {
      cardBg: "#92bCa6",
      point: "5,312",
      level: "13",
      name: "Jane Doe",
      detailColor: "#224C36",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
      scores: {
        award: 2,
        matches: 27,
        pals: 123,
      },
    },
  ]);
  return (
    <div className={styles.Container}>
      {players.map((player) => {
        return <Card player={player}></Card>;
      })}
    </div>
  );
};

export default Players;
