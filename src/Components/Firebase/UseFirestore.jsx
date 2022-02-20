import { useState, useEffect } from 'react';
import { projectFirestore } from './Initialise';
import { collection , getDocs } from "firebase/firestore"; 

function useFirestore (currCollection) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
      async function unsub()
      {
          let documents=[];
          getDocs(collection(projectFirestore, currCollection)).then(value=> {
              value.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
              })
          });
        setDocs(documents); 
      }
    return unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [currCollection]);
  //console.log(docs);
  return {docs};
}

export default useFirestore;