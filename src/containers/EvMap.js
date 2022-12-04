import { useRef, useState } from "react";
import { Map, MapMarker, MapTypeId, ZoomControl } from "react-kakao-maps-sdk";
import TestPanel from "./TestPanel";
export default function EvMap() {
    const mapRef = useRef();
    const { kakao } = window;
    const [state, setState] = useState({
        // 지도의 초기 위치
        center: { lat: 33.452613, lng: 126.570888 },
        // 지도 위치 변경시 panto를 이용할지에 대해서 정의
        isPanto: false,
    })
    const [level, setLevel] = useState(3);
    const [info, setInfo] = useState();
    const [position, setPosition] = useState()
    return (
        <>
            <Map
                center={state.center}
                isPanto={state.isPanto}
                level={level} // 지도의 확대 레벨
                onDragEnd={(map) => setPosition({
                    lat: map.getCenter().getLat(),
                    lng: map.getCenter().getLng(),
                })}
                style={{ width: "100%", height: "90%" }}
                ref={mapRef}
            >
                {/* 마커 */}
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{ color: "#000" }}>Hello World!</div>
                </MapMarker>
                {/* 확대 컨트롤러 */}
                <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
                {/* 지도에 교통정보를 표시하도록 지도타입을 추가합니다 */}
                <MapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
            </Map>
            <TestPanel
                setState={setState}
                level={level}
                setLevel={setLevel}
                mapRef={mapRef}
                info={info}
                setInfo={setInfo}
                position={position}
            />
        </>
    )
}