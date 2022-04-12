import './Product.css'


function Product (props) {
   const {productInfo, updateCart} = props;
   
   function addToCart () {
        updateCart(productInfo);
    }

    return (
        <article className='card'>
            <h2 className='title'> {productInfo.title}</h2>
            <h3 className='author'> {productInfo.author} </h3>
            <p className='description'> {productInfo.description} </p>
            <button className='add-button' onClick={addToCart}> Add to cart </button>
        </article>
    )
}

export default Product;