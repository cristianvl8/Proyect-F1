


const axiosStandings = axios.create({

    baseURL: 'https:ergast.com/api/f1'
})

//Standings


document.getElementById('form1').onsubmit = e => {

    e.preventDefault()

    const season = document.getElementById('input1').value
    const driver = document.getElementById('input2').value

    axiosStandings
        .get(`/${season}/drivers/${driver}/driverStandings.json`)
        .then(response => {
        // console.log(response.data.MRData.StandingsTable.StandingsLists.DriverStandings[0])
          console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position)
        })

}