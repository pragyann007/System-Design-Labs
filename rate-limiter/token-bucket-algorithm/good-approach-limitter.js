
export class TockenBucket {

    constructor(capacity=4,refillRate=2){

        this.capacity = capacity;
        this.refillRate = refillRate;
        this.lastRefiledTime=Date.now();
        this.token = capacity ; 



    }


    refill(){

        const now = Date.now();
        const elapsed = (now-this.lastRefiledTime)/1000 ;

        const newToken = elapsed*this.refillRate

        let totalToken = newToken + this.token

        this.token = Math.min(this.capacity,totalToken);
        this.lastRefiledTime = now;



    }
    allowRequest(){
        this.refill();

        if(this.token>=1){
            this.token--;
            return true ; 
        }
        return false ;

    }
   

}