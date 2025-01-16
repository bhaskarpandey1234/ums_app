// import React from 'react';
// import { UserProvider } from './context/UserContext';
// import UserList from './components/UserManagement/UserList';
// import UserForm from './components/UserManagement/UserForm';
// import UserSidebar from './components/UserManagement/UserSidebar';
// import UserVisualization from './components/UserManagement/UserVisualization';

// const App: React.FC = () => {
//   return (
//     <UserProvider>
//       <div>
//         <h1>User Management System</h1>
//         <UserSidebar />
//         <UserForm onSubmit={(user) => console.log(user)} />
//         <UserList />
//         <UserVisualization />
//       </div>
//     </UserProvider>
//   );
// };

// export default App;

// import React from 'react';
// import UserForm from './components/UserManagement/UserForm';
// import UserSidebar from './components/UserManagement/UserSidebar';
// import UserList from './components/UserManagement/UserList';
// import UserVisualization from './components/UserManagement/UserVisualization';
// import { UserProvider } from './context/UserContext';
// import { ToastContainer } from 'react-toastify';

// const App: React.FC = () => {

  

//   return (<>
//   <ToastContainer/>
//     <UserProvider>
//       <div>
//         <h1>User Management System</h1>
//         <UserSidebar />
//         <UserForm />
//         <UserList />
//         <UserVisualization />
//       </div>
//     </UserProvider>
//     </>
//   );
// };

// export default App;



// import React from 'react';
// import UserForm from './components/UserManagement/UserForm';
// import UserSidebar from './components/UserManagement/UserSidebar';
// import UserList from './components/UserManagement/UserList';
// import UserVisualization from './components/UserManagement/UserVisualization';
// import { UserProvider } from './context/UserContext';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App: React.FC = () => {
//   return (
//     <UserProvider>
//       <div className="min-h-screen bg-gray-100">
//         <ToastContainer />
//         <header className="bg-white shadow">
//           <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//             <h1 className="text-3xl font-bold text-gray-900">User Management System</h1>
//           </div>
//         </header>
//         <main>
//           <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//             <div className="flex flex-col lg:flex-row gap-6">
//               <div className="lg:w-1/4">
//                 <UserSidebar />
//               </div>
//               <div className="lg:w-3/4">
//                 <div className="bg-white shadow sm:rounded-lg">
//                   <div className="px-4 py-5 sm:p-6">
//                     <h2 className="text-lg font-medium text-gray-900 mb-4">Add/Edit User</h2>
//                     <UserForm />
//                   </div>
//                 </div>
//                 <div className="mt-6 bg-white shadow sm:rounded-lg">
//                   <div className="px-4 py-5 sm:p-6">
//                     <h2 className="text-lg font-medium text-gray-900 mb-4">User List</h2>
//                     <UserList />
//                   </div>
//                 </div>
//                 <div className="mt-6 bg-white shadow sm:rounded-lg">
//                   <div className="px-4 py-5 sm:p-6">
//                     <h2 className="text-lg font-medium text-gray-900 mb-4">User Visualization</h2>
//                     <UserVisualization />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </UserProvider>
//   );
// };

// export default App;



import React from 'react';
import UserForm from './components/UserManagement/UserForm';
import UserSidebar from './components/UserManagement/UserSidebar';
import UserList from './components/UserManagement/UserList';
import UserVisualization from './components/UserManagement/UserVisualization';
import { UserProvider } from './context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-100">
        <ToastContainer />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">User Management System</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <UserSidebar />
              </div>
              <div className="lg:w-3/4">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Add/Edit User</h2>
                    <UserForm />
                  </div>
                </div>
                <div className="mt-6 bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    {/* <h2 className="text-lg font-medium text-gray-900 mb-4">User List</h2> */}
                    <UserList />
                  </div>
                </div>
                <div className="mt-6 bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">User Visualization</h2>
                    <UserVisualization />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </UserProvider>
  );
};

export default App;

