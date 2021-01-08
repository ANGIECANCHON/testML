const messageProcess = (mssKenobi, mssSky, mssSato)=>{
    let fullMessage = []

    for(const index in mssKenobi){
        fullMessage.push(mssKenobi[index] || mssSky[index] || mssSato[index])
    }

    fullMessage = fullMessage.filter( onlyUnique )

    return fullMessage
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}

module.exports = {
    messageProcess
}