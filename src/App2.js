// import "./styles.css";
// import { useState, useEffect } from "react";

// function Main() {
//   const [name, updateName] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => updateName(data));
//   }, []);
//   return (
//     <div>
//       {/* <div className="">
//         <h1>ROBOFANS</h1>
//         <nav className="navbar navbar-dark bg-primary">
//           <input
//             class="form-control me-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//         </nav>
//       </div> */}

//       {/* {name.map((event) => {
//         return (
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             <div className="col">
//               <div className="card">
//                 <img
//                   src="https://robohash.org/id?100x100"
//                   className="card-img-top"
//                   alt="..."
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       })} */}
//       <div>
//         <h2>List of GitHub Users</h2>
//         <div className="container-fluid mt-5">
//           <div className="row text-center">
//             {name.map((curElem) => {
//               let str = `https://robohash.org/${curElem.id} ?200x200`;
//               console.log(str);
//               return (
//                 <div className="col-10 col-md-4 mt-5">
//                   <div className="card p-2">
//                     <div className="d-flex align-items-center">
//                       <div className="image">
//                         {" "}
//                         <img
//                           src={str}
//                           className="rounded"
//                           width="155"
//                           alt="..."
//                         />{" "}
//                       </div>
//                       <div className="ml-3 w-100">
//                         <h4 className="mb-0 mt-0 textLeft"> </h4>

//                         <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
//                           <div className="d-flex flex-column">
//                             <span className="articles">Name</span>{" "}
//                             <span className="number1">{curElem.name}</span>{" "}
//                           </div>
//                           <div className="d-flex flex-column">
//                             <span className="followers">Email</span>{" "}
//                             <span className="number2">{curElem.email}</span>{" "}
//                           </div>
//                           <div className="d-flex flex-column">
//                             <span className="rating">Rating</span>{" "}
//                             <span className="number3">{curElem.id}</span>{" "}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }
