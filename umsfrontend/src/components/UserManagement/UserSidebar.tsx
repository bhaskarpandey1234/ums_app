// import React from 'react';

// const UserSidebar: React.FC = () => {
//   const hobbies = ['Reading', 'Sports', 'Music', 'Cooking'];

//   return (
//     <div>
//       <h3>Available Hobbies</h3>
//       <ul>
//         {hobbies.map((hobby) => (
//           <li key={hobby} draggable>
//             {hobby}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserSidebar;

// import React from 'react';

// const UserSidebar: React.FC = () => {
//   const hobbies = ['Reading', 'Sports', 'Music', 'Cooking'];

//   const handleDragStart = (e: React.DragEvent, hobby: string) => {
//     e.dataTransfer.setData('hobby', hobby); // Attach hobby data to the drag event
//   };

//   return (
//     <div style={{ padding: '10px', border: '1px solid #ddd' }}>
//       <h3>Available Hobbies</h3>
//       <ul>
//         {hobbies.map((hobby) => (
//           <li
//             key={hobby}
//             draggable
//             onDragStart={(e) => handleDragStart(e, hobby)}
//             style={{ margin: '5px 0', cursor: 'grab' }}
//           >
//             {hobby}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserSidebar;


import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../utils/api'; // Import the fetchUsers function
import { UserResponseDTO } from '../../types/UserTypes'; // Import your types

const UserSidebar: React.FC = () => {
  const [hobbies, setHobbies] = useState<string[]>([]); // State for hobbies
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    // Fetch users and extract hobbies
    const loadHobbies = async () => {
      try {
        const users: UserResponseDTO[] = await fetchUsers(); // Get users from API

        // Extract all hobbies from users
        const allHobbies = users.flatMap((user) => user.hobbies); // Flatten all hobbies into a single array
        
        // Get unique hobbies
        const uniqueHobbies = Array.from(new Set(allHobbies));
        setHobbies(uniqueHobbies); // Set the unique hobbies state
        setError(null); // Reset error state if data is fetched successfully
      } catch (err) {
        console.error('Error fetching hobbies:', err);
        setError('Failed to load hobbies'); // Set error message
      }
    };

    loadHobbies(); // Call the function to load hobbies
  }, []); // Empty dependency array ensures this runs only once after the initial render

  const handleDragStart = (e: React.DragEvent, hobby: string) => {
    e.dataTransfer.setData('hobby', hobby); // Attach hobby data to the drag event
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #ddd' }}>
      <h3>Available Hobbies</h3>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {hobbies.map((hobby) => (
            <li
              key={hobby}
              draggable
              onDragStart={(e) => handleDragStart(e, hobby)}
              style={{ margin: '5px 0', cursor: 'grab' }}
            >
              {hobby}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSidebar;
