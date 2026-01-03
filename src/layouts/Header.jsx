import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Posts", id: "posts" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 72;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

function useActiveSection(sectionIds, rootMargin = "-30% 0px -50% 0px") {
    const [active, setActive] = React.useState(sectionIds[0] ?? "");
  
    React.useEffect(() => {
      const els = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);
  
      if (!els.length) return;
  
      // Keep latest visibility ratios for ALL observed elements
      const ratios = new Map(); // id -> intersectionRatio
      let rafId = 0;
  
      const pickActive = () => {
        rafId = 0;
        let bestId = active;
        let bestRatio = 0;
  
        for (const el of els) {
          const id = el.id;
          const r = ratios.get(id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }
  
        // Fallback: if nothing intersects, choose the closest section above the fold
        if (bestRatio === 0) {
          const headerOffset = 72;
          const y = window.scrollY + headerOffset + 1;
          let closest = els[0]?.id ?? "";
          for (const el of els) {
            if (el.offsetTop <= y) closest = el.id;
          }
          bestId = closest;
        }
  
        if (bestId) setActive(bestId);
      };
  
      const obs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
          }
          // Batch updates to animation frame to avoid thrashing
          if (!rafId) rafId = requestAnimationFrame(pickActive);
        },
        {
          root: null,
          // Threshold needs enough granularity for ratios to move smoothly
          threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0..1 step 0.05
          rootMargin,
        }
      );
  
      els.forEach((el) => obs.observe(el));
  
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        obs.disconnect();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionIds.join("|"), rootMargin]);
  
    return active;
  }

export default function Header() {
    const theme = useTheme()
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const sectionIds = NAV_ITEMS.map((n) => n.id);
  const active = useActiveSection(sectionIds);

  const onNavClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(20,20,20,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
        <Box
            component="span"
            sx={{
              background: `linear-gradient(${theme.palette.primary.main}, #164ccb)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
              fontSize: "30px"
            }}
          >
            Ruud Juffermans.
          </Box>

          <Box sx={{ flex: 1 }} />

          {/* Desktop menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  sx={{
                    color: "white",
                    opacity: active === item.id ? 1 : 0.78,
                    borderRadius: 999,
                    px: 2,
                    transition: "opacity 150ms ease",
                    ...(active === item.id && {
                      backgroundColor: "rgba(255,255,255,0.10)",
                    }),
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: "#141414",
            color: "white",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Menu
          </Typography>
          <Box sx={{ flex: 1 }} />
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1 }}>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => onNavClick(item.id)}
              sx={{
                borderRadius: 2,
                mx: 1,
                ...(active === item.id && {
                  backgroundColor: "rgba(255,255,255,0.10)",
                }),
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
