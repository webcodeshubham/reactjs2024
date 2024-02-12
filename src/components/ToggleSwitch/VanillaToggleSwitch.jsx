import SCSS from "./VanillaToggleSwitch.module.scss";

const VanillaToggleSwitch = ({ className }) => {
  const toggleOn = () => {
    const appContainer = document.querySelector(`.${className}`);
    const toggleSwitchContainer =  document.querySelector(`.${SCSS.toggleSwitchContainer}`);
    const toggle = document.querySelector(`.${SCSS.toggle}`);
    if (toggle.classList.contains(`${SCSS.move}`)) {
      toggle.classList.remove(`${SCSS.move}`)
      toggleSwitchContainer.style.background = "black";
      appContainer.style.background = "black";
    } else {
      toggle.classList.add(`${SCSS.move}`)
      toggleSwitchContainer.style.background = "linear-gradient(30deg, blue, purple, black, white)";
      appContainer.style.background = "white";
    }
  }
  return (
    <>
    <div className={`${SCSS.toggleSwitchContainer}`} onClick={toggleOn}>
      <div className={`${SCSS.toggle}`} onClick={(e) => {e.stopPropagation();toggleOn()}}></div>
    </div>
    </>
  )
}

export default VanillaToggleSwitch;