class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId;
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
        let newArr = this.alarmCollection.filter(function(element){
          return(element[id] !== id)
        });
        if(this.alarmCollection.length > newArr.length){
          this.alarmCollection = newArr;
          return true;
        }else{
          return false;
        }
    }  
    //текущее время в строковом формате HH:MM
    getCurrentFormattedTime(){

    }
    //запуск всех звонков
    start(){
        checkClock() { 

        }

    }
    //остановить звонки
    stop(){
        clearInterval
    } 
    //печать все звонки
    printAlarms(){
        forEach
    }
    //удалить все звонки
    clearAlarms(){

    }
    

}