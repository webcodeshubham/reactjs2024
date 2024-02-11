import SCSS from "./VanillaModal.module.scss";

const VanillaModal = () => {
  const openModal = () => {
    const modal = document.querySelector(`.${SCSS.modal}`);
    if (modal.classList.contains(`${SCSS.show}`)) {
      modal.classList.remove(`${SCSS.show}`);
    } else {
      modal.classList.add(`${SCSS.show}`);
    }
  };

  const body = document.querySelector("body");
  body.addEventListener("click", () => {
    const modal = document.querySelector(`.${SCSS.modal}`);
    modal.classList.remove(`${SCSS.show}`);
  });

  return (
    <>
      <div className={`${SCSS.modalContainer}`}>
        <div
          className={`${SCSS.openModalBtn}`}
          onClick={(e) => {
            openModal();
            e.stopPropagation();
          }}
        >
          Open Modal
        </div>
        <div className={`${SCSS.overlayScreen}`}></div>
        <div className={`${SCSS.modal}`}>
          <h1 className={`${SCSS.modalHeading}`}>Modal</h1>
          <p className={`${SCSS.modalDesc}`}>
            Alex Honnold leads a six-week expedition to eastern Greenland to
            make a first ascent of one of the highest unclimbed rock faces in
            the world, but this is much more than a climbing trip.
          </p>
          <button
            className={`${SCSS.closeModalBtn}`}
            onClick={(e) => {
              openModal();
              e.stopPropagation();
            }}
          >
            Close Modal
          </button>
        </div>
      </div>
    </>
  );
};

export default VanillaModal;
