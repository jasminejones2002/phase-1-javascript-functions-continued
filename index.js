function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}
mondayWork();

function wrapAdjective(param = '*') {
    let innerFunction = function (adj = 'special') {
        return `You are ${param}${adj}${param}!`
    }
    return innerFunction;
}
wrapAdjective(param)(adj);