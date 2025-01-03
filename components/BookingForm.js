import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/bookingForm.module.css';

const BookingForm = ({ onBookingSuccess, onCheckAvailability }) => {
    const [formData, setFormData] = useState({ name: '', contact: '', date: '', guests: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://restaurant-booking-backend-x2r6.onrender.com/api/bookings', formData);
            onBookingSuccess(response.data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error creating booking');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Book a Table</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Book Now</button>
            </form>
            <button
                className={styles.availabilityButton}
                onClick={onCheckAvailability}
            >
                Check Availability
            </button>
        </div>
    );
};

export default BookingForm;
