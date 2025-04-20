import React from 'react';
import { Flex, Icon, SmartLink, Text } from "@/once-ui/components";
import { person, contact } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      paddingY="40"
      paddingX="l"
      horizontal="center"
      vertical="start"
      mobileDirection="column"
      gap="40"
    >
      <Flex direction="column" gap="16" alignItems="start" className={styles.contactSection}>
        <Text variant="heading-s">{contact.title}</Text>
        <Flex direction="column" gap="8" alignItems="start">
          {contact.email && (
            <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <Icon name="email" />
              <Text variant="body-default-m" paddingLeft="8">{contact.email}</Text>
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <Icon name="linkedin" />
              <Text variant="body-default-m" paddingLeft="8">LinkedIn</Text>
            </a>
          )}
          {contact.resume_link && (
            <a href={contact.resume_link} target="_blank" rel="noopener noreferrer" download className={styles.contactLink}>
              <Icon name="download" />
              <Text variant="body-default-m" paddingLeft="8">{contact.resume_label || "Download Resume"}</Text>
            </a>
          )}
        </Flex>
        {contact.looking_for && (
          <Text variant="body-default-m" onBackground="neutral-weak" paddingTop="16">
            {contact.looking_for}
          </Text>
        )}
      </Flex>

      <Flex
        className={styles.copyrightSection}
        fillWidth
        paddingY="8"
        gap="16"
        horizontal="space-between"
        vertical="center"
        mobileDirection="column-reverse"
        mobileGap="8"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            / Build your portfolio with{" "}
            <SmartLink
              style={{ marginLeft: "-0.125rem" }}
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};
