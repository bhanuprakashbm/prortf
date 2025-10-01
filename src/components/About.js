import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  background-color: #0A0C0F;
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  color: #FF6B48;
  margin-bottom: 3rem;
  text-align: center;
`;

const AboutText = styled.p`
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.8;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 5rem auto;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExpertiseTitle = styled.h3`
  font-size: 2.5rem;
  color: #E5B684;
  margin-bottom: 2rem;
`;

const ExpertiseItem = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ApproachSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ApproachText = styled.p`
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.6;
`;

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Who am I?</SectionTitle>
          <AboutText>
            I am a software engineer, lifelong student and tech enthusiast trying to push technological boundaries to create meaningful impact using software.
          </AboutText>

          <ExpertiseGrid>
            <ExpertiseSection>
              <ExpertiseTitle>My Expertise</ExpertiseTitle>
              <ExpertiseItem>Full Stack Development</ExpertiseItem>
              <ExpertiseItem>Machine Learning & AI</ExpertiseItem>
              <ExpertiseItem>Data and Analytics</ExpertiseItem>
            </ExpertiseSection>

            <ApproachSection>
              <ExpertiseTitle>My Approach</ExpertiseTitle>
              <ApproachText>
                Relentless and meticulous problem-solver with a proven track record of conquering complex technical challenges, building and improving products that add value to people's lives
              </ApproachText>
            </ApproachSection>
          </ExpertiseGrid>
        </motion.div>
      </Container>
    </AboutSection>
  );
}

export default About; 