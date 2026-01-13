// import { useImmer } from "use-immer";
import "./App.css";

import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/cuttom-tabs/tab-test";
import Accordian from "./components/accordian/Accordian";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";

function App() {
  return (
    <div>
      <h1>欢迎来到我的应用</h1>
      {/* <ModalTest />*/}
      {/* <TabTest />*/}
      {/* <Accordian />*/}
      <GithubProfileFinder />
    </div>
  );
}

export default App;
