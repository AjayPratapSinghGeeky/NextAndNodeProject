import styles from "./form.module.css"
import Link from "next/link";


const SignInForm = () => {
  return (
    <>
      <div className={`${styles.formContainer} mt-5`}>
        <form className={`${styles.signInForm}`}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="mt-4">
    {/* Link to the register page */}
    <Link href="/register" className={`${styles.link}`}>
      Don't have an account? Register here
    </Link>
  </div>
      </div>
    </>
  );
};

export default SignInForm;