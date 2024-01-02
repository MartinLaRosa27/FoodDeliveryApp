import { Image, TouchableOpacity, View, Text } from "react-native";
import { themeColors } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

export default function RestaurantCard(props: { restaurant: any }) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("RestaurantScreen", { ...props.restaurant })
      }
    >
      <View
        className="mr-6 bg-white rounded-3xl shadow-lg"
        style={{ shadowColor: themeColors.bgColor(2), shadowRadius: 6 }}
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={props.restaurant.image}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">
            {props.restaurant.name}
          </Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../../assets/img/fullStar.webp")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-gray-700">{props.restaurant.stars}</Text>
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color={"gray"} width={"15"} height={"15"} />
            <Text className="text-gray-700 text-xs">
              {props.restaurant.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
