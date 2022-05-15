function throttle(func,wait,options) 
        {
            let timeout;
            let old=0;
            return function() 
            {
               let context=this;
               let args=arguments;
                let now=new Date().valueOf();
                if(options.leading==false&&!old){
                    old=now;
                }
                if(now- old >wait)
                {  //第一次执行
                    if(timeout){
                    clearTimeout(timeout);
                    timeout=null;
                }
                    func.apply(context,args);
                    old=now;
                }
                else if(!timeout&&options.trailing!==false)
                {//最后一次执行
                    timeout=setTimeout(function(){
                        old=new Date().valueOf();
                       func.apply(context,args);
                       timeout=null;
                    },wait)
                }
            }
        }