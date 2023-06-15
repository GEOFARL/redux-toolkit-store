import { useEffect } from 'react';
import { CartContainer } from './components/CartContainer';
import { Navbar } from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { Modal } from './components/Modal';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
