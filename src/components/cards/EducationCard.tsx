import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Education {
  school: string;
  img: string;
  degree: string;
  date: string;
  grade: string;
  desc: string;
}

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          src={education.img}
          className="object-cover rounded-full"
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
      date={education.date}
    >
      {/* Top Section */}
      <div className="flex gap-3 w-full">
        <img
          src={education.img}
          alt={education.school}
          className="h-[50px] sm:h-[40px] rounded-[10px] mt-1"
        />
        <div className="flex flex-col w-full">
          <div className="text-[18px] sm:text-[14px] font-semibold text-white/90">
            {education.school}
          </div>
          <div className="text-[14px] sm:text-[12px] font-medium text-gray-400">
            {education.degree}
          </div>
          <div className="text-[12px] sm:text-[10px] font-normal text-gray-400/80">
            {education.date}
          </div>
        </div>
      </div>

      {/* Grade */}
      <div className="text-[14px] sm:text-[12px] font-medium text-gray-400">
        <b>Grade:</b> {education.grade}
      </div>

      {/* Description */}
      <div className="text-[15px] sm:text-[12px] font-normal text-white/90 mb-2">
        {education.desc}
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
