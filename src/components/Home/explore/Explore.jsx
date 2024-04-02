import styles from "./Explore.module.css";
const Explore = () => {
  return (
    <>
      <div className={`${styles.exploreContainer}`}>
        <h1 className={`${styles.exploreHeading}`}>
          Explore Quirky Adventures Hub
        </h1>
        <div className={`${styles.exploreCards}`}>
          <div className={`card ${styles.card1}`} style={{'width': '25rem'}}>
            <div className="card-body">
              <h5 className="card-title">Explore Quirky Adventures</h5>
              <p className="card-text">
              Welcome to the heart of Quirky Adventures Hub, where every story is a gateway to a world of discovery and inspiration. Dive into our curated collection of captivating narratives, thought-provoking anecdotes, and uplifting tales that celebrate the beauty of everyday life.
              </p>
            </div>
          </div>

          <div className={`card ${styles.card3}`} style={{'width': '25rem'}}>
            <div className="card-body">
              <h5 className="card-title">Discover Diverse Stories</h5>
              <p className="card-text">
              Explore a diverse array of stories shared by members of our vibrant community. From heartwarming tales of kindness to thrilling adventures of exploration, there's something for everyone to enjoy. Whether you're seeking laughter, solace, or wisdom, our stories are here to ignite your imagination and touch your heart.
              </p>
            </div>
          </div>

          <div className={`card ${styles.card2}`} style={{'width': '25rem'}}>
            <div className="card-body">
              <h5 className="card-title">Find Your Adventure</h5>
              <p className="card-text">
              Embark on a journey of exploration and self-discovery as you navigate through our collection of stories. Browse by category, theme, or mood to find stories that resonate with you. Whether you're in the mood for a feel-good story to brighten your day or a thought-provoking narrative to ponder, our platform offers endless possibilities for adventure.fe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
