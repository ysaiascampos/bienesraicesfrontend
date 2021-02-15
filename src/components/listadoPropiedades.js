import React ,{ useState, useEffect } from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import ListadoPropiedadesCSS from '../css/listadoPropiedades.module.css';
import useFiltro from '../hooks/useFiltro';


const ListadoPropiedades = () => {
    const resultado = usePropiedades();
    
    const [propiedades] = useState(resultado);
    const [filtradas, setFiltradas] = useState([]);

    //filtrado de propiedades
    const { categoria, FiltroUI } = useFiltro();
    
    useEffect(() => {

        if(categoria) {
            const filtro = propiedades.filter(propiedad => 
                propiedad.categoria !== null && 
                propiedad.categoria.nombre === categoria);
            setFiltradas(filtro);
        } else {
            setFiltradas(propiedades);
        }
    }, [categoria, propiedades])
    return ( 
        <>
            <h2 
                css={css`
                    margin-top: 5rem;
                `}
            >Nuestras Propiedades</h2>

            {FiltroUI()}

            <ul className={ListadoPropiedadesCSS.propiedades}>
                {filtradas.map(propiedad => (
                    <PropiedadPreview 
                        key={propiedad.id} 
                        propiedad={propiedad} />
                ))}
            </ul>
        </>
        
    );
}
 
export default ListadoPropiedades;