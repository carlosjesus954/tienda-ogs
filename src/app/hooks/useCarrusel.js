import{useEffect,useState}from"react";export const useCarrusel=e=>{const[r,s]=useState(0),[t,a]=useState("");return useEffect((()=>{switch(r){case 0:return a("");case 1:return a("Clothes-carrusel--move1");case 2:return a("Clothes-carrusel--move2");case 3:return a("Clothes-carrusel--move3")}}),[r]),{handleCarruselBack:()=>{s(0===r?e.length-1:r-1)},handleCarruselForward:()=>{r===e.length-1?s(0):s(r+1)},carruselIndex:r,estadoCarrusel:t}};