import styles from "./About.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={`container ${styles.aboutPage}`}>
        <h2 className={`aboutHeading ${styles.aboutHeading}`}>
          Welcome to Quirky Adventures Hub, where stories come to life and
          experiences shape our journey!
        </h2>
        <div className={`${styles.aboutCards}`}>
          <div
            className={`card ${styles.aboutCard1}`}
           
          >
            <div className="card-body">
              <p className="card-text">
                At Quirky Adventures Hub, we believe in the power of
                storytelling to connect, inspire, and guide individuals through
                the ups and downs of life. We're a vibrant community where
                people from all walks of life come together to share their daily
                adventures, whether they're filled with laughter, challenges,
                triumphs, or lessons learned.Our platform serves as a sanctuary
                for those seeking solace in the shared experiences of others.
                Here, you'll find a diverse tapestry of stories – from
                heartwarming anecdotes to thought-provoking narratives – each
                offering a glimpse into the kaleidoscope of human existence.
              </p>
            </div>
          </div>
          <div
            className={`card ${styles.aboutCard2}`}
           
          >
            <div className="card-body">
              <p className="card-text">
                Join a thriving community of storytellers, adventurers, and
                seekers of inspiration. Engage with fellow members, share your
                own stories, and participate in discussions that spark
                creativity and connection. At Quirky Adventures Hub, every voice
                is valued, and every story is celebrated.Ready to embark on your
                own quirky adventure? Start exploring our collection of stories
                now and discover the magic that awaits. Whether you're here to
                laugh, learn, or simply be inspired, Quirky Adventures Hub is
                your portal to a world of endless possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
