import imgjb from "../img/IMG_6126.jpg"
import imgproject from "../img/spark_anonymizer_logo.png"

const info = {
    name: "Julien Bonnet",
    headshot: {imgjb},
    linkedIn: "https://www.linkedin.com/in/julien-bonnet-54436313a/",
    summary: "I'm a data engineer at Société Générale, im trying to build things and improve myself at coding. This portfolio website has been done with these tools : React, Next, Tailwind and DaisyUI.",
    github: "https://github.com/julienbonnet50",
    email: "todo",
    sections: ["About", "Projects", "Contact"],
    featuredProjects: [{
      name: 'Spark Anonymizer',
      summary: "This app anonymize your data to improve your tests, without leaking data from your production, it keeps the distribution :-)",
      image: '../img/spark_anonymizer_logo.png', 
      link: "Todo : ",
      github: "https://github.com/julienbonnet50/genericAnonymizer",
      technologies: ["Spark", "Scala", "Shell"]
    }]
    ,
    otherProjects: [    
    ]
  }
  
  
  export default info
