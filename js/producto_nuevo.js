function guardar() {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let stock = document.getElementById('stock').value;
    let imagen = document.getElementById('imagen').value;
    let categoria = document.getElementById('categoria').value;
  
    const producto = {
      nombre,
      precio,
      stock,
      imagen,
      categoria
    };
  
    const url = 'https://5485732b-e059-4f80-96c1-8349a51548a1-00-3gwtqwkhsuvx5.riker.replit.dev/productos';

  
    const options = {
      method: 'POST',
      body: JSON.stringify(producto),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(text || 'Pedido Fallido a la API');
          });
        }
        return response;
      })
      .then(() => { 
        alert("Producto agregado exitosamente");
        window.location.href = './productos.html';
      })
      .catch(error => {
        alert('No pudo agregarse el producto');
        console.error('Error:', error);
      });
  }
