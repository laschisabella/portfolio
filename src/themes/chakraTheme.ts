import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#C3A9CC",
      200: "#946AA3",
    },
  },
  components: {
    Switch: {
      baseStyle: {
        track: {
          bg: "brand.100",
        },
        thumb: {
          bg: "brand.200",
        },
      },
    },
  },
});

export default customTheme;
