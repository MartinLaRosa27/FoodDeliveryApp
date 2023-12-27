import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { categories } from "../../DB";

export default function CategoriesHome() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, i) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? "bg-orange-200" : "bg-gray-200";
          let textClass = isActive
            ? "text-orange-400 font-semibold"
            : "text-gray-500";

          return (
            <View key={i} className="flex justify-center items-center mr-6 ">
              <TouchableOpacity
                className={"p-2 rounded-full shadow " + btnClass}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={category.image}
                />
              </TouchableOpacity>

              <Text className={"text-sm mt-1 " + textClass}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
