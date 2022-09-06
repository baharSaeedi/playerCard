import styles from "./Card.module.css";

const Card = ({ player }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.extraBox}>
        <div
          className={styles.playerBox}
          style={{ backgroundColor: player.cardBg }}
        >
          <div className={styles.playerLevel}>LEVEL {player.level}</div>
          <div className={styles.playerImg}>
            <i className="fa fa-user"></i>
          </div>
          <div className={styles.playerPoints}>{player.point} POINTS</div>
        </div>
        <div
          className={styles.detailBox}
          style={{ backgroundColor: player.cardBg, color: player.detailColor }}
        >
          <div className={styles.wrapper}>
            <div className={styles.playerName}>{player.name}</div>
            <div className={styles.headers}>
              <span>Group Name</span>
              <span>Joined January 2019</span>
              <span>Position/Role</span>
              <span>City, Country</span>
            </div>
          </div>
          <div className={styles.scoreBox}>
            <div className={styles.ScoreData}>
              <span>Awards</span>
              <i class="fa fa-trophy"></i>
              <span>{player.scores.award}</span>
            </div>
            <div className={styles.ScoreData}>
              <span>MATCHES</span>
              <i class="fa fa-gamepad"></i>
              <span>{player.scores.matches}</span>
            </div>
            <div className={styles.ScoreData}>
              <span>PALS</span>
              <i class="fa fa-users" aria-hidden="true"></i>
              <span>{player.scores.pals}</span>
            </div>
            <div className={styles.ScoreData}>
              <span>COFFEE</span>
              <i class="fa fa-coffee"></i>
              <span className={styles.infinty}>∞</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dataBox}>
        <div className={styles.playerName}>{player.name}</div>
        <div className={styles.loremIpsum}>{player.lorem}</div>
        <div className={styles.explain}>Mouse over the card for more info</div>
      </div>
    </div>
  );
};

export default Card;
