import styles from "./Login.module.css";
import showPwdImg from "../image/show-password.svg";
import hidePwdImg from "../image/hide-password.svg";
import React, { useState } from "react";
export default function Login() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  function onSubmit() {
    console.log("login");
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form className={styles.formPortion}>
          <div className={styles.formField}>
            <input type="text" placeholder="User Name" required />
          </div>

          <div className={styles.formField}>
            <input
              type={isRevealPwd ? "text" : "password"}
              placeholder="Password"
              required
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <img
              className={styles.eyeIcon}
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
          </div>

          <div className={styles.formField}>
            <button className={styles.btn} onClick={onSubmit}>
              Log in
            </button>
          </div>

          <div className={styles.forgetPassSec}>
            <div>
              <a className={styles.forgetSize}>Forgot password</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
