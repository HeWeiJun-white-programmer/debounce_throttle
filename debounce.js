//防抖:事件响应函数在一段时间后执行，在这段时间内执行将会重新计时
function debounce(func,waite,immediate)
{ let timeout;
    return function()
    {
        let context=this;//解决this指向问题
        let args=arguments;//解决事件对象；
      /*  if(timeout) */ clearTimeout(timeout);
       if(immediate)
       {//立即执行
         let callnum=!timeout;//此时timeout为undifind
         //如果执行过了不再执行，过段时间执行
          timeout = setTimeout(function(){
                timeout=null;
            },waite)            
        if(callnum)func.apply(context,args);
       }
       //不立即执行
       else{
        timeout=setTimeout(function()
        {
            func.apply(context,args);//apply();调用该函数并接受指定this的值，以及数值或对象
        },waite)
       }

    }
}
//防抖的返回值和取消
function debounce(func,waite,immediate)
{ let timeout,result;
    let debounce=function()
    {
        let context=this;//解决this指向问题
        let args=arguments;//解决事件对象；
      /*  if(timeout) */ clearTimeout(timeout);
       if(immediate)
       {//立即执行
         let callnum=!timeout;//此时timeout为undifind
         //如果执行过了不再执行
          timeout = setTimeout(function(){
                timeout=null;
            },waite)            
        if(callnum)func.apply(context,args);
       }
       //不立即执行
       else{
        timeout=setTimeout(function()
        {
            func.apply(context,args);//apply();调用该函数并接受指定this的值，以及数值或对象
        },waite)
       }
       return result;
    }
    debounce.cancel = function(){
            clearTimeout(timeout);
            timeout = null;//闭包的内存泄漏
    }
    return debounce;
}