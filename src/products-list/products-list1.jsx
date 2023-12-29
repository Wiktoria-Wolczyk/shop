import "./products-list1.css";

const productsList = [
  { name: "milk", id: 1, price: 739.02 },
  { name: "butter", id: 2, price: 747.38 },
  { name: "bread", id: 3, price: 199.49 },
  { name: "sausages", id: 4, price: 580.98 },
  { name: "potatoes", id: 5, price: 228.32 },
  { name: "broccoli", id: 6, price: 61.07 },
  { name: "cheese", id: 7, price: 349.73 },
  { name: "muschrooms", id: 8, price: 447.5 },
  { name: "cola", id: 9, price: 9.41 },
  { name: "chocolate", id: 10, price: 973.81 },
];

export const MyList = ({ dupa }) => {
  return (
    <ul className="list">
      {productsList.map((el) => (
        <li key={el.id} className="listItem">
          <span className="listItem-name">{el.name}</span>
          <div className="listItem-details">
            <span>ID: {el.id}</span>
            <span>Cena: {el.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
