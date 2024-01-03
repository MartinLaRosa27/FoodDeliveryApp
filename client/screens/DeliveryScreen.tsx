import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function DeliveryScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="light" />
      <View className="flex-1 bg-white justify-center items-center">
        <Image
          source={require("../assets/img/delivery.gif")}
          className="h-80 w-80"
        />
      </View>
    </SafeAreaView>
  );
}
