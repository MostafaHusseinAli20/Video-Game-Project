const baseUrl = "http://localhost:12000/allGames";

// Get All Games
export async function getListGame() {
    const response = await fetch(baseUrl)
    const data = await response.json();

    return data
}

// Get Single Game
export async function getSingleGame(id) {
    const response = await fetch(`${baseUrl}/${id}`)
    const data = await response.json();

    return data
}