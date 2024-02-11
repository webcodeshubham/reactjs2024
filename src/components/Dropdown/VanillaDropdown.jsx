import SCSS from "./VanillaDropdown.module.scss";
import strings from "../../data/data.json";
import dropDownArrowIcon from "../../assets/dropDownArrowIcon.png";

const VanillaDropdown = () => {
  const body = document.querySelector("body");
  body.addEventListener("click", () => {
    const dropDownOverlay = document.querySelector(`.${SCSS.dropDownOverlay}`);
    const dropDownArrow = document.querySelector(`.${SCSS.dropDownArrowIcon}`);
    if (dropDownOverlay.classList.contains(`${SCSS.show}`)) {
      dropDownOverlay.classList.remove(`${SCSS.show}`);
      dropDownArrow.style.transform = "rotate(0deg)";
    }
  });

  const openDropDown = () => {
    const dropDownOverlay = document.querySelector(`.${SCSS.dropDownOverlay}`);
    const dropDownArrow = document.querySelector(`.${SCSS.dropDownArrowIcon}`);
    if (dropDownOverlay.classList.contains(`${SCSS.show}`)) {
      dropDownOverlay.classList.remove(`${SCSS.show}`);
      dropDownArrow.style.transform = "rotate(0deg)";
    } else {
      dropDownOverlay.classList.add(`${SCSS.show}`);
      dropDownArrow.style.transform = "rotate(180deg)";
    }
  };

  const selectValue = (item) => {
    const dropDownOverlay = document.querySelector(`.${SCSS.dropDownOverlay}`);
    const inputField = document.querySelector(`.${SCSS.inputField}`);
    const dropDownArrow = document.querySelector(`.${SCSS.dropDownArrowIcon}`);
    inputField.value = item.target.innerText;
    dropDownOverlay.classList.remove(`${SCSS.show}`);
    dropDownArrow.style.transform = "rotate(0deg)";
  };
  return (
    <>
      <div className={`${SCSS.dropDownContainer}`}>
        <input
          type="text"
          name="text"
          id="text"
          onClick={(e) => {
            openDropDown();
            e.stopPropagation();
          }}
          className={`${SCSS.inputField}`}
          placeholder={strings.inputPlaceholder}
        />
        <img
          className={`${SCSS.dropDownArrowIcon}`}
          src={dropDownArrowIcon}
          alt={strings.imgAltArrow}
          onClick={openDropDown}
        />
        <div className={`${SCSS.dropDownOverlay}`}>
          {strings.dropdownItems.map((item, index) => {
            return (
              <div
                key={index}
                className={`${SCSS.dropdownItem}`}
                onClick={(item, index) => selectValue(item, index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VanillaDropdown;
