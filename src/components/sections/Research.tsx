import { publications, googleScholar } from "../../data/constants";

const Research = () => (
  <section
    id="research"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
  >
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white">RESEARCH</h2>
      <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        My published research.{" "}
        <a
          href={googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8245ec] hover:underline"
        >
          View my Google Scholar profile
        </a>
      </p>
    </div>

    <div className="flex flex-col gap-8 max-w-[1100px] mx-auto">
      {publications.map((p) => (
        <div
          key={p.title}
          className="p-6 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
          <p className="text-gray-400 mt-1">
            {p.venue} · {p.date}
          </p>
          <div className="flex items-center mt-4">
            {p.authors.map((a, i) => (
              <a
                key={a.name}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                title={a.name}
                className={`relative w-12 h-12 rounded-full border-2 border-gray-900 bg-[#8245ec] overflow-hidden flex items-center justify-center text-white font-semibold hover:z-10 hover:scale-110 transition-transform ${i > 0 ? "-ml-3" : ""}`}
              >
                {a.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
                <img
                  src={a.image}
                  alt={a.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </a>
            ))}
          </div>
          <p className="text-gray-300 mt-4">{p.description}</p>
          <div className="flex gap-4 mt-6">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#8245ec] text-white font-semibold hover:opacity-90"
            >
              View Publication
            </a>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-[#8245ec] text-white font-semibold hover:bg-[#8245ec]"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Research;
