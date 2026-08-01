
export class LeakyBucket {
    constructor(capacity=10,leakRate=3){

        this.capacity=capacity;
        this.leakRate=leakRate;
        this.water = 0 ;
        this.lastLeakedDate = Date.now()
}
    leak(){
        const now = Date.now();
        const elapsedTime = (now-this.lastLeakedDate)/1000 ; 
        const leakeAmt = elapsedTime*this.leakRate ;

        this.water = Math.max(0,this.water-leakeAmt);
        this.lastLeakedDate = now ;
    }

    allowRequest(){
        this.leak();

        if(this.water<this.capacity){
            this.water++
            return true;
        }
        else{
            return false ; 
        }
    }
}