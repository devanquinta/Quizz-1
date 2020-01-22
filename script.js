var $total = -1
var pontos = -1
var correta = 0;
var errada = 0;
var mail = "";
var cont=1;
var flag=1;
var perguntasTotal = "false"
var a , b, c, d , e, f = "false"
/****************TESTES************************* */
/*cont = 0 vai ser a primeira questão*/
function Cont(){
    cont++;
    return cont;
}
function Flag(){
    flag++;
    return flag;
}
/*************************************************** */
$(document).ready(function() {
  //obter total de perguntas
  var $questionNumber = $('h2').length;
  //pontuação final em cache
  var $totalScore = 0;
  $('li').click(function() {
    //caching variables
    var $parent = $(this).parent();
    var $span = $(this).find('.fa');
    //deactivate options on click
    $parent.find('li').off("click");
    //verifique a classe .correct
    //if yes
    if ($(this).hasClass('correct')) {
      //add .correctAnswer class
      /******************************* */
      
      /****************************** */
      $(this).addClass('correctAnswer');
      //find next span and change icon
      $span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
      //reduce opacity of siblings
      $(this).siblings().addClass('fade');
      //show answer
      var $answerReveal = $parent.next('.answerReveal').show();
      var $toShowCorrect = $answerReveal.find('.quizzAnswerC');
      var $toShowFalse = $answerReveal.find('.quizzAnswerF');
      $toShowCorrect.show();
      $toShowFalse.remove();
      //add 1 to total score
     $totalScore+= 1;
		 /********************/
		 correta+=1;
     var certa = correta -1;
		 	$("#v").data-percent(60);
			/***********/
			$("#v").width(60);

			   $("#v").attr( "data-percent",50 );


     if (correta > certa && cont==1) {
        a = " Acertou 1 ";    
     }
      if (correta > certa && cont==2) {
        b = " Acertou 2 ";
     }
     if (correta > certa && cont==3) {
        c = " Acertou 3 ";
     }
      if (correta > certa && cont==4) {
        d = " Acertou 4 ";
     }
      if (correta > certa && cont==5) {
        e = " Acertou 5 ";
     }
     if (correta > certa && cont==6) {
        f = " Acertou 6 ";
     }
     /*********************************************************************************** */
    } else {
      //add .wrongAnswer class
      $(this).addClass('wrongAnswer').addClass('fade');
      //change icon
      $span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
      //reduce opacity of its siblings
      $(this).siblings().addClass('fade');
      //show wrong Message
      var $answerReveal = $parent.next('.answerReveal').show();
      var $toShowCorrect = $answerReveal.find('.quizzAnswerC');
      var $toShowFalse = $answerReveal.find('.quizzAnswerF');
      $toShowCorrect.remove();
      $toShowFalse.show();
      //locate correct answer and highlight
      $parent.find('.correct').addClass('correctAnswer');
			/********************/
			errada+=1;
    var erro = errada -1;
    if (erro < errada && flag ==1){
      a = " Errou 1 "
     }
    if (erro < errada && flag ==2){
      b = " Errou 2 "
     }
    if (erro < errada && flag ==3){
      c = " Errou 3"
     }
    if (erro < errada && flag ==4){
      d = " Errou 4"
     }
    if (erro < errada && flag ==5){
      e = " Errou 5"
     }
      if (erro < errada && flag ==6){
      f = " Errou 6"
     }
    };
  }); //end click function
  /*************************************** */
   
  /****************************************** */
  var teste = 0
  //print Results
  function printResult() {
    var resultText = '<p>';
    if ($totalScore === $questionNumber) {
      resultText += 'Você acertou ' + $totalScore + ' de um total de  ' + $questionNumber + ' perguntas ! </p>';
      $('.resultContainer').append(resultText);
      $('#halfText').append('<p>parabens Voçe conhece muito sobre risco</p>');
    } else if ($totalScore >= 3 && $totalScore < $questionNumber) {
      resultText += 'Você acertou ' + $totalScore + ' de um total de ' + $questionNumber + ' perguntas! </p>';
      $('.resultContainer').append(resultText);
      $('#halfText').append('<p>Parabéns continue melhorando</p>')
    } else if ($totalScore < 3) {
      resultText += 'Você acertou '+$totalScore+' de um total de ' +$questionNumber +' perguntas! </p>';
      $('.resultContainer').append(resultText);
      $('#halfText').append('<p>Tente refazer os testes com mais calma.</p>');
    }
  };//end function
	/* total das perguntas está puxando H2*/
  /******************************************************************** */
  //final score
  $('.simpleList').last().click(function() {
    //prevent further clicks on this
    $(this).off('click');
    //show result after last li is clicked
    var $height = $('.finalResult').height();
    printResult();
    $('.finalResult').show();
    $('html, body').animate({
        scrollTop: $(document).height() - $height
      },
      1400);
		/************************************************************************************************************* */
			function email(){
      perguntasTotal = a + "-" + b + "-" + c + "-" + d + "-" + e + "-" + f ;
      perguntasTotal.toString();
			pontos = parseInt($totalScore);
			correta.toString(); errada.toString();
			mail = " O usuário " + " acertou  "+correta+ " pergunta(s), " + "e  errou  "+errada+ " pergunta(s)" + "<br> Total de pontos = " +pontos+ " !" + "<br>Total de perguntas certas e erradas são: " +  perguntasTotal;
			}
			email();
 			  Email.send({
          Host : "smtp.elasticemail.com",
          Username : "vander.quintanilha@soulasalle.com.br",
          Password : "9dab2617-d450-49df-9258-dbed2a668f13",
          To : 'vander2014quintanilha@gmail.com',
          From : "vander.quintanilha@soulasalle.com.br",
          Subject : "Dados das respostas do usuario",
          Body :  mail
      })
    .then(message => alert(message));//alert(message)
  });
	/*******************************************************************************************************************/
}); //end dom ready - fim do dom 


/************************************************************************************************* */


