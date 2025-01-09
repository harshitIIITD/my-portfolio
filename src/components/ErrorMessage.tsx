
import React from 'react';

import styled from 'styled-components';



const ErrorContainer = styled.div`

  color: red;

  text-align: center;

`;



interface ErrorMessageProps {

  children: string;

}



export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {

  return <ErrorContainer>{children}</ErrorContainer>;

};

