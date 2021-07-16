var s=[];
var j=0;
var ch=0;
var finish=0;
var checkImage,idRem,checkImage2,idRem2,startTime,endTime,t;
var st=0;
function mem(){
  startTime=new Date().getTime();
  var a=[{"source":"1.png","used":false},
         {"source":"2.jpg","used":false},
         {"source":"3.png","used":false},
         {"source":"1.png","used":false},
         {"source":"2.jpg","used":false},
         {"source":"3.png","used":false}];
  var len=a.length;
  var count=0;
  while(count!=len){
    var i=Math.floor(Math.random()*len);
    if(a[i]["used"]==false){
      a[i]["used"]=true;
      count++;
      s[j]=a[i];
      j++;
    }
  }
 /* for(var k=0;k<6;k++){
    alert(s[k]["source"]);
  }*/
  var start=new Date().getTime();
  document.getElementById("timer").innerHTML=st;
  t=setInterval(function(){
    timer(start);
  },1000);
}
function img(ids){
  if(ids=="img1"){
    if(ch==0){
      ch=1;
      checkImage=s[0]["source"];
      idRem=ids;
      document.getElementById("img1").src=s[0]["source"];
    }else if(ch==1&&idRem!=ids){
      ch=0;
      checkImage2=s[0]["source"];
      idRem2=ids;
      document.getElementById("img1").src=s[0]["source"];
    }
  }else if(ids=="img2"){
    if(ch==0){
      ch=1;
      checkImage=s[1]["source"];
      idRem=ids;
      document.getElementById("img2").src=s[1]["source"];
    }else if(ch==1&&idRem!=ids){
      ch=0;
      checkImage2=s[1]["source"];
      idRem2=ids;
      document.getElementById("img2").src=s[1]["source"];
    }
  }else if(ids=="img3"){
    if(ch==0){
      ch=1;
      checkImage=s[2]["source"];
      idRem=ids;
      document.getElementById("img3").src=s[2]["source"];
    }else if(ch==1&&idRem!=ids){
      ch=0;
      checkImage2=s[2]["source"];
      idRem2=ids;
      document.getElementById("img3").src=s[2]["source"];
      
    }
  }else if(ids=="img4"){
    if(ch==0){
      ch=1;
      checkImage=s[3]["source"];
      idRem=ids;
      document.getElementById("img4").src=s[3]["source"];
    }else if(ch==1&&idRem!=ids){
      ch=0;
      checkImage2=s[3]["source"];
      idRem2=ids;
      document.getElementById("img4").src=s[3]["source"];
      
    }
  }else if(ids=="img5"){
    if(ch==0){
      ch=1;
      checkImage=s[4]["source"];
      idRem=ids;
      document.getElementById("img5").src=s[4]["source"];
    }else if(ch==1&&idRem!=ids){
      ch=0;
      checkImage2=s[4]["source"];
      idRem2=ids;
      document.getElementById("img5").src=s[4]["source"];
      
    }
  }else if(ids=="img6"){
    if(ch==0){
      ch=1;
      checkImage=s[5]["source"];
      idRem=ids;
      document.getElementById("img6").src=s[5]["source"];
     
    }else if(ch==1&&idRem!=ids){
      ch=0;
      checkImage2=s[5]["source"];
      idRem2=ids;
      document.getElementById("img6").src=s[5]["source"];
      
    }
  }
}

function step(){
  if(ch==0){
    if(checkImage==checkImage2){
      step1();
    }
    else{
      step2();
    }
  }
  
}
function timer(start){
  var end=new Date().getTime();
  st=Math.round((end-start)/1000);
  
  document.getElementById("timer").innerHTML=st;

}
function step1(){
  if(finish==0){
    document.getElementById(idRem2).style.visibility="hidden";
    document.getElementById(idRem).style.visibility="hidden";
    if(document.getElementById("img1").style.visibility=="hidden"&&document.getElementById("img2").style.visibility=="hidden"&&document.getElementById("img3").style.visibility=="hidden"&&document.getElementById("img4").style.visibility=="hidden"&&document.getElementById("img5").style.visibility=="hidden"&&document.getElementById("img6").style.visibility=="hidden"){
      endTime=new Date().getTime();
      var sec=endTime-startTime;
      clearInterval(t);
      alert("YOU WON!!!CONGRATS....!!..You completed in " + sec/1000 + " seconds");
      finish=1;
    }
  }
  
}
function step2(){
  document.getElementById(idRem2).src="no.jpg";
  document.getElementById(idRem).src="no.jpg";
}