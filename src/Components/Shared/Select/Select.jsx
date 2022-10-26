import { useState } from 'react'
import { ReactComponent as ShevronUp } from '../../../Assets/icons/shevron.svg'
import './select.scss'

const data = [
    { id: 1, title: "Hello" },
    { id: 1, title: "Привет" },
    { id: 1, title: "Пока" },
    { id: 1, title: "Пока" },
    { id: 1, title: "Пока" },
    { id: 1, title: "Пока" },
    { id: 1, title: "Пока" },
    { id: 1, title: "Пока" },
    { id: 1, title: "Пока" },
    { id: 1, title: "Пока" },
    { id: 1, title: "Пока" },
]

export const Select = () => {

    const [currentValue, setCurrentValue] = useState({});
    const [options, setOptions] = useState(false);

    return (
        <div className="select">
            <div className="select__title"
                onClick={() => { setOptions(!options) }}
            >
                {currentValue?.title ? (
                    <div>{currentValue?.title}</div>
                ) : (
                    <div>Выберите группу</div>
                )}
                {options &&
                    <div className="select__drop-menu">
                        {data.map((item) => {
                            return (
                                <div
                                    className="select__drop-menu--items"
                                    onClick={() => { setCurrentValue({ ...item }) }
                                    }
                                    key={item.id}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
            <div className={options ? "select__btn" : "select__btn transform"}>
                <ShevronUp />
            </div>
        </div>
    );
};