// export default function Cate() {
//   product= [
//     {
//     id: 1 ,
//     src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
//     age:"1-2 year"
//   },
//   {
//     id: 2 ,
//     src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
//     age:"1-2 year"
//   },
//   {
//     id: 3 ,
//     src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
//     age:"1-2 year"
//   },
//   {
//     id: 4 ,
//     src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
//     age:"1-2 year"
//   }
// ]
  
//     return (
//     <>
//       <h1 className="text-2xl ml-4 font-semibold mt-4">Kids</h1>
//       <div className="flex">
//         {product.map((item) => (
//           <div key={item.id} className="flex-auto m-2 w-40">
//             <img
//               className="w-[2000px]"
//               src={item.src}
//               alt="Kids"
//             />
//             <p className="text-center ">{item.age}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

export default function Cate() {
  const product = [
    {
      id: 1,
      src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
      age: "1-2 year",
    },
    {
      id: 2,
      src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
      age: "2-4 year",
    },
    {
      id: 3,
      src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
      age: "4-6 year",
    },
    {
      id: 4,
      src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
      age: "6-12 year",
    },
    {
      id: 5,
      src: "https://chombooka.com/cdn/shop/collections/2-3-years-kids-ilmybrother-green-fullsleeve2-chombooka-original-imag9ahh23hh4qss.webp?v=1700407719&width=750",
      age: "12-16 year",
    },
     


];

  return (
    <>
      <h1 className="text-2xl ml-4 font-semibold mt-4">Kids</h1>
      <div className="flex flex-wrap">
        {product.map((item) => (
          <div key={item.id} className="m-2 w-60">
            <img
              className="w-[400px] rounded "
              src={item.src}
              alt={`Kids ${item.age}`}
            />
            <p className="text-center">{item.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}

