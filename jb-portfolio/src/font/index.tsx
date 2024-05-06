import React from "react"

const font = {
    generalMarginBottom: "mb-[100px]",
    pathTitleFontSize: "text-6xl",
    pathSubTitleFontSize: "text-2xl",
    pathYearFontSize: "text-7xl",
    pathTextFontSize: "text-xl",
    headshot: "/IMG_6126.jpg",
    linkedIn: "https://www.linkedin.com/in/julien-bonnet-54436313a/",
    summary: "I'm a data engineer at Société Générale, im trying to build things and improve myself at coding. This portfolio website has been done with these tools : React, Next, Tailwind and DaisyUI.",
  }

const InfoContext = React.createContext(font);
  
export default font