// import React, { useState } from 'react';
// import { useUserContext } from '../../context/UserContext';
// import UserForm from './UserForm';

// const UserList: React.FC = () => {
//   const { users, removeUser } = useUserContext();
//   const [editingUserId, setEditingUserId] = useState<string | undefined>(undefined);

//   const handleEdit = (userId: string) => {
//     setEditingUserId(userId); // Open the UserForm in edit mode
//   };

//   const handleDelete = (userId: string) => {
//     removeUser(userId); // Remove user
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.length === 0 ? (
//         <p>No users available.</p>
//       ) : (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <strong>{user.username}</strong> (Age: {user.age}) - Hobbies: {user.hobbies.join(', ')}
//               <button onClick={() => handleEdit(user.id)}>Update</button>
//               <button onClick={() => handleDelete(user.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <h2>{editingUserId ? 'Edit User' : 'Add User'}</h2>
//       <UserForm userId={editingUserId} />
//     </div>
//   );
// };

// export default UserList;

// import React, { useState } from 'react';
// import { useUserContext } from '../../context/UserContext';
// import UserForm from './UserForm';

// const UserList: React.FC = () => {
//   const { users, removeUser } = useUserContext();
//   const [editingUserId, setEditingUserId] = useState<string | undefined>(undefined);

//   const handleEdit = (userId: string) => {
//     setEditingUserId(userId); // Open the UserForm in edit mode
//   };

//   const handleDelete = (userId: string) => {
//     removeUser(userId); // Remove user
//   };

//   const handleUpdateSuccess = () => {
//     setEditingUserId(undefined); // Reset editing state after successful update
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.length === 0 ? (
//         <p>No users available.</p>
//       ) : (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <strong>{user.username}</strong> (Age: {user.age}) - Hobbies: {user.hobbies.join(', ')}
//               <button onClick={() => handleEdit(user.id)}>Update</button>
//               <button onClick={() => handleDelete(user.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {editingUserId && (
//         <>
//           <h2>Edit User</h2>
//           <UserForm userId={editingUserId} onSuccess={handleUpdateSuccess} />
//         </>
//       )}
//     </div>
//   );
// };

// export default UserList;




// import React, { useState } from 'react';
// import { useUserContext } from '../../context/UserContext';
// import UserForm from './UserForm';
// import { toast } from 'react-toastify'; // Import for notifications

// const UserList: React.FC = () => {
//   const { users, removeUser, error } = useUserContext();
//   const [editingUserId, setEditingUserId] = useState<string | undefined>(undefined);

//   const handleEdit = (userId: string) => {
//     setEditingUserId(userId); // Open the UserForm in edit mode
//   };

//   const handleDelete = (userId: string) => {
//     // Confirmation dialog
//     const confirmed = window.confirm('Are you sure you want to delete this user?');
//     if (confirmed) {
//       removeUser(userId); // Remove user
//       toast.success('User deleted successfully!'); // Success notification
//     } else {
//       toast.info('User deletion canceled'); // Info notification for cancellation
//     }
//   };

//   const handleUpdateSuccess = () => {
//     setEditingUserId(undefined); // Reset editing state after successful update
//     toast.success('User updated successfully!'); // Success notification
//   };

//   // Error handling (if there's an error in the UserContext)
//   if (error) {
//     toast.error(`Error: ${error}`); // Error notification
//   }

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.length === 0 ? (
//         <p>No users available.</p>
//       ) : (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <strong>{user.username}</strong> (Age: {user.age}) - Hobbies: {user.hobbies.join(', ')}
//               <button
//                   className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"

//               onClick={() => handleEdit(user.id)}>Update</button>
//               <button
//                   className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"

//               onClick={() => handleDelete(user.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {editingUserId && (
//         <>
//           <h2>Edit User</h2>
//           <UserForm userId={editingUserId} onSuccess={handleUpdateSuccess} />
//         </>
//       )}
//     </div>
//   );
// };

// export default UserList;



import React, { useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import UserForm from './UserForm';
import { toast } from 'react-toastify';

const UserList: React.FC = () => {
  const { users, removeUser, error } = useUserContext();
  const [editingUserId, setEditingUserId] = useState<string | undefined>(undefined);

  const handleEdit = (userId: string) => setEditingUserId(userId);

  const handleDelete = (userId: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      removeUser(userId);
      toast.success('User deleted successfully!');
    } else {
      toast.info('User deletion canceled');
    }
  };

  const handleUpdateSuccess = () => {
    setEditingUserId(undefined);
    toast.success('User updated successfully!');
  };

  if (error) {
    toast.error(`Error: ${error}`);
  }

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">User List</h2>
      {users.length === 0 ? (
        <p className="text-gray-500">No users available.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-white shadow rounded-md p-4"
            >
              <span>
                <strong>{user.username}</strong> (Age: {user.age}) - Hobbies:{' '}
                {user.hobbies.join(', ')}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {editingUserId && (
        <>
          <h2 className="text-lg font-medium text-gray-900 mt-6 mb-4">Edit User</h2>
          <UserForm userId={editingUserId} onSuccess={handleUpdateSuccess} />
        </>
      )}
    </div>
  );
};

export default UserList;
