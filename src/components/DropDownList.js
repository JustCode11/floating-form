import React, { useState, useRef, useEffect } from 'react'
import styles from "../styles/dropDownList.module.css";
import arrowBottomIcon from "../assets/icons/arrow-bottom-icon.svg";

function useOutsideClickHandler(ref, show, setShow, setArrowIcon) {
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                if (show === styles.show) {
                    setShow(styles.notShow);
                    setArrowIcon(styles.closeContent);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, show, setShow, setArrowIcon]);
}

function DropDownList(props) {
    const [show, setShow] = useState(styles.notShow);
    const [arrowIcon, setArrowIcon] = useState();
    const { placeholder, items } = props;
    const wrapperRef = useRef(null);
    useOutsideClickHandler(wrapperRef, show, setShow, setArrowIcon);
    const ddFunction = (e) => {
        e.preventDefault();
        if (show === styles.notShow) {
            setShow(styles.show);
            setArrowIcon(styles.openContent);
        } else {
            setShow(styles.notShow);
            setArrowIcon(styles.closeContent);
        }
    }
    return (
        <div className={styles.dropdown} ref={wrapperRef}>
            <button onClick={ddFunction} className={styles.dropbtn}>
                {placeholder}
                <img className={`${styles.arrowIcon} ${arrowIcon} ${styles.arrowAnimation}`} src={arrowBottomIcon} alt="arrow-icon" />
            </button>
            <div id="myDropDown" className={`${styles.dropdownContent} ${show}`}>
                {items && items.map((item, index) => {
                    return (
                        <div key={index} className={styles.dropdownItem}>{item}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default DropDownList
