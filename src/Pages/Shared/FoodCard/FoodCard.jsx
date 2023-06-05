import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const FoodCard = ({item}) => {
    const {name,recipe,image,price, _id}=item;
    const {user}=useContext(AuthContext);
    const [, refatch]=useCart();
    const navigate=useNavigate();
    const location=useLocation();

    const handleAddToCart=item=>{
        console.log(item);
        if(user && user.email){
            const cartItem={menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    refatch(); //refetch cart to update the number of items
                    Swal.fire({
                        icon: 'success',
                        title: 'User Successfully Registered',
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            <p className='text-2xl font-bold bg-slate-900 text-white p-2 absolute right-0 top-0 mt-16 mr-16 rounded'>${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-100">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;