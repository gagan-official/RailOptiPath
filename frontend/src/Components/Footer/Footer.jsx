import { useState } from "react";
import styles from "./Footer.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

function Footer() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (right) => {
    if (right) {
      if (currentPage === 2) {
        setCurrentPage(0);
      } else {
        setCurrentPage(currentPage + 1);
      }
    }
    else {
      if (currentPage === 0) {
        setCurrentPage(2);
      } else {
        setCurrentPage(currentPage - 1);
      }
    }
  }
  console.log(currentPage)
  const images = [
    {
      src: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className={styles.carouselOuterCont}>
      <div className={styles.carouselInnerCont}>
        <button onClick={handleClick}><FaChevronLeft /></button>
        {images.map((srcs, index) => {
          if (index === currentPage) {
            return <img className={styles.inwardsAnimate} key={index} src={srcs.src} alt="" />;
          }
          return null;
        })}
        <button onClick={() => handleClick("right")}><FaChevronRight /></button>
      </div>
    </div>
  );
}

export default Footer;
