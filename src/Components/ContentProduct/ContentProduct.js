// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import "./content.css"
// import "../../app/globals.css"
// const products = [
//     {
//         name: 'Çocuk ve Genç Odası Tasarımlarımız',
//         images: "" /*['/Images/youngroom1.jpg', /* '/Images/youngroom2.jpg']*/
//     },
//     {
//         name: 'Mutfak Tasarımlarımız',
//         images: "/Images/kitchen3.jpg",
//     },
//     {
//         name: 'Yemek Masası Tasarımlarımız',
//         images: "" //'/Images/dinnertable1.jpg' /*['/Images/dinnertable1.jpg']*/
//     },
//     {
//         name: 'Yatak Odası Tasarımlarımız',
//         images: ""//'/Images/bedroom2.jpg'
//     },
//     {
//         name: 'Gardırop Tasarımlarımız',
//         images: ""//'/Images/gardırop1.jpg',
//     },
//     {
//         name: 'Portmanto Tasarımlarımız',
//         images: "",//'/Images/drawr1.jpg',
//     },
//     {
//         name: 'Banyo Tasarımlarımız',
//         images: ""
//     },
//     {
//         name: 'Banyo Tasarımlarımız',
//         images: ""
//     },

// ];


// function ContentProduct() {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://localhost:5001/api/product/Get-All-Product', {
//                     mode: 'cors'
//                 });

//                 const jsonData = await response.json();
//                 console.log(jsonData);


//                 setData(response);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchData();
//     }, []);


//     if (!data) {
//         return <div className='loadingScreeen'>Loading...</div>;
//     } else {
//         return (
//             <div className='productContainer'>
//                 {products.map((product, index) => (
//                     <div

//                         className='outsideProduct' key={index}>
//                         <div className='productImage'>
//                             {product.images.length > 0 ? (
//                                 <Link
//                                     href={{
//                                         pathname: `/product-details/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
//                                     }}
//                                 >
//                                     <div className='containerImage'>
//                                         <img
//                                             src={product.images}
//                                             alt="Ürün Resmi"
//                                             className='productImg'
//                                         />
//                                     </div>
//                                 </Link>
//                             ) : (
//                                 <p>Resim bulunamadı</p>
//                             )}
//                         </div>
//                         <div className='productName'>
//                             <p>{product.name}</p>
//                         </div>
//                         <div className='buttonDiv'>
//                             <Link className="button button1"
//                                 href={{
//                                     pathname: `/product-details/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
//                                 }}>İNCELE</Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         )
//     }

// }
// export default ContentProduct
