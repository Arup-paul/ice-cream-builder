import React from 'react'
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={[classes.container,'container'].join(' ')} >
                <div>
                    Copyright &copy; 2021.
                </div>
                <div className="textRight">
                    Developed <span className="red">&hearts;</span> by
                    <a
                        href="https://github.com/Arup-paul/"
                        target="_blank"
                    >Arup Paul</a
                    >
                </div>
            </div>
        </footer>
    )
}

export default Footer;