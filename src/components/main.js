import data from "../data/data";
import Display from "./display";
export default function Main() {
  return data.map((singleData) => {
    return <Display key={data.id} data={singleData} />;
  });
}


