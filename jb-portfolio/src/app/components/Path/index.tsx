import React, { useEffect, useState, useContext } from "react";
import "./project.module.css";
import "animate.css/animate.min.css";

import font from "../../../font";

type Props = {
};

const Path = ({
}: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    addEventListener("resize", (event) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return(
      <div className={`${font.generalMarginBottom}`}>
        <h2
        id="Projects"
        className={`${font.pathTitleFontSize} font-bold flex justify-center my-4 mb-[70px]`}
        >
        My path
        </h2>
            
        <ul className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical`}>
          <li>
            <div className={`timeline-middle`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5`}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={`timeline-start md:text-end mb-10 ${font.pathTextFontSize}`}>
              <time className={`${font.pathYearFontSize} font-mono italic mb-[20px]`}>2016</time>
              <div className={`${font.pathSubTitleFontSize} font-black mb-[10px] `}>Preparatory classes for the Grandes Écoles</div>
              PCSI program at Lycée Marcelin Berthelot. The program, which is part of the competitive CPGE system, focuses on Physics, Chemistry, and Engineering Science.
              <br></br><br></br>
              <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><a href="https://lycee-berthelot.fr/superieur" target="_blank">PCSI program</a></li>
              </ul>
            </div>
            <hr/>
          </li>
          <></>
          <li>
            <hr />
            <div className={`timeline-middle`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5`}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={`timeline-end mb-10 ${font.pathTextFontSize} mb-[10px]`}>
              <time className={`${font.pathYearFontSize} font-mono italic mb-[20px]`}>2017</time>
              <div className={`${font.pathSubTitleFontSize} font-black mb-[10px]`}>EFREI - Big Data & IA</div>
              Started degree in Big Data & Machine Learning, designed to educate experts capable of understanding and mastering the technologies associated with data management, AI, and the Cloud.
              <br></br><br></br>
              <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><a href="https://www.efrei.fr/programme-grande-ecole/le-cycle-ingenieur/ingenieur-big-data/" target="_blank">EFREI program</a></li>
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className={`timeline-middle`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5`}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={`timeline-start md:text-end mb-10 ${font.pathTextFontSize}`}>
              <time className={`${font.pathYearFontSize} font-mono italic mb-[20px]`}>2018</time>
              <div className={`${font.pathSubTitleFontSize} font-black mb-[10px]`}>Concordia University</div>
                  Completed a university exchange semester at Concordia University in Montreal, Canada, focusing on Engineering Informatics courses such as Operating Systems, Java, Networks and Protocols, Database SQL, and Web Programming.
                <br></br><br></br>
                <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                  <li><a href="https://www.concordia.ca/students/exchanges/csep.html" target="_blank">Concordia program</a></li>
                </ul>
              </div>
            <hr/>
            
          </li>
          <li>
            <hr />
            <div className={`timeline-middle`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5`}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={`timeline-end mb-10 ${font.pathTextFontSize}`}>
                <time className={`${font.pathYearFontSize} font-mono italic mb-[20px]`}>2020</time>
                <div className={`${font.pathSubTitleFontSize} font-black mb-[10px]`}>[Internship] - Orange</div>
                  Completed a 5-month internship at Orange in Vanves, France, from May 2020 to September 2020. During this time, I developed a web-based CO2 calculator for Orange employees, created a chatbot for providing professional training to young entrepreneurs, designed a web-based support platform for digital sobriety workshops, and developed a web-based eco-design form.
              <br></br><br></br>
              <div className={`timeline-end ${font.pathTextFontSize}`}>Skills aquired :</div>
              <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><a href="https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3" target="_blank">HTML & CSS</a></li>
                <li><a href="https://openclassrooms.com/fr/courses/7542506-creez-des-sites-web-responsives-avec-bootstrap-5" target="_blank">Responsive Web Design</a></li>
                <li><a href="https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript" target="_blank">JavaScript</a></li>
                <li><a href="https://openclassrooms.com/fr/courses/6227476-appliquez-les-principes-du-green-it-dans-votre-entreprise/6699634-reduisez-l-empreinte-ecologique-de-votre-site-web" target="_blank">Eco-Design Web Sites</a></li>
              </ul>
              </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className={`timeline-middle`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5`}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={`timeline-start md:text-end mb-10 ${font.pathTextFontSize}`}>
              <time className={`${font.pathYearFontSize} font-mono italic mb-[20px]`}>2021</time>
              <div className={`${font.pathSubTitleFontSize} font-black mb-[10px]`}>[Apprenticeship] - EDF</div>
                Completed a one-year Data Scientist internship at EDF, where I developed deep learning models, created Power BI reports, and assisted in automating data validation using Python algorithms.
              <br></br><br></br>
              <div className={`timeline-end ${font.pathTextFontSize}`}>Skills aquired :</div>
              <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><a href="https://openclassrooms.com/fr/paths/793-data-scientist" target="_blank">Data Scientist</a></li>
                <li><a href="https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning" target="_blank">Machine Learning</a></li>
                <li><a href="https://openclassrooms.com/fr/courses/5801891-initiez-vous-au-deep-learning" target="_blank">Deep Learning</a></li>
                <li><a href="https://openclassrooms.com/fr/paths/383-data-visualisation-avec-power-bi" target="_blank">Data Visualization - Power BI</a></li>
                <li><a href="https://openclassrooms.com/fr/courses/1946386-comprendre-le-web/6874684-decouvrez-les-bases-de-donnees" target="_blank">Database Management</a></li>
                <li><a href="https://openclassrooms.com/fr/courses/6204541-initiez-vous-a-python-pour-lanalyse-de-donnees" target="_blank">Data Analyst - Python</a></li>
              </ul>
            </div>
          </li>
          <li>
            <hr />
            <div className={`timeline-middle`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5`}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={`timeline-end mb-10 ${font.pathTextFontSize}`}>
                <time className={`${font.pathYearFontSize} font-mono italic mb-[20px]`}>2022</time>
                <div className={`${font.pathSubTitleFontSize} font-black mb-[10px]`}>[Big Data Engineer] - Devoteam</div>
                I have gained experience working for a company that specializes in selling engineering products and services. My role involved collaborating with various teams to understand their unique data requirements, developing tailored data solutions, and implementing data-driven strategies to optimize their engineering offerings and improve overall business performance.
                <div className={`timeline-end ${font.pathTextFontSize}`}>I worked for <strong>Axa - Direct Assurance</strong>, <strong>Fnac-Darty</strong> and <strong>Ladurée Paris</strong></div>
              <br></br>
              <div className={`timeline-end ${font.pathTextFontSize}`}>Skills aquired :</div>
              <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><a href="https://docs.microsoft.com/en-us/azure/data-factory/introduction" target="_blank">Azure Data Factory</a></li>
                <li><a href="https://spark.apache.org/docs/latest/" target="_blank">Apache Spark</a></li>
                <li><a href="https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview" target="_blank">Azure SQL</a></li>
                <li><a href="https://docs.scala-lang.org/" target="_blank">Scala</a></li>
                <li><a href="https://docs.databricks.com/en/index.html" target="_blank">Databricks</a></li>
                <li><a href="https://docs.microsoft.com/en-us/azure/architecture/" target="_blank">Azure Architecture</a></li>
              </ul>
              </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className={`timeline-middle`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5`}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={`timeline-start md:text-end mb-10 ${font.pathTextFontSize}`}>
              <time className={`${font.pathYearFontSize} font-mono italic mb-[20px]`}>2023</time>
              <div className={`${font.pathSubTitleFontSize} font-black mb-[10px]`}>[Data Architect Junior] - SGCIB</div>
                Im currently for GBSU. Mainly worked to analyze monitoring metrics using Synapse Notebooks, provided Spark/Scala support to troubleshoot issues and optimize system performance, and championed a Self-BI vision within the organization, focusing on cost, scalability, and use-case considerations to drive adoption and alignment.
              <br></br><br></br>
              <div className={`timeline-end ${font.pathTextFontSize}`}>Skills aquired :</div>
              <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><a href="https://docs.microsoft.com/en-us/azure/architecture/" target="_blank">Azure Architecture</a></li>
                <li><a href="https://spark.apache.org/docs/latest/" target="_blank">Apache Spark</a></li>
                <li><a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction" target="_blank">Azure Data Lake</a></li>
                <li><a href="https://docs.microsoft.com/en-us/azure/synapse-analytics/" target="_blank">Azure Synapse</a></li>
                <li><a href="https://docs.microsoft.com/en-us/azure/service-fabric/" target="_blank">Azure Service Fabric</a></li>
                <li><a href="https://learn.microsoft.com/fr-fr/credentials/certifications/azure-data-engineer/?practice-assessment-type=certification" target="_blank">Data Engineer Certification</a></li>
                <li><a href="https://docs.oracle.com/javase/tutorial/" target="_blank">Java</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default Path;