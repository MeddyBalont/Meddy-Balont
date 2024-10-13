import styles from "./FooterStyle.module.css";

function Footer() {
     return (
          <section id="footer" className={styles.container}>
               <p>
                    &copy; 2024 Meddy Balont. <br />
                    Tous droits réservés.
               </p>
          </section>
     );
}

export default Footer;
