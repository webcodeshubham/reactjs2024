import { useState, useEffect } from "react";
import SCSS from "./ReactModal.module.scss";

const ReactModal = () => {
  const [showModal, setShowModal] = useState(false);

  // const body = document.querySelector("body");
  // body.addEventListener("click", () => {
  //   setShowModal(!showModal);
  // });

  useEffect(() => {
    const Overlay = document.querySelector(`.${SCSS.overlayScreen}`);
    Overlay.addEventListener("click", () => {
      setShowModal(false);
    });
  }, [showModal]);

  return (
    <>
      <div className={`${SCSS.modalContainer}`}>
        <button
          className={`${SCSS.openModalBtn}`}
          onClick={() => setShowModal(!showModal)}
        >
          Open Modal
        </button>
        <div className={`${SCSS.overlayScreen}`}></div>
        <div className={`${SCSS.modal} ${showModal ? SCSS.show : ""}`}>
          <h1 className={`${SCSS.modalHeading}`}>Modal</h1>
          <p className={`${SCSS.modalDesc}`}>
            Soon…But Not Quite Yet discovery+ is not yet available in this
            location. We can’t wait to bring discovery+ to your part of the
            world!
          </p>
          <button
            className={`${SCSS.closeModalBtn}`}
            onClick={() => setShowModal(!showModal)}
          >
            Close Modal
          </button>
        </div>
      </div>
    </>
  );
};

export default ReactModal;
