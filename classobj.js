//objects=>an unordered collection of key ->value key
//values can be primitives,arrays,functions ,objects.
//objects are reference type -variavles store references.
let student={
    name:'vikas',
    age:21,
    marks:99
};
console.log(student.age);
console.log(student.name);//for object use dot and bracket notation
                          //this inside a method refers to the current object(the one before the dot).
                          //arrow function do not have the own 

 student=new Object();
student.name="anuj";
console.log(student.name);

class college{
    college(student,teacher,classes){//used for large amount of data 
      
        this.student=student;
        this.teacher=teacher;
        this.classes=classes;
    }
}
let cd=new college("vikas","kadam","TE");
new college("vikas=","sonawane","TE");
console.log(student.name);

