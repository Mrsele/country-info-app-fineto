import React from 'react'
import './DisplayCountry.css'
// const DisplayCountry = () => {
//   return (
//     <div>DisplayCountry</div>
//   )
// }

// export default DisplayCountry




// import React,{useContext} from 'react'
 



const DisplayCountry = (props) => {
   
    const {country} =props;
  //
//   const location = useLocation();
//   const id = location.pathname.split("/")[2];
//   const [products, setProducts] = useState({});
//   const [quantity, setQuantity] = useState(1);
//   const [color, setColor] = useState("");
//   const [size, setSize] = useState("");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await publicRequest.get("/products/find/" + id);
//         setProducts(res.data);
//       } catch {}
//     };
//     getProduct();
//   }, [id]);
//   const handleQuantity = (type) => {
//     if (type === "dec") {
//       quantity > 1 && setQuantity(quantity - 1);
//     } else {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleClick = () => {
//     dispatch(
//       addProduct({ ...product, quantity, color, size })
//     );
//   };
// // here is the thing inspired by S.thing 
//   const {product} = props;
//   // const {addToCart} = useContext(ShopContext);
//  const  newPrice = product.price;
//  const old_price= newPrice + newPrice*0.25;
  return (
    
    <div className='productDisplay'>
    <div className='productDisplay-left'>
  <div className='flag-img'>
  <img className='productdisplay-main-img' src={country.flags && country.flags.png} alt="Country Flag"/>
  </div>
  </div>
  <div className='productDisplay-right'>
  <h2>Country name : {country.name.common}</h2>
  <div className='productdisplay-right-price-new'>  <p>Capital: {country.capital}</p></div>
  <p>Languages: {Object.values(country.languages).join(', ')}</p>
  <p>Population: {Intl.NumberFormat('en-US').format(country.population)}</p> 
  <p>Currency: {country.currencies && country.currencies[0] && country.currencies[0].name}</p>
   {console.log(country.landlocked)}
  <p>Dialing Code: {country.continents }</p>
  <p>Area {country.area}</p>
  <p>Landlocked: {country.landlocked}</p>
    <p>Time Zone{country.timezones[0]}</p>
{/* <div className='productdisplay-right-price-old'><p>Languages: {Object.values(country.languages).join(', ')}</p></div>
 */ }


 
</div>
    </div>
  
    )
}

export default DisplayCountry

