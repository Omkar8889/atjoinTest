import React, { useState } from 'react'

function MyForm() {
    const [userName, setUserName]=useState()
    const [file, setFile]=useState()
    const [rank, setrank]=useState()
    const [userId, setuserId]=useState()
    
    const changeUserName=(e)=>{
        setUserName(e.target.value)
        console.log(userName)
    }
    const changeFile=(e)=>{
        setFile(e.target.files[0])
        console.log(file)
    }
    const changeRank=(e)=>{
        setrank(e.target.value)
        console.log(e)
    }
    const changeUserId=(e)=>{
        setuserId(e.target.value)
        console.log(userId)
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        let user={
            'userName':userName,
            'userId':userId,
            'rank':rank
        }
        console.log(user)
    }
  return (
    <form >
        <div className='elementContainer'>
        <label htmlFor="userName">username</label><input type="text" name='userName' value={userName}
        onChange={changeUserName} />
        </div>

        <div className='elementContainer'>
        <input type="file" id="photo" name="photo" accept="image/png, image/jpeg" onChange={changeFile} />
        </div>

        <div className='elementContainer'>
            <label htmlFor="UserId">userid: #</label><input type="number" id="UserId" name="UserId" value={userId} onChange={changeUserId} min="1" max="999999"/>
        </div>
        <div className="elementContainer">
            <select name="rank" id="rank" onChange={changeRank}>
            <option value="">select rank</option>
            <option value="first">First Rank</option>
            <option value="second">Second Rank</option>
            <option value="third">Third Rank</option>
            </select>
        </div>

        <button onClick={handleSubmit}>submit</button>
    </form>
  )
}

export default MyForm
