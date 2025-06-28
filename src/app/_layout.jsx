import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="home/index">
      <Stack.Screen name="home/index" />
      <Stack.Screen name="create/index" />
      <Stack.Screen name="verify/index" />
    </Stack>
  );
}
