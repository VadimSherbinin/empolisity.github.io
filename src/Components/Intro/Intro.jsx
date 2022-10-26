import './intro.scss'

export const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__content">
                <div className="intro__content-title">
                    <span>LOREM IPSUM </span>DOLOR SIT<br />
                    AMET CONSECTETUR <span>ADIPISCING</span>
                </div>
                <ul className="intro__content-info">
                    <b>At vero eos et accusamus et iusto odio dignissimos ducimus!</b>
                    <li>- Totam rem aperiam eaque ipsa</li>
                    <li>- Sit voluptatem accusantium doloremque laudantium</li>
                    <li>- Sed ut perspiciatis, unde omnis iste natus error</li>
                </ul>
                <div className="intro__content-buttons">
                    <button>ЗАКАЗАТЬ</button>
                    <button>ПОДРОБНЕЕ</button>
                </div>
            </div>
        </div>
    );
};
