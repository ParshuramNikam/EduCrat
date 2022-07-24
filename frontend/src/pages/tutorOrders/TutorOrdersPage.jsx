import React from 'react';
import OrderTable from '../../components/tutorDashboard/orders/OrderTable';
import './TutorOrdersPage.css'

const TutorOrdersPage = () => {
  return (
    <div className='tutor_order_container'>
        <div className='tutor_order_title'>Manage Orders</div>
        <div className="tutor_order_filters">
            <button>ACTIVE</button>
            <button>COMPLETED</button>
            <button>CANCELED</button>
        </div>
        <OrderTable/></div>
  )
}

export default TutorOrdersPage