let flat = {
    size: 1450, 
    location: 'shewrapara', 
    bedroom: 3, 
    buyingdate: "2022-09-23", 
    studyroom: false, 
    playroom: null,  
    prayerroom: undefined,
    message: function() {
        console.log(`${this.size}`);
    }
}; 

var flat2 = JSON.stringify(flat); 
console.log(flat2);