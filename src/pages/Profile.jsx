import { useParams, Link } from 'react-router-dom';
import { USERS_DATA } from './Home';

function Profile() {
  const { id } = useParams();
  const user = USERS_DATA.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="error-container">
        <h2>User Not Found</h2>
        <p>The profile you are looking for does not exist.</p>
        <Link to="/" className="back-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="profile-details">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h2>{user.name}</h2>
      <span className="badge">{user.role}</span>
      <div className="bio-section">
        <h3>Biography</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

export default Profile;
