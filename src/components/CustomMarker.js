import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import markerGray from '../assets/stations/ev-gray.png';

function CustomMarker({ station }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MapMarker
      position={{ lat: station.lat, lng: station.lng }}
      clickable // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
      onClick={() => setIsOpen(true)}
      image={{
        src: markerGray, // 마커이미지의 주소입니다
        size: {
          width: 25,
          height: 25,
        }, // 마커이미지의 크기입니다
        options: {
          offset: {
            x: 27,
            y: 69,
          }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        },
      }}
    >
      {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
      {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
      {isOpen && (
        <Box width="100%" height="100%">
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            spacing={2}
          >
            <Box>
              {/* <Typography>
                                {JSON.stringify(station)}
                            </Typography> */}
              <Typography noWrap variant="h5" sx={{ fontWeight: 'bold' }}>
                {station.statNm}
              </Typography>
              <Typography noWrap>
                {station.addr}
              </Typography>
              <Typography noWrap>
                {station.useTime}
              </Typography>
              <Typography noWrap>
                {station.parkingFree}
              </Typography>
              <Typography noWrap>
                {station.limitYn}
              </Typography>
              <Typography noWrap>
                {station.busiNm}
              </Typography>
              <Typography noWrap>
                {`마지막 업데이트 ${station.date}`}
              </Typography>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              <Button
                color="error"
                variant="contained"
                onClick={() => setIsOpen(false)}
              >
                닫기
              </Button>
              <Button
                color="success"
                variant="contained"
              >
                상세보기
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </MapMarker>
  );
}
export default CustomMarker;
