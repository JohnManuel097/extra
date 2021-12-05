import React from "react";

const Joya = ({joya, joyas, cart, setCart}) => {

    const {nombre, categoria, precio, id, image} = joya
    const addJoyeria = id => {
        const joya = joyas.filter((joya) => joya.id === id)
        setCart([...cart, ...joya])
    }

    const delJoya = (id) => {
        const joyas = cart.filter(joya => joya.id !== id)
        setCart(joyas)
    }

    return (
        <div className="grid"> 
      <div className="producto">
      <img className="producto__imagen" src={image} alt="Joyeria"/>
          <div className="producto__info">
            <p className="producto__nombre"><b>Nombre:</b> {nombre}</p>
            <p className="producto__nombre"><b>Categoria:</b> {categoria}</p>
            <p className="producto__precio"><b>Precio</b> {precio} MXN </p>

            {joyas ? (
                <button className="btn__produtoc-editar" type='button' onClick={() => addJoyeria(id)}>Agregar al carrito</button>
            ):(
                <div>
                <button className="btn__produtoc-editar" type='button' onClick={() => delJoya(id)}>Confirmar</button>
                <br />
                <button className="btn__produtoc-editar" type='button' onClick={() => delJoya(id)}>Eliminar</button>
                </div>
            )}
            

          </div>
          </div>
    </div>

    )
}

export default Joya;