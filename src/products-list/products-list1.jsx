export const MyList = ({ dupa }) => {
  const productsList = [
    "milk",
    "butter",
    "bread",
    "sausages",
    "potatoes",
    "broccoli",
    "cheese",
    "muschrooms",
    "cola",
    "chocolate",
  ];

  console.log(
    "final",
    productsList.filter((product) => {
      return product.includes(dupa);
    })
  );

  const filteredList = productsList.filter((product) => {
    return product.includes(dupa);
  });

  return (
    <ol>
      {filteredList.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ol>
  );
};

/* 

const arr = [1,2,3,4,5,6,7,8,9,10];

let jak = arr.filter((el) => el>5)



<ul>
  {products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
)}
</ul> */
