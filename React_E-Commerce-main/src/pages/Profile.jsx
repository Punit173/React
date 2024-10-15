import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase'; // Import your Firestore and Firebase authentication
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components'; // Assuming you have Navbar and Footer components

const Profile = () => {
  const [user] = useAuthState(auth); // Get the currently logged-in user
  const [userData, setUserData] = useState(null); // State for user data
  const [loading, setLoading] = useState(true); // Loading state

  // Function to load user data from Firestore
  const loadUserData = async (userId) => {
    try {
      const userRef = doc(db, 'users', userId); // Reference to user document
      const userSnap = await getDoc(userRef); // Fetch the document

      if (userSnap.exists()) {
        setUserData(userSnap.data()); // Set user data state if document exists
      } else {
        console.log('No such document!'); // Log if no document found
      }
    } catch (error) {
      console.error('Error fetching user data: ', error); // Log any errors
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (user) {
      loadUserData(user.uid);
    } else {
      setLoading(false); // Stop loading if user is not authenticated
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2>User Profile</h2>
        {userData ? (
          <div className="profile-details">
            <h3>{userData.name}</h3> {/* Display user name */}
            <p><strong>Email:</strong> {user.email}</p> {/* Display user email */}
            <p><strong>Phone:</strong> {userData.phone || 'N/A'}</p> {/* Display user phone */}
            <p><strong>Address:</strong> {userData.address || 'N/A'}</p> {/* Display user address */}
            {/* Add any other relevant fields here */}
          </div>
        ) : (
          <p>No profile information available.</p> // Message when no user data is available
        )}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
