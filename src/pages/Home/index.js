import Dough from '../Dough';
import SectionMain from "../../components/SectionMain";

import { getFeaturedItem } from '../../utils';
import { Content } from '../../styles/container';
import { pizzas } from "../../services/pizza.json";

const Home = () => {
  return (
    <Content>
      <SectionMain data={getFeaturedItem(pizzas)}/>
      <Dough />
    </Content>
  );
};

export default Home;
