import SCSS from "./App.module.scss";
// import VanillaDropdown from "./components/Dropdown/VanillaDropdown";
// import ReactDropdown from "./components/Dropdown/ReactDropdown";
import VanillaModal from "./components/Modal/VanillaModal";

// ? Arrow Functions
const App = () => {
  return (
    <>
      <div className={`${SCSS.appContainer}`}>
        {/* <h1>Hello! Everyone</h1> */}
        {/* <VanillaDropdown /> */}
        {/* <ReactDropdown /> */}
        <VanillaModal />
      </div>
    </>
  );
};

export default App;
