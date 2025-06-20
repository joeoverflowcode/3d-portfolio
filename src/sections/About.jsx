import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import HobbyCardExperience from "../components/models/hobbies/HobbyCardExperience";
import { hobbyIcons } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#about", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="My Hobbies" sub="🏄‍♂️ About Me" />
        <div className="py-10">
          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Among web development, I like to spend time outdoors developing
            skills and other interests. I've come to find that these other
            interests can sometimes strengthen the ties I have with other developers!
          </p>
        </div>
        <div className="hobby-grid">
          {/* Loop through the hobbyIcons array and create a component for each item. 
              The key is set to the name of the tech stack icon, and the classnames are set to 
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
              classes are only applied on larger screens. */}
          {hobbyIcons.map((hobbyIcons) => (
            <div
              key={hobbyIcons.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* The tech-card-animated-bg div is used to create a background animation when the 
                  component is hovered. */}
              <div className="hobby-card-animated-bg" />
              <div className="hobby-card-content">
                {/* The tech-icon-wrapper div contains the HobbyCardExperience component, 
                    which renders the 3D model of the tech stack icon. */}
                <div className="hobby-icon-wrapper">
                  <HobbyCardExperience model={hobbyIcons} />
                </div>
                {/* The padding-x and w-full classes are used to add horizontal padding to the 
                    text and make it take up the full width of the component. */}
                <div className="padding-x w-full">
                  {/* The p tag contains the name of the tech stack icon. */}
                  <p>{hobbyIcons.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* This is for the img part */}
          {/* {techStackImgs.map((hobbyIcons, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={hobbyIcons.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{hobbyIcons.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
