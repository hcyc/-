function GET(){
	var R=document.getElementById("SR").value;//声明输入变量
    var C;//声明输出变量
	//处理输出变量
	switch (R){
  	case "a":C="b";
     break;
	case "Hello":C="World!";
     break;
	case "clean":
	C="";
	document.getElementById("SC").innerHTML="";
     break;
	case "close":
	C="OK!";
	window.close();
     break;
    default:
	if (R.indexOf("access") != -1){
	R=R.replace("access","https://");
	R=R.replace(/\s+/g,"");
	window.open(R,"_blank");
	C="Finish!"
	}
	else if (R.indexOf("search") != -1){
	R=R.replace("search","https://www.google.com/search?q=");
	R=R.replace(/\s+/g,"");
	window.open(R,"_blank");
	C="Finish!"
	}
    }
    mdui.snackbar({message: R,position: 'right-top'});//显示输入变量
	//输出变量:
	var node=document.createElement("LI");
	var textnode=document.createTextNode(C);
	node.appendChild(textnode);
	document.getElementById("SC").appendChild(node);
	//清空输入框
    document.getElementById("SR").value = "";
}
