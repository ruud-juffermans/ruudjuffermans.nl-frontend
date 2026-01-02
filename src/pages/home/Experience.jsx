import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Section from "@components/Section";

const experiences = [
  {
    date: "Mar 2025 - Present",
    title: "Politie Nederland - Cryptocurrency Specialist",
    description:
      "Contributing to multiple cutting-edge projects at the intersection of cybersecurity, IoT, and blockchain technologies. Key responsibilities include designing and developing robust data systems tailored for advanced use cases, with a focus on secure and scalable solutions. Collaborated closely with multidisciplinary teams to deliver impactful digital tools and simulations.",
    technologies: [
      "Digital Product Passports",
      "Databases",
      "Hyperledger Fabric",
      "Full-Stack Applications",
      "Digital Twin Simulations",
    ],
  },
  {
    date: "Mar 2024 - Mar 2025",
    title: "Nederlands Lucht- en Ruimtevaartcentrum - Data Engineer",
    description:
      "Contributing to multiple cutting-edge projects at the intersection of cybersecurity, IoT, and blockchain technologies. Key responsibilities include designing and developing robust data systems tailored for advanced use cases, with a focus on secure and scalable solutions. Collaborated closely with multidisciplinary teams to deliver impactful digital tools and simulations.",
    technologies: [
      "Digital Product Passports",
      "Databases",
      "Hyperledger Fabric",
      "Full-Stack Applications",
      "Digital Twin Simulations",
    ],
  },
  {
    date: "Sep 2019 - Dec 2023",
    title: "Dealblock Labs - Blockchain Developer",
    description:
      "Involved in the development and deployment of blockchain solutions. My responsibilities included smart contract development, blockchain architecture design, and integration of blockchain with existing systems. Utilized Solidity for smart contracts and worked with Ethereum and Binance Smart Chain networks. Played a key role in developing decentralized applications (DApps) that offer transparency and security.",
    technologies: ["Blockchain", "Solidity", "Ethereum", "Binance Smart Chain", "DApps"],
  },
  {
    date: "Sep 2023 - Feb 2024",
    title: "Boval Assurantien B.V. - Data Engineer",
    description:
      "Worked on developing chatbot solutions to help digitize societies around the world, using AI technologies such as ChatGPT to enhance services in cities. I focused on creating user interfaces and backend APIs, utilizing a range of technologies with the goal of contributing to global digital transformation. To ensure our platforms were strong and worked well, I implemented comprehensive testing with Cypress. I also used Insomnia for effective API testing, which helped make our development process smoother and our products more reliable. Experienced in Scrum, I effectively managed tasks and collaborated with the team to meet our goals.",
    technologies: ["AI", "ChatGPT", "Cypress", "Insomnia", "Scrum"],
  },
];

const Experience = () => {
  const theme = useTheme();

  return (
    <Section>
      <Section.Heading>Experience</Section.Heading>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px"
      }}>
        {experiences.map((exp) => (
          <Box
            key={`${exp.date}-${exp.title}`}
            sx={{
              [theme.breakpoints.up(970)]: {
                display: "flex",
              },
            }}
          >
            <Box
              sx={{
                minWidth: "250px",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: "16px",
                  fontWeight: 100,
                  fontStyle: "italic",
                }}
              >

                {exp.date}
              </Typography>
            </Box>

            <Box>
              <Typography
                component="h2"
                sx={{
                  fontSize: "20px",
                  fontWeight: 800,
                  mb: "5px",
                }}
              >
                {exp.title}
              </Typography>

              <Box sx={{ mb: "10px" }}>
                <Section.Text>{exp.description}</Section.Text>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  mt: "15px",
                  pb: "15px",
                }}
              >
                {exp.technologies.map((tech) => (
                  <Box
                    key={`${exp.title}-${tech}`}
                    component="span"
                    sx={{
                      fontSize: "16px",
                      color: "#902828",
                      border: `1px solid #902828`,
                      px: "6px",
                      py: { xs: "3px", sm: "5px" },
                      borderRadius: "2px",
                      backgroundColor: "rgba(69, 25, 25, 0.2)",
                      display: "inline-flex",
                      alignItems: "center",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );

};

export default Experience;
