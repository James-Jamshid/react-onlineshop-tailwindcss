import * as React from "react";
import { loadCSS } from "fg-loadcss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: "content-box",
          padding: 3,
          fontSize: "1.125rem",
          background: "black",
          cursor: "pointer",
        },
      },
    },
  },
});

export default function FontAwesomeIconSize() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <Chip icon={<MdPhone />} label="Call us" />
      </ThemeProvider>
    </Box>
  );
}
