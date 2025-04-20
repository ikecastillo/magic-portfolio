import React from 'react';
import { Column, Flex, Heading, Text, Avatar } from '../once-ui/components';
import { about, person } from '../app/resources/content';

export const AboutSection = () => {
  if (!about.intro?.display && !about.keyValues?.display) {
    return null;
  }

  return (
    <Flex 
      fillWidth 
      gap="xl" 
      paddingX="l" 
      mobileDirection="column" 
      vertical="start" // Align items to the start
      alignItems="start"
    >
      {/* Optional Avatar Column */}
      {about.avatar.display && person.avatar && (
        <Flex flexBasis="30%" horizontal="center" paddingBottom="l">
          <Avatar src={person.avatar} size="xl" />
        </Flex>
      )}

      {/* Text Content Column */}
      <Column flex={1} gap="l" horizontal="start">
        {about.intro?.display && (
          <Column gap="m">
            {/* Title could be optional if already present in page.tsx heading */}
            {/* <Heading as="h3" variant="display-strong-s">{about.intro.title}</Heading> */}
            <Text variant="body-large-m" onBackground="neutral-weak">
              {about.intro.description}
            </Text>
          </Column>
        )}

        {about.keyValues?.display && (
          <Column gap="m">
            <Heading as="h3" variant="display-strong-s">{about.keyValues.title}</Heading>
            <Flex direction="column" gap="s" alignItems="start">
              {about.keyValues.values.map((value, index) => (
                // Simple text list for now, could use badges/pills if desired
                <Text key={index} variant="body-default-m" onBackground="neutral-weak">
                  • {value}
                </Text>
              ))}
            </Flex>
          </Column>
        )}
      </Column>
    </Flex>
  );
}; 