import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Isaac",
  lastName: "Castillo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Workflow Systems Architect | Atlassian Platform Specialist",
  avatar: "/images/isaac-castillo.jpg",
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/ikecast",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ikecastillo",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ike@ikecastillo.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} | ${person.role}`,
  description: `Portfolio site for ${person.name}, ${person.role}`,
  headline: <>Isaac Castillo</>,
  subline: (
    <>
      Workflow Systems Architect | Atlassian Platform Specialist
      <br /> <br />
      I help large enterprises eliminate inefficiencies by engineering self-sustaining internal platforms.
      <br />
      From global Jira ecosystems to custom-built AI assistants, my work saves companies time, money, and frustration — without adding headcount.
    </>
  ),
  cta1_label: "Download Resume",
  cta1_link: "/isaac-castillo-resume.pdf",
  cta2_label: "Explore Case Studies",
  cta2_link: "#case-studies",
};

const about = {
  label: "About",
  title: "About Isaac",
  description: `About ${person.name}, ${person.role}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "About Isaac",
    description: (
      <>
        With 6+ years of experience architecting internal platforms, I specialize in transforming legacy systems and ad-hoc processes into structured, automated Atlassian ecosystems.
        <br /><br />
        Currently supporting 8,000+ users at a semiconductor enterprise, my systems have reduced approval cycles, automated documentation governance, and saved over $160K annually through scripting and automation.
      </>
    ),
  },
  keyValues: {
    display: true,
    title: "Key Values",
    values: [
      "Platform-first thinking",
      "Zero-dependency internal tools",
      "Developer UX for non-technical teams",
    ],
  },
};

const expertise = {
  label: "Expertise",
  title: "Expertise",
  description: `Skills and Capabilities of ${person.name}`,
  categories: [
    {
      title: "Enterprise Platforms",
      skills: [
        "Jira (Software, Service Mgmt, Assets)",
        "Confluence",
        "Insight, Comala, Tempo",
        "ScriptRunner",
      ],
    },
    {
      title: "Automation & DevOps",
      skills: [
        "Groovy, JQL, REST APIs",
        "CI/CD pipelines, Jenkins",
        "GitHub, GitLab, GitOps",
      ],
    },
    {
      title: "Scalable Systems Thinking",
      skills: [
        "SOP Governance Frameworks",
        "Data Visualization (Spotfire)",
        "Smart Portals / AI Assistants",
        "UX Design (Figma, Tailwind)",
      ],
    },
  ],
};

const work = {
  label: "Case Studies",
  title: "Case Studies / Projects",
  description: `Selected projects by ${person.name}`,
};

const recognition = {
  label: "Recognition",
  title: "Recognition / Results",
  description: `Recognition and results achieved by ${person.name}`,
  display: true,
  items: [
    "$165K/year in cost savings from automation",
    "8,000+ active Jira users supported",
    "Director's Award for Knowledge Management",
    "<2 month ROI on most platform implementations",
  ],
};

const contact = {
  title: "Let's talk.",
  email: "ike@ikecastillo.com",
  linkedin: "https://linkedin.com/in/ikecast",
  resume_link: "/isaac-castillo-resume.pdf",
  resume_label: "Download Resume",
  looking_for: "Looking for: Platform leadership roles in automation-first teams.",
};

export { person, social, newsletter, home, about, expertise, work, recognition, contact };
