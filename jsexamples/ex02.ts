class Person{
    private name:string;
    private gender:string;
    private age:number;
    public SetDetails(name:string,gender:string,age:number){
        this.name=name;
        this.gender=gender;
        this.age=age;
    }
    public GetDetails(){
      console.log(`${this.name} ${this.gender} ${this.age}`) 
        
    }
}
let p1=new Person();
p1.SetDetails("revanth","male",22);
p1.GetDetails();