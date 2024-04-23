import { useEffect } from 'react';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../redux/productsReducer';

const ListProducts = () => {


    const products = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {

        dispatch(fetchProducts());
    
    }, []);

   return (
    <div>
        <h1>Products</h1>
        {products.map((product, index) => {
            return (
                <p key={index}>{product.name} - {product.price}</p>
            )
        }
        )}
    </div>
   )
        
}

export default ListProducts;