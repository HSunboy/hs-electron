import {send} from "./baseNet.js";
const api={
    getGroup(param,success,fail){
        send("/ajax/html5/crm/getTraderGroupNumber.json",param,success,fail);
    },
    addAccount(param,success,fail){
        send("/ajax/html5/crm/addTraderInfo.json",param,success,fail);
    },
    addGroup(param,success,fail){
        send("/ajax/html5/crm/addGroupAgent.json",param,success,fail);
    },
    getAccountList(param,success,fail){
        send("/ajax/html5/crm/getTraderGroupList.json",param,success,fail);
    },
    changeGroup(param,success,fail){
        send("/ajax/html5/crm/addTraderGroup.json",param,success,fail);
    },
    getAllAccount(param,success,fail){
        send("/ajax/html5/crm/getTraderInfoList.json",param,success,fail);
    },
    getAllAccountWithoutId(param,success,fail){
        send("/ajax/html5/crm/getTraderInfoNotInGroupList.json",param,success,fail);
    },
    getTraderGroupList(param,success,fail){
        send("/ajax/html5/crm/getTraderGroupDetailInfoList.json",param,success,fail);
    }

    
};

export default api;