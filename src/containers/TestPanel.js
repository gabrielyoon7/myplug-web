import { Box, Divider } from "@mui/material"

export default function TestPanel({
    setState, level, setLevel, info, setInfo, mapRef,position
}) {
    return (
        <div style={{'overflow':'scroll', height: "100%"}}>
            <div>
                <button
                    onClick={() =>
                        setState({
                            center: { lat: 33.452613, lng: 126.570888 },
                            isPanto: false,
                        })
                    }
                >
                    지도 중심좌표 이동시키기
                </button>
                <button
                    onClick={() =>
                        setState({
                            center: { lat: 33.45058, lng: 126.574942 },
                            isPanto: true,
                        })
                    }
                >
                    지도 중심좌표 부드럽게 이동시키기
                </button>
            </div>
            <Box my={1}>
                <Divider />
            </Box>
            <button
                onClick={() =>
                    setLevel(level - 1)
                }
            >
                지도 레벨 - 1
            </button>
            <button
                onClick={() =>
                    setLevel(level + 1)
                }
            >
                지도 레벨 + 1
            </button>
            <p>현재 지도 레벨은 {level} 레벨 입니다.</p>
            <Box my={1}>
                <Divider />
            </Box>
            <button onClick={() => {
                const map = mapRef.current
                setInfo({
                    center: {
                        lat: map.getCenter().getLat(),
                        lng: map.getCenter().getLng(),
                    },
                    level: map.getLevel(),
                    typeId: map.getMapTypeId(),
                    swLatLng: {
                        lat: map.getBounds().getSouthWest().getLat(),
                        lng: map.getBounds().getSouthWest().getLng(),
                    },
                    neLatLng: {
                        lat: map.getBounds().getNorthEast().getLat(),
                        lng: map.getBounds().getNorthEast().getLng(),
                    },
                })
            }}>
                정보 가져 오기!
            </button>
            {info && (
                <div>
                    <p>위도 : {info.center.lat}</p>
                    <p>경도 : {info.center.lng}</p>
                    <p>레벨 : {info.level}</p>
                    <p>타입 : {info.typeId}</p>
                    <p>남서쪽 좌표 : {info.swLatLng.lat}, {info.swLatLng.lng}</p>
                    <p>북동쪽 좌표 : {info.neLatLng.lat}, {info.neLatLng.lng}</p>
                </div>
            )}
            <Box my={1}>
                <Divider />
            </Box>
            {position && <p>{'변경된 지도 중심좌표는 ' + position.lat + ' 이고, 경도는 ' + position.lng + ' 입니다'}</p>}
            <Box my={1}>
                <Divider />
            </Box>
        </div>
    )
}