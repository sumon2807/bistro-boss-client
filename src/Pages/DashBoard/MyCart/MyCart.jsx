import React from 'react';
import { Helmet } from 'react-helmet-async';
import CartTable from '../CartTable/CartTable';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete=item=>{
        console.log('object');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`, {
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
              .catch(error=>console.log(error))
            }
          })
    }
    return (
        <div>
            <Helmet>
                <title>Bistro | My Cart</title>
            </Helmet>
            <div className='flex justify-evenly mb-10'>
                <h2 className='text-2xl font-semibold uppercase'>Total Items: {cart.length}</h2>
                <h2 className='text-2xl font-semibold uppercase'>Total Price: ${total}</h2>
                <button className="btn btn-warning btn-xs font-bold">Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index)=> <CartTable
                            key={item._id}
                            item={item}
                            index={index}
                            handleDelete={handleDelete}
                            ></CartTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;