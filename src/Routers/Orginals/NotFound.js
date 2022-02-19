import React from 'react'
import Styles from  "../../Assets/Css/mystyle.module.css";
import {Link} from 'react-router-dom'



function NotFound() {
    return (
        <div className={Styles.NotFoundContainer} onMouseOver={handelChange}>
            <div className={Styles.Content}>
                <h2>404</h2>
                <h4>
                    صفحه مورد نظر در عرصه موزیک پیدا نشد
                </h4>
                <p>
                    صفحه مورد نظر شما وجود ندارد ممکن است آدرس را اشتباه گرفته اید یا صفحه مورد نظر شما نقل مکان کرده است
                </p>

                <Link to="/" className={Styles.NotFoundButton}>بازگشت به صفحه اصلی</Link>

            </div>
        </div>
    )
}

const  handelChange = ()=> {
    const container = document.getElementsByClassName(Styles.NotFoundContainer)[0];
    window.onmouseover = function (e) {
        const x = - e.clientX/.3,
            y = - e.clientY/.3;
        container.style.backgroundPositionX = x + 'px';
        container.style.backgroundPositionY = y + 'px';

    };
};


export default NotFound