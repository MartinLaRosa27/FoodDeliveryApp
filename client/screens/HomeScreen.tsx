import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BuscadorHome from "../components/HomeScreen/BuscadorHome";
import CategoriesHome from "../components/HomeScreen/CategoriesHome";
import FeaturedHome from "../components/HomeScreen/FeaturedHome";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white pb-10">
      <BuscadorHome />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <CategoriesHome />
        <FeaturedHome />
      </ScrollView>
    </SafeAreaView>
  );
}
