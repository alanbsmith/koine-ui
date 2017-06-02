import { keyframes } from 'styled-components';

export const upvote = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-2px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
`;

export const slidedown = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0.3;
  };
  100% {
    transform: translateY(0px);
    opacity: 1.0;
  };
`;
