import React from 'react';
import { getPosts } from "@/app/utils/utils";
import { Column, Grid } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  columns?: number;
}

export function Projects({ range, columns = 1 }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.date || b.metadata.publishedAt).getTime() - 
           new Date(a.metadata.date || a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  // Use Grid for columns if more than 1 column is requested
  if (columns > 1) {
    return (
      <Grid 
        fillWidth 
        gap="xl" 
        marginBottom="40" 
        paddingX="l"
        columns={columns}
        mobileColumns={1}
      >
        {displayedProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`work/${post.slug}`}
            images={post.metadata.image ? [post.metadata.image] : post.metadata.images || []}
            title={post.metadata.title}
            description={post.metadata.description || post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            tags={post.metadata.tags || []}
          />
        ))}
      </Grid>
    );
  }

  // Use Column for full-width single column layout
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.image ? [post.metadata.image] : post.metadata.images || []}
          title={post.metadata.title}
          description={post.metadata.description || post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          tags={post.metadata.tags || []}
        />
      ))}
    </Column>
  );
}
