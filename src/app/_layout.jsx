import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      initialRouteName="login/index"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login/index" />
      <Stack.Screen name="singup/index" />
      <Stack.Screen name="home/index" />
      <Stack.Screen name="create/index" />
      <Stack.Screen name="verify/index" />
    </Stack>
  );
}
