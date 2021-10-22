import reactDom from "react-dom";

const Portal = function () {
  return reactDom.createPortal(
    <div>Portal</div>,
    document.getElementById("portal-root")
  );
};

export default Portal;
