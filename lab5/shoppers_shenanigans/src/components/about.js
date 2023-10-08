import React from "react";
import "./about.css";
import OSUlogo from "./OSUlogo.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Ethar Qawasmeh",
      jobTitle: "CEO",
      image: "OSUlogo.jpg",
      bio: "Ethar is the Chief Executive Officer at our company. With over 10 years of experience in software development, he leads our team in creating innovative solutions for our clients."
    },
    {
      name: "Anna Dubey",
      jobTitle: "CFO",
      image: "OSUlogo.jpg",
      bio: "Anna is the Chief Financial Officer at our company. She is responsible for managing our financial operations and ensuring the company's financial stability and growth."
    },
    {
      name: "Prithviraj Patel",
      jobTitle: "CTO",
      image: "OSUlogo.jpg",
      bio: "Prith is the Chief Technology Officer at our company. He oversees our technical team and is responsible for driving our technology strategy and innovation."
    }
  ];

  return (
    <div>
      <h1>About Us</h1>
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={OSUlogo} alt={member.name} />
            <h3>{member.name}</h3>
            <p><strong>Job Title:</strong> {member.jobTitle}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;