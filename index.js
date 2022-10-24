const contenedorProductos = document.getElementById("cards");
const boton = document.getElementById("boton");
const inputAfter = document.getElementById("inputAfter");
const botonInput = document.getElementById("botonInput");
const botonVaciar = document.getElementById("botonVaciar");
const listaProductosComprados = document.getElementById("listaProductosComprados");

let carrito = [];

fetch("../DB/productos.json")
    .then((response) => response.json())
    .then((data) => {
  data.forEach((producto) => {
    const { id, nombre, precio, imagen } = producto;
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card" style="width: 16rem;">
    <img class="card-img-top" src="${imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-title">$${precio}</p>
            <button class= btn id=${id}>Comprar</button>
        </div>
    </div>
      </div>
    </div>
    `;
    contenedorProductos.appendChild(div);
    });
  });

canillas.forEach((canillas) => {
    let productoRenderizado = document.createElement("div");
    productoRenderizado.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${canillas.imagen}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="nombre">${canillas.nombre}</h5>
            <p class= "precio">Precio: $${canillas.precio}</p>
        </div>
            <button id="${canillas.id}" class="comprar">Comprar</button>
        </div>
    `;
    
    div.append(productoRenderizado);
    
    const boton = document.getElementById(canillas.id);
    
    boton.addEventListener("click", () => comprar(canillas));
});


const comprar = (canillas) => {
    let productoComprado = carrito.find((item) => item.id === canillas.id);
        if (productoComprado === undefined) {
            carrito.push({
            id: canillas.id,
            nombre: canillas.nombre,
            precio: canillas.precio,
            imagen: canillas.imagen,
            cantidad: 1,
    });
        } else {
            productoComprado.precio = productoComprado.precio + canillas.precio;
            productoComprado.cantidad = productoComprado.cantidad + 1;
    }};

const buscadorCanillas = (input) => {
    console.log(input);
    let buscadorCanillas = canillas.find((canillas) =>
    canillas.nombre.includes(input)
   );
    console.log(buscadorCanillas);
    inputAfter.value = ``;
   };

   localStorage.clear();


listaProductosComprados.addEventListener("click", () =>
    localStorage.setItem("carrito", JSON.stringify(carrito)));
botonInput.addEventListener("click", () =>
    buscadorCanillas(inputAfter.value));
botonVaciar.addEventListener("click", () => {
    localStorage.clear();
    contenedor.innerHTML = "";
    alert("productos borrados");
});

