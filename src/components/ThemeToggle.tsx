import { lightTheme, useTheme } from "../context/ThemeContext";
import styled from "styled-components";

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: background 0.3s, transform 0.2s;
  margin-top: 4px;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === lightTheme ? "🌒" : "🌖"}
    </ToggleButton>
  );
};

export default ThemeToggle;
