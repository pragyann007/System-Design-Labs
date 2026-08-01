
export class BadTockenBucket {
    constructor(capacity=10,refillrate=3){
        this.capacity = capacity;
        this.refillrate =refillrate;
        this.token = this.capacity;
    


    }
 

    refill(){
        this.token+=this.refillrate;

        this.token = Math.min(this.token,this.capacity);

        
    
    }

    allowRequest(){

        if(this.token>0){
            this.token-- ;
            return true
        }
        else return false ;
    }
}