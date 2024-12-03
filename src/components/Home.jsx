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
import comminity from "../assets/Community.svg";
import Feedback from "../assets/Feedback.svg";
import blendedlearning from "../assets/blendedlearning.svg";
import casebasedlearning from "../assets/casebasedlearning.svg";
import collaborativelearning from "../assets/collaborativelearning.svg";
import experimentallearning from "../assets/experimentallearning.svg";
import FeedbackOriented from "../assets/FeedbackOriented.svg";
import guidedreading from "../assets/guidedreading.svg";
import reflective from "../assets/reflective.svg";
import roleplay from "../assets/roleplay.svg";
import surprisedpractice from "../assets/surprisedpractice.svg";
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
            "Role-play exercises simulating consultation calls.",
          ],
        },
        {
          week: "Week 3: Clinical Documentation and Ethical Considerations",
          topics: [
            "Training on clinical documentation, including how to record call notes and maintain confidentiality.",
            "Ethical practices: Handling sensitive information, informed consent, and confidentiality with minors.",
            "Workshop on documenting assessment notes, capturing client needs, and ensuring accuracy.",
          ],
        },
        {
          week: "Week 4: Psychological Concerns in Adolescents and Young Adults",
          topics: [
            "Deep dive into common issues: anxiety, depression, family conflicts, identity and sexuality, peer pressure.",
            "Case discussions on handling specific issues in consultation calls.",
            "Assessment of trainee progress with mock calls and documentation review.",
          ],
        },
      ],
    },
    {
      step: "02",
      title:
        "Month 2 - Skill Building in Consultation and Therapy Modalities (In-Person, Tele-therapy (Audio/Visual, and Chat-Based))",
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
            "Mock sessions (in-person, audio/visual, and chat) to develop fluency and confidence, emphasizing therapeutic presence across all formats.",
          ],
        },
        {
          week: "Week 3: Specific Interventions for Young Adult Issues Across Therapy Modes",
          topics: [
            "Techniques for addressing anxiety, relationship issues, self-esteem, and academic stress in both face-to-face and virtual settings.",
            "Exercises on goal-setting and boundary-setting tailored for in-person, audio/visual, and chat-based interactions.",
            "Live role-plays in all formats with supervisor feedback to simulate real-time responses and refine skills.",
          ],
        },
        {
          week: "Week 4: Case Studies and Documentation",
          topics: [
            "Review of case studies highlighting young adult issues across various therapy settings, focusing on best practices for each format.",
            "Documentation techniques adapted for different therapy modes, covering session summaries, progress tracking, and pattern recognition.",
            "Group reflection on learnings, sharing challenges, and best practices specific to each therapy format, to foster adaptability and confidence in a range of therapeutic contexts.",
          ],
        },
      ],
    },
    {
      step: "03",
      title:
        "Month 3: Clinical Practice, Multi-Modal Supervised Consultations, and Final Assessments",
      description: [
        {
          week: "Week 1: Supervised Consultation Practice Across Formats",
          topics: [
            "Trainees conduct 3-5 live consultations across in-person, audio/visual, and chat-based formats under supervisor observation.",
            "Immediate feedback provided on call handling, accuracy of notes, and appropriate client referrals for each mode.",
            "Focus on refining conversational skills and tailoring communication style to fit each client profile and format.",
          ],
        },
        {
          week: "Week 2: Multi-Modal Therapy Practical Application",
          topics: [
            "Trainees engage in live sessions across all formats (in-person, audio/visual, and chat-based) with mock clients or real cases under supervision.",
            "Emphasis on maintaining therapeutic boundaries, guiding clients, and delivering appropriate psychoeducation tailored to the format.",
            "Reflection sessions to discuss unique challenges, successful strategies, and format-specific adjustments.",
          ],
        },
        {
          week: "Week 3: Handling Difficult Conversations and Crisis Situations",
          topics: [
            "Training in managing challenging topics (e.g., self-harm, suicidal ideation) across all therapy formats.",
            "Crisis management protocols and referral pathways.",
            "Role-plays and case simulations focused on crisis de-escalation, with emphasis on adapting techniques to in-person, audio/visual, and chat-based settings.",
          ],
        },
        {
          week: "Week 4: Comprehensive Final Review, Assessment, and Certification",
          topics: [
            "Comprehensive assessment covering a full consultation call, mock sessions across each format, and clinical documentation review for all interactions.",
            "Final feedback session with supervisors to highlight strengths, areas for improvement, and format-specific recommendations.",
            "Certification of completion, with personalized recommendations for ongoing development and potential career pathways.",
          ],
        },
      ],
    },
  ];
  const outcomes = [
    {
      heading: "Month 1 Outcomes",
      points: [
        {
          title: "Understanding of Consultation Goals",
          para: "Participants will gain a clear understanding of the objectives of a consultation session, including how to identify client needs, establish the scope of assistance, and formulate actionable next steps within the therapeutic framework.",
        },
        {
          title: "Familiarity with Common Young Adult Issues",
          para: "Students will explore prevalent psychological challenges faced by young adults, such as academic stress, relationship difficulties, identity concerns, and anxiety, equipping them with the knowledge to address these concerns empathetically.",
        },
        {
          title: "Active Listening and Empathy Skills",
          para: "Through structured activities and feedback sessions, participants will develop advanced skills in active listening and empathy, enabling them to respond to clients in a way that fosters trust and openness.",
        },
        {
          title: "Rapport-Building Techniques",
          para: "The program emphasizes techniques to build strong therapeutic alliances, such as establishing a safe environment, using nonverbal communication effectively, and tailoring approaches to individual client personalities and cultural backgrounds.",
        },
        {
          title: "Proficiency in Intake Assessments",
          para: "Students will learn to conduct comprehensive intake assessments, gathering essential information about a client’s history, presenting concerns, and goals for therapy, ensuring a strong foundation for effective intervention planning.",
        },
        {
          title: "Experience with Role-Playing Consultations",
          para: "Practical experience through role-play scenarios will allow students to simulate real-life consultations, refine their intervention strategies, and receive constructive feedback to enhance their clinical skills.",
        },
        {
          title: "Competence in Clinical Documentation",
          para: "Participants will master the art of accurate and concise clinical documentation, including session notes, assessment findings, and treatment plans, ensuring compliance with professional and ethical standards.",
        },
        {
          title: "Ethical Knowledge and Application",
          para: "A strong emphasis on ethical considerations will help students navigate complex situations, such as maintaining confidentiality, addressing dual relationships, and managing informed consent, fostering professionalism and accountability.",
        },
        {
          title: "Ability to Document Client Needs Accurately",
          para: "The program will equip students to assess and articulate client needs effectively, ensuring that interventions are both relevant and aligned with the client’s goals, while also meeting organizational and legal standards.",
        },
      ],
    },
    {
      heading: "Month 2 Outcomes",
      points: [
        {
          title: "Advanced Consultation Skills",
          para: "Students gain the ability to conduct in-depth consultations, addressing client concerns systematically while maintaining professionalism. This includes understanding the consultation process, clarifying goals, and tailoring interactions to meet individual needs effectively.",
        },
        {
          title: "Proficiency in Non-Verbal and Verbal Communication",
          para: "Students master both spoken and unspoken elements of communication, learning to interpret body language, tone, and other non-verbal cues while conveying empathy and clarity during consultations.",
        },
        {
          title: "Versatility in Therapy Modalities",
          para: "Exposure to various therapeutic approaches enables students to adopt and adapt methodologies like CBT, psychodynamic therapy, and solution-focused techniques based on individual client needs.",
        },
        {
          title: "Targeted Interventions for Young Adult Issues",
          para: "Students are equipped to address specific challenges faced by young adults, including academic stress, relationship concerns, career dilemmas, and mental health crises, through structured and sensitive interventions.",
        },
        {
          title: "Effective Goal-Setting and Boundary Management",
          para: "Participants develop the skills to set realistic and achievable goals collaboratively with clients while maintaining clear professional boundaries and ensuring client autonomy.",
        },
        {
          title: "Real-Time Adaptability",
          para: "Students learn to respond promptly and effectively to dynamic and evolving client situations, adapting their therapeutic approaches as new information or challenges arise.",
        },
        {
          title: "Competency in Multi-Modal Documentation",
          para: "Training focuses on accurate and comprehensive clinical documentation, including case notes, progress reports, and treatment plans, integrating both written and digital tools to meet diverse organizational needs.",
        },
        {
          title: "Reflective Practice and Feedback Integration",
          para: "Emphasis is placed on self-reflection and incorporating feedback to enhance professional growth. Students learn to evaluate their practices, recognize areas of improvement, and implement constructive suggestions effectively.",
        },
      ],
    },
    {
      heading: "Month 3 Outcomes",
      points: [
        {
          title: "Proficiency in Multi-Modal Consultation",
          para: "Students develop expertise in conducting consultations through various modalities, such as face-to-face sessions, teletherapy, and hybrid approaches. This proficiency enables them to adapt their counseling techniques to different mediums while ensuring client engagement and therapeutic efficacy. They learn to integrate tools like virtual assessments, digital documentation, and innovative platforms to enhance their practice.",
        },
        {
          title: "Enhanced Communication and Adaptability",
          para: "The program emphasizes mastering advanced communication skills, both verbal and non-verbal. Students gain the ability to establish rapport, express empathy, and tailor their communication style to suit diverse client needs. They also build adaptability to adjust their therapeutic approach in response to clients’ shifting emotional states, cultural backgrounds, and situational contexts.",
        },
        {
          title: "Therapeutic Boundary Management",
          para: "Managing professional boundaries is crucial for fostering trust and safety in therapeutic relationships. Students learn strategies to balance warmth and professionalism, maintain confidentiality, and set clear limits while managing dual relationships or ethical gray areas effectively.",
        },
        {
          title: "Crisis Management Competence",
          para: "Students are trained to respond effectively to mental health emergencies, including acute crises, trauma, and suicide prevention scenarios. They learn to identify warning signs, implement immediate interventions, and collaborate with support systems or referral networks. This outcome equips them to handle high-pressure situations with confidence and skill.",
        },
        {
          title: "Experience in Real-Time Adaptation",
          para: "Flexibility in therapeutic practice is key to addressing dynamic client behaviors and unexpected challenges. Through role-playing exercises and supervised sessions, students develop the ability to think critically and adjust their strategies in real time, ensuring that interventions remain effective and client-centered.",
        },
        {
          title: "Accurate and Format-Specific Documentation",
          para: "Accurate documentation is vital in clinical practice. Students learn to create comprehensive case notes, progress reports, and treatment plans in line with professional and legal standards. They gain proficiency in using structured templates and adapting their documentation style for various organizational formats and client needs.",
        },
        {
          title: "Reflective Practice and Constructive Self-Assessment",
          para: "Reflective practice fosters personal and professional growth. Students are encouraged to evaluate their counseling sessions critically, recognize areas for improvement, and integrate feedback from peers and supervisors. This ongoing self-assessment process enhances their confidence and competency as future practitioners.",
        },
        {
          title: "Readiness for Professional Therapy Environments",
          para: "By the end of the program, students are equipped to transition into professional counseling roles. They possess a solid foundation in therapeutic skills, ethical understanding, and cultural competency, enabling them to work effectively in multidisciplinary teams and diverse therapeutic settings. Their preparedness extends to both individual and group therapy contexts, ensuring a smooth integration into real-world mental health environments.",
        },
      ],
    },
  ];

  const opportunities = [
    {
      title: "For Undergraduates",
      points: [
        "Advanced Internship Opportunities: Qualify for specialized internships within mental health organizations, youth counseling centers, and wellness programs.",
        "Enhanced Graduate Program Applications: Stand out in applications to competitive master’s or doctoral programs in psychology and counseling due to practical, hands-on experience.",
        "Entry-Level Roles: Access entry-level roles such as mental health support worker, peer counselor, or youth outreach specialist within schools, NGOs, and wellness centers.",
        "Research Assistantships: Eligibility for assistant roles in clinical research projects or psychology departments, focusing on adolescent and young adult mental health.",
        "Certification & Recognition: Gain a recognized certification that adds credibility to future career steps and applications.",
      ],
    },
    {
      title: "For Postgraduates or Early Career Professionals",
      points: [
        "Immediate Employability: Potential to be recruited by our team following an assessment, interview, and project review.",
        "Specialized Youth Counselor Roles: Qualify for roles focused on adolescent and young adult counseling within schools, private practices, clinics, or online platforms.",
        "Mental Health Consultant Positions: Opportunity to work as a consultant in wellness centers, universities, or community organizations, guiding youth-focused mental health initiatives.",
        "Private Practice Start-Up Readiness: Develop the practical skills needed to initiate or join private practices, equipped to handle client consultations and specialized youth therapy.",
        "Professional Network Expansion: Connect with a network of professionals in the field, offering continued support, mentorship, and potential job referrals.",
        "Certification for Career Advancement: A recognized program certification that enhances resumes and provides a competitive edge in mental health job applications.",
      ],
    },
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
        <div className="px-6 sm:px-12 md:px-12 w-full pt-[7rem] sm:pt-[10rem] mb-10 flex justify-center flex-col">
          <h1 className="text-primary text-[32px] sm:text-[64px] font-sans font-extrabold leading-[40px] sm:leading-[73px] tracking-tight">
            A Therapist in Making- Pathway to Job Opportunities
          </h1>
          <div className="mt-4">
            <h2 className="text-tertiary font-sans text-[12px] sm:text-[18px] font-bold leading-[25px]">
              An intensive 3 months Professional Development Program
            </h2>
          </div>
          <div className="mt-8 max-w-screen-md ">
            <h6 className="text-tertiary font-sans text-[12px] sm:text-[18px] font-normal leading-[25px]">
              Our 3-month intensive training program is designed to equip you
              with the skills needed to excel in initial consultation calls,
              deliver effective in-person and tele-therapy,chat-based therapy,
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
            <p className="font-sans text-center  text-[16px] sm:text-[24px] text-primary font-extrabold tracking-[0.005em] ">
              For <br />
              Undergraduate/Postgraduate
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
                  description:
                    "A combination of in-person and online formats allows for flexibility while exposing students to diverse methods of delivering therapy (in-person, tele-therapyface-to-face, chat-based, video (audio/video/chat-based calls).",
                },
                {
                  img: roleplay,
                  title: "Role-Playing and Simulations:",
                  description:
                    "Structured role-plays and mock sessions simulate realistic client interactions, enabling students to practice empathy, communication, and therapeutic techniques in a controlled environment.",
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
                  description:
                    "Hands-on practice through real-time consultations, role-playing, and case simulations allows students to apply theoretical knowledge directly, enhancing retention and practical skills",
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
                  description:
                    "Regular debriefs, feedback sessions, and journaling encourage students to reflect on their experiences, analyze their responses, and identify areas for improvement, building self-awareness and critical thinking.",
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
                  description:
                    "Ongoing assessments and constructive feedback highlight strengths and improvement areas, enabling continuous skill refinement throughout the program.",
                },
                {
                  img: collaborativelearning,
                  title: "Collaborative Learning:",
                  description:
                    "Group discussions, peer reviews, and collaborative activities foster teamwork, broaden perspectives, and encourage sharing of diverse approaches to therapy.",
                },
                {
                  img: comminity,
                  title: "Community Outreach and Social Impact:",
                  description:
                    "Fieldwork experiences designed to integrate psychology into community settings, fostering a sense of social responsibility and practical application of therapeutic skills.",
                },
                {
                  img: Feedback,
                  title: "Project-Based Learning:",
                  description:
                    "Team-based projects that integrate research, intervention planning, and critical analysis, culminating in presentations or actionable outcomes with real-world relevance.",
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
                    {/* Header Section */}
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

                    {/* Content Section */}
                    {openOutcome === index && (
                      <div className="ml-4 sm:ml-16 mt-2 text-sm text-gray-600 space-y-4">
                        {outcome.points.map((point, i) => (
                          <div key={i}>
                            {/* Title */}
                            <h5 className="font-semibold text-[18px] sm:text-2xl mb-2">
                              {point.title}
                            </h5>
                            {/* Paragraph */}
                            <p className="text-[14px]">{point.para}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* opportunity */}
          <div className="mb-8 w-full flex flex-col sm:flex-row" id="course">
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
              Opportunities After Completion of Program and Assessment
            </h2>
            <div className="w-full">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Opportunities After Completion of Program and Assessment
              </h2>
              <div className="w-full p-4 block sm:hidden sm:mb-4 mb-0">
                <img src={outcome2} alt="Outcome 2" />
              </div>
              <div className="space-y-6">
                {opportunities.map((course, index) => (
                  <div
                    key={course.step}
                    className="border-b pb-4 border-gray-300"
                  >
                    {/* Heading Section */}
                    <div
                      className="flex items-center justify-between cursor-pointer mb-[18px]"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center">
                        <div className="ml-4">
                          <h4 className="font-semibold text-[20px] sm:text-3xl">
                            {course.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}

                    <div className="ml-8 mt-2 text-sm text-gray-600 space-y-2">
                      {course.points.map((point, i) => (
                        <li key={i} className="text-[14px]">
                          {point}
                        </li>
                      ))}
                    </div>
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
          <Card
            title={
              <span>
                Individual
                <br />
                fee
              </span>
            }
            price={15000}
            student={{ min: 1, max: 1 }}
          />
          <Card
            title={
              <span>
                Group of 5<br />
                fee
              </span>
            }
            price={15000}
            student={{ min: 1, max: 5 }}
            discount={10}
          />
          <Card
            title={
              <span>
                Group of 10
                <br />
                fee
              </span>
            }
            price={15000}
            student={{ min: 1, max: 10 }}
            discount={15}
          />
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
            Weekday/Weekend
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
