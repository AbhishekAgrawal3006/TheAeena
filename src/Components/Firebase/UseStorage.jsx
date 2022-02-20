import { projectStorage } from "./Initialise";
import { getDownloadURL, getStorage, list, ref , getBytes} from "firebase/storage";
import { useEffect, useState } from "react";


function useStorage(path)
{
    const [items,setItems]=useState([]);
    const [imgs,setImgs]=useState([]);
    const pathReference = ref(projectStorage, path);
    useEffect( () => 
    {
        list(pathReference).then(val => {
            val.items.forEach(refer => getDownloadURL(refer).then( url => {
                setImgs( (oldVal) => {
                    return [...oldVal,url];
                });
            }));
        });
    },[path])
    //console.log(imgs);
    return imgs;
}
export default useStorage;