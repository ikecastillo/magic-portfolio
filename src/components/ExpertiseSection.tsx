import React from 'react';
import { Column, Flex, Heading, Text, Badge, Grid } from '../once-ui/components';
import { expertise } from '../app/resources/content';

export const ExpertiseSection = () => {
  if (!expertise.categories?.length) {
    return null;
  }

  return (
    <Grid 
      columns={3}
      gap="xl" 
      fillWidth
      paddingX="l"
      mobileColumns={1}
    >
      {expertise.categories.map((category, index) => (
        <Column key={index} gap="l" horizontal="start">
          <Heading as="h3" variant="display-strong-s">{category.title}</Heading>
          <Flex wrap="wrap" gap="8">
            {category.skills.map((skill, skillIndex) => (
              <Badge 
                key={skillIndex} 
                variant="primary"
                size="m"
              >
                {skill}
              </Badge>
            ))}
          </Flex>
        </Column>
      ))}
    </Grid>
  );
}; 