import { Stack } from "expo-router";
import { UiOhProvider } from "uioh";

export default function RootLayout() {
  return (
    <UiOhProvider defaultMode="light">
      <Stack screenOptions={{ headerShown: false }} />
    </UiOhProvider>
  );
}
