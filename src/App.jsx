// import { useImmer } from "use-immer";
import "./App.css";

import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/cuttom-tabs/tab-test";
import Accordian from "./components/accordian/Accordian";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import ImageSlider from "./components/image-slider/ImageSlider";

function App() {
  return (
    <div>
      <h2>欢迎来到我的应用</h2>
      {/* <ModalTest />*/}
      {/* <TabTest />*/}
      {/* <Accordian />*/}
      {/* <GithubProfileFinder />*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
