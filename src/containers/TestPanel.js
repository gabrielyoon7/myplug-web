import { Box, Divider } from '@mui/material';

export default function TestPanel({
  // eslint-disable-next-line no-unused-vars
  mapLocation, setState, stations, chargers,
}) {
  return (
    <div style={{ overflow: 'scroll', height: '100%' }}>
      {/* <div>
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
            </div> */}
      <Box my={1}>
        <Divider />
      </Box>
      {/* <button
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
            <p>현재 지도 레벨은 {level} 레벨 입니다.</p> */}
      <Box my={1}>
        <Divider />
      </Box>
      {/* <button onClick={() => {
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
            )} */}
      <Box my={1}>
        <Divider />
      </Box>
      {mapLocation && (
      <>
        <div>
          [[맵 위치 변화 이후]]
        </div>
        <div>
          {`중심 위도 : ${mapLocation.center.lat}`}
        </div>
        <div>
          {`중심 경도 : ${mapLocation.center.lng}`}
        </div>
        <div>
          {`중심 위도델타 : ${mapLocation.center.latitudeDelta}`}
        </div>
        <div>
          {`중심 경도델타 : ${mapLocation.center.longitudeDelta}`}
        </div>
        <div>
          {`레벨 : ${mapLocation.level}`}
        </div>
        {/* <div>
                    {`남서 위도 : ${mapLocation.swLatLng.lat}`}
                </div>
                <div>
                    {`남서 경도 : ${mapLocation.swLatLng.lng}`}
                </div>
                <div>
                    {`남동 위도 : ${mapLocation.seLatLng.lat}`}
                </div>
                <div>
                    {`남동 경도 : ${mapLocation.seLatLng.lng}`}
                </div>
                <div>
                    {`북서 위도 : ${mapLocation.nwLatLng.lat}`}
                </div>
                <div>
                    {`북서 경도 : ${mapLocation.nwLatLng.lng}`}
                </div>
                <div>
                    {`북동 위도 : ${mapLocation.neLatLng.lat}`}
                </div>
                <div>
                    {`북동 경도 : ${mapLocation.neLatLng.lng}`}
                </div> */}
      </>
      )}
      <Box my={1}>
        <Divider />
      </Box>
      <div>
        수신받은 충전소 갯수 :
        {' '}
        {stations.length}
      </div>
      <div>
        {JSON.stringify(stations)}
      </div>
      <hr />
      <div>
        {JSON.stringify(chargers)}
      </div>
    </div>
  );
}
