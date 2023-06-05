import React from 'react';
import { FaTrash } from 'react-icons/fa';

const CartTable = ({ item , index, handleDelete}) => {
    const { image, name, price}=item;
    
    return (
        <>
            <tr>
                <td>
                    {index + 1}
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {name} 
                </td>
                <td className='text-end '>${price}</td>
                <td>
                    <button className="btn btn-ghost">View</button>
                </td>
                <td>
                    <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm bg-red-500 text-white"><FaTrash></FaTrash></button>
                </td>
            </tr>
        </>
    );
};

export default CartTable;