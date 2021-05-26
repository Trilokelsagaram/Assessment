import './ProductList.css';
import { useState, useEffect } from 'react';
import Product from '../product/Product'; 
import QuickLookModal from '../modal/QuickLookModal';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState();

    useEffect(() => {
        if (!products.length) {
        fetch('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json')
            .then(stream => stream.json())
            .then(data => {
                if (data.groups) {
                    setProducts(data.groups);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.log("Errors", error);
                setErrors(true);
            });
        }
    },[products]);

    const openModal = (product) => {
        if (!product) {
            return;
        }
        if (product.images && product.images.length) {
            setImages(product.images);
        }
        setShowModal(true);
    };

    const hideModal = () => {
        setShowModal(false);
    };

    return (
        <div className="productList">
            { loading 
                ? 
                    !errors ? <div>Loading...</div> : <div className="networkError">Something went wrong please try refresing your page.</div>
                :
                <div>
                    {products.map(product => <Product product={product} key={product.id} openModal={openModal} />)} 
                    {showModal && <QuickLookModal images={images} hideModal={hideModal}></QuickLookModal>}
                </div>
            }

        </div>
    );
}

export default ProductList;
