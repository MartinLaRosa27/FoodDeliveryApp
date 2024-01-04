import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { numberFormat } from "../helpers/numberFormat";
import Toast from "react-native-toast-message";
import * as Icon from "react-native-feather";

export default function CartScreen() {
  const { params } = useRoute<any>();
  const navigation = useNavigation<any>();

  const confirmarPedido = () => {
    Toast.show({
      type: "success",
      text1: "Pedido confirmado",
    });
    navigation.navigate("DeliveryScreen", { tienda: params.tienda });
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="dark" />

      {/* HEADER */}
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
          <Text className="text-center text-gray-500">
            {params.tienda.name}
          </Text>
        </View>
      </View>
      {/* HEADER */}

      {/* TIEMPO DELIVERY */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/img/bikeGuy.webp")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Llega en 20-45 minutos</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Modificar
          </Text>
        </TouchableOpacity>
      </View>
      {/* TIEMPO DELIVERY */}

      {/* PEDIDOS */}
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="pt-5"
      >
        {params.pedido.map((dish: any, i: number) => {
          if (dish.cantidad > 0) {
            return (
              <View
                key={i}
                className="flex-row items-center space-x-3 py-2 px-4 bg-orange-50 rounded-3xl mx-2 mb-3"
              >
                <Text className="font-bold" style={{ color: themeColors.text }}>
                  {dish.cantidad}x
                </Text>
                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                <Text className="flex-1 font-bold text-gray-700 capitalize">
                  {dish.name}
                </Text>
                <Text className="font-semibold text-base text-gray-700 ">
                  ${numberFormat(dish.price)}
                </Text>
              </View>
            );
          }
        })}
      </ScrollView>
      {/* PEDIDOS */}

      {/* TOTAL */}
      <View
        className="p-6 px-8 space-y-4"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-column justify-between">
          <Text className="text-gray-700 text-base mb-3">
            Subtotal:{" "}
            <Text className="font-bold">${numberFormat(params.total)}</Text>
          </Text>
          <Text className="text-gray-700 text-base mb-3">
            Envío: <Text className="font-bold">${numberFormat(300)}</Text>
          </Text>
          <Text className="text-gray-700 text-2xl">
            Total:{" "}
            <Text className="font-bold">
              ${numberFormat(params.total + 300)}
            </Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
            onPress={() => confirmarPedido()}
          >
            <Text className="text-white text-center font-bold text-lg">
              Confirmar Pedido
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* TOTAL */}
    </SafeAreaView>
  );
}
