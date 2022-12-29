import { useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";

const CustomMarker = ({ station }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MapMarker
            position={{ lat: station.lat, lng: station.lng }}
            clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
            onClick={() => setIsOpen(true)}
        >
            {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
            {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
            {isOpen && (
                <div style={{ minWidth: "150px" }}>
                    <img
                        alt="close"
                        width="14"
                        height="13"
                        src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                        style={{
                            position: "absolute",
                            right: "5px",
                            top: "5px",
                            cursor: "pointer",
                        }}
                        onClick={() => setIsOpen(false)}
                    />
                    <div style={{ padding: "5px", color: "#000" }}>{JSON.stringify(station)}</div>
                </div>
            )}
        </MapMarker>
    )
}
export default CustomMarker;