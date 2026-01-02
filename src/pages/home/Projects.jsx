import { Box } from "@mui/material";
import Section from "@components/Section";
import Card from "@components/Card";

import GithubIcon from "@assets/github.svg";
import LinkIcon from "@assets/link.svg";

const projects = [
  {
    title: "Portfolio Website",
    github: "https://github.com/ruudjuffermans/React-Portfolio-SPA.v2",
    website: "https://ruudjuffermans.nl",
    keywords: ["React", "Node.js"],
  },
  {
    title: "Portfolio Website",
    github: "https://github.com/ruudjuffermans/React-Portfolio-SPA.v2",
    website: "https://ruudjuffermans.nl",
    keywords: ["React", "Node.js"],
  }
];

const Projects = () => {
  return (
    <Section>
      <Section.Heading>Projects</Section.Heading>

      <Box
        sx={{
          mt: "10px",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: "20px",
        }}
      >
        {projects.map((project) => (
          <Card key={project.title}>
            <Card.Actions>
              <Box
                component="a"
                href={project.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} website`}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={LinkIcon}
                  alt=""
                  sx={{ width: 18, height: 18 }}
                />
              </Box>

              <Box
                component="a"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={GithubIcon}
                  alt=""
                  sx={{ width: 18, height: 18 }}
                />
              </Box>
            </Card.Actions>

            <Card.Title>{project.title}</Card.Title>

            <Card.KeyWords>
              {project.keywords.map((keyword) => (
                <Box key={keyword} component="span">
                  {keyword}
                </Box>
              ))}
            </Card.KeyWords>
          </Card>
        ))}
      </Box>
    </Section>
  );
};

export default Projects;
