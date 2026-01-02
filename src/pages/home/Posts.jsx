import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Section from "@components/Section";
import Card from "@components/Card";

const posts = [
  {
    title: "The Illusion of Value: NFTs are a Scam.",
    link: "/post/2",
    labels: ["blockchain"],
  },
  {
    title: "When is a Private Blockchain actually your Best Choice.",
    link: "/post/3",
    labels: ["blockchain"],
  },
  {
    title: "My Favorite Reads of 2023",
    link: "/post/1",
    labels: ["reading"],
  },
  {
    title: "SOLID Principles applied to Python Object Oriented Programming",
    link: "/post/4",
    labels: ["python"],
  },
  {
    title: "DeFi: Impermanent Loss Explained",
    link: "/post/5",
    labels: ["DeFi"],
  },
  {
    title: "My Favorite Reads of 2024",
    link: "/post/6",
    labels: ["reading"],
  },
];

const Posts = () => {
  const theme = useTheme();

  return (
    <Section>
      <Section.Heading>Posts</Section.Heading>

      <Box
        sx={{
          mt: "10px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(1, 1fr)",
          [theme.breakpoints.up(600)]: {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          [theme.breakpoints.up(926)]: {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        }}
      >
        {posts.map((post) => (
          <Box
            key={post.link}
            component={Link}
            to={post.link}
            sx={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <Card>
              {post.labels.map((label) => (
                <Card.Label key={`${post.link}-${label}`}>{label}</Card.Label>
              ))}

              <Card.Title>{post.title}</Card.Title>
            </Card>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default Posts;
