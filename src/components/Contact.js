import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactSection = styled.section`
  background-color: #0A0C0F;
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: #FF6B48;
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled.p`
  color: #E5B684;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 4rem auto;
`;

const CalendlyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const CalendlyContainer = styled.div`
  width: 100%;
  background: #1E2126;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CalendlyTitle = styled.h3`
  color: rgb(247, 197, 159);
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CalendlyFrame = styled.div`
  height: ${props => props.expanded ? '500px' : '420px'};
  background: white;
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
  max-width: ${props => props.expanded ? '1100px' : '1000px'};
  transition: all 0.5s ease-in-out;
  
  .calendly-inline-widget {
    height: 100%;
    border: none;
    background: white;
    
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

const OtherWaysSection = styled.div`
  width: 100%;
  background: #1E2126;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OtherWaysTitle = styled.h3`
  color: rgb(247, 197, 159);
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ConnectOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

const EmailButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #FF6B48;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e05a3a;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  a {
    color: #E5B684;
    font-size: 1.75rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #FF6B48;
      transform: translateY(-2px);
    }
  }
`;

function Contact() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Add an event listener for messages from the iframe
    const handleMessage = (event) => {
      // Check if the message is from Calendly
      if (event.data.event && event.data.event.indexOf('calendly') === 0) {
        // If a date is selected, expand the widget
        if (event.data.event === 'calendly.date_and_time_selected') {
          setIsExpanded(true);
        }
        // Reset size when event is closed or completed
        if (event.data.event === 'calendly.close' || event.data.event === 'calendly.event_scheduled') {
          setIsExpanded(false);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Get in Touch</SectionTitle>
          <Description>
            I'm eager to collaborate with mentors, recruiters, clients, and fellow developers. Whether you want to brainstorm ideas, discuss opportunities, or explore collaborations - reach out via email, social media, or schedule a call. Together, we can build something extraordinary!
          </Description>
          <CalendlyWrapper>
            <CalendlyContainer>
              <CalendlyTitle>Schedule a Call</CalendlyTitle>
              <CalendlyFrame expanded={isExpanded}>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/bhanuprakash0828/30min?background_color=ffffff&text_color=4d5055&primary_color=0066FF&hide_gdpr_banner=1&hide_landing_page_details=0&hide_event_type_details=0"
                >
                </div>
              </CalendlyFrame>
            </CalendlyContainer>
          </CalendlyWrapper>

          <OtherWaysSection>
            <OtherWaysTitle>Other Ways to Connect</OtherWaysTitle>
            <ConnectOptions>
              <EmailButton href="mailto:bhanuprakashbm@gmail.com">
                <FaEnvelope />
                Send me an Email
              </EmailButton>
              <SocialLinks>
                <a href="https://linkedin.com/in/bhanuprakash28" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/bhanuprakashbm" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://instagram.com/bhanuprakash_0828" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </SocialLinks>
            </ConnectOptions>
          </OtherWaysSection>
        </motion.div>
      </Container>
    </ContactSection>
  );
}

export default Contact; 