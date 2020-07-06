const axiosApp = axios.create({

    baseURL: 'https:ergast.com/api/f1'
})

//Standings

document.getElementById('form1').onsubmit = e => {

    e.preventDefault()

    const season = document.getElementById('input1').value
    const driver = document.getElementById('input2').value

    axiosApp
        .get(`/${season}/drivers/${driver}/driverStandings.json`)
        .then(response => {

            console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position)

            const position = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position

            const points = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points

            const wins = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].wins

            let results = `El piloto ${driver} en la temporada ${season} quedó en el mundial en la posición ${position} con ${points} puntos y ganó ${wins} carreras`

            document.getElementById("result").innerHTML = results
        })

}