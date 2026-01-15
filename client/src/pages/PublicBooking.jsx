import { useParams } from "react-router-dom";
import MonthCalendar from "../components/calendar/MonthCalendar";
import BookingForm from "../components/booking/BookingForm";

const PublicBooking = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch the event details using the slug.
  // We'll use placeholders that match the Calendly style.
  const eventDetails = {
    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    duration: "30 min",
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px 20px',
      backgroundColor: '#f2f5f7' 
    }}>
      <div className="card" style={{ 
        display: 'flex', 
        maxWidth: '1000px', 
        width: '100%', 
        padding: 0, 
        overflow: 'hidden',
        minHeight: '600px'
      }}>
        
        {/* Left Side: Event Info */}
        <div style={{ 
          flex: '1', 
          padding: '40px', 
          borderRight: '1px solid var(--border-color)',
          backgroundColor: 'white'
        }}>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '20px' }}>
            ← Back
          </button>
          
          <h2 style={{ color: 'var(--text-muted)', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
            User Name
          </h2>
          <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>{eventDetails.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontWeight: '500', marginBottom: '15px' }}>
            <span>🕒</span> {eventDetails.duration}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontWeight: '500' }}>
            <span>🌎</span> India Standard Time
          </div>
          
          <p style={{ marginTop: '30px', color: 'var(--text-main)', lineHeight: '1.5' }}>
            Welcome! Please select a time that works best for our meeting.
          </p>
        </div>

        {/* Right Side: Booking Flow */}
        <div style={{ 
          flex: '1.5', 
          padding: '40px', 
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ alignSelf: 'flex-start', marginBottom: '24px', fontSize: '20px' }}>
            Select a Date & Time
          </h2>
          
          <div style={{ width: '100%' }}>
            {/* The Calendar Component */}
            <MonthCalendar eventSlug={slug} />
            
            {/* The Form Component - usually shown after a time is picked */}
            <div style={{ marginTop: '30px', borderTop: '1px solid #f0f0f0', paddingTop: '30px' }}>
               <BookingForm eventSlug={slug} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicBooking;