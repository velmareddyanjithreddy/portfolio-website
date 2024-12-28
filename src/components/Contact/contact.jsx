import { FaGithub ,FaLinkedin} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <IoIosMail />
          <a href="mailto:myemail@email.com">anjithknr@email.com</a>
        </li>
        <li className={styles.link}>
        <FaLinkedin />
          <a href="https://www.linkedin.com/in/velma-anjith-reddy/">https://www.linkedin.com/in/velma-anjith-reddy/</a>
        </li>
        <li className={styles.link}>
        <FaGithub />
          <a href="https://github.com/velmareddyanjithreddy">https://github.com/velmareddyanjithreddy</a>
        </li>
      </ul>
    </footer>
  );
};