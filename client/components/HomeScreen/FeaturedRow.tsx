import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { themeColors } from "../../styles";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow(props: {
  title: string;
  restaurants: any;
  description: string;
}) {
  return (
    <View>
      <View className="flex-row justify-between items-center mx-4">
        <View>
          <Text className="font-bold text-lg">{props.title}</Text>
          <Text className="text-gray-500 text-xs">{props.description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            Ver todos
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 10,
        }}
        className="overflow-visible py-5"
      >
        {props.restaurants.map((restaurant: any, i: any) => {
          return <RestaurantCard key={i} restaurant={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
}
