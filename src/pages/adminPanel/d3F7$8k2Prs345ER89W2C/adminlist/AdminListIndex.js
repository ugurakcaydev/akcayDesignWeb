
import Navbar from '@/Components/Navbar/Navbar';
import React from 'react'
import Form from '@/Components/Form/Form';
function AdminListIndex(props) {
  console.log(props.data);
  return (
    <div>
      <Navbar />

      <div>
        {props.data.name}
      </div>
    </div>
  )
}

export default AdminListIndex