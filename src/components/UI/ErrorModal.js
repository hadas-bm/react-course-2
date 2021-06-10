import React from 'react';

import styles from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

const ErrorModal = ({ title, content, onCloseModal = () => { } }) => {

    return (
        <div className={styles.backdrop}>
            <Card className={styles.modal}>
                <div className={styles.header}> <h2>{title}</h2></div>
                <div className={styles.content}>{content}</div>
                <div className={styles.actions}>
                    <Button onClick={onCloseModal}>Okay</Button>
                </div>
            </Card>
        </div>
    );
}

export default ErrorModal;
