import { useRoute } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";

export default function RestaurantScreen() {
  const { params } = useRoute();

  return (
    <SafeAreaView className="bg-white pb-10">
      <Text className={"text-red-500"}>RestaurantScreen</Text>
    </SafeAreaView>
  );
}
