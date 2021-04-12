import {useState} from "react";

export default function useCoordinates() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  return [data, setData];
}
