import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dialogbox from "./Dialogbox";
import Card from "./Card";
import ped1 from "../assets/ped1.svg";
import ped2 from "../assets/ped2.svg";
import ped3 from "../assets/ped3.svg";
import ped4 from "../assets/ped4.svg";
import outcome from "../assets/outcomes.svg";
import outcome2 from "../assets/courseImg.svg";
import CourseStructure from "../assets/CourseStructure.svg";


import blendedlearning   from '../assets/blendedlearning.svg'
import casebasedlearning   from '../assets/casebasedlearning.svg'
import collaborativelearning   from '../assets/collaborativelearning.svg'
import experimentallearning   from '../assets/experimentallearning.svg'
import FeedbackOriented   from '../assets/FeedbackOriented.svg'
import guidedreading   from '../assets/guidedreading.svg'
import reflective   from '../assets/reflective.svg'
import roleplay   from '../assets/roleplay.svg'
import surprisedpractice   from '../assets/surprisedpractice.svg'
const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("learning");
  const [openSection, setOpenSection] = useState(0);
  const [openOutcome, setOpenOutcome] = useState(null);

  const toggleOutcome = (index) => {
    setOpenOutcome(openOutcome === index ? null : index);
  };
  
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const courses = [
    {
      step: "01",
      title:
        "Month 1: Foundations in Consultation Skills and Young Adult Concerns",
      description: [
        {
          week: "Week 1: Introduction to Consultation Calls and Young Adult Issues",
          topics: [
            "Orientation to the program’s goals, expectations, and professional conduct.",
            "Overview of common concerns for young adults and adolescents (e.g., identity issues, academic stress, peer relationships, self-esteem, anxiety, depression).",
            "Introduction to consultation calls: purpose, structure, and expectations.",
            "Skills workshop: Active listening and empathy in initial conversations.",
          ],
        },
        {
          week: "Week 2: Building Rapport and Conducting Intake Assessments",
          topics: [
            "Understanding rapport-building techniques specific to adolescents and young adults.",
            "Detailed guide to intake assessments, focusing on extracting relevant information from potential clients.",
            "Role-play exercises simulating consultation calls."
          ],
        },
        {
          week: "Week 3: Clinical Documentation and Ethical Considerations",
          topics: [
            "Training on clinical documentation, including how to record call notes and maintain confidentiality.",
            "Ethical practices: Handling sensitive information, informed consent, and confidentiality with minors.",
            "Workshop on documenting assessment notes, capturing client needs, and ensuring accuracy."
          ],
        },
        {
          week: "Week 4: Psychological Concerns in Adolescents and Young Adults",
          topics: [
            "Deep dive into common issues: anxiety, depression, family conflicts, identity and sexuality, peer pressure.",
            "Case discussions on handling specific issues in consultation calls.",
            "Assessment of trainee progress with mock calls and documentation review."
          ],
        },
      ],
    },
    {
      step: "02",
      title: "Month 2 - Skill Building in Consultation and Therapy Modalities (In-Person, Tele-therapy (Audio/Visual, and Chat-Based))",
      description: [
        {
          week: "Week 1: Advanced Consultation Techniques",
          topics: [
            "Handling challenging consultations across formats: managing resistance, building trust, and recognizing red flags.",
            "Role-plays covering in-person and tele-therapyvirtual (audio/visual/chat-based) scenarios, with focus on non-verbal cues, effective questioning, and conversation pacing.",
            "Feedback and reflection on role-play performances to enhance adaptability across different modes.",
          ],
        },
        {
          week: "Week 2: Introduction to Multi-Modal Therapy (In-Person, tele-therapy (Audio/Visual, and Chat-Based))",
          topics: [
            "Overview of each therapy format: unique challenges, benefits, and limitations.",
            "Skills workshop on effectively communicating empathy, validation, and guidance in each mode.",
            "Mock sessions (in-person, audio/visual, and chat) to develop fluency and confidence, emphasizing therapeutic presence across all formats."
          ],
        },
        {
          week: "Week 3: Specific Interventions for Young Adult Issues Across Therapy Modes",
          topics: [
            "Techniques for addressing anxiety, relationship issues, self-esteem, and academic stress in both face-to-face and virtual settings.",
            "Exercises on goal-setting and boundary-setting tailored for in-person, audio/visual, and chat-based interactions.",
            "Live role-plays in all formats with supervisor feedback to simulate real-time responses and refine skills."
          ],
        },
        {
          week: "Week 4: Case Studies and Documentation",
          topics: [
            "Review of case studies highlighting young adult issues across various therapy settings, focusing on best practices for each format.",
            "Documentation techniques adapted for different therapy modes, covering session summaries, progress tracking, and pattern recognition.",
            "Group reflection on learnings, sharing challenges, and best practices specific to each therapy format, to foster adaptability and confidence in a range of therapeutic contexts."
          ],
        },
      ],
    },
    {
      

      step: "03",
      title: "Month 3: Clinical Practice, Multi-Modal Supervised Consultations, and Final Assessments",
      description: [
        {
          week: "Week 1: Supervised Consultation Practice Across Formats",
          topics: [
            "Trainees conduct 3-5 live consultations across in-person, audio/visual, and chat-based formats under supervisor observation.",
            "Immediate feedback provided on call handling, accuracy of notes, and appropriate client referrals for each mode.",
            "Focus on refining conversational skills and tailoring communication style to fit each client profile and format."
          ],
        },
        {
          week: "Week 2: Multi-Modal Therapy Practical Application",
          topics: [
            "Trainees engage in live sessions across all formats (in-person, audio/visual, and chat-based) with mock clients or real cases under supervision.",
            "Emphasis on maintaining therapeutic boundaries, guiding clients, and delivering appropriate psychoeducation tailored to the format.",
            "Reflection sessions to discuss unique challenges, successful strategies, and format-specific adjustments."
          ],
        },
        {
          week: "Week 3: Handling Difficult Conversations and Crisis Situations",
          topics: [
            "Training in managing challenging topics (e.g., self-harm, suicidal ideation) across all therapy formats.",
            "Crisis management protocols and referral pathways.",
            "Role-plays and case simulations focused on crisis de-escalation, with emphasis on adapting techniques to in-person, audio/visual, and chat-based settings."
          ],
        },
        {
          week: "Week 4: Comprehensive Final Review, Assessment, and Certification",
          topics: [
            "Comprehensive assessment covering a full consultation call, mock sessions across each format, and clinical documentation review for all interactions.",
            "Final feedback session with supervisors to highlight strengths, areas for improvement, and format-specific recommendations.",
            "Certification of completion, with personalized recommendations for ongoing development and potential career pathways."
          ],
        },
      ],
    },
  ];
  const outcomes = [
    {
      heading: "Month 1 Outcomes",
      points: [
        "Understanding of Consultation Goals",
        "Familiarity with Common Young Adult Issues",
        "Active Listening and Empathy Skills",
        "Rapport-Building Techniques",
        "Proficiency in Intake Assessments",
        "Experience with Role-Playing Consultations",
        "Competence in Clinical Documentation",
        "Ethical Knowledge and Application",
        "Ability to Document Client Needs Accurately"
      ]
    },
    {
      heading: "Month 2 Outcomes",
      points: [
        "Advanced Consultation Skills",
        "Proficiency in Non-Verbal and Verbal Communication",
        "Versatility in Therapy Modalities",
        "Targeted Interventions for Young Adult Issues",
        "Effective Goal-Setting and Boundary Management",
        "Real-Time Adaptability",
        "Competency in Multi-Modal Documentation",
        "Reflective Practice and Feedback Integration"
      ]
    },
    {
      heading: "Month 3 Outcomes",
      points: [
        "Proficiency in Multi-Modal Consultation",
        "Enhanced Communication and Adaptability",
        "Therapeutic Boundary Management",
        "Crisis Management Competence",
        "Experience in Real-Time Adaptation",
        "Accurate and Format-Specific Documentation",
        "Reflective Practice and Constructive Self-Assessment",
        "Readiness for Professional Therapy Environments",
      ]
    }
  ];
  


  const handleButtonClick = (section) => {
    setSelectedSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
        <div className="px-6 sm:px-12 md:px-12 w-full sm:w-[70%] pt-[7rem] sm:pt-[10rem] mb-10">
          <h1 className="text-primary text-[32px] sm:text-[64px] font-sans font-extrabold leading-[40px] sm:leading-[73px] tracking-tight">
            3-Month Intensive Training Program for Final-Semester Master’s
            Psychology Students
          </h1>
          <div className="mt-8 max-w-screen-md ">
            <h6 className="text-tertiary font-sans text-[12px] sm:text-[18px] font-normal leading-[25px]">
              Our 3-month intensive training program is designed to equip you
              with the skills needed to excel in initial consultation calls,
              deliver effective in-person and tele-therapychat-based therapy,
              and facilitate supervised counseling sessions specifically
              tailored for young adults and adolescents.
            </h6>
          </div>
        </div>
        <div
          className="flex justify-evenly sm:flex-row flex-col items-center absolute bottom-0 sm:h-[100px] left-[10%] sm:left-[10%] top-[90%] w-[80%] h-max p-4 bg-white"
          style={{
            boxShadow: "0px -3px 16px 0px rgba(0, 0, 0, 0.17)",
            borderRadius: "15px",
          }}
        >
          <div className="border-b sm:border-b-0 sm:border-r border-[#614298] w-[90%] sm:w-[33%] pl-8 pr-4 sm:mb-0 mb-4">
            <p className="font-sans text-[16px] sm:text-[32px] font-extrabold text-primary leading-[43.65px] tracking-[0.005em] text-left">
            150 hours
            </p>
            <p className="text-primary text-[12px] sm:text-[16px] mb-2">
              Intensive Paid Training
            </p>
          </div>
          <div className="flex items-center border-b sm:border-b-0 sm:border-r border-[#614298] w-[90%] sm:w-[33%] pl-8 pr-4 sm:mb-0 mb-4 h-[100%]">
            <p className="font-sans text-primary text-[16px] sm:text-[32px] font-extrabold leading-[43.65px] tracking-[0.005em] text-left">
            3 Months
            </p>
            {/* <p className="text-primary">Intensive Offline Paid Training</p> */}
          </div>
          <div className="text-right sm:w-[33%] pl-8 w-[90%] ">
            <p className="font-sans text-[16px] sm:text-[32px] text-primary font-extrabold tracking-[0.005em] text-left">
               For All
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-[80px] flex flex-wrap justify-start items-center gap-6 mt-[15rem] sm:mt-20 px-6 sm:px-12 md:px-12 bg-white  ">
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "learning"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("learning")}
        >
          Learning
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "skills"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("skills")}
        >
          Skills
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "pedagody"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("pedagogy")}
        >
          Pedagogy
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "outcomes"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("outcomes")}
        >
          Outcomes
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "course"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("course")}
        >
          Course Structure
        </button>
      </div>

      <div className="px-6 sm:px-12 md:px-12">
        <div className="bg-white text-gray-800 font-sans p-2 sm:p-8">
          {/* What Will Students Learn Section */}
          <div className="mb-8" id="learning">
            <h2 className="text-3xl font-bold text-primary mb-4">
              What will students learn:
            </h2>
            <p className="text-lg text-[#696984]">
              By the end of the course, students will be able to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-[#696984]">
              <li className="text-[#696984]">
                Hands-On Training: Develop real-world skills in managing initial
                consultations and providing counseling , under the guidance of
                experienced supervisors.
              </li>
              <li className="text-[#696984]">
                Specialization in Youth Counseling: Gain targeted expertise in
                handling the unique concerns of adolescents and young adults, a
                high-demand area within mental health services.
              </li>
              <li className="text-[#696984]">
                Pathway to Employment: Stand out as a top candidate for future
                opportunities within our team. Upon program completion,
                exceptional participants may be invited for an in-depth
                interview for job opportunities and project-based assessment for
                potential roles with us.
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mb-8" id="skills">
            <h2 className="text-3xl font-bold text-primary mb-4">Skills:</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Empathetic Listening",
                "Analytical Case Conceptualization",
                "Reflective Self-Awareness",
                "Effective Communication",
                "Conflict Resolution",
                "Rapport Building Techniques",
                "Practical Problem-Solving",
                "Real-world casework competence",
                "Adaptability Across Therapy Formats",
                "Professional Documentation Skills",
                "Crisis Management and Ethical Handling",
                "Specialized Knowledge in Youth Counseling",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#F5F5F5] text-[#7355A8] text-sm font-medium px-4 py-2 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Methods Section */}
          {/* className="flex flex-col sm:flex-row border border-red-800 flex-wrap" */}
          <div className="flex flex-col gap-4 mb-8" id="pedagogy">
            <h2 className="text-3xl font-bold text-primary mb-4">Pedagogy:</h2>
            <div
              className="flex flex-wrap flex-col sm:flex-row bg-[#FCFAFF]"
              style={{
                boxShadow: "0px -3px 16px 0px rgba(0, 0, 0, 0.17)",
                borderRadius: "15px",
              }}
            >
              {[
                {
                  img: blendedlearning,
                  title: "Blended Learning:",
                  description: "A combination of in-person and online formats allows for flexibility while exposing students to diverse methods of delivering therapy (in-person, tele-therapyface-to-face, chat-based, video (audio/video/chat-based calls).",
                },
                {
                  img: roleplay,
                  title: "Role-Playing and Simulations:",
                  description: "Structured role-plays and mock sessions simulate realistic client interactions, enabling students to practice empathy, communication, and therapeutic techniques in a controlled environment.",
                },
                {
                  img: casebasedlearning,
                  title: "Case-Based Learning:",
                  description:
                    " Use of case studies and real-life examples allows students to explore various scenarios, assess client needs, and practice tailoring therapeutic interventions to suit different issues and client profiles.",
                },
                {
                  img: experimentallearning,
                  title: "Experiential Learning:",
                  description: "Hands-on practice through real-time consultations, role-playing, and case simulations allows students to apply theoretical knowledge directly, enhancing retention and practical skills",
                },
                {
                  img: surprisedpractice,
                  title: "Supervised Practice:",
                  description:
                    "Students receive one-on-one feedback and support from experienced mentors during live consultations, tele-therapy chat-based therapy sessions, and supervised casework, reinforcing skill development.",
                },
                {
                  img: reflective,
                  title: "Reflective Learning:",
                  description: "Regular debriefs, feedback sessions, and journaling encourage students to reflect on their experiences, analyze their responses, and identify areas for improvement, building self-awareness and critical thinking.",
                },
                {
                  img: guidedreading,
                  title: "Guided Reading and Integration:",
                  description:
                    "Incorporating relevant readings and research papers provides foundational knowledge, which students then apply to case studies, discussions, and practice, deepening theoretical understanding.",
                },
                {
                  img: FeedbackOriented,
                  title: "Feedback-Oriented Assessment:",
                  description: "Ongoing assessments and constructive feedback highlight strengths and improvement areas, enabling continuous skill refinement throughout the program.",
                },
                {
                  img: collaborativelearning,
                  title: "Collaborative Learning:",
                  description:
                    "Group discussions, peer reviews, and collaborative activities foster teamwork, broaden perspectives, and encourage sharing of diverse approaches to therapy.",
                },
              ].map((method) => (
                <div
                  key={method.title}
                  className="flex items-center p-4 rounded-lg text-left gap-4 sm:gap-1 w-full sm:w-1/3"
                >
                  <img
                    src={method.img}
                    alt=""
                    className="sm:w-[66px] sm:h-[66px] w-[48px] h-[48px]"
                  />
                  <div className="">
                    <h4 className="font-semibold text-lg">{method.title}</h4>
                    <p className="text-sm mt-2">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Structure Section */}
          <div
            className="mb-8 w-full flex flex-col sm:flex-row-reverse"
            id="course"
          >
            <div className="w-full sm:w-1/2 p-4 sm:block hidden">
              <img src={outcome} alt="" className="w-full sm:w-[90%]" />
            </div>
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
              Course Structure
            </h2>
            <div className="sm:w-1/2 w-full">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Course Structure
              </h2>
              <div className="w-full p-4 block sm:hidden sm:mb-4 mb-0">
                <img src={outcome2} alt="" />
              </div>
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div
                    key={course.step}
                    className="border-b pb-4 border-gray-300"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer mb-[18px]"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center">
                        <div className="text-[#101566] bg-secondary p-2 font-bold text-xl">
                          {course.step}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-[20px] sm:text-3xl">
                            {course.title}
                          </h4>
                        </div>
                      </div>
                      <div className="mr-4">
                        {openSection === index ? (
                          <span className="text-disable font-bold text-2xl">
                            -
                          </span>
                        ) : (
                          <span className="text-disable font-bold text-2xl">
                            +
                          </span>
                        )}
                      </div>
                    </div>
                    {openSection === index && (
                      <div className="ml-4 sm:ml-16 mt-2 text-sm text-gray-600">
                        {course.description.map((week, weekIndex) => (
                          <div key={weekIndex} className="mb-4">
                            <h5 className="font-semibold text-lg text-gray-800 mb-2">
                              {week.week}
                            </h5>
                            <ul className="list-disc list-inside space-y-1">
                              {week.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="text-[14px]">
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes Section */}
          <div className="mb-8 flex sm:flex-row flex-col w-full" id="outcomes">
            <div className="w-full sm:w-1/2 p-4 sm:block hidden">
              <img src={CourseStructure} alt="" />
            </div>
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
              Outcomes:
            </h2>
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Outcomes:
              </h2>
              <div className="w-full sm:w-1/2 p-4 block sm:hidden">
                <img src={CourseStructure} alt="" />
              </div>
              {/* <ul className="list-disc ml-6 space-y-2">
                <li>
                  <span className="font-bold">
                    Real-World Therapy Experience:{" "}
                  </span>
                  Gain firsthand exposure to the dynamics of a therapy space,
                  learning to create a safe and supportive environment for
                  clients.
                </li>
                <li>
                  <span className="font-bold">
                    Client Interaction Mastery:{" "}
                  </span>{" "}
                  Develop the ability to effectively engage with clients, build
                  trust, and navigate complex emotional landscapes.
                </li>
                <li>
                  <span className="font-bold">Advanced Case Handling: </span>{" "}
                  Learn to analyze and conceptualize diverse case scenarios,
                  enhancing decision-making and problem-solving skills.
                </li>
                <li>
                  <span className="font-bold">Role-Play Proficiency: </span>{" "}
                  Refine counseling techniques through role-play exercises,
                  simulating real-life situations to build confidence and
                  adaptability. .
                </li>
                <li>
                  <span className="font-bold">
                    Ethical and Professional Excellence:{" "}
                  </span>
                  Internalize ethical principles and best practices, ensuring
                  high standards in client care and professional conduct.
                </li>
                <li>
                  <span className="font-bold">
                    Enhanced Reflective Practice:{" "}
                  </span>{" "}
                  Cultivate self-awareness and reflective abilities, essential
                  for continuous personal and professional growth.
                </li>
                <li>
                  <span className="font-bold">Competitive Edge:</span> Acquire a
                  comprehensive skill set that sets you apart from peers,
                  positioning you as a capable and prepared mental health
                  professional ready to excel in the field.
                </li>
              </ul> */}
              <div className="space-y-6">
  {outcomes.map((outcome, index) => (
    <div key={index} className="border-b pb-4 border-gray-300">
      <div
        className="flex items-center justify-between cursor-pointer mb-[18px]"
        onClick={() => toggleOutcome(index)}
      >
        <div className="flex items-center">
          <div className="ml-4">
            <h4 className="font-semibold text-[20px] sm:text-3xl">
              {outcome.heading}
            </h4>
          </div>
        </div>
        <div className="mr-4">
          {openOutcome === index ? (
            <span className="text-disable font-bold text-2xl">-</span>
          ) : (
            <span className="text-disable font-bold text-2xl">+</span>
          )}
        </div>
      </div>
      {openOutcome === index && (
        <ul className="ml-4 sm:ml-16 mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
          {outcome.points.map((point, i) => (
            <li key={i} className="text-[14px]">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  ))}
</div>
            </div>
          </div>

          {/* Enroll Now Button */}
        </div>
      </div>
      <div className="w-full">
        <Dialogbox
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title="Offline 30 hours internship fee structure"
        >
          <Card title={<span>Individual<br />fee</span>} price={15000} student={{min:1,max:1}}/>
        <Card title={<span>Group of 5<br />fee</span>} price={15000} student={{min:1,max:5}} discount={10}/>
        <Card title={<span>Group of 10<br />fee</span>} price={15000} student={{min:1,max:10}} discount={15}/>
        </Dialogbox>
      </div>
      <div className="flex justify-center items-center p-4 sm:w-[50%] w-[90%] mx-auto border border-solid border-border rounded-md bg-[#FCFAFF]">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-[16px] sm:text-3xl text-[#7355A8]">
            MODE
          </span>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="online"
              className="appearance-none h-4 w-4 border border-#7355A8] rounded-full checked:bg-[#7355A8] checked:border-transparent focus:outline-none"
              defaultChecked
            />
            <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
              Online
            </span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="offline"
              className="appearance-none h-4 w-4 border border-#7355A8] rounded-full checked:bg-[#7355A8] checked:border-transparent focus:outline-none"
              defaultChecked
            />
            <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
              Offline
            </span>
          </label>
          <span className="font-bold text-[#7355A8] ml-8 text-[16px] sm:text-3xl">
            BATCHES
          </span>
          <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
            Weekend
          </span>
        </div>
      </div>
      <div className="text-center my-8">
        <button
          onClick={handleOpenDialog}
          className="bg-secondary text-primary px-8 py-4 rounded-lg uppercase text-lg font-semibold"
        >
          Enroll Now
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
