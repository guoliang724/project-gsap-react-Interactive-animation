import React from "react";
import style from "./index.module.less";
import Logo from "../Logo";
import Button from "../Button";

function Header() {
  return (
    <div className={style.wrapper}>
      <Logo />
      <Button>Order Now</Button>
    </div>
  );
}

export default Header;
