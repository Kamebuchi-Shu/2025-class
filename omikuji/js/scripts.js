document.getElementById('draw').addEventListener('click', function(){
    const omikujiResults = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    const result = omikujiResults[
        Math.floor(Math.random() * omikujiResults.length)];
    omkj = document.getElementById('result')
    omkj.textContent =
       `あなたの運勢は… ${result}!`; 
    switch(result){
        case '大吉':
            omkj.style.color = '#ff0000';
            break;
        case '大凶':
            omkj.style.color = "#0000ff";
            break;
        default:
            omkj.style.color = '#000000';
            break;
    }
});