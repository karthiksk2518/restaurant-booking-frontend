// import { useState } from 'react';
// import BookingForm from '../components/BookingForm';
// import BookingSummary from '../components/BookingSummary';
// import AvailabilityDisplay from '../components/AvailabilityDisplay';
// import styles from '../styles/index.module.css';

// export default function Home() {
//     const [view, setView] = useState('form'); // 'form', 'summary', 'availability'
//     const [bookingData, setBookingData] = useState(null);

//     const handleBookingSuccess = (data) => {
//         setBookingData(data);
//         setView('summary');
//     };

//     return (
//         <div className={styles.container}>
//             {view === 'form' && (
//                 <BookingForm
//                     onBookingSuccess={handleBookingSuccess}
//                     onCheckAvailability={() => setView('availability')}
//                 />
//             )}
//             {view === 'summary' && (
//                 <BookingSummary
//                     booking={bookingData}
//                     onBackToForm={() => setView('form')}
//                 />
//             )}
//             {view === 'availability' && (
//                 <AvailabilityDisplay onBackToForm={() => setView('form')} />
//             )}
//         </div>
//     );
// }




import { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSummary from '../components/BookingSummary';
import AvailabilityDisplay from '../components/AvailabilityDisplay';
import styles from '../styles/index.module.css';

export default function Home() {
    const [view, setView] = useState('form'); // 'form', 'summary', 'availability'
    const [bookingData, setBookingData] = useState(null);

    const handleBookingSuccess = (data) => {
        setBookingData(data);
        setView('summary');
    };

    return (
        <div className={styles.container}>
            {view === 'form' && (
                <BookingForm
                    onBookingSuccess={handleBookingSuccess}
                    onCheckAvailability={() => setView('availability')}
                />
            )}
            {view === 'summary' && (
                <BookingSummary
                    booking={bookingData}
                    onBackToForm={() => setView('form')}
                />
            )}
            {view === 'availability' && (
                <AvailabilityDisplay onBackToForm={() => setView('form')} />
            )}
        </div>
    );
}
