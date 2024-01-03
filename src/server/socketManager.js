const socketManager = (io) => {
 
    io.on('connection', (socket) => {
      console.log('Nuevo cliente conectado:', socket.id);
  
      // Manejar la recepción de la posición del avatar desde el cliente
      socket.on('enviarMovimiento', (data) => {
        // Enviar la posición del avatar a todos los demás clientes
        io.emit('actualizarPosicion', { id: socket.id, moving: data.moving });
      });
  
      // Manejar la desconexión de un cliente
      socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
        // Puedes agregar lógica para limpiar la posición del avatar
        io.emit('eliminarAvatar', { id: socket.id });
      });
    });
  };
  
  export default socketManager;
  