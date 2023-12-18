import React, { useEffect, useState } from "react";
import DataPagination from "./DataPagination";
import axios from "axios";
const App = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setJsonData(res.data);
    });
  }, []);
  return <DataPagination data={jsonData} />;
};

export default App;
