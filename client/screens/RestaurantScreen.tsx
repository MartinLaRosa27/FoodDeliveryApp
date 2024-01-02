import { useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { themeColors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import DishRow from "../components/RestaurantScreen/DishRow";
import CartIcon from "../components/RestaurantScreen/CartIcon";
import * as Icon from "react-native-feather";

export default function RestaurantScreen() {
  const { params } = useRoute<any>();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="light" />
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={params.image} />
          <TouchableOpacity
            className="absolute top-10 left-5 bg-gray-50 p-2 rounded-full shadow"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold text-orange-500 text-center mb-3 italic">
              {params.name}
            </Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/img/fullStar.webp")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-gray-700">{params.stars}</Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color={"gray"} width={"15"} height={"15"} />
                <Text className="text-gray-700 text-xs">{params.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{params.description}</Text>
          </View>
        </View>

        <View className="pb-36 mt-4">
          {/* platos */}
          {params.dishes.map((dish: any, i: number) => {
            return <DishRow key={i} item={dish} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
