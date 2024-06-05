import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { UpOutlined } from "@ant-design/icons";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <Button
      type="primary"
      shape="circle"
      icon={<UpOutlined />}
      size="large"
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        display: visible ? "inline" : "none",
      }}
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopButton;
