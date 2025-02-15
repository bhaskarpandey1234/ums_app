// import React, { useState, useEffect } from 'react';
// import { useUserContext } from '../../context/UserContext';
// import { UserRequestDTO } from '../../types/UserTypes';

// const UserForm: React.FC<{ userId?: string }> = ({ userId }) => {
//   const { users, addUser, updateUser } = useUserContext();
//   const [username, setUsername] = useState('');
//   const [age, setAge] = useState(0);
//   const [hobbies, setHobbies] = useState<string[]>([]);

//   useEffect(() => {
//     if (userId) {
//       // Find the user based on userId if it's passed
//       const userToEdit = users.find((user) => user.id === userId);
//       if (userToEdit) {
//         setUsername(userToEdit.username);
//         setAge(userToEdit.age);
//         setHobbies(userToEdit.hobbies);
//       }
//     }
//   }, [userId, users]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newUser: UserRequestDTO = { username, age, hobbies };

//     if (userId) {
//       // If userId is passed, update the user
//       updateUser(userId, newUser);
//     } else {
//       // Otherwise, add a new user
//       addUser(newUser);
//     }

//     // Reset form after submission
//     setUsername('');
//     setAge(0);
//     setHobbies([]);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Age:
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(Number(e.target.value))}
//           required
//         />
//       </label>
//       <label>
//         Hobbies:
//         <input
//           type="text"
//           value={hobbies.join(', ')}
//           onChange={(e) => setHobbies(e.target.value.split(', '))}
//           required
//         />
//       </label>
//       <button type="submit">{userId ? 'Update' : 'Create'} User</button>
//     </form>
//   );
// };

// export default UserForm;






// import React, { useState, useEffect } from 'react';
// import { useUserContext } from '../../context/UserContext';
// import { UserRequestDTO } from '../../types/UserTypes';

// interface UserFormProps {
//   userId?: string;
//   onSuccess?: () => void;
// }

// const UserForm: React.FC<UserFormProps> = ({ userId, onSuccess }) => {
//   const { users, addUser, updateUser } = useUserContext();
//   const [username, setUsername] = useState('');
//   const [age, setAge] = useState(0);
//   const [hobbies, setHobbies] = useState<string[]>([]);

//   useEffect(() => {
//     if (userId) {
//       // Find the user based on userId if it's passed
//       const userToEdit = users.find((user) => user.id === userId);
//       if (userToEdit) {
//         setUsername(userToEdit.username);
//         setAge(userToEdit.age);
//         setHobbies(userToEdit.hobbies);
//       }
//     } else {
//       // Clear the form fields when no userId is provided
//       setUsername('');
//       setAge(0);
//       setHobbies([]);
//     }
//   }, [userId, users]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newUser: UserRequestDTO = { username, age, hobbies };

//     if (userId) {
//       // If userId is passed, update the user
//       updateUser(userId, newUser);
//     } else {
//       // Otherwise, add a new user
//       addUser(newUser);
//     }

//     // Reset form after submission
//     setUsername('');
//     setAge(0);
//     setHobbies([]);

//     // Call onSuccess callback if provided
//     if (onSuccess) {
//       onSuccess();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter username"
//           required
//         />
//       </label>
//       <label>
//       <span className="text-gray-700">Age:</span>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(Number(e.target.value))}
//           placeholder="Enter age"
//           required
//         />
//       </label>
//       <label >
//       <span className="text-gray-700">
//         Hobbies:
//         </span>
//         <input
//           type="text"
//           value={hobbies.join(', ')}
//           onChange={(e) => setHobbies(e.target.value.split(', '))}
//           placeholder=" playing, cooking"
//           required
//         />
//       </label>
//       <button
//        type="submit"   
//        className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//       >{userId ? 'Update' : 'Create'} User</button>
//     </form>
//   );
// };

// export default UserForm;




import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';
import { UserRequestDTO } from '../../types/UserTypes';

interface UserFormProps {
  userId?: string;
  onSuccess?: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ userId, onSuccess }) => {
  const { users, addUser, updateUser } = useUserContext();
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [hobbies, setHobbies] = useState<string[]>([]);

  useEffect(() => {
    if (userId) {
      const userToEdit = users.find((user) => user.id === userId);
      if (userToEdit) {
        setUsername(userToEdit.username);
        setAge(userToEdit.age);
        setHobbies(userToEdit.hobbies);
      }
    } else {
      setUsername('');
      setAge(0);
      setHobbies([]);
    }
  }, [userId, users]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserRequestDTO = { username, age, hobbies };

    if (userId) {
      updateUser(userId, newUser);
    } else {
      addUser(newUser);
    }

    setUsername('');
    setAge(0);
    setHobbies([]);
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Username:</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Age:</span>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Enter age"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Hobbies:</span>
        <input
          type="text"
          value={hobbies.join(', ')}
          onChange={(e) => setHobbies(e.target.value.split(', '))}
          placeholder="Enter hobbies separated by commas"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {userId ? 'Update' : 'Create'} User
      </button>
    </form>
  );
};

export default UserForm;