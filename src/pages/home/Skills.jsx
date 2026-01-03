import { Box } from "@mui/material";
import Section from "@components/Section";

const skillNames = [
  "SQL",
  "Python",
  "Data Warehousing",
  "Apache Hadoop",
  "Apache Spark",
  "Data Modeling",
  "Extract, Transform, Load",
  "Data Pipeline Design",
  "Cloud Computing Services",
  "NoSQL Databases",
  "Stream Processing",
  "Machine Learning Basics",
  "Big Data",
  "Data Governance",
  "Performance and Optimization",
];

const Skills = ({id}) => {
  console.log(id)
  return (
    <Section id={id}>
      <Section.Heading>Skills</Section.Heading>

      <Box
        sx={{
          mt: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: "6px", sm: "8px" },
        }}
      >
        {skillNames.map((skill) => (
          <Box
            key={skill}
            component="span"
            sx={{
              px: { xs: "5px", sm: "6px" },
              py: "4px",
              borderRadius: "2px",
              border: "1px solid #333333",
              backgroundColor: "#232323",
              boxShadow: "0 2px 3px rgba(0,0,0,0.24)",
              fontSize: "16px",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            {skill}
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default Skills;
