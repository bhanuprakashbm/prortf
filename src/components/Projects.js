import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background-color: #0A0C0F;
  padding: 5rem 0;
`;

const ProjectsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: #FF6B48;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #1A1D21;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  min-height: 280px;
  position: relative;
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  color: #FF6B48;
  margin: 0 0 1rem 0;
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectDescription = styled.p`
  color: #E0E0E0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-bottom: 2.5rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: #E0E0E0;
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const StatusBadge = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  padding: 0.35rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  background-color: ${props => {
    switch (props.status.toLowerCase()) {
      case 'completed':
        return 'rgba(72, 187, 120, 0.2)';
      case 'in progress':
        return 'rgba(255, 171, 64, 0.2)';
      default:
        return 'rgba(66, 153, 225, 0.2)';
    }
  }};
  color: ${props => {
    switch (props.status.toLowerCase()) {
      case 'completed':
        return '#48bb78';
      case 'in progress':
        return '#ffab40';
      default:
        return '#4299e1';
    }
  }};
`;

const ExternalLinkIcon = styled(FaExternalLinkAlt)`
  font-size: 1rem;
`;

const initialProjects = [
  {
    title: "online_vehicle_rental",
    description: "An online vehicle rental platform for renting cars, bikes, and other vehicles.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    status: "Completed",
    link: "https://github.com/bhanuprakashbm/online_vehicle_rental"
  },
  {
    title: "coffee-shop",
    description: "A modern coffee shop website with online ordering capabilities.",
    tech: ["JavaScript", "HTML", "CSS", "React"],
    status: "Completed",
    link: "https://github.com/bhanuprakashbm/coffee-shop"
  },
  {
    title: "BinGuardian",
    description: "A waste management solution that monitors bin fill levels and optimizes collection routes.",
    tech: ["JavaScript", "IoT", "Web Development"],
    status: "Completed",
    link: "https://github.com/bhanuprakashbm/BinGuardian"
  },
  {
    title: "Solmate",
    description: "A smart solar panel monitoring and optimization platform for renewable energy systems.",
    tech: ["JavaScript", "IoT", "React", "Node.js"],
    status: "Completed",
    link: "https://github.com/bhanuprakashbm/Solmate"
  },
  {
    title: "ResQnet",
    description: "An emergency response coordination platform for disaster relief and management.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    status: "Completed",
    link: "https://github.com/bhanuprakashbm/ResQnet"
  },
  {
    title: "CalmPulse",
    description: "A meditation and mindfulness app that helps users track and improve their mental wellbeing.",
    tech: ["JavaScript", "React", "CSS", "Firebase"],
    status: "In Progress",
    link: "https://github.com/bhanuprakashbm/CalmPulse"
  }
];

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>What am I working on?</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectTitle>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                    <ExternalLinkIcon />
                  </a>
                </ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
                <StatusBadge status={project.status}>
                  Status: {project.status}
                </StatusBadge>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </ProjectsContainer>
    </ProjectsSection>
  );
}

export default Projects; 