import React, { useState } from 'react';
 import { Upload, Button } from "antd";

export default function Addplan(props) {
    const initialstate = {
        videoSrc:""
    }

    const [videoSrc , seVideoSrc] = useState("");
    //const { videoSrc } = apiData;

    const handleChange = (info) => {
        console.log(info)

     //set the video file to videoSrc here
    };


    return (
        <React.Fragment>
            <h3>Add new video:</h3>
            <div className="action">
                <Upload className="mt-3 mb-3"
                    accept=".mp4"
                    action="https://youtu.be/ySQju177OG0"
                    listType="video"
                    maxCount={1}
                    onChange={handleChange}>
                    <Button>
                       Add video
                    </Button>
                    
                </Upload>
{/*                 
                <video width="400" controls>
                  <source
                    src={videoSrc.Src}
                    type={videoSrc.type}
                   />
                   Your browser does not support HTML5 video.
                </video> */}
            </div>


        </React.Fragment>
    )
}