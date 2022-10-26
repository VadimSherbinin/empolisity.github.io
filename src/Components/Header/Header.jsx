import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../Assets/Logo.png";
import { useEffect, useState } from "react";
import { useResizing } from "../../hooks/useResize";

export const Header = () => {
  const [menu, setMenu] = useState(true);
  const { widthWindow } = useResizing();

  console.log(widthWindow);

  useEffect(() => {
    if (widthWindow > 645) {
      setMenu(true);
    } else {
        setMenu(false);
    }
  }, [widthWindow]);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content-logo">
          <img src={Logo} alt="logo" />
        </div>
        {menu ? (
          <div className="header__content-links">
            <Link to="">Бизнес</Link>
            <Link to="">О нас</Link>
            <Link to="">Цены</Link>
            <Link to="">Оформить заказ</Link>
            <div
              className="header__content--close"
              onClick={(menu) => setMenu(!menu)}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div className="header__burger" onClick={(menu) => setMenu(menu)}>
            <span className="header__burger--line"></span>
            <span className="header__burger--line"></span>
            <span className="header__burger--line"></span>
          </div>
        )}
      </div>
    </div>
  );
};
