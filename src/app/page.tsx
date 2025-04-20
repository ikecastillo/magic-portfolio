import React from "react";

import { Heading, Flex, Text, Button, RevealFx, Column, Icon } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { RecognitionSection } from "@/components/RecognitionSection";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, expertise, work, recognition } from "@/app/resources/content";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            publisher: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Column fillWidth paddingY="xl" gap="l">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="l">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Flex gap="16" wrap="wrap">
              {home.cta1_link && home.cta1_label && (
                <Button
                  href={home.cta1_link}
                  variant="primary"
                  size="m"
                  target="_blank"
                  download
                  prefixIcon={<Icon name="download" />}
                >
                  {home.cta1_label}
                </Button>
              )}
              {home.cta2_link && home.cta2_label && (
                <Button
                  href={home.cta2_link}
                  variant="secondary"
                  size="m"
                  suffixIcon={<Icon name="arrow-right" />}
                >
                  {home.cta2_label}
                </Button>
              )}
            </Flex>
          </RevealFx>
        </Column>
      </Column>
      <Column id="about-me" as="section" fillWidth paddingY="xl" gap="l">
        <Heading as="h2" variant="display-strong-m">{about.title}</Heading>
        <AboutSection />
      </Column>
      <Column id="expertise" as="section" fillWidth paddingY="xl" gap="l">
        <Heading as="h2" variant="display-strong-m">{expertise.title}</Heading>
        <ExpertiseSection />
      </Column>
      <Column id="case-studies" as="section" fillWidth paddingY="xl" gap="l">
        <Heading as="h2" variant="display-strong-m">{work.title}</Heading>
        <Projects range={[1, 3]} columns={3} />
        <Flex fillWidth horizontal="center" paddingTop="l">
          <Button href="/work" variant="secondary">View All Case Studies</Button>
        </Flex>
      </Column>
      {recognition.display && (
        <Column id="recognition" as="section" fillWidth paddingY="xl" gap="l">
          <Heading as="h2" variant="display-strong-m">{recognition.title}</Heading>
          <RecognitionSection />
        </Column>
      )}
    </Column>
  );
}
