import React, { useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*LEFT : SHOWCASE CONTENT*/}
          <div className="first-project-wrapper "ref={project1Ref}>
            <div className="image-wrapper">
                <img src="/images/project-1.jpg" alt="Yoom"/>

            </div>
            <div className="text-content">
                <h2>All online meeting handeller with a user-friendly App called Yoom</h2>
                <p className="text-white-50 md:text-xl">
                    Yoom is a user-friendly online meeting app that simplifies scheduling and managing virtual meetings. With its intuitive interface, users can easily create, join, and organize meetings, making it an essential tool for remote collaboration.Useing NextJS WebRTC and clerk for authentication.

                </p>
            </div>
          </div>
          {/*RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">

                <img src="/images/project2.png" alt="library management"/>
              </div>
              <h2>Library Management Platform</h2>

            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">

                <img src="/images/project3.png" alt="YC Directory"/>
              </div>
              <h2>YC Directory - A Startup Showcase App </h2>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
