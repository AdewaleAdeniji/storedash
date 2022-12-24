import moment from 'moment';
import configs from "./configs";
const Cache = {
    get: function(key) {
        return localStorage.hasOwnProperty(key) ? localStorage.getItem(key) : false;
    },
    save: function(key, value) {
        return localStorage.setItem(key, value);
    },
    saveJSON: function(key, value){
        return this.save(key, JSON.stringify(value));
    },
    getJSON: function(key, value){ 
        return localStorage.hasOwnProperty(key) ? JSON.parse(this.get(key)) : false;
    },
    saveUser: function(user){
        const token = user._token;
        const expiry = moment().add(30,'minutes');
        user.expiry = expiry;
        this.saveJSON(configs.user_profile_key, user);
        this.save(configs.token_key, token);
        return true;
    },
    getUser: function(){
        const user = this.getJSON(configs.user_profile_key);
        const token = this.get(configs.token_key);
        if(!user || !token) return false;
        const expiry = user.expiry;
        const isExpired = moment().isAfter(expiry);
        if(isExpired) {
            this.dumpUser();
            return false;
        }
        return { user, token};
    },
    getToken: function(){
        const user = this.getJSON(configs.user_profile_key);
        const token = this.get(configs.token_key);
        if(!user || !token) return false;
        const expiry = user.expiry;
        const isExpired = moment().isAfter(expiry);
        if(isExpired) {
            this.dumpUser();
            window.location.href = '/auth/sign-in';
            return false;
        }
        return token;
    },
    dumpUser: function(){
        localStorage.removeItem(configs.user_profile_key);
        localStorage.removeItem(configs.token_key);
    },
    remove: function(key){
        return localStorage.removeItem(key);
    }
}
export default Cache;