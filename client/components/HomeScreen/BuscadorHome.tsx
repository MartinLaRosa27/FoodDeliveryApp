import { TextInput, View, Text } from "react-native";
import { themeColors } from "../../styles";
import * as Icon from "react-native-feather";

export default function BuscadorHome() {
  return (
    <View className="flex-row items-center space-x-2 px-5 pb-2 mt-2">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <Icon.Search height={"25"} width={"25"} stroke={"gray"} />
        <TextInput
          placeholder="Buscar por restaurante"
          className="ml-2 flex-1"
        />
        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
          <Icon.MapPin height={"20"} width={"20"} stroke={"gray"} />
          <Text className="text-gray-600">Palermo</Text>
        </View>
      </View>
      <View
        className="p-2 rounded-full"
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <Icon.Sliders
          height={"25"}
          width={"25"}
          strokeWidth={"1.5"}
          stroke={"white"}
        />
      </View>
    </View>
  );
}
