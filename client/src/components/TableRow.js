import React from 'react'

const TableRow= (lead) =>{

    return (
        
          <tr>
      <th scope="row">{lead._id}</th>
      <td>{lead.firstname}</td>
      <td>{lead.middlename}</td>
      <td>{lead.lastname}</td>
      <td>{lead.phonenumber}</td>
      <td>{lead.email}</td>
      <td>{lead.location}</td>
      <td>{/*isAdmin ? <button>Convert</button> : 'Converted'*/} <button>Convert</button></td>
    </tr>
        
    )
}

export default TableRow