import React, {useEffect, useState} from 'react';
import Desconocido from './Desconocido';
import './Detalle.css'

const Detalle= (props) => {

    const {elemento} = props;
    const [valores, setValores] = useState([]);

    useEffect(() =>{
        let variables = []
        for(let key in elemento){
            variables.push({"key": key, "value": elemento[key]});
        }
        setValores(variables);
        console.log(variables);
    }
    , [elemento])




    return (
        elemento.name === "Unknown" ? <Desconocido/> : 
        <div className="contenedorgeneral">
            <div className="titulogeneral">
                <h1>{elemento.name ? elemento.name : elemento.title}</h1>
            </div>
            {
                valores.map((item, idx) =>
                    <div key={idx} className="contenedor">
                        <div className="titulo">
                            {item.key}:
                        </div>
                        <div className="contenido">
                            {item.value}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Detalle;