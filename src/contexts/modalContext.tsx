'use client'
import React, { createContext, useState, useMemo, useContext } from "react";

type Ctx = {
  modalOpen: boolean;
  modalType: string;
  modalTitle: string;
  modalMain: string;
  modalBody: string[];
  openModal: (modalType: string, modalTitle: string, modalMain: string, modalBody: string[]) => void;
  setModalMain: (modalMain: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<Ctx>({
  modalOpen: false,
  modalType: "",
  modalTitle: "",
  modalMain: "",
  modalBody: [],
  openModal: (_modalType: string, _modalTitle: string, _modalMain: string, _modalBody: string[]) => {},
  setModalMain: (_modalMain: string) => {},
  closeModal: () => {}
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalTitle, setModalTitle] = useState("");
  const [modalMain, setModalMain] = useState("");
  const [modalBody, setModalBody] = useState<string[]>([]);
  const value = useMemo(
    () => ({
      modalOpen,
      modalType,
      modalTitle,
      modalMain,
      modalBody,
      openModal: (modalType: string, modalTitle: string, modalMain: string, modalBody: string[]) => {
        setModalOpen(true);
        setModalType(modalType);
        setModalTitle(modalTitle);
        setModalMain(modalMain);
        setModalBody(modalBody);
      },
      setModalMain: (modalMain: string) => {
        setModalMain(modalMain);
      },
      closeModal: () => {
        setModalOpen(false);
        setModalType('');
        setModalTitle("");
        setModalMain("");
        setModalBody([]);
      }
    }),
    [modalOpen, modalTitle, modalMain, modalBody]
  )
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext);