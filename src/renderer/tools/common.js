module.exports={
    String:{
        isBlank(val){
            if(val){
                return false;
            }
            return true;
        },
        isnotBlank(val){
            if(val){
                return true;
            }
            return false; 
        },
        firstUpperCase(str){
            return str.replace(/^\S/,function(s){return s.toUpperCase();});
        }
    }
    
};