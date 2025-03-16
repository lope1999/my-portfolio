import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  whileHover?:
    | import("framer-motion").TargetAndTransition
    | import("framer-motion").VariantLabels;
  whileTap?:
    | import("framer-motion").TargetAndTransition
    | import("framer-motion").VariantLabels;
  type?: "submit" | "button";
  style?: React.CSSProperties;
}

const StyledButton = styled(motion.button)<{ as?: string }>`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.accent};
  }
`;

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  whileHover,
  whileTap,
  type = "button",
  style,
}) => {
  return (
    <StyledButton
      as={href ? "a" : "button"}
      href={href}
      onClick={onClick}
      whileHover={whileHover}
      whileTap={whileTap}
      type={type}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
