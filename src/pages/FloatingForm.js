import React, { useRef } from 'react'
import DropDownList from "../components/DropDownList";
import styles from "../styles/floatingForm.module.css";

function FloatingForm() {
    const ddItems = ["Test1", "Test2"];
    const cardFront = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        cardFront.current.style.transform = "rotateY(180deg)";
    }
    return (
        <div className={styles.bgPicture}>
            <div className={styles.container}>
                <div ref={cardFront} className={styles.flipCardInner}>
                    <div className={`${styles.cardStyle} ${styles.whiteCard}`}>
                        <form className={styles.formStyle}>
                            <div className={styles.headerCardOneStyle}>Get in touch</div>
                            <div className={`${styles.formItem} ${styles.formItemWithLabel}`}>
                                <label className={styles.labelText}>Name</label>
                                <input className={styles.inputField} type="text" name="name" autoComplete="off" />
                            </div>
                            <hr className={`${styles.partingLine} ${styles.greyLine}`} />
                            <div className={`${styles.formItem} ${styles.formItemWithLabel}`}>
                                <label className={styles.labelText}>Email</label>
                                <input className={`${styles.inputField} ${styles.blueText}`} type="text" name="email" autoComplete="off" />
                            </div>
                            <hr className={`${styles.partingLine} ${styles.greyLine}`} />
                            <div className={styles.formItem}>
                                <input className={styles.inputField} type="text" placeholder="Company" name="company" autoComplete="off" />
                            </div>
                            <hr className={`${styles.partingLine} ${styles.greyLine}`} />
                            <div className={styles.formItemDDL}>
                                <DropDownList placeholder="Interested in..." items={ddItems} />
                            </div>
                            <hr className={`${styles.partingLine} ${styles.greyLine}`} />
                            <div className={styles.formItem}>
                                <textarea className={styles.textAreaStyle} placeholder="Message" name="message" autoComplete="off" />
                            </div>
                            <div>
                                <div className={styles.buttonContainer}>
                                    <span className={`${styles.buttonText} ${styles.blueText}`}>SEND</span>
                                    <input className={`${styles.button} ${styles.formSubmit}`} onClick={handleSubmit} type="submit" value=""></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={`${styles.cardStyle} ${styles.blueCard}`}>
                        <div className={styles.headerCardTwoStyle}>
                            Thank You.
                            </div>
                        <hr className={`${styles.partingLine} ${styles.blackLine}`} />
                        <div className={styles.containerCardTwoStyle}>
                            <p className={styles.textCardTwoStyle}>We'll be in touch.</p>
                            <p className={styles.textCardTwoStyle}>Shortly!</p>
                        </div>
                        <div>
                            <div className={styles.buttonContainer}>
                                <span className={`${styles.buttonText} ${styles.whiteText}`}>NEXT</span>
                                <input className={`${styles.button} ${styles.formNext}`} type="submit" value=""></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloatingForm
