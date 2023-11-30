class uber{
    constructor(registration,perkg,km){
        this.registration = registration;
        this.perkg = perkg;
        this.km= km;
    }
    getprice(){
        return (parseInt(this.registration))+((parseInt(this.perkg)) * (parseInt(this.km)));
        }
}
const cal = new uber("50","3","4");
console.log(cal.getprice());