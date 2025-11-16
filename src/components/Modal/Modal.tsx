'use client'
import styles from './styles.module.scss';
import Icon from "@/components/Icon/Icon";
import {useModal} from "@/contexts/modalContext";
import Image from "next/image";
import {useEffect, useMemo, useState} from "react";

export default function Modal() {

  const defaultPageSize = 5;
  const { modalType, modalTitle, modalMain, modalBody, setModalMain, closeModal } = useModal();
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.max(0, Math.ceil(modalBody.length / pageSize) - 1);
  const pageImages = useMemo(
    () => modalBody.slice(currentPage * pageSize, currentPage * pageSize + pageSize),
    [modalBody, pageSize, currentPage]
  );

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width <= 700) setPageSize(1);
      else if (width <= 1000 && width > 700) setPageSize(2);
      else if (width <= 1300 && width > 1000) setPageSize(3);
      else if (width <= 1600 && width > 1300) setPageSize(4);
      else setPageSize(defaultPageSize);
    };
    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.closeIcon} onClick={() => closeModal()}>
        <Icon icon={'x'} />
      </span>
      <p className={styles.title}>{modalTitle}</p>
      {modalType === 'project' && modalMain && (
        <div className={styles.project}>
          <div className={styles.mainContainer}>
            <Image
              className={styles.main}
              src={modalMain}
              alt="modalTitle"
              fill
              draggable={false}
            />
          </div>
          <div className={styles.bottom}>
            <div className={`${styles.arrow} ${currentPage === 0 ? 'opacity-20 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
                 onClick={() => setCurrentPage(p => Math.max(0, p - 1))}>
              <Icon icon={'arrow_left'} />
            </div>
            <div className={styles.imagesContainer}>
              {pageImages.map((item) => {
                return (
                  <div key={item}
                       className={styles.imageContainer}
                       onClick={() => setModalMain(item)}
                  >
                    <Image
                      className={`${styles.image} ${modalMain === item ? styles.selected : ''}`}
                      src={item}
                      alt={item}
                      fill
                      draggable={false}
                    />
                  </div>
                )
              })}
            </div>
            <div className={`${styles.arrow} ${currentPage >= Math.ceil(modalBody.length / pageSize) - 1 ? 'opacity-20 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
                 onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>
              <Icon icon={'arrow_right'} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}