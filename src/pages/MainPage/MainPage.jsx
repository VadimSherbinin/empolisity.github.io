import './mainPage.scss'
import { Intro } from '../../Components/Intro/Intro';
import { OrdersBlock } from '../../Components/OrdersBlock/OrdersBlock';

export const MainPage = () => {
    return (
        <div className="page">
            <Intro/>
            <OrdersBlock/>        
        </div>
    );
};