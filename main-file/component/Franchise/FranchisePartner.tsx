// import React from "react";
// import { ServiceType } from "@/types";

// interface Props {
//   services: ServiceType[];
// }

// const FranchisePartner = ({ services }: Props) => {
//   return (
//     <div>
//       <section className="franchise-partner">
//         <h1 className="titles">Why Partner with ORN-AI</h1>
//         <hr />
//         <br />
//         <ul className="items-list">
//           {services.map((items, index) => (
//             <li key={index} className="items-list">
//               {/* <span className="tick-mark">✔</span> */}
//               <div className="item-content">
//                 <h2 className="title">{items.title}</h2>
//                 <p className="description">{items.desc}</p>
//                 <br />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default FranchisePartner;import React from "react";
import { ServiceType } from "@/types";

interface Props {
  services: ServiceType[];
}

const FranchisePartner = ({ services }: Props) => {
  return (
    <div>
      <section className="franchise-partner">
        <h1 className="titles">Why Partner with ORN-AI</h1>
        <hr />
        <br />
        <div className="cards-container">
          {services.map((item, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                <i className="card-icon">{item.icon}</i>
              </div>
              <div className="card-content">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FranchisePartner;
