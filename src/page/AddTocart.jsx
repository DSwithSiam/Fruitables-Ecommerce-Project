import { useEffect, useState } from "react"

export function AddTocart() {

    const [cartItem, setCartItem] = useState([]);
    const cartItems = JSON.parse(localStorage.getItem("product")) || [];
    const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice with 0

    useEffect(() => {
        // Calculate total price when cartItem changes
        let totalPrice = 0;
        cartItem.forEach(item => {
            totalPrice += item.price;
        });
        setTotalPrice(totalPrice);
    }, [cartItem]); // Trigger effect when cartItem changes

    console.log(totalPrice);


    
    useEffect(() => {
        if (cartItems.length > 0) {
            fetch('https://fruitables-api.onrender.com/product/list/')
                .then(res => res.json())
                .then(data => {
                    // Filter the product data based on the IDs in cartItems
                    const filteredData = data.filter(product => cartItems.includes(product.id));
                    setCartItem(filteredData);
                    // You can set the filtered data to state or perform other actions here
                })
                .catch(error => console.error('Error fetching product data:', error));
        }
    }, []); // Ensure useEffect runs when cartItems changes
    

    return (
        <>
            <div className="w-10/12 mx-auto my-20">
                <h2 className="text-3xl font-semibold">Shopping</h2>
                <div className="bg-gray-100 mt-3">
                    {
                        cartItem.length > 0? cartItem.map(e => <div className="flex justify-between items-center p-3 ">
                        <img className="w-20" src={e.image} alt="" />
                        <div>
                            <h2 className="text-2xl font-semibold">{e.title}</h2>
                            <h3 className="font-semibold mt-2">{e.min_weight}kg</h3>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{e.price}$</h2>
                        </div>
                        <button className="bg-red-500 text-white p-2 rounded-md">Delete</button>
                    </div> ) 
                    :
                    <h2 className="text-center py-10 text-4xl text-red-500 ">Not Found !!!</h2>
                    }
                    
                    <hr />
                    <div className="my-2">
                        <h2 className="text-right p-2 font-semibold">Total Price : <span>{totalPrice}$</span> <button className="bg-blue-500 text-white p-2 rounded ml-2">Order Now </button></h2>

                    </div>
                </div>
            </div>
        </>
    )
}
