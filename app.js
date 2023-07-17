class ca{
    constructor(){
     this.s='';
 
     }
     add(n){
       this.s+=n;
       this.display(this.s);
     }
     equal(){
         this.s=eval(this.s);
         this.display();
         
     }
     display(){
         document.getElementById("dis").value=this.s;
     }
     clear(){
         this.s='';
         this.display();
 
     }
     backs(){
         this.s=this.s.slice(0,-1);
         this.display();
     }
 }
 const n1=new ca();
 function num(n){
     if(n=='='){
         n1.equal();
     }
     else{
         n1.add(n);
     }
 }
 function cl(){
     n1.clear();
 }
 function backspace(){
     n1.backs();
 }