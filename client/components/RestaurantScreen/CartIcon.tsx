import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../../styles";

export default function CartIcon() {
  const navigation = useNavigation<any>();

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        onPress={() => navigation.navigate("CartScreen")}
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">${4}</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg capitalize">
          Mis pedidos
        </Text>
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">{4}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
