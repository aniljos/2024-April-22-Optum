import { useEffect } from 'react';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

const ListProducts = () => {


    const products: any[] =[]; 
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        
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