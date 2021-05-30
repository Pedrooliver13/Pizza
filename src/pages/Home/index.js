import { Content } from '../../styles/container';

import Step1 from '../Step1';
import SectionMain from "../../components/SectionMain";

import { pizzas } from "../../services/pizza.json";

const Home = () => {
  function getRandomNumber(totalLength) {
    const randomNumber = Math.floor(Math.random() * (totalLength - 1));
    return randomNumber;
  }
  
  function getFeaturedItem(results) {
    let randomNumber = getRandomNumber(results.length);
    let featuredItem = results[randomNumber];
  
    return featuredItem;
  }

  return (
    <Content>
      <SectionMain data={getFeaturedItem(pizzas)}/>
      <Step1 />
    </Content>
  );
};

export default Home;
