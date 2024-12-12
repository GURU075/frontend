
function print(){
    const d = new Date();
    postMessage(d.toString());
    setTimeout(print,1000);
}
print();