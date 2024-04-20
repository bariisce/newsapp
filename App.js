import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import news_data from "./src/news_data.json";
import news_banner_data from "./src/news_banner_data.json";
import NewsCard from "./src/components/NewsCard";

function App() {
  const renderItems = ({ item }) => <NewsCard news={item} />;
  const keyExtractor = (item) => item.u_id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map((bannerNews) => (
              <Image
                style={styles.news_banner_image}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={keyExtractor}
        data={news_data}
        renderItem={renderItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "eceff1",
    marginTop: 20,
  },
  news_banner_image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 50,
  },
});

export default App;
