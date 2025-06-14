import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center relative z-[1] w-full">
        <div className="relative flex flex-col w-full max-w-[1100px] gap-3">
          <VerticalTimeline>
            {education.map((education, index) => (
              <EducationCard key={`education-${index}`} education={education} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Education;
