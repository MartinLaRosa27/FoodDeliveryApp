import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../../styles";
import { numberFormat } from "../../helpers/numberFormat";
import Toast from "react-native-toast-message";

export default function CartIcon(props: {
  total: number;
  pedido: any[];
  tienda: any;
}) {
  const navigation = useNavigation<any>();

  const redireccion = () => {
    let pedidoValido = false;
    props.pedido.map((pedido) => {
      if (pedido.cantidad > 0) {
        pedidoValido = true;
      }
    });
    if (pedidoValido) {
      navigation.navigate("CartScreen", {
        total: props.total,
        pedido: props.pedido,
        tienda: props.tienda,
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Por favor, seleccione por lo menos un producto",
      });
    }
  };

  return (
    <View className="absolute bottom-16 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        onPress={() => redireccion()}
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">
            ${numberFormat(props.total)}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg capitalize">
          Mi pedido
        </Text>
      </TouchableOpacity>
    </View>
  );
}
