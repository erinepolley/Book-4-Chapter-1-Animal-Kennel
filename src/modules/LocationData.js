const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },

  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },

  deleteLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`,
      {
        method: "DELETE"
      })
      .then(result => result.json())
  },

  post(locationObj) {
    return fetch(`${remoteURL}/locations/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(locationObj)
      })
      .then(response => response.json())
  },

  update(editedLocation) {
    return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(data => data.json());
  }
}