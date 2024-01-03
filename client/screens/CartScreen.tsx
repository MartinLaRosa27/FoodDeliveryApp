import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { featured } from "../DB";
import { themeColors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

export default function CartScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="dark" />

      {/* header */}
      <View className="relative py-4">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={() => navigation.goBack()}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-5"
        >
          <Icon.ArrowLeft stroke={"white"} strokeWidth={3} />
        </TouchableOpacity>

        <View>
          <Text className="text-center font-bold text-xl capitalize text-orange-500">
            Tu Pedido
          </Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/img/bikeGuy.webp")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Llega en 20-45 minutos</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Modificar
          </Text>
        </TouchableOpacity>
      </View>

      {/* Pedidos */}
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="pt-5"
      >
        {restaurant.dishes.map((dish: any, i: number) => {
          return (
            <View
              key={i}
              className="flex-row items-center space-x-3 py-2 px-4 bg-orange-50 rounded-3xl mx-2 mb-3"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                2 x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700 capitalize">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base text-gray-700 ">
                ${dish.price}
              </Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={"white"}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* Total */}
      <View
        className="p-6 px-8 space-y-4"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-column justify-between">
          <Text className="text-gray-700 text-base mb-3">
            Subtotal: <Text className="font-bold">${10}</Text>
          </Text>
          <Text className="text-gray-700 text-base mb-3">
            Envío: <Text className="font-bold">${10}</Text>
          </Text>
          <Text className="text-gray-700 text-2xl">
            Total: <Text className="font-bold">${10}</Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
            onPress={() => navigation.navigate("DeliveryScreen")}
          >
            <Text className="text-white text-center font-bold text-lg">
              Confirmar Pedido
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
