import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaGraduationCap, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import {
    SiJavascript,
    SiPython,
    SiTypescript,
    SiC,
    SiCplusplus,
    SiReact,
    SiNodedotjs,
    SiBootstrap,
    SiSpring,
    SiRedux,
    SiPuppeteer,
    SiTensorflow,
    SiScikitlearn,
    SiNumpy,
    SiR,
    SiMongodb,
    SiDocker,
    SiPandas,
    SiFirebase,
    SiOpencv
} from 'react-icons/si';

const SkillsSection = styled.section`
  background-color: #0A0C0F;
  padding: 5rem 0;
`;

const Container = styled.div`
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

const Card = styled(motion.div)`
  background: #1A1D21;
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  color: #E5B684;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CardDescription = styled.p`
  color: #E0E0E0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;


const Spacer = styled.div`
  margin-top: 5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  color: #E5B684;
  margin-bottom: 1.5rem;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1.5rem;
  align-items: start;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #FF6B48;
`;

const TechName = styled.span`
  color: #E0E0E0;
  font-size: 0.9rem;
`;


function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    

    
    const skillCategories = {
        programmingLanguages: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'C', icon: <SiC /> },
            { name: 'C++', icon: <SiCplusplus /> }
        ],
        webTechnologies: [
            { name: 'React', icon: <SiReact /> },
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Bootstrap', icon: <SiBootstrap /> },
            { name: 'Spring', icon: <SiSpring /> },
            { name: 'Redux', icon: <SiRedux /> },
            { name: 'Puppeteer', icon: <SiPuppeteer /> }
        ],
        aiAndMl: [
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'OpenCV', icon: <SiOpencv /> },
            { name: 'R', icon: <SiR /> }
        ],
        databases: [
            { name: 'SQL', icon: <FaDatabase /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Firebase', icon: <SiFirebase /> }
        ],
        devOps: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'Docker', icon: <SiDocker /> }
        ]
    };

    const learningItems = [
        {
            title: "Deep Learning",
            description: "Exploring neural network architectures, backpropagation, convolutional networks, recurrent networks, and generative models for solving complex AI problems.",
            icon: <FaBook />
        },
        {
            title: "Data Structures and Algorithms",
            description: "Mastering advanced data structures and algorithms for optimal problem-solving approaches and efficient code implementation.",
            icon: <FaBook />
        },
        {
            title: "Applied Data Modelling and Predictive Analysis",
            description: "Key concepts of predictive analysis, machine learning algorithms, data modeling techniques, and model evaluation",
            icon: <FaGraduationCap />
        },
        {
            title: "Advanced Java Programming",
            description: "Exploring advanced Java topics including concurrency, design patterns, JVM internals, and enterprise application development.",
            icon: <FaBook />
        },
        {
            title: "Principles of Artificial Intelligence",
            description: "Reasoning, decision making, and designing autonomous intelligent agents through programming projects.",
            icon: <FaGraduationCap />
        }
    ];


    return (
        <SkillsSection id="skills">
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <SectionTitle>What have I learned?</SectionTitle>
                    <SkillsGrid>
                        <Card>
                            <CategoryTitle>Programming Languages</CategoryTitle>
                            <IconGrid>
                                {skillCategories.programmingLanguages.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                        <Card>
                            <CategoryTitle>Web Technologies</CategoryTitle>
                            <IconGrid>
                                {skillCategories.webTechnologies.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                        <Card>
                            <CategoryTitle>AI & Machine Learning</CategoryTitle>
                            <IconGrid>
                                {skillCategories.aiAndMl.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                        <Card>
                            <CategoryTitle>Databases</CategoryTitle>
                            <IconGrid>
                                {skillCategories.databases.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                        <Card>
                            <CategoryTitle>DevOps</CategoryTitle>
                            <IconGrid>
                                {skillCategories.devOps.map((skill, index) => (
                                    <TechItem key={index}>
                                        <IconWrapper>{skill.icon}</IconWrapper>
                                        <TechName>{skill.name}</TechName>
                                    </TechItem>
                                ))}
                            </IconGrid>
                        </Card>
                    </SkillsGrid>

                    <Spacer />
                    <SectionTitle>What am I learning?</SectionTitle>
                    <GridContainer>
                        {learningItems.map((item, index) => (
                            <Card
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <CardTitle>
                                    {item.icon}
                                    {item.title}
                                </CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </Card>
                        ))}
                    </GridContainer>
                </motion.div>
            </Container>
        </SkillsSection>
    );
}

export default Skills; 