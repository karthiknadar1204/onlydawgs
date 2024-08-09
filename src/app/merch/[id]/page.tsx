// import BaseLayout from '@/components/BaseLayout'
// import React from 'react'
// import ProductCheckout from './ProductCheckout'
// import UnderlinedText from '@/components/decorators/UnderlinedText'
// import ProductCard from '@/components/ProductCard'
// import { products } from '@/dummy_data'

// const page = () => {
//   return (
//     <BaseLayout renderRightPanel={false}>
//       <div className='px-3 md:px-7 my-20'>
//         <ProductCheckout/>
//         <h1 className='text-3xl text-center mt-20 mb-10 font-bold tracking-tight'>
// 					More product from{" "}
// 					<UnderlinedText className='decoration-wavy underline-offset-8'>OnlyHorse</UnderlinedText>
// 				</h1>
//         <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
// 					{products.map((product) => (
// 						<ProductCard key={product.id} product={product} />
// 					))}
// 				</div>

//       </div>
//     </BaseLayout>
//   )
// }

// export default page





import BaseLayout from "@/components/BaseLayout";
import React from "react";
import ProductCheckout from "./ProductCheckout";
import UnderlinedText from "@/components/decorators/UnderlinedText";
import ProductCard from "@/components/ProductCard";
import { products } from "@/dummy_data";

const page = () => {
  const mainProduct = products[0]; // Assuming the first product is the main one to display

  return (
    <BaseLayout renderRightPanel={false}>
      <div className="px-3 md:px-7 my-20">
        {/* Pass the selected product to ProductCheckout */}
        <ProductCheckout product={mainProduct} />

        <h1 className="text-3xl text-center mt-20 mb-10 font-bold tracking-tight">
          More products from{" "}
          <UnderlinedText className="decoration-wavy underline-offset-8">
            OnlyDawgs
          </UnderlinedText>
        </h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default page;
