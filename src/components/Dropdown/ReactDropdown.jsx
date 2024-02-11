import { useState } from "react";
import SCSS from "./ReactDropdown.module.scss";
import strings from "../../data/data.json";
import dropDownArrowIcon from "../../assets/dropDownArrowIcon.png";

const ReactDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const body = document.querySelector("body");
  body.addEventListener("click", () => {
    setIsOpen(false);
  });

  return (
    <>
      <div className={`${SCSS.dropDownContainer}`}>
        <input
          type="text"
          name="text"
          id="text"
          defaultValue={value}
          onClick={(e) => {
            setIsOpen(!isOpen);
            e.stopPropagation();
          }}
          className={`${SCSS.inputField}`}
          placeholder={strings.inputPlaceholder}
        />
        <img
          className={`${SCSS.dropDownArrowIcon} ${
            isOpen ? `${SCSS.rotate}` : ""
          }`}
          src={dropDownArrowIcon}
          alt={strings.imgAltArrow}
        />
        <div
          className={`${SCSS.dropDownOverlay} ${isOpen ? `${SCSS.show}` : ""}`}
        >
          {strings.dropdownItems.map((item, index) => {
            return (
              <div
                key={index}
                className={`${SCSS.dropdownItem}`}
                onClick={(item) => {
                  setIsOpen(!isOpen);
                  setValue(item.target.innerText);
                }}
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

export default ReactDropdown;
