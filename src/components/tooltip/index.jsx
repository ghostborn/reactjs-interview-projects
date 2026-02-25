import { useState, useRef, useEffect } from "react";

function Tooltip({ children, content, delay }) {
  // let timeout;
  // 使用useRef来保存定时器ID，而不是普通变量
  const timeoutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  function handleShowTooltip() {
    // 将定时器ID存入ref的current属性
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay || 500);
  }

  function handleHideTooltip() {
    // 清除定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  }

  // 组件卸载时清除定时器，防止内存泄漏
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      {children}
      {isVisible ? <div className="tooltip">{content}</div> : null}
    </div>
  );
}

export default Tooltip;
