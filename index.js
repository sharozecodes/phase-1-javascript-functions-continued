
function mondayWork(task = "go to the office"){

    return `This Monday, I will ${task}.`;

}

function saturdayFun(fun = "roller-skate"){

    return `This Saturday, I want to ${fun}!`;

}


function wrapAdjective(flair = "*"){

    return function (note = "special"){
        return `You are ${flair}${note}${flair}!`;
    };

}
