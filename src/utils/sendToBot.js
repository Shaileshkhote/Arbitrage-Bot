function sendToBot(price, srcSymbol, destSymbol, srcChain, destChain, name) {
    const text = `------------------%0A*Token* %0A ${srcSymbol}-${destSymbol}%0A *Chains* %0A${srcChain}-${destChain} %0A%0A *Opportunity*%0A$${price}%0A *Platform*%0A${name}`
    const token = "5140491483:AAFKTzdOHUnGHaL2gPpYQRRjgLNoMSnvaaw";
    const chat_id = -409756696;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=markdown`;

    const send = new XMLHttpRequest();
    send.open("GET", url, true);
    send.send();

    console.log("SEND TO TELEGRAM")

}
export default sendToBot;