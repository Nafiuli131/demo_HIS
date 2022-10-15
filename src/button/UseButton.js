import CommonButton from "./CommonButton.tsx";
import React, { useState } from "react";
import Toaster from "../toaster/Toaster";
import { ToastContainer } from "react-toastify";

export default function UseButton() {
  const [showToast, setShowToast] = useState(false);

  function buttonFeature() {
    alert("hello");
  }
  function toaster() {
    setShowToast(!showToast);
  }

  return (
    <>
      <>
        {showToast ? (
          <>
            <Toaster props={"info"} />
            <ToastContainer
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </>
        ) : (
          ""
        )}
      </>

      <div style={{ marginLeft: 370 }}>
        <h1>Customize those buttons </h1>
        <h1>Big Button with radius</h1>
        <CommonButton
          border="none"
          color="#dc4c64"
          height="45px"
          onClick={toaster}
          radius="8px"
          width="80px"
          children="Toaster"
        />

        <span style={{ marginLeft: 10 }}></span>
        <CommonButton
          border="none"
          color="#14a44d"
          height="45px"
          onClick={toaster}
          radius="8px"
          width="80px"
          children="Toaster"
        />
        <span style={{ marginLeft: 10 }}></span>
        <CommonButton
          border="none"
          color="#e4a11b"
          height="45px"
          onClick={toaster}
          radius="8px"
          width="80px"
          children="Toaster"
        />
        <span style={{ marginLeft: 10 }}></span>
        <CommonButton
          border="none"
          color="#dce4f0"
          height="45px"
          onClick={toaster}
          radius="8px"
          width="80px"
          children="Toaster"
        />
        <span style={{ marginLeft: 10 }}></span>
        <CommonButton
          border="none"
          color="#54b4d3"
          height="45px"
          onClick={toaster}
          radius="8px"
          width="80px"
          children="Toaster"
        />
        <h1>Without radius Button</h1>
        <CommonButton
          border="none"
          color="#dc4c64"
          height="45px"
          // onClick={showModal}
          width="80px"
          children="Square"
        />
        <span style={{ marginLeft: 10 }}></span>
        <CommonButton
          border="none"
          color="#14a44d"
          height="45px"
          // onClick={toaster}
          // radius="8px"
          width="80px"
          children="Square"
        />
        <span style={{ marginLeft: 10 }}></span>
        <CommonButton
          border="none"
          color="#e4a11b"
          height="45px"
          // onClick={toaster}
          // radius="8px"
          width="80px"
          children="Square"
        />
        <span style={{ marginLeft: 10 }}></span>
        <CommonButton
          border="none"
          color="#dce4f0"
          height="45px"
          // onClick={toaster}
          // radius="8px"
          width="80px"
          children="Square"
        />
        <span style={{ marginLeft: 10 }}></span>
        <CommonButton
          border="none"
          color="#54b4d3"
          height="45px"
          // onClick={toaster}
          // radius="8px"
          width="80px"
          children="Square"
        />
        <h1>Small Button</h1>
        <CommonButton
          border="none"
          color="#dc4c64"
          height="40px"
          onClick={buttonFeature}
          radius="8px"
          width="60px"
          children="Click button"
        />
      </div>
    </>
  );
}
