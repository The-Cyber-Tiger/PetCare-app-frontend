const url = 'https://petcare-app-backend.herokuapp.com/api/insumos'

export async function getAllInsumos(token) {
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

export async function updateInsumo(token, insumoId, insumo) {
    const res = await fetch(
        `${url}/${insumoId}`, {
            mode: "cors",
            method: "PUT",
            body: JSON.stringify(insumo),
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
