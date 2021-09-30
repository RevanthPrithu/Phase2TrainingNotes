abstract class EmployeeClass
{
    public Id:number;
    public EName:string ;
    constructor( Id:number,  EName:string)
    {
        this.Id = Id; this.EName = EName;
    }
    public abstract CalculateBonus( salary:number):number
    public GetDetails(): void
    {
        console.log(`${this.Id} ${this.EName}`);
    }
}
class PermnantEmployeeClass extends EmployeeClass
{       
    constructor(Id:number,  EName:string) 
    {             
        super(Id,EName);
    }
    public  CalculateBonus(salary:number):number
    {
        return salary * 0.1;
    }
}
class TemporaryEmployeeClass extends EmployeeClass
{       
    constructor(Id:number,  EName:string) 
    {             
        super(Id,EName);
    }
    public  CalculateBonus(salary:number):number
    {
        return salary * 0.05;
    }
}


let e1 = new PermnantEmployeeClass(1001, "Meghana");
let e2 = new PermnantEmployeeClass(1002, "Swetha");
e1.CalculateBonus(25000);
e2.CalculateBonus(15000);
e1.GetDetails();
e2.GetDetails();