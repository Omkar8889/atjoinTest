import React, { useState } from 'react'
import PDFFile from '../coponents/PDFFile'

function MyForm() {
    const [userName, setUserName]=useState()
    const [file, setFile]=useState()
    const [rank, setrank]=useState()
    const [userId, setuserId]=useState()
    const [user, setuser]=useState({
            'userName':'',
            'userId':'',
            'rank':'',
            'image':''
    })
    const changeUserName=(e)=>{
        setUserName(e.target.value)
    }
    const changeFile=(e)=>{
        setFile(e.target.files[0])
    }
    const changeRank=(e)=>{
        setrank(e.target.value)
    }
    const changeUserId=(e)=>{
        setuserId(e.target.value)
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        setuser({
            'userName':userName,
            'userId':userId,
            'rank':rank,
            'image':file
        })

    }

  return (
    <>
    <form >
        <div className="container">
          
        <div className='imgContainer'>
        <input type="file" id="photo" name="photo" accept="image/png, image/jpeg" onChange={changeFile} />
        </div>

        <div className="textCotainer">
        <div className='elementContainer'>
        <label htmlFor="userName">username</label><input type="text" name='userName' value={userName}
        onChange={changeUserName} />
        </div>


        <div className='elementContainer'>
            <label htmlFor="UserId">userid: #</label><input type="number" id="UserId" name="UserId" value={userId} onChange={changeUserId} min="1" max="999999"/>
        </div>
        <div className="elementContainer">
            <label htmlFor="rank">select rank</label><select name="rank" id="rank" onChange={changeRank}>
            <option value="">select rank</option>
            <option value="first">First Rank</option>
            <option value="second">Second Rank</option>
            <option value="third">Third Rank</option>
            </select>
        </div>
        </div>

        </div>
        <button onClick={handleSubmit}>submit</button>
          
    </form>
    <PDFFile user={user} />
    </>
  )
}

export default MyForm
