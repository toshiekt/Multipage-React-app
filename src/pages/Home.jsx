import { Link } from 'react-router-dom';

export const USERS_DATA = [
  { id: '1', name: 'Dalmas Mghetto', role: 'Data Scientist', bio: 'Turning raw data into actuable insights.' },
  { id: '2', name: 'Salma Saumu', role: 'Front-end Developer', bio: 'Passionate about attractive user interfaces.' },
  { id: '3', name: 'Mutambayi Oscarzola', role: 'CyberSecurity Analyst', bio: 'Securing systems and networks effectively.' },
  { id: '4', name: 'Charles Otosti', role: 'UI Designer', bio: 'Designing simple and usable interfaces.' },
  { id: '5', name: 'Mohammed Kuti', role: 'Ethical Hacker', bio: 'Retrieving data with utmost precision.' }
];

function Home() {
  return (
    <div>
      <h1>User Profiles</h1>
      <div className="profile-grid">
        {USERS_DATA.map((user) => (
          <div key={user.id} className="profile-card">
            <h3>{user.name}</h3>
            <p className="role">{user.role}</p>
            <Link to={`/profile/${user.id}`} className="view-btn">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
