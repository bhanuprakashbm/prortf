import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import backgroundImage from '../images/nenad-novakovic--hOTmloM77w-unsplash.jpg';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(10, 12, 15, 0.5), rgba(10, 12, 15, 0.8));
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 1;
  max-width: 1200px;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const ScrollButton = styled(motion.a)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  svg {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

function Home() {
  return (
    <HeroSection id="home">
      <BackgroundImage />
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroTitle>Hi, I am Bhanu Prakash.</HeroTitle>
          <HeroSubtitle>Scroll to see what I've been up to.</HeroSubtitle>
        </motion.div>
      </HeroContent>
      <ScrollButton
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <FaChevronDown />
      </ScrollButton>
    </HeroSection>
  );
}

export default Home; 