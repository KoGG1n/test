$(document).ready(function () {
    console.log("ready");
    $("#ac").click(function(){
       $( "#visor" ).text('');    
    });  
    $("#pd").click(function(){
       $( "#visor" ).append("(");
    });
    $("#pe").click(function(){
       $( "#visor" ).append(')');
    });
    $("#mais").click(function(){
       $("#visor").append('+');
    });
    $("#menos").click(function(){
       $("#visor").append('-');
    });
    $("#dividir").click(function(){
       $( "#visor" ).append('/');
    });
     $("#vezes").click(function(){
       $("#visor").append('*');
    });
     $("#um").click(function(){
       $("#visor").append(1);
    });
    $("#dois").click(function(){
       $("#visor").append(2);
    });
    $("#treix").click(function(){
       $("#visor").append(3);
    });
    $("#quatro").click(function(){
       $( "#visor" ).append(4);
    });
    $("#cinco").click(function(){
       $("#visor").append(5);
    });
    $("#seis").click(function(){
       $("#visor").append(6);
    });
    $("#sete").click(function(){
       $("#visor").append(7);
    });
    $("#oito").click(function(){
       $("#visor").append(8);
    });
    $("#nove").click(function(){
       $("#visor").append(9);
    });
    $("#zero").click(function(){
       $("#visor").append(0);
    });
    //Parte da calc reversa
    $("#igual").click(function(){
      var visor = $("#visor").text();
     console.log(visor);
      $("#visor").val("");
       var op = [];
       var c = 0;
       var eq = [];
      
          for (i=0 ; i< visor.length; i++ ){
             if ( (visor[i]!='+') && (visor[i]!='-') && (visor[i]!='/') && (visor[i]!='*') && (visor[i]!='(') && (visor[i]!=')')){
                eq.push(visor[i]);
             }else if(visor[i]=='('){
               
                c++;
             }else if(visor[i]==')'){
                if (op.lenght >= 0){
                for (i=0 ; i< op.length; i++ ){
                  c--;
                   eq.pop(op[op.length-1]);
                   op.push();
                  
                 }
 
 
                }
 
 
             }else if ( (visor[i]=='+') || (visor[i]=='-') || (visor[i]=='/') || (visor[i]=='*') && (visor[i] !='(') && (visor[i] !=')')  ){
                op.push(visor[i]);
                console.log('c');
 
 
             }
          }
     
       for (i=0 ; i< op.length; i++ ){
          eq.push(op[op.length-1]);
          op.pop();
       }     
       for (i=0 ; i< eq.length; i++ ){
             console.log(eq[i]);
             console.log(c);
       }
   
    });
   });
 