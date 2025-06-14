import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Experience {
  img: string;
  school?: string;
  role: string;
  company: string;
  date: string;
  desc?: string;
  skills?: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          src={experience.img}
          alt={experience.school}
          className="w-full h-full object-cover rounded-full"
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      {/* Top Section */}
      <div className="flex gap-3 w-full">
        <img
          src={experience.img}
          alt=""
          className="h-[50px] rounded-[10px] mt-1 sm:h-[40px]"
        />
        <div className="flex flex-col w-full">
          <div className="text-[20px] font-semibold text-white/90 sm:text-[14px]">
            {experience.role}
          </div>
          <div className="text-[14px] font-medium text-gray-400 sm:text-[12px]">
            {experience.company}
          </div>
          <div className="text-[12px] font-normal text-gray-400/80 sm:text-[10px]">
            {experience.date}
          </div>
        </div>
      </div>

      {/* Description & Skills */}
      <div className="text-[15px] font-normal text-white/90 sm:text-[12px] mb-2">
        {experience.desc && <div className="line-clamp-6">{experience.desc}</div>}
        {experience.skills && (
          <>
            <br />
            <div className="flex gap-3 mt-[-10px] flex-wrap">
              <b className="text-white text-[16px]">Skills:</b>
                  <div className="flex flex-wrap gap-2 mb-4">
              {experience.skills.map((skills, i) => (
                <span
                  key={i}
                  className="text-sm text-white bg-gray-700 px-2 py-1 rounded"
                >
                  {skills}
                </span>
              ))}
            </div>
            </div>
          </>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
