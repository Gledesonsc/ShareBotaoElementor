## ❉ Instruções de Implementação do Botão de Compartilhamento no Elementor ❉
 &nbsp;
Este guia fornece instruções passo a passo para integrar um script personalizado em um botão do Elementor, permitindo a funcionalidade de compartilhamento. Certifique-se de seguir cada etapa cuidadosamente para garantir a integração adequada.
 &nbsp;
 &nbsp;
#### Pré-requisitos
Antes de começar, verifique se você já tem um botão criado no Elementor que deseja aprimorar com a funcionalidade de compartilhamento.
 &nbsp;
 &nbsp;
#### Passo 1: Adicionar o ID CSS ao Botão
Para habilitar o script no botão desejado, é necessário adicionar um identificador CSS específico chamado "My_Button". Siga estas etapas:
 &nbsp;
1. Abra a página ou postagem no Elementor onde o botão está localizado.
2. Selecione o widget de botão que você deseja aprimorar.
3. No painel lateral à esquerda, vá para a seção de "Avançado".
4. Role para baixo até encontrar a opção "ID CSS" e insira o identificador "My_Button".
 &nbsp;

ID CSS:
```bash
 My_Button
```

 &nbsp;
Certifique-se de salvar as alterações no Elementor após adicionar o identificador.
 &nbsp;
 &nbsp;
#### Passo 2: Integrar o Script
 &nbsp;
Agora, você precisará incorporar o script personalizado para habilitar a funcionalidade de compartilhamento no botão. Certifique-se de ter acesso ao código do seu site para implementar as seguintes linhas de código.
 &nbsp;

```bash
<script>

  document.addEventListener("DOMContentLoaded", function(event) {    
    jQuery('#My_Button a').click(function(e){
        e.preventDefault(); // Impede o comportamento padrão do link

        shareUrl();
    });

    function shareUrl() {
        const shareData = {
            title: 'Título do Compartilhamento',
            text: 'Texto do Compartilhamento',
            url: 'https://fissstories.adaupsoft.com/bio',
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
});

</script>
```

 &nbsp;
Insira este script na seção apropriada do seu site, como no arquivo de rodapé (footer) ou através de um plugin de scripts personalizados.
 &nbsp;
 &nbsp;