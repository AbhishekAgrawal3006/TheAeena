import React, { useEffect, useState } from 'react';
import useStorage from './Firebase/UseStorage';
import { motion } from 'framer-motion';

const ImageGrid =({ setSelectedImg }) => {
    const imgs=useStorage("images/");
  return (
    <div className="img-grid">
      {imgs.map((doc,index) => (
        <motion.div className="img-wrap" key={index} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc)}
          >
          <motion.img src={doc} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;