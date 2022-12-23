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
    }    
}
export default Cache;