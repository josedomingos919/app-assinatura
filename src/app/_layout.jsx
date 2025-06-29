import { Stack } from "expo-router";
import { useApp } from "../store/zustend";

export default function Layout() {
  const { user } = useApp();
  console.log("566666666666    ", user);
  if (user?.name) {
    return (
      <Stack
        initialRouteName="home/index"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home/index" />
        <Stack.Screen name="create/index" />
        <Stack.Screen name="verify/index" />
      </Stack>
    );
  }

  return (
    <Stack
      initialRouteName="login/index"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login/index" />
      <Stack.Screen name="singup/index" />
    </Stack>
  );
}
