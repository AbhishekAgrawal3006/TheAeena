import React, {useState} from "react"
import ImageGrid from "./ImageGrid"
import Modal from "./Modal"

function Overview()
{
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div className="grid">
            <div className="title">
                <h2>Projects</h2>
                <p>Some stuff I have worked on</p>
            </div>
            <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </div>
    )
}

export default Overview