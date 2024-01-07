import React, { useContext } from 'react'

function Profile() {

    const {data} = useContext(useContext);

    if(!data) {
        alert("Enter login details");
    }
  return (
    <>
    <h1>Hey {data.username}</h1>
    </>
  )
}

export default Profile
