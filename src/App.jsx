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
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import TicTacToe from "./components/tic-tact-toe/TicTacToe";
import menus from "./components/tree-view/data";
import TreeView from "./components/tree-view/TreeView";
import DigitalClock from "./components/digital-clock";
import TooltipTest from "./components/tooltip/test";
import PaginationTest from "./components/pagination/test";
import CountdownTimerTest from "./components/countdown-timer/test";
import StepProgressBarTest from "./components/step-progress-bar/test";
import RandomQuoteGenerator from "./components/random-quote-generator";
import CurrencyConverter from "./components/currency-converter";
import FilterProducts from "./components/filter-products";
import TipCalculator from "./components/tip-calculator";
import ProgressBar from "./components/progress-bar";
import ButtonRippleEffect from "./components/button-ripple-effect";
import DragAndDropFeature from "./components/drag-and-drop";
import FileUpload from "./components/file-upload";
import Quiz from "./components/quiz-app";
import NestedComments from "./components/nested-comments";
import PdfViewer from "./components/pdf-viewer";
import DebounceApiCall from "./components/debounce-api-call";
import SortData from "./components/sort-data";
import GoogleOAuthLogin from "./components/google-oauth-login";

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
      {/* <UseWindowResizeTest />*/}
      {/* <UseOnclickOutsideTest />*/}
      {/* <TicTacToe />*/}
      <TreeView menus={menus} />
      {/* <DigitalClock />*/}
      {/* <TooltipTest />*/}
      {/* <PaginationTest />*/}
      {/* <CountdownTimerTest />*/}
      {/* <StepProgressBarTest />*/}
      {/* <RandomQuoteGenerator />*/}
      {/* <CurrencyConverter />*/}
      {/* <FilterProducts />*/}
      {/* <TipCalculator />*/}
      {/* <ProgressBar />*/}
      {/* <ButtonRippleEffect />*/}
      {/* <DragAndDropFeature />*/}
      {/* <FileUpload />*/}
      {/* <Quiz/>*/}
      <NestedComments />
      {/* <PdfViewer />*/}
      {/* <DebounceApiCall />*/}
      {/* <GoogleOAuthLogin />*/}
      {/* <SortData />*/}
    </div>
  );
}

export default App;
