var reis = new SpeechSynthesisUtterance('reis');
var mit = new SpeechSynthesisUtterance('mit');
var mais = new SpeechSynthesisUtterance('mais');
var text = document.getElementById('text');
var list = [0,1];

function read(l){
	for(i=0;i<l.length;i++){
  	if(l[i]==0){
      window.speechSynthesis.speak(reis);
      window.speechSynthesis.speak(mit);
    }else{
      window.speechSynthesis.speak(mais);
      window.speechSynthesis.speak(mit);
    }
  }
}

function makeReis(l,c){
  for(i=0;i<l.length;i++){
    var x = []
    if(l[i]==0){
      c.innerHTML += 'Reis mit '
    }else{
      c.innerHTML += 'Mais mit '
    }
  }
}

function invert(l){
	var m = [];
	for(i=0;i<l.length;i++){
  	if(l[i]==0){
    	m[i]=1;
    }else{
    	m[i]=0;
    }
  }
  return m
}
read(list);
makeReis(list,text);

for(j=0;j<10;j++){
	read(invert(list));
  makeReis(invert(list),text);
	list=list.concat(invert(list));
}

