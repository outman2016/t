class A{
	static say(){
		console.log("sayA")
		
		B.print()
	}
	static print(){
		
		console.log("printA")
		B.say()
	}
}
class B{
	
	static print(){
		
		console.log("printB")
		A.say()
	}
	static say(){
		console.log("sayB")
		A.print()
	}
}
A.say()