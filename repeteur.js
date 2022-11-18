exports.action = function(data){

var request=require("request")
JarvisIAOldReception.pop()
console.log(JarvisIAOldReception)
console.log(JarvisIAOldReception.length )
request({ uri : 'https://127.0.0.1:4300/jarvis?reco='+JarvisIAOldReception[JarvisIAOldReception.length-1] }, function (err, response, body){console.log('err=rr'+err+response)
JarvisIAOldReception.pop()
console.log(JarvisIAOldReception)
console.log(JarvisIAOldReception.length )})
}
