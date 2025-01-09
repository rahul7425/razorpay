'use client'

// import { useState } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { Radio, RadioGroup } from '@headlessui/react'

const product = {
    name: 'Premium Payment Gateway Package',
    price: '$299',
    href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://inai.io/hubfs/what%20is%20a%20pg.png',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
        src: 'https://www.swipez.in/blog/media/posts/23/2933578.jpg',
        alt: 'Model wearing plain black basic tee.',
    },
    {
        src:"https://images.ctfassets.net/wowgx05xsdrr/5JkM0OGlSSXLZ1MNk9qpkk/78e6f9685c56e2940f5db50868f015fc/4908CD_PaymentGateways-August2022-Header.jpg",
        alt: 'Model wearing plain gray basic tee.',
    },
    {
        src: "https://devathon.com/wp-content/uploads/2020/02/Top-10-Payment-Gateways-Devathon.png",
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    
  ],
  sizes: [
    
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Instant payment processing for global transactions',
    'Advanced fraud protection and monitoring',
    'Multi-currency and multi-method support',
    'Detailed analytics and reporting tools',
  ],
  details:
    'The Premium Payment Gateway Package includes everything you need to securely process online payments, whether you’re running an e-commerce platform or accepting donations. With 24/7 fraud protection, fast settlement, and seamless integration with your website, you’ll never have to worry about payment issues again.',
}
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const Coustompage = () =>  {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white mb-4">
      <div className="pt-6">
        

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt={product.images[0].alt}
              src={product.images[0].src}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product.images[1].alt}
                src={product.images[1].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product.images[2].alt}
                src={product.images[2].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product.images[3].alt}
              src={product.images[3].src}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            {/* <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p> */}

            {/* Reviews */}
            
            
          </div>

          <div className="py-10 lg:col-span-4 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coustompage;
