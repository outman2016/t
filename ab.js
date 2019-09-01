class A{
	static say(){
		console.log("sayA")
		
		
	}
	static print(){
		alert(100)
		console.log("printA")
		
	}

}
class B{
	
	static print(){
		
		console.log("printB")
		
	}
	static say(){
		console.log("sayB")
		
	}
	working:true;
}
A.say()
B.say()