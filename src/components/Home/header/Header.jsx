
import styles from "./Header.module.css"
const Header = () => {
  return (
    <>
      <div className={`position-relative overflow-hidden p-3 text-center bg-body-tertiary ${styles.headerMain}`} style={{ "minHeight": '900px', }}>
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Quirky Adventures Hub</h1>
          <h3 className="fw-normal mb-3">
            Sharing Increase Love and Caring
          </h3>
          <div className="btn">
          <button type="button" className={`btn btn-secondary  btn-lg ${styles.postBlogBtn}`}>Post Your Story</button>
          </div>
          <div className={`${styles.signInBtn}`}>
          <button type="button" className="btn btn-primary btn-sm">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;