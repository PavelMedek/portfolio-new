import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
            companyLink="www.google.com"
          />
          <Details
            position="Intern"
            company="Facebook"
            time="Summer 2021"
            address="Menlo Park, CA"
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature."
            companyLink="www.facebook.com"
          />
          <Details
            position="Software Developer"
            company="Amazon"
            time="2020-2021"
            address="Seattle, WA"
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
as product recommendations and user reviews, and optimizing the app's performance and reliability."
            companyLink="www.amazon.com"
          />
          <Details
            position="Software Developer Intern"
            company="Microsoft"
            time="Summer 2019"
            address="Redmond, WA"
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
including implementing a new user interface for a system settings panel and optimizing the performance of 
a core system component."
            companyLink="www.microsoft.com"
          />
          <Details
            position="Teaching Assistant"
            company="MIT"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
            companyLink="www.google.com"
          />
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
and graded exams and assignments."
            companyLink="www.mit.com"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
