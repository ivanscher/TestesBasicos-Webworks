var app = {
    //abrir email
	dadosContato:{
		subject: "Contato - Front in BH",
		body:"Digite sua Mensagem Aqui",
		to:["davidson@frontinbh.com"]
	},
	faleConosco:function(){
		console.log("chamouEmail")
		blackberry.invoke.card.invokeEmailComposer(app.dadosContato,app.emailEnviado,app.emailCancelado);
	},

	emailEnviado:function(){
		blackberry.ui.toast.show("Email enviado com sucesso");
	},

	emailCancelado:function(){
		blackberry.ui.toast.show("Email Cancelado");
	},

    //agendar palestra
	agendarPalestra:function(){
        var dadosAgenda = {
            subject: document.getElementById('nomeEvento').value ,        
            startTime: document.getElementById('dataEvento').value,
            duration: 30
        };
        console.log(dadosAgenda);
		blackberry.invoke.card.invokeCalendarComposer(dadosAgenda,app.agendaEnviado, app.agendaCancelado);
	},
    
    agendaEnviado:function(){
		blackberry.ui.toast.show("Agendado com sucesso");
	},

	agendaCancelado:function(){
		blackberry.ui.toast.show("Agenda Cancelada");
	},
    
    abrirCamera: function() {
          var mode = blackberry.invoke.card.CAMERA_MODE_PHOTO;
          blackberry.invoke.card.invokeCamera(mode, function (path) {
                 blackberry.ui.toast.show("saved "+ path);
             },
             function (reason) {
                 blackberry.ui.toast.show("cancelled " + reason);
             },
             function (error) {
                 if (error) {
                     blackberry.ui.toast.show("invoke error "+ error);
                  } else {
                     blackberry.ui.toast.show("invoke success " );
                  }
          });
     }
    
}
