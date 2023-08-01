var Names = prompt ( "Enter Your Name" );
var ChemMarks = +prompt ( "Enter Your Chemistry Marks");
var PhyMarks = +prompt ("Enter Your Physics Marks");
var MathMarks = +prompt ("Enter Your Maths MArks");
var BioMarks = +prompt ("Enter Your Biology Marks");
var total = 400;
var studentMarks = ChemMarks + PhyMarks + MathMarks + BioMarks;
var percent = studentMarks / total * 100;
console.log(" Hi " + Names + " your total gain marks is " + studentMarks + " out of " + total + " and your percentage is " + percent + "%");