import React, { Component } from "react";
import styled,  {css} from 'styled-components';

export const Tarjeta = styled.div`
    text-align: center;
    padding: 20px;
    color:#000;
    background-color:lightgray;
    transition: all 300ms ease;
    height: 450px;
    width: 300px;
    margin: 40px;
    border-radius: 7px 7px 7px 7px;
    box-shadow: rgba(0,0,0,0.5) 5px 5px 5px;
    opacity: 0.8;
`

export const Imagen = styled.img`
    margin-top: 20px;
    margin-bottom: 40px;
    width: 250px;
    height: 250px;
`
export const Siguiente =styled.div`
    font-size: 60px;
    color: #e23636;
    line-height: 200px;
`

export const PreguntaCont = styled.div`
    color:black;
    background-color: white;
    width: 100%;
    height: 50px;
    margin-top: 0px;
    padding:10px;
    text-align: center;
    box-shadow: rgba(0,0,0,0.3) 0px 4px;
` 

export const Boton =styled.button`
    width: 150px;
   font-size: 15px;
   padding: 5px;
   border: none;
   background: #000;
   color: #fff;
   cursor: pointer;
`