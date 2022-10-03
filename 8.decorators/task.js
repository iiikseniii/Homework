function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args){
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item['hash'] === hash);
    if(objectInCache){
      console.log( "Из кэша: " + objectInCache['value']);
      return "Из кэша: " +  objectInCache['value'];
    }

    let result = func(...args); 
    cache.push({'hash': hash, 'value': result }) ; 
    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}


const debounceDecoratorNew = (f, ms) => {
  let timerId;
  let firstRun = true;

  return function(...args){
    if(firstRun){
      timerId = setTimeout(() => {
        f.apply(this, args)}, 0);
      firstRun = false;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        f.apply(this, args)}, ms);
    }
  };
};

const debounceDecorator2 = (func, ms) => {
  let timerId;
  let firstRun = true;
  wrapper.count = 0;

  function wrapper(...args){
    if(firstRun){
      timerId = setTimeout(() => {
        f.apply(this, args)}, 0);
      firstRun = false;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        f.apply(this, args)}, ms);
    }
    this.count ++;
  }
  return wrapper;
}
