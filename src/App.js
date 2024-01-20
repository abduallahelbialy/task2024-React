import "./App.css";
import data from "./Components/back/appData";
import productstwo from "./Components/back/DataTwoo";
import Productsitemsthr from "./Components/back/DataTwoo";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Routesss from "./Components/Routes/Routesss";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
function App() {
  const { Productsitems } = data;
  const { Productsitemstwo } = productstwo;
  const { Productsitemsthre } = Productsitemsthr;
  const [CartItems, setCartItems] = useState([]);
  const handleAddproducts = (product) => {
    const ProductExist = CartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        CartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...CartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleremoveproducts = (product)=>{
        const ProductExist = CartItems.find((item) => item.id === product.id);
if(ProductExist.quantity ===1){
  setCartItems(CartItems.filter((item)=>item.id !==product.id))
}else{
  setCartItems(CartItems.map((item)=>item.id === product.id?{...ProductExist, quantity: ProductExist.quantity -1}:item))
}
  }
  const handelcartClear=()=>{
    setCartItems([])
  }
  return (
    <Router>
      <Navbar CartItems={CartItems} />
      <Routesss
        Productsitems={Productsitems}
        Productsitemstwo={Productsitemstwo}
        Productsitemsthre={Productsitemsthre}
        CartItems={CartItems}
        handleAddproducts={handleAddproducts}
        handleremoveproducts={handleremoveproducts}
        handelcartClear={handelcartClear}
      />
      <Footer />
    </Router>
  );
}

export default App;
