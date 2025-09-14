import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliverOrder, getAllOrder, shipOrder } from '../../../stateRedux/Admin/ActionAdminOrder';
import { Avatar, AvatarGroup, Button, Menu, MenuItem } from '@mui/material';

const OrdersTable = () => {
  const dispatch = useDispatch();

  const { adminorder } = useSelector(store => store)
  console.log("adminorder", adminorder)
  const [selectedOrderId, setSelectedOrderId] = useState(null); // for maintain orderId

  useEffect(() => {

    dispatch(getAllOrder());
    console.log(" order table in useeffet")

  }, [selectedOrderId,adminorder.deleteorder])

  //for status button
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event,orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
   
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const  handleConfirmedOrder=()=>{
  console.log("orderId",selectedOrderId)
  dispatch(confirmOrder(selectedOrderId))
  handleClose()
 }
 const handleShippedOrder=()=>{
  dispatch(shipOrder(selectedOrderId))
  handleClose();
 }
const  handleDelivered=()=>{
  dispatch(deliverOrder(selectedOrderId))
  handleClose();
}
const handleDeleteOrder=(id)=>{
  console.log("deleted id",id)
  dispatch(deleteOrder(id));
}
  return (
    <div>
      <h1>order table hai bhai</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Product Details</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">id</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Update</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminorder?.orders?.map((item) => (
              <tr key={item.id} className="text-center border-b">
                <td className="border p-2">
                  <AvatarGroup sx={{ justifyContent: "start" }}>
                    {item.orderItem?.map((orderitem) => <Avatar src={orderitem.product.imageUrl}></Avatar>)}
                  </AvatarGroup>

                </td>
                <td className="border p-2">
                  {item.orderItem?.map((orderitem) => <p>{orderitem.product.title}</p>)}
                </td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">${item.totalPrice}</td>
                <td className="border p-2">
                  <span className={`text-white rounded-full px-2
                   ${item.orderStatus === "PENDING" ? "bg-red-400" :
                    item.orderStatus === "CONFIRMED" ? "bg-green-400" :
                    item.orderStatus === "SHIPPED" ? "bg-blue-400" : 
                    item.orderStatus === "PLACED" ? "bg-green-500" : "bg-gray-400"
                    }`}>
                    {item.orderStatus}
                  </span>
                </td>

                <td className="border p-2">

                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    // onClick={handleClick}
                    onClick={(event) => handleClick(event, item.id)}
                  >
                    Status
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleConfirmedOrder}>Confirm Order</MenuItem>
                    <MenuItem onClick={handleShippedOrder}>Shipped order</MenuItem>
                    <MenuItem onClick={handleDelivered}>Delivered Order</MenuItem>
                  </Menu>
                </td>

                <td className="border p-2">{item.totalItem}</td>
                <td className="border p-2">

                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={()=> handleDeleteOrder(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* {product.products?.content?.length === 0 && (
                    <tr>
                      <td colSpan="6" className="text-center p-2 text-gray-500">
                        No products added yet.
                      </td>
                    </tr>
                  )} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersTable

