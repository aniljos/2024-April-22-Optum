import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {removeItem} from '../redux/gadgetReducer';
import { CartItem } from "../model/CartItem";
import { useZustandStore } from "../zustand/store";

const ZuViewCart: React.FC = () => {

    // const cart = useSelector((state: RootState) => state.gadgets.cart)
    // const dispatch = useDispatch<AppDispatch>();

    const {cart, removeItem,} = useZustandStore();

    function remove(item: CartItem) {
        //dispatch(removeItem(item));
        removeItem(item);
    }
    return (
        <div>
            <h1>Zu View Cart</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                   

                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );

}

export default ZuViewCart;