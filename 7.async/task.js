class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if( !id ){
            throw new Error('Значение ID не передано');
        } else if (this.alarmCollection.find(elem => elem['id'] === id)) {
            console.error('Будильник с таким ID уже существует')
            return;
        } else{ 
            this.alarmCollection.push({
                'time': time,
                'callback': callback,
                'id': id
            })
        }
    }

    removeClock(id){
        let arr = this.alarmCollection.filter(element => {
          return(element['id'] !== id)
        });
        if(this.alarmCollection.length > arr.length){
          this.alarmCollection = arr;
          return true;
        }else{
          return false;
        }
    }  
   
    getCurrentFormattedTime(){
        const time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let t = ((hour < 10) ? ":0" : "")+ hour;
        t += ((minute < 10) ? ":0" : ":") + minute;
        return t;
    }
    
    start(){
        if (!this.timerId) {
            this.timerId = setInterval( () => this.alarmCollection.forEach(element => 
                checkClock(element, this.getCurrentFormattedTime())), 1000);
        }
        function checkClock(element, sendTime) {
            if (element.time === sendTime) {
                element.callback();
            }
          }
    }
   
    stop(){
        if(this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    } 
   
    printAlarms(){
        console.log(`Всего будильников установлено : ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(element => {
            console.log(`Будильник № ${element.id} установлен на ${element.time}`)
        });
    }
  
    clearAlarms(){
        this.stop();
        this.alarmCollection.length = 0;
    }
}
//2
function testCase(){
    let alarm = new AlarmClock();
    alarm.addClock('23:58', () => console.log('Пора вставать!'), 1);
    alarm.addClock('23:59', () => console.log('Вставай уже!'), 2);
    alarm.addClock('00:05', () => console.log('Иди умываться!'), 1 );
    alarm.addClock('00:07', () => {
        console.log('Вставай, а то проспишь!');
        alarm.clearAlarms();
        alarm.printAlarms();
    },3);
    alarm.addClock('00:12', () => console.log('Иди умываться!'), 1);
    alarm.printAlarms();
    alarm.getCurrentFormattedTime();
    alarm.start();
}

testCase();