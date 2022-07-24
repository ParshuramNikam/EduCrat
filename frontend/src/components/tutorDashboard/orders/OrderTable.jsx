import React from "react";
import "./OrderTable.css";

const OrderTable = () => {
  return (
    <div className="order_table_container">
      <div style={{ overflowX: "auto" }}>
        <table className="order_table">
          <thead>
            <th>BUYER</th>
            <th>GIG</th>
            <th>DUE ON</th>
            <th>TOTAL</th>
            <th>STATUS</th>
          </thead>
          <tr>
            <td className="order_table_avatar_wrapper">
              <div className="order_table_student_avatar">
                <img width={30} height={30} src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt=""/>
              </div>
              <div className="order_table_student_name">parshu_nikam</div>
              
            </td>
            <td className="order_table_gig_title">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsa.".slice(0,40)+"..."}</td>
            <td>AUG 29</td>
            <td>$50</td>
            <td>IN PROGRESS</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
