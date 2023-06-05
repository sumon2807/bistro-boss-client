import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AllUsersTable from '../AllUsersTable/AllUsersTable';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure]=useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleDelete=user=>{

    }

    const handleMakeAdmin=user=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>Bistro | All Users</title>
            </Helmet>
            <h2 className='text-2xl font-bold text-center my-4'>Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index)=> <AllUsersTable
                        key={user._id}
                        user={user}
                        index={index}
                        handleDelete={handleDelete}
                        handleMakeAdmin={handleMakeAdmin}
                        ></AllUsersTable>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;