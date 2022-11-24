exports.action = function(data){

var request=require("request")

console.log(data.recommence,'eeeeeeeeeeee')

if(data.recommence=="action"){
JarvisIAOldReception.pop()
console.log(JarvisIAOldReception)
console.log(JarvisIAOldReception.length )
request({ uri : 'https://127.0.0.1:4300/jarvis?reco='+JarvisIAOldReception[JarvisIAOldReception.length-1] }, function (err, response, body){console.log('err=rr'+err+response)
JarvisIAOldReception.pop()
console.log(JarvisIAOldReception)
console.log(JarvisIAOldReception.length )})
}

if(data.recommence=="phrase"){
console.log(lasttts,'dernière phrase')
JarvisIASpeech(lasttts)
}
return
}
