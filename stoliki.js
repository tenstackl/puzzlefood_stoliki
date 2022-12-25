var myArray = [

    // 2 osobowe
    {
    'miejsca':'2',
    // czy wolne?
    'wolne':'-',
    },

    // 4 osobowe
    {
    'miejsca':'4',
    // czy wolne?
     'wolne':'-',
    },

    // 6 osobowe
    {
    'miejsca':'6',
    // czy wolne?
    'wolne':'-',
    },
       // 8 osobowe
    {
    'miejsca':'8',
    // czy wolne?
    'wolne':'-',
    },
        // 10 osobowe
    {
    'miejsca':'10',
    // czy wolne?
    'wolne':'-',
    },
]

buildTable(myArray)



function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].miejsca} osobowe</td>
                        <td>${data[i].wolne}</td>
                        
                  </tr>`
        table.innerHTML += row


    }
}
