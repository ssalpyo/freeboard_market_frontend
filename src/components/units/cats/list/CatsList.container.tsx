import axios from "axios";
import { useEffect, useState } from "react";
import CatsListUI from "./CatsList.presenter";

export default function CatsList() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async () => {
      new Array(9).fill(1).map(async (_) => {
        const result: any = await axios.get(
          "https://api.thecatapi.com/v1/images/search"
        );
        setImgUrls((prev) => [...prev, result.data[0].url]);
      });
    };
    getImg();
  }, []);

  return <CatsListUI imgUrls={imgUrls} />;
}
