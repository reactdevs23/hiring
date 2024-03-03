import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  companyName,
  img,

  logo,
  heading,
  postName,
  requirements,
  applyNow,
}) => {
  return (
    <div
      className={[
        classes.mainWrapper,
        "min-h-screen flex items-center justify-center w-full ",
      ].join(" ")}
      style={{ background: "var(--primaryColor)" }}
    >
      <div className={classes.container}>
        <div className={classes.topHeader}>
          <img src={logo} alt="#" className={classes.logo} />
          <p className={classes.companyName}>{companyName}</p>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.infoContainer}>
            <div className={classes.headingContainer}>
              <h1 className={classes.heading1}>{heading.heading1}</h1>{" "}
              <h1 className={classes.heading2}>{heading.heading2}</h1>
            </div>
            <div className={classes.postName}>
              <p>{postName}</p>
            </div>
            <div className={classes.requirementsContainer}>
              <h3 className={classes.title}>{requirements.title}</h3>
              <ul className={classes.requirements}>
                {requirements.data.map((el, i) => (
                  <li className={classes.requirement} key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.applyNow}>
              <p className={classes.label}>{applyNow.label}</p>
              <a
                href={applyNow.link}
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                {applyNow.link}
              </a>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <img src={img} alt="#" className={classes.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
