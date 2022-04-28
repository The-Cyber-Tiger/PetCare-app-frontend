const url = 'https://petcare-app-backend.herokuapp.com/api/pet'
const urlogin = 'https://petcare-app-backend.herokuapp.com/login'

export async function getToken(credentials){
    const res = await fetch(
        `${urlogin}/`, {
            mode: "cors",
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Accept": '*/*',
                "Content-Type": "application/json"
            }
        }
    )
    const data = await res.json()
    return data
}

export async function getAllPets(token) {
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

export async function getPet(token, petId) {
    const res = await fetch(
        `${url}/${petId}`, {
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

export async function addPet(token, pet) {
    const res = await fetch(
        `${url}/`, {
            mode: "cors",
            method: "POST",
            body: JSON.stringify(pet),
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

export async function updatePet(token, petId, pet) {
    const res = await fetch(
        `${url}/${petId}`, {
            mode: "cors",
            method: "PUT",
            body: JSON.stringify(pet),
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

export async function removePet(token, petId) {
    const res = await fetch(
        `${url}/${petId}`, {
            mode: "cors",
            method: "DELETE",
            headers: {
                "Accept": '*/*',
                "Authorization": `Bearer ${token}`
            }
        }
    )

    const data = await res.json()
    return data
}

export async function getLast(token){
    const res = await fetch(
        `${url}/last`, {
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