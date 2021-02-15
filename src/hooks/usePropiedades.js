import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiPropiedades{
                nodes {
                    nombre
                    descripcion
                    id
                    wc
                    precio
                    estacionamiento
                    habitaciones
                    categoria {
                        nombre
                    }
                    agentes {
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid(maxWidth: 600, maxHeight: 400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);
    return resultado.allStrapiPropiedades.nodes.map( inicio => ({
        nombre: inicio.nombre,
        descripcion: inicio.descripcion,
        id: inicio.id,
        wc: inicio.wc,
        precio: inicio.precio,
        estacionamiento: inicio.estacionamiento,
        habitaciones: inicio.habitaciones,
        categoria: inicio.categoria,
        agentes: inicio.agentes,
        imagen: inicio.imagen
    }));
}
 
export default usePropiedades;