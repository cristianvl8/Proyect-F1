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