import React from "react";

const Clr = ({ color, children, br, os }) => {
  return (
    <>
      <span style={{ color: color, marginLeft: `${os * 3}%` }}>{children}</span>
      {br && <br />}
    </>
  );
};

export default Clr;
