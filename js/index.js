
class Producto{
    constructor (imagen, nombreProducto, precio, id){
        this.imagen = imagen;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.id = id;
    }
}

let tarjetasProductos = [];

let producto1 = new Producto ("https://dummyimage.com/300x150/f2f2f2/aaa alt=producto",
"Mouse", "$10", 1);

let producto2 = new Producto ("https://dummyimage.com/300x150/f2f2f2/aaa alt=producto",
"Tablets", "$1500", 2);

let producto3 = new Producto ("https://dummyimage.com/300x150/f2f2f2/aaa alt=producto",
"Celulares", "$550", 3);

tarjetasProductos.push(producto1,producto2,producto3);

//Agregar los productos a la lista
const contenedorPrincipal = document.getElementById('products');

let agregarProductos = () => {
    for (i=0; i < tarjetasProductos.length; i++){
        let contenedor = document.createElement('article');
        let texto = document.createElement('h1');
        texto.textContent = tarjetasProductos[i].nombreProducto;
        contenedor.appendChild(texto);

        let imagen = document.createElement('img');
        imagen.src = tarjetasProductos[i].imagen;
        imagen.style.width = "200px";
        contenedor.appendChild(imagen);

        let precio = document.createElement('h4');
        precio.textContent = tarjetasProductos[i].precio;
        contenedor.appendChild(precio);

        let boton = document.createElement('button');
        boton.style.border = '1px solid red';
        boton.textContent = 'Comprar';
        contenedor.appendChild(boton);
        //evento click
        contenedorPrincipal.appendChild(contenedor);
    }
}
agregarProductos();