import { useState } from "react";
import { MobileHeader } from "./mobile-header";

export const MobileHeaderContainer = () => {
  const [isOpen, setOpen] = useState(false);
  const setOpenFun = () => setOpen(!isOpen);
  return <MobileHeader isOpen={isOpen} setOpenFun={setOpenFun}></MobileHeader>;
};
