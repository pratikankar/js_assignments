function multFun() {
    var i=0;
    var num=prompt("Enter a number for multiplication table: ");
    var str="";
        
    for(i = 1; i <= 10 ; i++) {
        document.write('<table border="2" cellspacing="5">');
        for(i = 1; i <= 10; i++) {
            document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
        }
         document.write("</table>");
    }
}