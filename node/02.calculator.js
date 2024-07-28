function add(n1,n2){
    return n1+n2;
}

function minus(n1,n2){
    return n1-n2;
}

function mul(n1,n2){
    return n1*n2;
}

function div(n1,n2){
    return n1/n2;
}

const defaultNum = 0;

module.exports = {
    add,
    minus,
    mul,
    div,
    defaultNum,
};