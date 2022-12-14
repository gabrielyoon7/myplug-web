import axios from "axios";
const getRegionData = async (location) => {
    try {
        const response = await axios.post(`/stationsRouter/keco/find/regionData`, {
            // cancelToken: source.current.token,
            data: { // 현재 화면 모서리의 좌표 값을 전송함. 같은 축이여도 숫자가 작을 수록 값이 작음 (ex. x1<x2,  y1<y2)
                x1: location.longitude - (location.longitudeDelta / 2),
                x2: location.longitude + (location.longitudeDelta / 2),
                y1: location.latitude - (location.latitudeDelta / 2),
                y2: location.latitude + (location.latitudeDelta / 2),
            }
        })
        console.log("response >>", response.data)
        return response.data
    } catch (err) {
        console.log("Error >>", err);
        return [[],[]]
    }
}

const getAllStationData = async (location) => {
    try {
        const url = `/stationsRouter/keco/find/stations`
        console.log(url)
        const response = await axios.get(url)
        // console.log("response >>", response.data)
        return response.data
    } catch (err) {
        console.log("Error >>", err);
        return []
    }
}

export { getRegionData, getAllStationData }