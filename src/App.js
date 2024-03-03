import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import { img, logo } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Montserrat', sans-serif",
    headingFontFamily: "'Poppins', sans-serif",

    logo: logo,
    companyName: "Liceria and co",

    img: img,

    primaryColor: "#CCEAF5",
    secondaryColor: "#3A0CA3",
    accentColor: "#E7E0FA",
    heading: {
      heading1: "We are",
      heading2: "hiring",
    },
    postName: "Content Creator",
    requirements: {
      title: "Requirements",
      data: [
        "Proven Experience as a Content Creator of similar role, with a portfolio of content smaples",
        "Excellent written and verbal communication skills, with a keen eye for detail and grammer.",
        "Creative mindset with a fassion for storytelling and an ability to think outside the box",
      ],
    },
    applyNow: {
      label: "Send your cv via email",
      link: "hello@rellygreatsite.com",
    },
  });

  return (
    <>
      <div
        style={{
          "--primaryColor": allData.primaryColor,
          "--secondaryColor": allData.secondaryColor,
          "--accentColor": allData.accentColor,
          "--headingFontFamily": allData.headingFontFamily,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
