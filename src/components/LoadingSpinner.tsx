import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: #0366d6;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
`;