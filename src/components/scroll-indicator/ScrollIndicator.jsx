import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop, // 滚动距离
      document.documentElement.scrollTop, //滚动距离
      document.documentElement.scrollHeight, //<html> 总高度 （含滚动隐藏部分）
      document.documentElement.clientHeight, //视口可见高度
    );

    // 兼容写法：获取当前滚动的垂直距离(适配不同浏览器)
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    // 计算: 页面可滚动的总高度 = 页面总高度 - 视口可见高度
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // 计算滚动进度百分比（滚动距离 / 可滚动总高度 * 100）
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  return (
    <>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div className="current-progress-bar"></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0 ? (
          data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
}
