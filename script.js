function shareUrl() {
  const shareData = {
      title: 'Título do Compartilhamento',
      text: 'Texto do Compartilhamento',
      url: 'https://share-botao-elementor.vercel.app',
  };

  if (navigator.share) {
      // Se o navegador suportar a Web Share API
      navigator.share(shareData)
          .then(() => console.log('Conteúdo compartilhado com sucesso'))
          .catch((error) => console.error('Erro ao compartilhar:', error));
  } else {
      // Link de fallback para o WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
      window.open(whatsappUrl, '_blank');
  }
}