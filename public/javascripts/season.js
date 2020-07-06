const axiosApp = axios.create({

    baseURL: 'https:ergast.com/api/f1'
})


document.getElementById('form-season').onsubmit = e => {

    e.preventDefault()

    const round = document.getElementById('input-round').value

    axiosApp

        .get(`/current/${round}.json`)
        .then(response => {

            console.log(response.data.MRData.RaceTable.Races[0].raceName)

            const date = response.data.MRData.RaceTable.Races[0].date
            const time = response.data.MRData.RaceTable.Races[0].time
            const raceName = response.data.MRData.RaceTable.Races[0].raceName
            const circuitName = response.data.MRData.RaceTable.Races[0].Circuit.circuitName
            const country = response.data.MRData.RaceTable.Races[0].Circuit.Location.country
            const locality = response.data.MRData.RaceTable.Races[0].Circuit.Location.locality


            let results = `La ronda ${round} de la temporada 2020 tendrá lugar en ${country}, en la localidad de ${locality}. Allí se disputará el "${raceName}", en el circuito de "${circuitName}"`
            let dates = `Si no quieres perdértelo tienes una cita el ${date} a las ${time}`
            document.getElementById("result-season").innerHTML = results
            document.getElementById("result-date").innerHTML = dates
    
        })

}

 document.getElementById('form-pilot-results').onsubmit = e => {

    e.preventDefault()
    
   const round = document.getElementById('input-round-result').value
   const pilot = document.getElementById('input-pilot').value

     axiosApp
     
         .get(`/current/${round}/drivers/${pilot}/results.json`)
         .then(response => {
             console.log(response.data.MRData.RaceTable.Races[0].Results[0].number)
             
            //  const number = response.data.MRData.RaceTable.Races[0].Results[0].number
             const position = response.data.MRData.RaceTable.Races[0].Results[0].position
             const points = response.data.MRData.RaceTable.Races[0].Results[0].points
            //  const grid = response.data.MRData.RaceTable.Races[0].Results[0].grid
            //  const laps = response.data.MRData.RaceTable.Races[0].Results[0].laps
            //  const status = response.data.MRData.RaceTable.Races[0].Results[0].status
             const fastestLap = response.data.MRData.RaceTable.Races[0].Results[0].FastestLap.Time.time
             const speed = response.data.MRData.RaceTable.Races[0].Results[0].FastestLap.AverageSpeed.speed


             let results = `El piloto ${pilot}, quedó en la posición ${position}, consiguiendo un total de ${points} puntos en la carrera.`
             let laps = `Vuelta rápida: ${fastestLap}`
             let speeds = `Velocidad máxima en carrera: ${speed}km/h`

             document.getElementById("result-pilot").innerHTML = results
             document.getElementById("result-laps").innerHTML = laps
             document.getElementById("result-speed").innerHTML = speeds


        })


 }