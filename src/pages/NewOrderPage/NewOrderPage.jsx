// import { useState, useEffect, useRef } from 'react'
// import * as itemsAPI from '../../utilities/items-api';
// import * as ordersAPI from '../../utilities/orders-api';
// import './NewOrderPage.css';
// import { Link } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
// import MenuList from '../../components/MenuList/MenuList';
// import CategoryList from '../../components/CategoryList/CategoryList';
// import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut.jsx';

// export default function NewOrderPage({ user, setUser }) {
//     const [menuItems, setMenuItems] = useState([]);
//     const [activeCat, setActiveCat] = useState(['']);
//     const [cart, setCart] = useState(null);
//     const categoriesRef = useRef([]);

//     useEffect(function() {
//         async function getItems() {
//             const items = await itemsAPI.getAll();
//             categoriesRef.current = [...new Set(items.map(item => item.category.name))]
//             setMenuItems(items);
//             setActiveCat(categoriesRef.current[0]);
//         }
//         getItems();

//         async function getCart() {
//             const cart = await ordersAPI.getCart();
//             setCart(cart)
//         }
//         getItems();

//     }, []);


//     return (
//         <main className="NewOrderPage">
//             <aside>
                
//                 <CategoryList
//                   categories={categoriesRef.current}
//                   activeCat={activeCat}
//                   setActiveCat={setActiveCat}
//                 />
//                 <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
//                 <UserLogOut user={user} setUser={setUser} />
//             </aside>
//             <MenuList
//                 menuItems={menuItems.filter(item => item.category.name === activeCat)}
//             />
//             <OrderDetail />
//         </main>
//     );
// }