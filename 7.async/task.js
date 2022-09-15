class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(time , func, id){
        if(id === undefined && id === null){
            throw new Error(' Error text')
        }
    }

    removeClock(id){
        if(this.timerId === id){
            
        }
    }
}