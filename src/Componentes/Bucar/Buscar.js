import React, {useState} from 'react';
import Axios from 'axios';

const Buscar = (props) => {

    const {setElemento} = props;
    const [category, setCategory] = useState("films");
    const [id, setId] = useState(1);

    function getElemento(e){
        e.preventDefault();
        Axios.get('https://swapi.dev/api/'+category+"/"+id)
            .then(respuesta => {
                console.log(respuesta.data);
                setElemento(respuesta.data);
            })
            .catch(respuesta => {
                console.log(respuesta.data);
                setElemento({name: "Desconocido"});
            })
            ;

    }

    return ( 
        <form onSubmit={getElemento}>
            <div className="row my-3 justify-content-center">
                <label className="mx-2">Buscar por:</label>
                <select className="mx-2" name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="films">Peliculas</option>
                    <option value="people">Personas</option>
                    <option value="planets">Planetas</option>
                    <option value="species">Especies</option>
                    <option value="starship">Nave Estelar</option>
                    <option value="vehicle">Vehículo</option>
                </select>
                <label className="mx-2">ID:</label>
                <input className="mx-2" type="number" value={id} required onChange={e => setId(e.target.value)}/>
                <button type="submit" className=" mx-2 btn btn-primary">Buscar</button>
            </div>
        </form>
     );
}
 
export default Buscar;