import './footer.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Qiwi } from "../../Assets/icons/qiwi.svg";
import { ReactComponent as Yandex } from "../../Assets/icons/yandex.svg";
import { ReactComponent as Web } from "../../Assets/icons/web.svg";
import { ReactComponent as VK } from "../../Assets/icons/vk.svg";
import { ReactComponent as Mail } from "../../Assets/icons/mail.svg";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <p className="footer__blocks">
                    © 2018 «LoremIpsum.net» Все права защищены.
                </p>
                <div className="footer__blocks">
                    <div className="footer__blocks-items pay">
                        <Qiwi />
                        <p>QIWI wallet</p>
                    </div>
                    <div className="footer__blocks-items pay">
                        <Yandex />
                        <p>Yandex Money</p>
                    </div>
                    <div className="footer__blocks-items pay">
                        <Web />
                        <p>Web Money</p>
                    </div>
                </div>
                <div className="footer__blocks">
                    <div className="footer__blocks-items">
                        <Mail />
                        <Link to="">info@ipsum228.com</Link>
                    </div>
                    <div className="footer__blocks-items">
                        <VK />
                        <Link to="">Мы вконтакте</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}