"use client";

import React from 'react';
import { usePathname } from "next/navigation";

import { Fade, Flex, Line, ToggleButton, Icon } from "../once-ui/components";
import styles from "./Header.module.scss";

import { routes } from "../app/resources";
import { person, home, about, work, social } from "../app/resources/content";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        vertical="center"
      >
        <Flex fillWidth horizontal="center" flex={1}>
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              {(routes["/about"] || routes["/work"]) && <Line vert maxHeight="24" />}

              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          fillWidth
          horizontal="end"
          vertical="center"
          paddingRight="12"
          gap="12"
          flexBasis="auto"
          flexShrink={0}
        >
          {social.map((item) => (
            item.link && (
              <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" title={item.name} className={styles.socialLink}>
                <Icon name={item.icon as any} size="20" />
              </a>
            )
          ))}
        </Flex>
      </Flex>
    </>
  );
};
