import axios from "axios";

function get(endPoint){
    return axios.get(endPoint).then((res)=>res).catch((err)=>err);
}
function put(endPoint,payload){
    return axios.put(endPoint,payload).then((res)=>res).catch((err)=>err);
}

export const services={get,put};