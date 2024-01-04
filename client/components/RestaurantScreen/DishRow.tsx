import { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../../styles";
import { numberFormat } from "../../helpers/numberFormat";
import Toast from "react-native-toast-message";
import * as Icon from "react-native-feather";

export default function DishRow(props: {
  item: any;
  setPedido: any;
  pedido: any[];
  setTotal: any;
}) {
  const [cantidad, setCantidad] = useState<number>(0);

  const creacionPedido = (action: number) => {
    if (action) {
      if (cantidad < 6) {
        setCantidad(cantidad + 1);
      } else {
        Toast.show({
          type: "error",
          text1: "No se pueden pedir más de 6 unidades del mismo producto",
        });
        return;
      }
    } else {
      if (cantidad > 0) {
        setCantidad(cantidad - 1);
      } else {
        return;
      }
    }
    const auxArray = props.pedido;
    let productoExiste = false;
    auxArray.map((aa: any) => {
      if (aa.id == props.item.id) {
        if (action) {
          aa.cantidad = aa.cantidad + 1;
          aa.price = aa.cantidad * props.item.price;
        } else {
          aa.cantidad = aa.cantidad - 1;
          aa.price = aa.cantidad * props.item.price;
        }
        productoExiste = true;
      }
    });
    if (!productoExiste) {
      auxArray.push({
        id: props.item.id,
        name: props.item.name,
        price: props.item.price,
        image: props.item.image,
        cantidad: 1,
      });
    } else {
      productoExiste = true;
    }
    props.setPedido(auxArray);
    calcularTotal(auxArray);
  };

  const calcularTotal = (auxArray: any[]) => {
    let total = 0;
    auxArray.map((aa: any) => {
      total += aa.price;
    });
    props.setTotal(total);
  };

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
            ${numberFormat(props.item.price)}
          </Text>

          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-2 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={() => {
                creacionPedido(0);
              }}
            >
              <Icon.Minus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
            <Text className="px-3">{cantidad}</Text>
            <TouchableOpacity
              className="p-2 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={() => {
                creacionPedido(1);
              }}
            >
              <Icon.Plus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
