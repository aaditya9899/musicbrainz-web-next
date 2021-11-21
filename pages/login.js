import React, {useCallback, useState} from "react";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import ScrollToTop from "../components/Utils/ScrollToTop/ScrollToTop";
import Login from "../components/Account/Login";
import {themeSetting} from "../components/Utils/Common";

export default function LoginPage(){
    const [ dark, setDark ] = useState(themeSetting);
    let theme = dark ? "theme-dark" : "theme-light";

    const toggleDarkMode = useCallback(function () {
        setDark(prevState => {
            const newState = !prevState;
            themeSetting(prevState);
            return newState;
        });
    }, []);

    return (
        <div>
            <Header theme={theme} switchActiveTheme={toggleDarkMode} isDarkThemeActive={dark}/>
            <Login theme={theme}/>
            <Footer theme={theme}/>
            <ScrollToTop
                icon="bi bi-caret-up-fill"
                backgroundColor = "#EB743B"
                position={{ bottom: "12%", right: "0%" }}
                hover={{ backgroundColor: "purple", opacity: "0.95" }}
                margin="24px"
            />
        </div>
    );
}
