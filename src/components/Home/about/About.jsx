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
            class={`card ${styles.aboutCard1}`}
            style={{ "min-width": "28rem", "max-width": "40rem" }}
          >
            <div class="card-body">
              <p class="card-text">
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
          <div>
            <img
              className={`${styles.cardGif1}`}
              src="https://connecteddataworld.com/files/dynamicContent/sites/vyu3yw/images/en/webpage_41/lswwl23z/element_770/conntected-data-header.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
