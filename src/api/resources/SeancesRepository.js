import client from "../client"

const resource = '/seances'

export const getSeances = (params) => {
    return client.get(`${resource}`, { params });
}

export const getSeance = (seanceId) => {
    return client.get(`${resource}/${seanceId}`);
}

