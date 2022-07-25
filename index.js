$(document).ready( function () {

$.ajax({
    type: 'get',
    url:'https://api.covid19api.com/summary',
    success: function(response){
        console.log(response.Countries);
        /*for (var i=0;i<response.Countries.length;i++){
            console.log(response.Countries[i].TotalConfirmed);
        }*/
        //Country,TotalConfirmed,TotalRecovered,TotalDeaths
        for (var i=0;i<response.Countries.length;i++){
            var country = response.Countries[i].Country;
            var confirmed = response.Countries[i].TotalConfirmed;
            var deaths = response.Countries[i].TotalDeaths;

            var tablerow = "<tr> <td>"+ country +"</td> <td>" +confirmed+"</td> <td>"+deaths+ "</td> </tr>";
            $('#tbody').append(tablerow);
        }

        
        $('#covidtable').DataTable();
    },
    error: function(error){
        console.log(error);
    },
})
})   

