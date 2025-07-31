javascript
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  const patientData = {
    name: "John Smith",
    id: "PT001",
    age: 35,
    bloodType: "O+",
    phone: "+1 (555) 123-4567",
    email: "john.smith@email.com"
  };

  const appointmentsData = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2024-08-15",
      time: "10:00 AM",
      status: "Confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "General Medicine",
      date: "2024-08-20",
      time: "2:30 PM",
      status: "Pending"
    }
  ];

  useEffect(() => {
    setUser(patientData);
    setAppointments(appointmentsData);
  }, []);

  const Dashboard = () => (
    <div className="dashboard">
      <h2>Welcome back, {user?.name}</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Upcoming Appointments</h3>
          <p className="stat-number">{appointments.length}</p>
        </div>
        <div className="stat-card">
          <h3>Medical Records</h3>
          <p className="stat-number">12</p>
        </div>
        <div className="stat-card">
          <h3>Prescriptions</h3>
          <p className="stat-number">3</p>
        </div>
        <div className="stat-card">
          <h3>Test Results</h3>
          <p className="stat-number">5</p>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-date">Aug 10</span>
            <span className="activity-desc">Blood test results available</span>
          </div>
          <div className="activity-item">
            <span className="activity-date">Aug 8</span>
            <span className="activity-desc">Appointment scheduled with Dr. Johnson</span>
          </div>
          <div className="activity-item">
            <span className="activity-date">Aug 5</span>
            <span className="activity-desc">Prescription refilled</span>
          </div>
        </div>
      </div>
    </div>
  );

  const Appointments = () => (
    <div className="appointments">
      <div className="section-header">
        <h2>My Appointments</h2>
        <button className="btn-primary">Book New Appointment</button>
      </div>
      
      <div className="appointments-list">
        {appointments.map(appointment => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-info">
              <h3>{appointment.doctor}</h3>
              <p className="specialty">{appointment.specialty}</p>
              <div className="appointment-details">
                <span className="date">{appointment.date}</span>
                <span className="time">{appointment.time}</span>
              </div>
            </div>
            <div className="appointment-status">
              <span className={`status ${appointment.status.toLowerCase()}`}>
                {appointment.status}
              </span>
              <div className="appointment-actions">
                <button className="btn-secondary">Reschedule</button>
                <button className="btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MedicalRecords = () => (
    <div className="medical-records">
      <h2>Medical Records</h2>
      <div className="records-grid">
        <div className="record-card">
          <h3>Blood Test Results</h3>
          <p className="record-date">August 10, 2024</p>
          <p className="record-status">Normal</p>
          <button className="btn-link">View Details</button>
        </div>
        <div className="record-card">
          <h3>X-Ray Report</h3>
          <p className="record-date">July 25, 2024</p>
          <p className="record-status">Normal</p>
          <button className="btn-link">View Details</button>
        </div>
        <div className="record-card">
          <h3>Annual Physical</h3>
          <p className="record-date">July 15, 2024</p>
          <p className="record-status">Completed</p>
          <button className="btn-link">View Details</button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'appointments': return <Appointments />;
      case 'records': return <MedicalRecords />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>HealthCare Portal</h1>
          <div className="user-info">
            <span>Welcome, {user?.name}</span>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="app-container">
        <nav className="sidebar">
          <ul className="nav-menu">
            <li className={activeTab === 'dashboard' ? 'active' : ''}>
              <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
            </li>
            <li className={activeTab === 'appointments' ? 'active' : ''}>
              <button onClick={() => setActiveTab('appointments')}>Appointments</button>
            </li>
            <li className={activeTab === 'records' ? 'active' : ''}>
              <button onClick={() => setActiveTab('records')}>Medical Records</button>
            </li>
            <li>
              <button onClick={() => setActiveTab('prescriptions')}>Prescriptions</button>
            </li>
            <li>
              <button onClick={() => setActiveTab('messages')}>Messages</button>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;