import Localizacao from './componentes/Localizacao';
import Menu from './componentes/Menu';
import QuemSomos from './componentes/QuemSomos';
import Servicos from './componentes/Servicos';
import ScrollUp from './componentes/ScrollUp';
import Home from './componentes/Home';

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Servicos />
      <QuemSomos />
      <Localizacao />
      <ScrollUp />
    </>
  );
}

export default App;