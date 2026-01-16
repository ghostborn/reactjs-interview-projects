// import { useImmer } from "use-immer";
import "./App.css";

import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/cuttom-tabs/tab-test";
import Accordian from "./components/accordian/Accordian";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider/ImageSlider";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import RandomColor from "./components/random-color/RandomColor";
import LoadMoreDaa from "./components/load-more-data/LoadMoreData";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import SearchAutoComplete from "./components/search-autocomplete/SearchAutocomplete";
import UseFetchHookTest from "./components/use-fetch/test";
import StarRating from "./components/star-rating/StarRating";
import ScrollToSection from "./components/scroll-to-somewhere/ScrollToSection";
import ScrollToTopAndBottom from "./components/scroll-to-somewhere/ScrollToTopAndBottom";
import UseWindowResizeTest from "./components/use-window-resize/test";

function App() {
  return (
    <div>
      <h2>欢迎来到我的应用</h2>
      {/* <ModalTest />*/}
      {/* <TabTest />*/}
      {/* <Accordian />*/}
      {/* <GithubProfileFinder />*/}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />*/}
      {/* <QRCodeGenerator />*/}
      {/* <LightDarkMode />*/}
      {/* <RandomColor />*/}
      {/* <LoadMoreDaa />*/}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />*/}
      {/* <SearchAutoComplete />*/}
      {/* <UseFetchHookTest />*/}
      {/* <StarRating noOfStars={5} />*/}
      {/* <ScrollToSection />*/}
      {/* <ScrollToTopAndBottom />*/}
      <UseWindowResizeTest />
    </div>
  );
}

export default App;
