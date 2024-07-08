function convertDateFormat(string) {
    var info = string.split('-');
    let info2 = info[2]
    info2= string.split(':');
    console.log(info);
    console.log(info2);
    let n = 2;
    
    return info[2].substring(0,2) + '/' + info[1] + '/' + info[0] + ' ' + info2[0].substring(info2[0].length-n)+ ':'  + info2[1] + ':' + info2[2];
  }

fetch('https://5485732b-e059-4f80-96c1-8349a51548a1-00-3gwtqwkhsuvx5.riker.replit.dev/log')
.then(res=> res.json())
.then(data =>{
    console.log(data);
    for (let i = 0;i < data.length;i++)
    {
    let fecha = data[i]['fecha_hora'];
    
    logsito.innerHTML += `<tr>
    <td scope="row">${data[i]['nombre']}</td>
    <td>${data[i]['usuario']}</td>
    <td>${data[i]['accion']}</td>
    <td>${convertDateFormat(fecha)}</td>
    </tr>
    
    `}
}).catch(err =>{
    console.error(err);
})
