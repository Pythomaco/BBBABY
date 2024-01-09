// Este script puede usarse para funcionalidades futuras como agregar productos al carrito

// Obtener todos los botones de "Añadir al carrito"
const botonesCarrito = document.querySelectorAll('.btn-carrito');

// Agregar un evento de clic a cada botón
botonesCarrito.forEach(boton => {
  boton.addEventListener('click', () => {
    // Aquí puedes agregar lógica para agregar el producto al carrito
    // Por ahora, este ejemplo solo muestra un mensaje en la consola
    console.log('Producto añadido al carrito');
  });
});
