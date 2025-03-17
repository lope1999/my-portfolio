import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ToastType } from "../utils/type";

interface ToastProps {
  type?: ToastType;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const toastTypeStyles: Record<
  ToastType,
  { bg: string; color: string; icon: string }
> = {
  success: { bg: "#4CAF50", color: "#fff", icon: "✔️" },
  info: { bg: "#2196F3", color: "#fff", icon: "ℹ️" },
  error: { bg: "#F44336", color: "#fff", icon: "❌" },
  warning: { bg: "#FFC107", color: "#000", icon: "⚠️" },
};

const progressKeyframes = keyframes`
  0% { width: 100%; }
  100% { width: 0%; }
`;

const ToastWrapper = styled(motion.div)<{ $bg: string; $color: string }>`
  position: fixed;
  top: 80px;
  right: 30px;
  transform: translateX(-50%);
  z-index: 9999;
  width: 300px;

  background-color: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ToastContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CloseIcon = styled.span`
  cursor: pointer;
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 0.75rem;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div<{ duration: number }>`
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  animation: ${progressKeyframes} ${({ duration }) => duration}ms linear
    forwards;
`;

const toastVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

const Toast: React.FC<ToastProps> = ({
  type = "info",
  message,
  isVisible,
  onClose,
  duration = 3000,
}) => {
  const { bg, color, icon } = toastTypeStyles[type];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <ToastWrapper
          $bg={bg}
          $color={color}
          variants={toastVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <ToastContent>
            <MessageWrapper>
              <span>{icon}</span>
              <span style={{ fontSize: "0.8rem" }}>{message}</span>
            </MessageWrapper>
            <CloseIcon onClick={onClose}>×</CloseIcon>
          </ToastContent>

          <ProgressBarWrapper>
            <Progress duration={duration} />
          </ProgressBarWrapper>
        </ToastWrapper>
      )}
    </AnimatePresence>
  );
};

export default Toast;
