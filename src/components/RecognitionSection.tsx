import React from 'react';
import { Column, Flex, Heading, Text, Icon } from '../once-ui/components';
import { recognition } from '../app/resources/content';

export const RecognitionSection = () => {
  if (!recognition.display || !recognition.items?.length) {
    return null;
  }

  return (
    <Column 
      gap="l" 
      fillWidth
      paddingX="l"
      horizontal="start"
    >
      {/* Title is likely handled by the page, but could be added here if needed */}
      {/* <Heading as="h3" variant="display-strong-s">{recognition.title}</Heading> */}
      <Flex direction="column" gap="s" alignItems="start">
        {recognition.items.map((item, index) => (
          <Flex key={index} gap="8" vertical="center">
            <Icon name="checkmark" size="s" color="primary" />
            <Text variant="body-large-m" onBackground="neutral-weak">{item}</Text>
          </Flex>
        ))}
      </Flex>
    </Column>
  );
}; 