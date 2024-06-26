import React, { useEffect, useState } from "react";
import "./project.module.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

type Props = {
  name: string;
  summary: string;
  image: string;
  link: string;
  github: string;
  index: number;
  technologies: string[];
};

const FeaturedProject = ({
  index,
  image,
  summary,
  name,
  link,
  github,
  technologies,
}: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    addEventListener("resize", (event) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const handleGoToLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {(index % 2 === 0 && windowWidth > 768) || windowWidth < 768 ? (
        <AnimationOnScroll animateOnce animateIn="animate__slideInLeft">
          <div className="flex justify-center flex-wrap my-8 mx-6 md:gap-6">
            <img
              className="object-cover rounded-2xl w-full cursor-pointer sm:w-6/12 md:w-4/12"
              src={image}
              alt={`A mockup of ${name}`}
              onClick={() => handleGoToLink(link)}
            />
            <div className="shadow-md flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-6/12 md:w-6/12 md:gap-2  ">
              <a href={link} target="_blank" rel="noreferrer">
                <h3 className="stat-value">{name}</h3>
              </a>
              <div className="flex gap-2 flex-wrap">
                {technologies && technologies.map((tech, i) => {
                  //let's make the badges different colors to add some pizzazz
                  const badgeColors = [
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                  ];

                  return (
                    <div
                      key={i}
                      className={`badge ${badgeColors[i]} text-xl p-3`}
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="my-4">{summary}</div>
              <div className="flex gap-2">
                <a
                  className="btn btn-primary w-1/5"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
                <a
                  className="btn btn w-1/4"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      ) : (
        <AnimationOnScroll animateOnce={true} animateIn="animate__slideInRight">
          <div className="flex justify-center flex-wrap my-8 mx-6 md:gap-6">
            <div className="shadow-md flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-6/12 md:w-6/12 md:gap-2  ">
              <a href={link} target="_blank" rel="noreferrer">
                <h3 className="stat-value">{name}</h3>
              </a>
              <div className="flex gap-2 flex-wrap">
                {technologies && technologies.map((tech, i) => {
                  //let's make the badges different colors to add some pizzazz
                  const badgeColors = [
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                  ];

                  return (
                    <div
                      key={i}
                      className={`badge ${badgeColors[i]} text-xl p-3`}
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="my-4">{summary}</div>
              <div className="flex gap-2">
                <a
                  className="btn btn-primary w-1/5"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
                <a
                  className="btn btn w-1/4"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
            <img
              className="object-cover rounded-2xl w-full cursor-pointer sm:w-6/12 md:w-4/12"
              src={image}
              alt={`A mockup of ${name}`}
              onClick={() => handleGoToLink(link)}
            />
          </div>
        </AnimationOnScroll>
      )}
    </>
  );
};

export default FeaturedProject;