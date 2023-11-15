import React from "react";
import Footer from "./footer/footer.jsx";
import Preheader from "./preheader/preheader.jsx";
import Header from "./header/header.jsx";
import { MainContainer } from "./main/main-container";
import { MobileHeaderContainer } from "./mobile-header/mobile-header-container";

const App = React.memo(() => {
  return (
    <div>
      <div>
        <Preheader />
        <Header />
        <MobileHeaderContainer />
        <main>
          <MainContainer />
        </main>
        <Footer />
      </div>
    </div>
  );
});

export default App;
