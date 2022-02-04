import React from 'react';

import { Container } from './styles';

interface DataContainerProps {
  title: string;
  content: string;
}

const DataContainer: React.FC<DataContainerProps> = ({ title, content }) => {
  return (
    <Container>
      <strong>
        {title}
      </strong>
      <span>
        {content}
      </span>
    </Container>
  );
}

export default DataContainer;