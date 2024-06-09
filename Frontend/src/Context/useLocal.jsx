import { createContext, useContext, useEffect, useState } from "react";

export const contextLocalData = createContext();

export const DataLocalContext = ({ children }) => {
  const [localData, setDataLocal] = useState([]);
  // const [authorName, setAuthorName] = useState('');
  // const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     console.log(localData);
  //   }, [localData]);

  return (
    <contextLocalData.Provider
      value={{
        localData,
        setDataLocal,
      }}
    >
      {children}
    </contextLocalData.Provider>
  );
};

export const UseLocalData = () => {
  const context = useContext(contextLocalData);
  if (!context) {
    throw new Error("error context");
  }
  return context;
};
