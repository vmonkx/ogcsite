import React, { useState } from "react";
import logo from "../images/logonew.svg";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../css/navbar.module.css";
import Container from "./Container";
import { useModalWindow } from "../contexts/ModalProvider";
import { ButtonPrimary } from "./Styled/Button";

function Navbar(props) {
  const [isOpen, setNav] = useState();

  const result = useStaticQuery(query);

  const { navigations } = result.strapi;

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  const { toggle } = useModalWindow();
  return (
    <nav className={styles.navbar} role="main">
      <div className={styles.navBackground}></div>
      <Container>
        <div className={styles.navContent}>
          <div className={styles.navWrapLogo}>
            <Link to="/" aria-label="Перейти на главную страницу">
              <img
                className={styles.navLogo}
                src={logo}
                alt="Логотип клиники OGC clinic"
                width="130"
                height="47"
              />
            </Link>
          </div>

          <ul
            id="nav__list"
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {navigations.map((navigation) => {
              return (
                <li key={navigation.id}>
                  <Link
                    to={`/${navigation.slug}`}
                    className={`${styles.navLink}`}
                    activeClassName={`${styles.navLinkActive}`}
                    aria-label={`Перейти к ${navigation.name}`}
                  >
                    {navigation.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                className={`${styles.navLinkPhone}`}
                href="tel:+78432060707"
                aria-label="Записаться по телефону"
              >
                8 843 206-07-07
              </a>
            </li>
          </ul>

          <button
            className={
              isOpen
                ? `${styles.navToggle} ${styles.showNav}`
                : `${styles.navToggle}`
            }
            title="Открыть/закрыть меню"
            aria-label="Открыть/закрыть меню"
            aria-expanded={isOpen}
            aria-controls="nav__list"
            onClick={toggleNav}
            type="button"
          >
            <div aria-hidden="true" className={styles.bar}></div>
            <div aria-hidden="true" className={styles.bar}></div>
          </button>
          <div>
            <ButtonPrimary
              className={styles.navButton}
              onClick={toggle}
              aria-label="Записаться"
            >
              Записаться
            </ButtonPrimary>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

const query = graphql`
  query {
    strapi {
      navigations(sort: "order") {
        id
        name
        slug
      }
    }
  }
`;
