import { Map, MapMarker, MapTypeId, ZoomControl } from "react-kakao-maps-sdk";
export default function EvMap({
    state, level, setPosition, mapRef, kakao, open, drawerWidth
}) {

    return (
        <>
            <Map
                center={state.center}
                isPanto={state.isPanto}
                level={level} // 지도의 확대 레벨
                onDragEnd={(map) => setPosition({
                    center:{
                        lat: map.getCenter().getLat(),
                        lng: map.getCenter().getLng(),    
                    },
                    swLatLng: {
                        lat: map.getBounds().getSouthWest().getLat(),
                        lng: map.getBounds().getSouthWest().getLng(),
                    },
                    seLatLng: {
                        lat: map.getBounds().getNorthEast().getLat(),
                        lng: map.getBounds().getSouthWest().getLng(),
                    },
                    nwLatLng: {
                        lat: map.getBounds().getSouthWest().getLat(),
                        lng: map.getBounds().getNorthEast().getLng(),
                    },
                    neLatLng: {
                        lat: map.getBounds().getNorthEast().getLat(),
                        lng: map.getBounds().getNorthEast().getLng(),
                    },
                })}
                style={{
                    // flex: 1,
                    width: "100%",
                    // width: `calc(100% - ${open ? drawerWidth : '0'}px)`,
                    height: "100%",
                }}
                ref={mapRef}
            >
                {/* 마커 */}
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{ color: "#000" }}>Hello World!</div>
                </MapMarker>
                {/* 확대 컨트롤러 */}
                <ZoomControl position={kakao.maps.ControlPosition.BOTTOMLEFT} />
                {/* 지도에 교통정보를 표시하도록 지도타입을 추가합니다 */}
                <MapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
            </Map>
        </>
    )
}