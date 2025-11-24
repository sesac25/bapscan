import { Colors, Fonts, FontSize, Spacing } from "@/constants/theme";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function RootLayout() {

  const scheme = useColorScheme(); // 'light' | 'dark'

  const theme = {
    ...Colors[scheme ?? 'light'],
    fonts: Fonts,
    spacing: Spacing,
    fontSize: FontSize,
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{
          headerShown: false,
          gestureEnabled: false,
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="MenuCameraScreen" />
        <Stack.Screen name="MenuAnalysis" />
      </Stack>
    </ThemeProvider>
  );
}
