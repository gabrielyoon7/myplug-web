export default function TestPanel({
    setState, level, setLevel
}) {
    return (
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
        </div>
    )
}