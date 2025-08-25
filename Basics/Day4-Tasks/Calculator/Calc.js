function showCalc(){
    var button = document.getElementById('calc');
    const buttonIcon = [1,2,3,'+',4,5,6,'-',7,8,9,'*','.',0,'=','/'];
    var count =0;
    var btString='<tr>';
    for(let element of buttonIcon  ) {
        
        if((count%4)==0)
        {
            btString+='</tr>'
            btString+='<tr>'
        }
        if(element=='='){
            btString += '<td> <button value='+element+' id="bt'+count+'" onclick="display.value=eval(display.value)">'+element+'</button></td>'
            count+=1
            continue;
        }
        btString += '<td> <button value='+element+' id="bt'+count+'" onclick="display.value+=bt'+count+'.value">'+element+'</button></td>'
        count+=1
     
    };
    btString+='</tr>'
    button.innerHTML=btString
}

showCalc()