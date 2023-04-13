// import React, { useState } from "react";
// import "./Component.css";

// const Component = () => {
//   const arr = [{ id: 0, Name: "satyam", age: 20 }];

//   const arr1 = [{ id: 0, Name: "aaku", age: 19 }];

//   const [Name, setName] = useState(arr);
//   const [Name1, setName1] = useState(arr1);

//   const change = () => {
//     setName([]);
//   };

//   const change1 = () => {
//     setName1([]);
//   };
//   return (
//     <div>
//       <header>
//         <h1>TO-DO LIST </h1>
//         {Name.map((curElm) => {
//           return (
//             <h1 key={curElm.id}>
//               {" "}
//               name:{curElm.Name} age:{curElm.age}
//               <button className="btn" onClick={change}>
//                 click me
//               </button>
//             </h1>
            
//           );
//         })}
//         {Name1.map((curElm) => {
//           return (
//             <h1 key={curElm.id}>
//               {" "}
//               name:{curElm.Name} age:{curElm.age}
//               <button className="btn" onClick={change1}>
//                 click me
//               </button>
//             </h1>
//           );
//         })}
//       </header>
//     </div>
//   );
// };

// export default Component;
