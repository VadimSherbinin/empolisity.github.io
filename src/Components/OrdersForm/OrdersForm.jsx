import { useState } from "react";
import { ReactComponent as Subtract } from "../../Assets/icons/subtract.svg";
import { Select } from "../Shared/Select/Select";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./ordersForm.scss";

export const OrdersForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [regulate, setRegulate] = useState({ value: 0 });

  return (
    <div className="form">
      <Select />
      <input
        type="email"
        className="form__fields"
        placeholder="Ваш e-mail"
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
      />
      <input
        type="email"
        className="form__fields"
        placeholder="Ваше имя"
        onChange={(e) => setName(e.currentTarget.value)}
        value={name}
      />
      <div className="form__fields">
        <div className="form__fields--slider-info">
          <p>Sed ut perspiciatis, unde omnis iste natus</p>
          <p>{regulate.value} %</p>
        </div>
        <div className="form__fields--slider-regulate">
          <InputRange
            maxValue={100}
            minValue={0}
            value={regulate.value}
            onChange={(value) => setRegulate({ value })}
          />
        </div>
      </div>
      <label className="form__fields file" onChange={() => {}} htmlFor="formId">
        <input name="" type="file" id="formId" hidden />
        <Subtract />
        ПРИКРЕПИТЬ ФАЙЛ
      </label>
      <button className="form__fields">ОТПРАВИТЬ</button>
    </div>
  );
};
