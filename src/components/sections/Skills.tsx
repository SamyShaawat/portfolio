import { skills } from "../../data/constants.ts";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative "
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Here are some of my skills on which I have been working on for the
          past years.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-[50px] mt-5">
        {skills.map((skill, index) => (
          <Tilt
            key={`skill-${index}`}
            className="w-full max-w-[500px] md:max-w-[400px] sm:max-w-[330px]"
          >
            <div
              className="rounded-2xl px-9 py-5 md:px-9 md:py-3 sm:px-9 sm:py-3"
              style={{
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                boxShadow: "0px 4px 24px rgba(23, 92, 230, 0.15)",
              }}
            >
              <h3 className="text-[28px] font-semibold text-center text-[#A3AED0] mb-5">
                {skill.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-5">
                {skill.skills.map((item, index_x) => (
                  <div
                    key={`skill-x-${index_x}`}
                    className="text-[16px] font-normal rounded-xl px-4 py-3 flex items-center gap-2 md:text-[14px] md:px-3 md:py-2 sm:px-3 sm:py-1.5"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
