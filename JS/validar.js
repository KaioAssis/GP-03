// Verifica se há uma token no Local Storage
if (localStorage.getItem('token')) {
  // Se houver, espera 30 segundos antes de remover
  setTimeout(function() {
    // Remove a token do Local Storage após 30 segundos
    localStorage.removeItem('token');
    console.log('Token removida do Local Storage após 30 segundos.');
  }, 1200000); // 30 segundos em milissegundos
} else {
  console.log('Nenhuma token encontrada no Local Storage.');
}
