'use client'
import styles from './styles.module.scss';
import React from 'react';
import {useModal} from "@/contexts/modalContext";
import Modal from "@/components/Modal/Modal";

export default function AppShell({ children }: { children: React.ReactNode }) {

  const { modalOpen } = useModal();

  return (
    <>
      {modalOpen && (
        <div className={styles.modal}>
          <Modal />
        </div>
      )}
      <div className={`${styles.main} ${modalOpen ? styles.mainModalOpen : ''}`}>
        {children}
      </div>
    </>
  )
}