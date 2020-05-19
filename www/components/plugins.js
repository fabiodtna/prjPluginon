
$(document).on("click","#teste",function(){
    function retorno(){
       // alguma funçao a mais no buton alert para executa!
    }
    navigator.notification.alert("YOU DON'T BELIVER!",retorno,"Aviso!","Aceito");
});

$(document).on("click","#b2",function(){
  function confirma(buttonIndex){
    navigator.notification.alert(buttonIndex);
  }
  navigator.notification.confirm("Escolha A ou B!",confirma,"Escolha",['A','B']);
});