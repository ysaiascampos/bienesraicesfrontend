import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

const ImagenBackground = styled(BackgroundImage)`
    height: 300px;
`;

const Encuentra = () => {
    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file(relativePath: {eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return ( 
    <ImagenBackground
        tag="section"
        fluid={imagen.sharp.fluid}
        fadeIn="soft"
    >
        <div
            className={heroCSS.imagengb}
        >
            <h3
                className={heroCSS.titulo}
            >Encuentra la casa de tus sueños</h3>
            <p>15 año de experiencia</p>
        </div>
    </ImagenBackground> );
}
 
export default Encuentra;