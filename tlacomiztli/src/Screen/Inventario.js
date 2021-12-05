import React, {Fragment, useState,useEffect} from "react";
import { db } from "../Utils/firebase";
import "../components/css/Inventario.css";
import Cart from "../components/Cart";
import Joya from "../components/Joya";

function Inventario() {
const [allDocs,setDocs]=useState([]); 

const getProductos=async()=>{
    db.collection("Productos").onSnapshot((querySnapshot) => {
        const docs= [];
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id:doc.id})
        });
        setDocs(docs);
        console.log(allDocs);
    });
};
useEffect(() => {
    getProductos() 
}, []);

  const [cart, setCart] = useState([])

return (
    <div className="container">
        <div className="container__header__cartDiv">
        <Cart cart={cart} setCart={setCart}/>
  </div>
    <div className="contenedor">
    <h1 className="titulo_inventario">Inventario</h1>
    <div className="grid">
    {allDocs.map((doc) => {
         return(
    <div className="contenedor__productos" key={doc.id}>
      <Fragment>

  {/* SECTION CONTENEDOR PRINCIPAL */}
  <section className="container__content">

  <div className="container__content__listBurgers">
        <Joya 
        key={doc.id}
        joya={doc}
        joyas={allDocs}
        cart={cart}
        setCart={setCart}
        />
        </div>
        </section>
    </Fragment>
    </div>
         )
          })}
        </div>
    </div>
    </div>
)
        }

export default Inventario;