class Person{
    constructor (name,company,position,year,made,year1,year2,launch,year3){
        this.name = name;
        this.company = company;
        this.position = position;
        this.year = year;
        this.made = made;
        this.year1 = year1;
        this.year2 = year2;
        this.launch = launch;
        this.year3 = year3;
    }
    getperson(){
        return ` ${this.name} was founder and long-term CTO at ${this.company}.He also served as SVP of engineering and briefly as ${this.position}.Brendan is widely recognized for his enduring contributions to the Internet revolution.In ${this.year},he invented ${this.made},the Internet’s most widely used programming language.
        He cofounded the Mozilla.org project in ${this.year1},serving as chief architect,and has been a board member of the Mozilla Foundation since its inception in 
        ${this.year2}.Brendan helped launch the award-winning ${this.launch} in November ${this.year3}`;

    }
}
var p1 = new Person("Brendan Eich","Mozilla","CEO","1995","JavaScript (ECMAScript)","1998"," 2003","Firefox web browser ","2004 ");
console.log(p1.getperson());



