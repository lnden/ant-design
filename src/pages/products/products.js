import { connect } from 'dva';
import ProductList from '../../components/ProductList';
import router from 'umi/router';

const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
        dispatch({
            type: 'products/delete',
            payload: id,
        });
    }

    return (
        <div>
            <h2>List of Products</h2>
            <button onClick={() => {
                router.goBack();
            }}>go back
            </button>
            <ProductList onDelete={handleDelete} products={products}/>
        </div>
    );
};

export default connect(({ products }) => ({
    products,
}))(Products);
