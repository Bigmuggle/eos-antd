import Jsonp from 'jsonp'

export default class Axios{
    static jsonp(options){
      return  new Promise((reject,resolve)=>{
            Jsonp(options.url,{
                param: "callback"
            },function(err,response){
    
                  reject(response)
              
            })
        })

        
    }
}