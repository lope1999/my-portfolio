import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { socialLinks } from "../utils/utils";

const FooterContainer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  z-index: 999;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 85px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.accent};
  font-size: 1.4rem;
  display: inline-block;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Divider = styled.hr`
  width: 100%;
  margin: 5px 0;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.7;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 12,
      }}
    >
      <FooterContent>
        {/* Social Icons */}
        <Socials>
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon as React.ElementType;

            return (
              <SocialIcon
                key={index}
                href={link.href}
                target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <IconComponent style={{ width: "1rem" }} color={link.color} />
              </SocialIcon>
            );
          })}
        </Socials>

        {/* Divider + Copyright */}
        <div>
          <Divider />
          <Copyright>
            © {new Date().getFullYear()} Suliat Titilope Alaga. All Rights
            Reserved.
          </Copyright>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
