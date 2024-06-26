import React from "react"

const info = {
    name: "Julien Bonnet",
    headshot: "/IMG_6126.jpg",
    linkedIn: "https://www.linkedin.com/in/julien-bonnet-54436313a/",
    summary: "I'm a data engineer at Société Générale, im trying to build things and improve myself at coding. This portfolio website has been done with these tools : React, Next, Tailwind and DaisyUI.",
    github: "https://github.com/julienbonnet50",
    email: "todo",
    sections: ["About", "Path" ,"Projects", "Contact"],
    featuredProjects: [{
      name: 'Spark Anonymizer',
      summary: "This app anonymize your data to improve your tests, without leaking data from your production, it keeps the distribution :-)",
      image: "/spark_anonymizer_logo.png", 
      link: "Not implemented",
      github: "https://github.com/julienbonnet50/genericAnonymizer",
      technologies: ["Spark", "Scala", "Shell"]
    }]
    ,
    otherProjects: [    
    ]
  }

const InfoContext = React.createContext(info);
  
export default info
