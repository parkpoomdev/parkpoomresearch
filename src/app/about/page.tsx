import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person as defaultPerson, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  const title = "About — Parkpoom Wisedsri";
  const description =
    "Meet Parkpoom Wisedsri, a doctoral student and research assistant focusing on AI, data science, and telehealth.";
  return Meta.generate({
    title,
    description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(title)}`,
    path: about.path,
  });
}

export default function About() {
  // Local override for About page only
  const person = {
    ...defaultPerson,
    firstName: "Parkpoom",
    lastName: "Wisedsri",
    name: "Parkpoom Wisedsri",
    role: "Doctoral Student / Research Assistant",
    email: "parkpoom.wisedsri@gmail.com",
    location: "Asia/Bangkok",
    languages: ["English", "Thai"],
    // Use custom avatar image
    avatar: "/images/avatar_temp.jpg",
  };
  const aboutData = {
    ...about,
    title: "About — Parkpoom Wisedsri",
    description:
      "Meet Parkpoom Wisedsri, a doctoral student and research assistant focusing on AI, data science, and telehealth.",
    intro: {
      display: true,
      title: "Introduction",
      description: (
        <>
          Parkpoom is a doctoral student and research assistant at the Department of Information
          and Communication Technology, Asian Institute of Technology (AIT). His research focuses on
          AI and data science for telehealth monitoring and assistive systems supporting elderly and
          disabled people.
        </>
      ),
    },
    work: {
      display: true,
      title: "Work Experience",
      experiences: [
        {
          company: "Asian Institute of Technology (AIT)",
          timeframe: "May 2023 – Present",
          role: "Research Assistant (ICT / AI / Data Science)",
          achievements: [
            <>Telehealth Monitoring and Assistive Systems for Elderly and Disabled People.</>,
            <>Applied AI and data analytics to support remote healthcare decision-making.</>,
          ],
        },
        {
          company: "Chulalongkorn University",
          timeframe: "Feb 2023",
          role: "Teaching Assistant (BAScii Program)",
          achievements: [<>Supported teaching activities and student learning.</>],
        },
        {
          company: "Brunel University London",
          timeframe: "Aug – Oct 2022",
          role: "Project Assistant (Web Developer OT Replacement)",
          achievements: [<>Developed and maintained web features during staff transition.</>],
        },
        {
          company: "Brunel University London",
          timeframe: "Sep – Nov 2022",
          role: "Graduate Teaching Assistant (GTA)",
          achievements: [<>Assisted course delivery and student support.</>],
        },
        {
          company: "Brunel University London",
          timeframe: "Sep – Nov 2022",
          role: "ResLife Ambassador",
          achievements: [<>Supported residential life activities and student engagement.</>],
        },
        {
          company: "Suranaree University of Technology",
          timeframe: "Aug 2014 – Present",
          role: "Laboratory Instructor (Study Leave)",
          achievements: [<>Provided lab instruction and academic support.</>],
        },
      ],
    },
    studies: {
      display: true,
      title: "Studies",
      institutions: [
        {
          name: "Asian Institute of Technology (AIT), Thailand",
          description: <>Doctor of Engineering in Computer Science, 2023 – Present.</>,
        },
        {
          name: "The University of Sheffield, United Kingdom",
          description: <>M.Sc.Eng. in Computer Science, 2020.</>,
        },
        {
          name: "Suranaree University of Technology, Thailand",
          description: <>B.Eng. in Information Technology, 2014.</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "Technical skills",
      skills: [
        {
          title: "Research Interests",
          description: <>Data analytics and visualization for telehealth applications.</>,
        },
        {
          title: "Programming",
          description: (
            <>Database: SQL, NodeJS. Web: Python, NodeJS, JavaScript, PHP, C#, C++, ReactJS. Mobile:
            Java (Android). UI/UX for software development.</>
          ),
          tags: [
            { name: "SQL" },
            { name: "NodeJS" },
            { name: "Python" },
            { name: "JavaScript" },
            { name: "PHP" },
            { name: "C#" },
            { name: "C++" },
            { name: "ReactJS" },
            { name: "Java (Android)" },
            { name: "UI/UX" },
          ],
        },
      ],
    },
  } as typeof about;
  const structure = [
    {
      title: aboutData.intro.title,
      display: aboutData.intro.display,
      items: [],
    },
    {
      title: aboutData.work.title,
      display: aboutData.work.display,
      items: aboutData.work.experiences.map((experience) => experience.company),
    },
    {
      title: aboutData.studies.title,
      display: aboutData.studies.display,
      items: aboutData.studies.institutions.map((institution) => institution.name),
    },
    {
      title: aboutData.technical.title,
      display: aboutData.technical.display,
      items: aboutData.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={aboutData.title}
        description={aboutData.description}
        path={aboutData.path}
        image={`/api/og/generate?title=${encodeURIComponent(aboutData.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${aboutData.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {aboutData.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={aboutData} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {aboutData.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {aboutData.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={aboutData.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {aboutData.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {aboutData.intro.description}
            </Column>
          )}

          {aboutData.studies.display && (
            <>
              <Heading as="h2" id={aboutData.studies.title} variant="display-strong-s" marginBottom="m">
                {aboutData.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {aboutData.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {aboutData.work.display && (
            <>
              <Heading as="h2" id={aboutData.work.title} variant="display-strong-s" marginBottom="m">
                {aboutData.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {aboutData.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {aboutData.technical.display && (
            <>
              <Heading
                as="h2"
                id={aboutData.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {aboutData.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {aboutData.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
