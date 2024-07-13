document.addEventListener('DOMContentLoaded', function() {
    const contenedorProductos = document.getElementById('contenedor_productos');
    const formularioProducto = document.getElementById('formulario_producto');

   
    function crearCard(producto) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('imagen_producto');
        img.src = producto.url;
        img.alt = producto.nombre;

        const informacionCard = document.createElement('div');
        informacionCard.classList.add('informacion_card');

        const nombre = document.createElement('p');
        nombre.textContent = producto.nombre;

        const contenidoCard = document.createElement('div');
        contenidoCard.classList.add('contenido_card');

        const precio = document.createElement('h3');
        precio.textContent = `$${producto.precio}`;

        const iconoEliminar = document.createElement('img');
        iconoEliminar.src = 'img/icon_trash.png';
        iconoEliminar.alt = 'Eliminar';
        iconoEliminar.style.cursor = 'pointer';

        iconoEliminar.addEventListener('click', function() {
            eliminarProducto(producto.id, card);
        });

        contenidoCard.appendChild(precio);
        contenidoCard.appendChild(iconoEliminar);

        informacionCard.appendChild(nombre);
        informacionCard.appendChild(contenidoCard);

        card.appendChild(img);
        card.appendChild(informacionCard);

        return card;
    }

    formularioProducto.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const imagen = document.getElementById('imagen').value;

        const nuevoProducto = {
            nombre: nombre,
            precio: parseFloat(precio),
            url: imagen
        };
    });
});