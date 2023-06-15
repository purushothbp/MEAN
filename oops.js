/*0. FInd all other operators which perform overloading operations

1. Create a class called 'fan', assume your own data members, methods atleast 6 each and two private data members.

2. Create a child class 'tableFan' from above 'fan'

3. Create a child class 'ceilingFan' from 'fan'

4. Try to access private members from 'fan' in 'ceilingFan'. Is this allowed?
*/
class fan{
    constructor(modelNumber=1050, wings=3, remoteControl=false, type= "ceiling fan", minCost=1500, blades="steel", voltage="240v"){
        this.remoteControl=remoteControl;
        this.minCost=minCost;
        this.type=type;
        this.blades=blades;
        this.modelNumber=modelNumber;
        this.wings=wings;
        this.voltage=voltage;
    }
    estimation(){
        this.minCost=(this.wings*150 + 1000);
        return this.minCost;
    }   
}
class tableFan extends fan{
    estimation(){
        this.minCost=(this.wings*100 + 700);
        return this.minCost;
        console.log("Cost of TableFan : "+this.minCost);
    }
}

class ceilingFan extends fan{
    estimation(){
        this.minCost=(this.wings*150 +1000);
        return this.minCost;
        console.log("Cost of CeilingFan : " + this.minCost);
    };
}
var _ceilingFan=new ceilingFan(1005, 4, true, "", 2000, "fibre")
console.log(_ceilingFan)

var _fan = new tableFan();
console.log(_fan.estimation());