import { View } from "react-native";
import { useEffect, useState } from "react";

import styles from "./styles";
import Header from "../../components/header";
import ImageOfTheDay from "../../components/imageOfTheDay";
import fetchApi from "../../util/fetch";

const Home = ()=> {
  const [image, setImage] = useState({});
  
  useEffect(()=>{
    const loadPicture = async () => {
      try {
        const data = await fetchApi();
        setImage(data);      
      } catch (error) {
      }      
    };
    
    loadPicture().catch(null);
  }, []);

  return (
    <View style={styles.container}>
        <Header />
        <ImageOfTheDay {...image} />
    </View>
  );
};

export default Home;