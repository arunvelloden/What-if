
function generateWeatherDescription() {
    const descriptions = [
        "The sun smiles upon the castle walls, with a gentle breeze carrying the scent of wild herbs.",
        "A downpour fit for an epic tale, muddying the paths but filling the moats aplenty.",
        "Lightning crackles over the kingdom, as if the dragons themselves are displeased.",
        "A heavy mist blankets the village, with whispers of ghostly figures.",
        "Snow falls silently over the town, muffling the sounds of the bustling market.",
        "The winds howl as if carrying the voices of long-lost knights."
    ];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

// Display Weather for the Selected Location
function showWeather(location) {
    const weather = generateWeatherDescription();
    document.getElementById("weather-info").innerHTML = `<strong>${location}</strong>: ${weather}`;
}
