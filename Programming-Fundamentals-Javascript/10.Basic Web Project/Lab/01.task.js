function test(params) {
    console.log("It's okay")
}
function innerLog(params) {
    console.log('inner')
}
module.exports = {
    test,
    innerLog
}