
 //button alert js com confirmaçao
$(document).on("click","#teste",function(){
    function retorno(){
       // alguma funçao a mais no buton alert para executa!
    }
    navigator.notification.alert("YOU DON'T BELIVER!",retorno,"Aviso!","Aceito");
});

// usando o alert para escolher uma opçaõ
$(document).on("click","#b2",function(){
  function confirma(buttonIndex){
   if(buttonIndex == 1){
     navigator.notification.alert("Escolheu a opção A");
   }else{
     navigator.notification.alert("Escolheu a opção B");
   }
  }
  //['A','B'] opções para escolher! 
  navigator.notification.confirm("Escolha A ou B!",confirma,"Escolha",['A','B']);
});

// beep no modo notificação

$(document).on("click","#b3",function(){
    navigator.notification.beep(5);
    //(5) cinco beep
});

// vibração
$(document).on("click","#b4",function(){
    navigator.vibrate(2000);
});

// localizção 
$(document).on("click","#b5",function(){
    var onSuccess = function(position){
      alert('Latidude: ' + position.coords.latitude + '\n'+
           'Longitude: ' + position.coords.longitude + '\n'+
           'Altitude: ' + position.coords.altitude + '\n' +
           'Accuracy: ' + position.coords.accuracy + '\n' +
           'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
           'Heading: ' + position.coords.heading + '\n' +
           'Speed: ' + position.coords.speed + '\n' + 
           'Timestamp: ' + position.timestamp + '\n');
    };
    function onError(erro){
      alert('code: ' + erro.code + '\n' +
      'mensage: ' + error.menssage + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});