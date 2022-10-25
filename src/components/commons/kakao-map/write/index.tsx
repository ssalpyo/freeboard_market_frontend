import { useEffect } from "react";
import axios from "axios";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapProps {
  onChangeLocation: (lat: number, lng: number, address: string) => void;
  lat: number;
  lng: number;
}

export default function KakaoMapWrite(props: IKakaoMapProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=da1e34053ad439b4d77d5e5a6333516b&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(props.lat, props.lng),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          props.lat,
          props.lng
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);

            axios
              .get(
                `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.La}&y=${latlng.Ma}`,
                {
                  headers: {
                    Authorization: "KakaoAK 4d8a0903342b0e77c3f679341d2ebe73",
                  },
                }
              )
              .then((res) => {
                props.onChangeLocation(
                  latlng.Ma,
                  latlng.La,
                  res.data.documents[0].address.address_name
                );
              });
          }
        );
      });
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "250px" }} />;
}
