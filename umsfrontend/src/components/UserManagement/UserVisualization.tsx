// import React from 'react';
// import ReactFlow, { Node, Edge } from 'reactflow'; // Import Node and Edge types
// import { useUserContext } from '../../context/UserContext';
// import 'reactflow/dist/style.css'; // Ensure that the React Flow CSS is loaded

// const UserVisualization: React.FC = () => {
//   const { users } = useUserContext();

//   if (users.length === 0) {
//     return <div>No users found</div>; // Show a message if no users are available
//   }
//   // Create nodes for each user
//   // const nodes: Node[] = users.map((user) => ({
//   //   id: user.id,
//   //   data: { label: `${user.username} (${user.age})` },
//   //   position: { x: Math.random() * 500, y: Math.random() * 500 },
//   // }));
//   const nodes: Node[] = users.flatMap((user) => [
//     {
//       id: user.id,  // Parent node for the user
//       data: { label: `${user.username} (${user.age})` },
//       position: { x: Math.random() * 500, y: Math.random() * 500 },
//     },
//     // Create child nodes for each hobby
//     ...user.hobbies.map((hobby, index) => ({
//       id: `${user.id}-hobby-${index}`,  // Unique id for each hobby node
//       data: { label: hobby },
//       position: { x: Math.random() * 500, y: Math.random() * 500 },
//     }))
//   ]);

//   // Create edges based on hobbies
//   const edges: Edge[] = users.flatMap((user) =>
//     user.hobbies.map((hobby, index) => ({
//       // id: `e${user.id}-${index}`,
//       id: `e${user.id}-hobby-${index}`,
//       source: user.id,
//       // target: `${user.id}-${index}`,
//       target: `${user.id}-hobby-${index}`,  // Target is the hobby child node
//       animated: true,
//       style: { stroke: 'blue', strokeWidth: 2 }, 
//     }))
//   );

//   // Pass nodes and edges to ReactFlow
//   // return <ReactFlow nodes={nodes} edges={edges} />;
//   return (
//     <div style={{ width: '100%', height: '500px' }}>
//       <ReactFlow nodes={nodes} edges={edges} />
//     </div>
//   );
  
// };

// export default UserVisualization;


import React from 'react';
import ReactFlow, {
  Node,
  Edge,
  useNodesState,
  Controls,
} from 'reactflow';
import { useUserContext } from '../../context/UserContext';
import 'reactflow/dist/style.css';

// Define User and Hobby types
interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

const UserVisualization: React.FC = () => {
  const { users } = useUserContext(); // Removed `setUsers` since it's not being used

  // State for nodes
  const [nodes] = useNodesState<Node[]>([]); // Removed `setNodes` since it’s not updated dynamically

  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }

  // Create nodes for users and their hobbies
  const userNodes: Node[] = users.flatMap((user) => [
    {
      id: user.id,
      data: { label: `${user.username} (${user.age})` },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      type: 'default',
    },
    ...user.hobbies.map((hobby, index) => ({
      id: `${user.id}-hobby-${index}`,
      data: { label: hobby },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      type: 'default',
    })),
  ]);

  // Create edges connecting users to their hobbies
  const userEdges: Edge[] = users.flatMap((user) =>
    user.hobbies.map((hobby, index) => ({
      id: `e${user.id}-hobby-${index}`,
      source: user.id,
      target: `${user.id}-hobby-${index}`,
      animated: true,
      style: { stroke: 'blue', strokeWidth: 2 },
    }))
  );

  return (
    <div style={{ height: '500px', border: '2px dashed #ddd', position: 'relative' }}>
      <ReactFlow nodes={userNodes} edges={userEdges}>
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default UserVisualization;





// import React, { useEffect } from 'react';
// import ReactFlow, {
//   Node,
//   Edge,
//   useNodesState,
//   Controls,
// } from 'reactflow';
// import { useUserContext } from '../../context/UserContext';
// import 'reactflow/dist/style.css';

// // Define the structure for node data
// interface UserNodeData {
//   label: string;
// }

// // Define User type
// interface User {
//   id: string;
//   username: string;
//   age: number;
//   hobbies: string[];
// }

// const UserVisualization: React.FC = () => {
//   const { users, updateUser } = useUserContext();

//   // Explicitly define the type for useNodesState as a more flexible type
//   const [nodes, setNodes] = useNodesState<Node<UserNodeData, string | undefined>[]>([]);

//   useEffect(() => {
//     const userNodes: Node<UserNodeData, string | undefined>[] = users.map((user) => ({
//       id: user.id,
//       data: { label: `${user.username} (${user.age})` },
//       position: { x: Math.random() * 500, y: Math.random() * 500 },
//       type: 'default',
//     }));

//     // Set the nodes using setNodes
//     setNodes(userNodes);
//   }, [users]);

//   const handleDrop = (event: React.DragEvent, nodeId: string) => {
//     event.preventDefault();
//     const hobby = event.dataTransfer.getData('hobby');
//     const user = users.find((user) => user.id === nodeId);
//     if (user && hobby && !user.hobbies.includes(hobby)) {
//       updateUser(user.id, { ...user, hobbies: [...user.hobbies, hobby] });
//     }
//   };

//   const handleDragOver = (event: React.DragEvent) => {
//     event.preventDefault();
//   };

//   const userEdges: Edge[] = users.flatMap((user) =>
//     user.hobbies.map((hobby, index) => ({
//       id: `e${user.id}-hobby-${index}`,
//       source: user.id,
//       target: `${user.id}-hobby-${index}`,
//       animated: true,
//       style: { stroke: 'blue', strokeWidth: 2 },
//     }))
//   );

//   return (
//     <div
//       style={{
//         height: '500px',
//         border: '2px dashed #ddd',
//         position: 'relative',
//       }}
//       onDragOver={handleDragOver}
//     >
//       <ReactFlow nodes={nodes} edges={userEdges}>
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export default UserVisualization;
