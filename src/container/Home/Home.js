import Aux from '../../HOC/Aux_container';
import Header from '../../components/Header/Header';
import Save from '../Save/save';
import Deck from '../../components/Deck/Deck';
import DrawCard from '../../components/Draw-cards/Draw-cards';
import Hand from '../../components/Hand/Hand';

function Home() {
  return (
    <Aux>
      <div class="container">
      <Header></Header>
        <div class="row">
          <div class="col-md-4"><Deck></Deck></div>
          <div class="col-md-4"><Save></Save></div>
          <div class="col-md-4"><Hand></Hand></div>
        </div>
        <div class="row">
          <div class="col-md-12"><DrawCard></DrawCard></div>
        </div>
      </div>
    </Aux>
  );
}

export default Home;
