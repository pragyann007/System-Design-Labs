interface IObserver{
    update:(temp:string , humid:string)=>boolean
}


class WeatherStaion{

    constructor(private observersList:IObserver[],
        private temp?:string,
        private humid?:string
    ) {}
    subscribe(observers:IObserver){
        this.observersList.push(observers);

    }
    unsubscribe(observers:IObserver){
        for(let i = 0 ; i < this.observersList.length ; i++){
            if(this.observersList[i] == observers){
                this.observersList.splice(i,1);
            }
        }
    }


    setMeausrments(temp:string,humid:string){
        this.temp = temp;
        this.humid = humid ; 

        this.notifyAll(this.temp,this.humid);

    }


    private notifyAll(temp:string,humid:string){
        for(let i = 0 ; i < this.observersList.length ; i++){
            this.observersList[i].update(temp,humid)
        } 
        return "Notified all "
   }

}

class PhoneDisplay implements IObserver {
    update(temp:string,humid:string){
        console.log(`Phone display: ${temp} and ${humid}`);
        return true;
    }
    
}


class WindowDisplay implements IObserver {
    update(temp:string,humid:string){
                console.log(`winow display: ${temp} and ${humid}`);

        return true
    }
    
}

class MacDisplay implements IObserver {
    update(temp:string,humid:string){
        console.log(`MAc display: ${temp} and ${humid}`);
        return true ;
    }
    
}


let phonedisplay = new PhoneDisplay();
let macdisplay = new MacDisplay()

const observable = new WeatherStaion([phonedisplay,macdisplay]);
observable.subscribe(new WindowDisplay())
let r = observable.setMeausrments("100C","98H")








