import { View, Image, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../../styles";
import * as Icon from "react-native-feather";

export default function DishRow(props: { item: any }) {
  return (
    <View className="flex-row items-center bg-orange-50 p-3 rounded-3xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={props.item.image}
      />

      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl capitalize">{props.item.name}</Text>
          <Text className="text-gray-700">{props.item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">
            ${props.item.price}
          </Text>

          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-2 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
            <Text className="px-3">{2}</Text>
            <TouchableOpacity
              className="p-2 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
