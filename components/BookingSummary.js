import styles from '../styles/bookingSummary.module.css';

const BookingSummary = ({ booking, onBackToForm }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Booking Confirmation</h1>
            <p className={styles.detail}><strong>Name:</strong> {booking.name}</p>
            <p className={styles.detail}><strong>Contact:</strong> {booking.contact}</p>
            <p className={styles.detail}>
                <strong>Date & Time:</strong> {new Date(booking.date).toLocaleString()}
            </p>
            <p className={styles.detail}><strong>Guests:</strong> {booking.guests}</p>
            <button className={styles.button} onClick={onBackToForm}>
                Make Another Booking
            </button>
        </div>
    );
};

export default BookingSummary;
