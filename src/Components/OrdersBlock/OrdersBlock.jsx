import "./orders.scss";
import { OrdersForm } from "../OrdersForm/OrdersForm";
import { ReactComponent as Search } from "../../Assets/icons/search.svg";
import { ReactComponent as Percent } from "../../Assets/icons/percent.svg";
import { ReactComponent as SubtractRemove } from "../../Assets/icons/subtract-remove.svg";
import { ReactComponent as Message } from "../../Assets/icons/message.svg";
import { ReactComponent as Baks } from "../../Assets/icons/baks.svg";

export const OrdersBlock = () => {
  return (
    <div className="orders">
      <div className="content">
        <h1 className="orders__title">
          ОФОРМЛЕНИЕ <span>ЗАКАЗА</span>
        </h1>
        <p className="orders__subtitle">
          Перед заполнением формы ознакомьтесь с нашей схемой работы!
        </p>
        <div className="orders__list">
          <div className="orders__item">
            <div className="orders__item-icon">
              <Search />
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="orders__item">
            <div className="orders__item-icon">
              <Percent />
            </div>
            <p>Сonsecteturadipiscing elit</p>
          </div>
          <div className="orders__item">
            <div className="orders__item-icon">
              <SubtractRemove />
            </div>
            <p>Sed do eiusmod tempor</p>
          </div>
          <div className="orders__item">
            <div className="orders__item-icon">
              <Message />
            </div>
            <p>Esse cillum dolore eu fugiat</p>
          </div>
          <div className="orders__item">
            <div className="orders__item-icon">
              <Baks />
            </div>
            <p>Excepteur sint occaecat cupidatat non proident</p>
          </div>
        </div>
        <OrdersForm />
      </div>
    </div>
  );
};
