import React from "react";
import {MdOutlineDone,MdOutlineRemoveDone} from 'react-icons/md'

import '../HomeStyle/Tabs.css'
const Price = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Availability</th>
          <th>Basic</th>
          <th>Standart</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monthly Price</td>
          <td>$6.99</td>
          <td>$11.99</td>
          <td>$15.99</td>
        </tr>
        
        <tr>
          <td>HD available</td>
          <td><MdOutlineRemoveDone/></td>
          <td><MdOutlineDone/></td>
          <td><MdOutlineDone/></td>
        </tr>
        
        <tr>
          <td>Ultra HD available</td>
          <td><MdOutlineRemoveDone/></td>
          <td><MdOutlineRemoveDone/></td>
          <td><MdOutlineDone/></td>
        </tr>
        
        <tr>
          <td>Watch on your TV,tablet,Phone,and laptop</td>
          <td><MdOutlineDone/></td>
          <td><MdOutlineDone/></td>
          <td><MdOutlineDone/></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Price;
