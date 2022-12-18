var myArray = [

    // 2 osobowe
    {
    'miejsca':'2',
    // czy wolne?
    'wolne':'Nie',
    },

    // 4 osobowe
    {
    'miejsca':'4',
    // czy wolne?
     'wolne':'Tak',
    },

    // 6 osobowe
    {
    'miejsca':'6',
    // czy wolne?
    'wolne':'Tak',
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
