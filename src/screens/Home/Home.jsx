import { View } from "react-native";
import { useEffect, useState } from "react";
import { sub, format } from "date-fns";

import styles from "./styles";
import Header from "../../components/header";
import ImageOfTheDay from "../../components/imageOfTheDay";
import fetchApi from "../../util/fetch";
import TinyListImages from "../../components/tinyListImages";

const Home = ()=> {
  const [image, setImage] = useState({});
  const [lastFiveimages, setLastFiveimages] = useState([]);
  
  useEffect(()=>{
    const loadPicture = async () => {
      try {
        const data = await fetchApi();
        setImage(data);      
      } catch (error) {
      }      
    };

    const loadLastFiveImages = async () => {
      try { 
        const currentDay = new Date();
        const from = format(sub(currentDay, { days: 1}), 'yyyy-MM-dd');
        const to = format(sub(currentDay, { days: 6}), 'yyyy-MM-dd');

        const data = await fetchApi(`&start_date=${to}&end_date=${from}`);
        data.reverse()
        setLastFiveimages(data);
      } catch (error) {
      }      
    };
    
    loadLastFiveImages().catch(null);
    loadPicture().catch(null);
  }, []);


  return (
    <View style={styles.container}>
        <Header />
        <ImageOfTheDay {...image} />
        <TinyListImages images={lastFiveimages}/>
    </View>
  );
};

export default Home;