/**
 *  자바스크립트 기본타입  
 *  데이터타입
 */


//자바스크립트 동적타입 값을넣을때 타입이정해짐  (값을넣을때  그 값의 타입이 결정된다)
//자바 정적타입     타입을 정하면 무조건 그타입만 ()
//값을넣어주는순간 타입이정해짐 동적타입 

var num = 10;
console.log("num : "+num);
console.log("numtype : "+ typeof(num)); //타입오브 함수 그타입을 보여주는값 

num = 12.4;
console.log("num : "+num);
console.log("numtype : "+ typeof(num)); //타입오브 함수 그타입을 보여주는값 

num= "korea";
console.log("num : "+num);
console.log("numtype : "+ typeof(num)); //타입오브 함수 

num = 3.4;
console.log("num : "+num);
console.log("numtype : "+ typeof num); // 타입오브 연산자 

num = 3;
//if(num==true){
//if(num==4){ 숫자로비교 
if(num=4){ //num 에 4가대입됨  세미불린 0이면 거짓 펄스 0이아니면 참 트루 
//	console.log('num true : '+ num+"같음");
	console.log("같음");
}else{
//	console.log('num false : '+ num+"다름");
	console.log("다름");
}
//console.log("numtype : "+ typeof num); // 타입오브 연산자 
console.log(num);

//while(1){ //세미불린 참 
//	
//}




var tot ;
console.log(tot); //오타는 무조건 에러   값이없으면 언디파인드 
//에러가있으면 그아래있는것은 무조건 아무것도안나온다 
// 언디파인트가있다고해서 다음실행이안되는건아닌데 진짜 그냥쌩에러띄우면 그에러난곳부터 아래는 작동X

//var a  = null;
var a  = '문자';
console.log(a);

if(a){  //널은 거짓으로판단 
	console.log("같음");
}else{
	console.log("다름");
}

//세미불린  0 ,언디파인드(undefined), null  거짓
//      문자 ,숫자  참
//변수로안정하고 그냥 if(d) 라면 에러 선언되어있지않은거랑 선언되어서 언디파인드랑은다른것이다 







