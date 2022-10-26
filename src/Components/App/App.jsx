import { MainPage } from '../../pages/MainPage/MainPage';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer/>
    </div>
  );
}
