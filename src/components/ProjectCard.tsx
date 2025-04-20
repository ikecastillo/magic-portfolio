"use client";

import React from 'react';
import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Badge,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  tags?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  tags = [],
}) => {
  return (
    <Flex 
      fillWidth 
      border="neutral-medium"
      radius="m"
      overflow="hidden"
      direction="column"
      background="surface"
      shadow="m"
    >
      {/* Image Section */}
      {images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          images={images.map((image) => ({
            src: image,
            alt: title,
          }))}
          height={400} // Fixed height for consistency
        />
      )}
      
      {/* Content Section */}
      <Flex
        direction="column"
        fillWidth
        padding="l"
        gap="m"
      >
        {/* Title */}
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        
        {/* Description */}
        {description?.trim() && (
          <Text wrap="balance" variant="body-large-m" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        
        {/* Tags */}
        {tags?.length > 0 && (
          <Flex gap="8" wrap="wrap" paddingY="s">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" size="s">
                {tag}
              </Badge>
            ))}
          </Flex>
        )}
        
        {/* Links */}
        <Flex gap="24" wrap="wrap" paddingTop="m">
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-m">Read case study</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text variant="body-default-m">View project</Text>
            </SmartLink>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
