const url = 'https://petcare-app-backend.herokuapp.com/api/hotel'

export async function getAllRooms(token) {
    const res = await fetch(
        `${url}/`, {
            mode: "cors",
            method: "GET",
            headers: {
                "Accept": '*/*',
                "Authorization": `Bearer ${token}`
            }
        }
    )

    const data = await res.json()
    return data

}

export async function updateRoom(token, roomId, room) {
    const res = await fetch(
        `${url}/${roomId}`, {
            mode: "cors",
            method: "PUT",
            body: JSON.stringify(room),
            headers: {
                "Accept": '*/*',
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    )
    const data = await res.json()
    return data
}