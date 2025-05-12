import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

function Footer() {
  const [currentPage, setCurrentPage] = useState(0);
  const [exitPage, setExitPage] = useState(null);
  const [whichBtn, setWhichBtn] = useState(false);

  const handleClick = (right) => {
    setExitPage(currentPage);
    if (right === "right") {
      console.log(right);
      setWhichBtn(true);
      setCurrentPage((prev) => (prev === 2 ? 0 : prev + 1));
    } else {
      setWhichBtn(() => false);
      setCurrentPage((prev) => (prev === 0 ? 2 : prev - 1));
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setExitPage(null);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [exitPage]);

  console.log(currentPage, whichBtn);
  const images = [
    {
      src: "/image1.webp",
    },
    {
      src: "/image2.webp",
    },
    {
      src: "/image3.webp",
    },
  ];

  return (
    <div className={styles.carouselOuterCont}>
      <div className={styles.carouselInnerCont}>
        <button onClick={handleClick}>
          <FaChevronLeft />
        </button>
        {images.map((srcs, index) => {
          if (whichBtn) {
            return (
              <>
                {index === exitPage && (
                  <img
                    className={styles.outwardsAnimate}
                    key={index}
                    src={srcs.src}
                    alt=""
                  />
                )}
                {index === currentPage && (
                  <img
                    className={styles.inwardsAnimate}
                    key={index}
                    src={srcs.src}
                    alt=""
                  />
                )}
              </>
            );
          } else {
            if (index === currentPage) {
              return (
                <img
                  className={styles.reverseInwardsAnimate}
                  key={index}
                  src={srcs.src}
                  alt=""
                />
              );
            }
            if (index === exitPage) {
              return (
                <img
                  className={styles.reverseOutwardsAnimate}
                  key={index}
                  src={srcs.src}
                  alt=""
                />
              );
            }
          }
          return null;
        })}
        <button onClick={() => handleClick("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Footer;
