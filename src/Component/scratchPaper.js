import React, {Component} from 'react'
import Photo from './Photo'


function ScratchPaper(props) {
    return <div className="photo-grid">
            {props.posts.map((post, index) => <Photo key={index} post={post}/>)}
    </div>
  }


export default ScratchPaper