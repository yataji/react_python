import { createContext, useContext, useEffect, useState } from "react";

// const defaultContext = {
//     bookName: '',
//     setBookName: () => {},
//     authorName: '',
//     setAuthorName: () => {},
//     loading:  "false"
// };

export const mangeData = createContext();

export const DataUseContext = ({ children }) => {
  const [listData, setDataList] = useState([]);
  // const [authorName, setAuthorName] = useState('');
  // const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     console.log(listData); 
  //   }, [listData]);

  return (
    <mangeData.Provider
      value={{
        listData,
        setDataList,
      }}
    >
      {children}
    </mangeData.Provider>
  );
};

export const UseMangeData = () => {
  const context = useContext(mangeData);
  if (!context) {
    throw new Error("error context");
  }
  return context;
};
