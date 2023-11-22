import React from 'react';
import './Dashboard.css';
import UserSearch from './UserSearch';
import RoomManagement from './RoomManagement';
import PaymentHistory from './PaymentHistory'; // import the PaymentHistory component
import AttendanceHistory from './AttendanceHistory'; // import the AttendanceHistory component
import GenerateQRButton from './qr';

const Dashboard = ({ selectedItem }) => {
    return (
        <section className="dashboard">
            <h1>{selectedItem === 'dashboard' ? 'Hostel Management Admin' : ''}</h1>
            {selectedItem === 'dashboard' && (
                <div className="dashboard-summary">

                </div>
            )}
            {selectedItem === 'user-search' && (
                <div className="user-search-placeholder">
                    <UserSearch />
                </div>
            )}
            {selectedItem === 'room-management' && (
                <div className="room-management-placeholder">
                    <RoomManagement />
                </div>
            )}
            {selectedItem === 'payment-history' && (
                <div className="payment-history-placeholder">
                    <PaymentHistory />
                </div>
            )}
            {selectedItem === 'attendance-history' && (
                <div className="attendance-history-placeholder">
                    <AttendanceHistory />
                </div>
            )}
            {selectedItem === 'qr' && (
                <div className="qr-history-placeholder">
                    <GenerateQRButton />
                </div>
            )}
            {selectedItem === 'dashboard' && (
                <div className="dashboard-image">
                    <img src="https://drive.google.com/uc?export=view&id=14ub8btkuyIBUWsSe7eXjPJQ4Scf9p_ct" alt="Hostel Management Admin Dashboard" />
                </div>
            )}
        </section>
    );
};

export default Dashboard;
