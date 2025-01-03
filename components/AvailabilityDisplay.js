import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/availabilityDisplay.module.css';

const AvailabilityDisplay = ({ onBackToForm }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availability, setAvailability] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkAvailability = async () => {
        if (!date || !time) return alert('Please select both date and time');
        
        setLoading(true);
        try {
            const response = await axios.get(`https://restaurant-booking-backend-x2r6.onrender.com/availability?date=${date}&time=${time}`);
            setAvailability(response.data);
        } catch (error) {
            alert('Error fetching availability');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Check Availability</h1>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={styles.input}
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={styles.input}
            />
            <button onClick={checkAvailability} className={styles.button}>
                Check
            </button>
            {loading && <p className={styles.loading}>Checking availability...</p>}
            {availability && (
                <div className={styles.result}>
                    <p className={styles.message}>Occupied seats: {availability.bookedSeats}</p>
                    <p className={styles.message}>Available seats: {availability.availableSeats}</p>
                    <p className={styles.message}>
                        Estimated future availability: {availability.futureAvailability || 'Calculating...'}
                    </p>
                </div>
            )}
            <button className={styles.button} onClick={onBackToForm}>
                Back to Booking Form
            </button>
        </div>
    );
};

export default AvailabilityDisplay;
