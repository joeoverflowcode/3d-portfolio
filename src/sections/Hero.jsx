import HeroExperience from "../components/models/hero/HeroExperience";
import { words } from "../constants";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="grid-12-cols">
          <div className="xl:col-span-5">
            <header className="flex flex-col justify-center md:w-full md:px-20 px-5">
              <div className="flex flex-col gap-7">
                <div className="hero-text mt-4 md:mt-0">
                  <h1>
                    Let's
                    <span className="slide">
                      <span className="wrapper">
                        {words.map((word, index) => (
                          <span
                            key={index}
                            className="flex items-center md:gap-2 gap-1 pb-2"
                          >
                            <img
                              src={word.imgPath}
                              alt="person"
                              className="md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                            />
                            <span>{word.text}</span>
                          </span>
                        ))}
                      </span>
                    </span>
                  </h1>
                  <h1>Projects That</h1>
                  <h1>Shape Our Future</h1>
                </div>

                <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                  Hi, I'm Joe, a full-stack developer looking for local DFW
                  developers to team up with 💪
                </p>

                <Button
                  text="Interactative"
                  className="md:w-80 md:h-16 w-60 h-12 pb-20"
                  id="counter"
                />
              </div>
            </header>
          </div>
          <div className="xl:col-span-7 min-h-96 ">
            <div className="bg-[#1d1836] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden ">
              <HeroExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
