import { useEffect, useState } from "react";
import { ScrollView, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BuscadorHome from "../components/HomeScreen/BuscadorHome";
import CategoriesHome from "../components/HomeScreen/CategoriesHome";
import FeaturedHome from "../components/HomeScreen/FeaturedHome";

export default function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <View className="flex-1 bg-white justify-center items-center h-full">
          <Image
            source={require("../assets/img/delivery.gif")}
            className="h-80 w-80"
          />
        </View>
      ) : (
        <SafeAreaView className="bg-white h-full">
          <StatusBar style="dark" />
          <BuscadorHome />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <CategoriesHome />
            <FeaturedHome />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
}
