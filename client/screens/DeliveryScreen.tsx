import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../styles";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";

export default function DeliveryScreen() {
  const { params } = useRoute<any>();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="dark" />
      <View className="flex-1">
        <MapView
          initialRegion={{
            latitude: params.tienda.lat,
            longitude: params.tienda.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          className="flex-1"
          mapType="standard"
        >
          <Marker
            coordinate={{
              latitude: params.tienda.lat,
              longitude: params.tienda.lng,
            }}
            title={params.tienda.name}
            description={params.tienda.description}
          />
        </MapView>
        <View className="rounded-t-3xl -mt-12 bg-white relative">
          <View className="flex-row justify-between px-5 pt-10">
            <View>
              <Text className="text-lg text-gray-700 font-semibold">
                Llega en...
              </Text>
              <Text className="text-3xl font-extrabold text-gray-700">
                20-45 minutos
              </Text>
              <Text className="mt-2 text-gray-700 font-semibold">
                ¡Tu pedido está en camino!
              </Text>
            </View>
            <Image
              className="w-24 h-24"
              source={require("../assets/img/bikeGuy2.gif")}
            />
          </View>

          <View
            style={{ backgroundColor: themeColors.bgColor(0.8) }}
            className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
          >
            <View
              className="p-1 rounded-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <Image
                className="h-16 w-16 rounded-full"
                source={require("../assets/img/deliveryGuy.webp")}
              />
            </View>

            <View className="flex-1 ml-3">
              <Text className="font-semibold text-white">Entregado por:</Text>
              <Text className="text-lg font-bold text-white">
                Martín La Rosa
              </Text>
            </View>
            <View className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone
                  fill={themeColors.bgColor(1)}
                  stroke={themeColors.bgColor(1)}
                  strokeWidth={1}
                />
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-white p-2 rounded-full"
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Icon.X stroke={"red"} strokeWidth={4} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
