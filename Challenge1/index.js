module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const shin = '\u1513';
    const nun = '\u1504';
    const gimel = '\u1490';
    const he = '\u1492';
    let randomNum = Math.floor(Math.random() * (5 - 1) ) + 1;
    let ans;

    switch(randomNum){
        case 1: ans = shin;
        break;
        case 2: ans = nun;
        break;
        case 3: ans = gimel;
        break;
        case 4: ans = he;
        break;
        default: context.log('Somewhere Wrong with my Math.random()');
    }

    context.res = {
        body: 'Running Driedel .....  \n' + (ans)
    };
};