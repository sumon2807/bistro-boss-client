import React from 'react';
import { FaTrash, FaUserShield } from 'react-icons/fa';

const AllUsersTable = ({ user, index ,handleDelete, handleMakeAdmin}) => {
    const {_id, name, email}=user;
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{user.role === 'admin' ? 'admin' : 
                <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-green-500 text-white"><FaUserShield></FaUserShield></button>
                }
                </td>
                <td>
                    <button onClick={()=>handleDelete(user)} className="btn btn-ghost btn-sm bg-red-500 text-white"><FaTrash></FaTrash></button>
                </td>
            </tr>
        </>
    );
};

export default AllUsersTable;