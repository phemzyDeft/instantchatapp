import React, {useState} from 'react'
import { userAuth } from '../context/AuthContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'

const Sendmessage = () => {
  const { currentUser } = userAuth()

  const [value, setValue] = useState("")

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    if (value.trim() === "") {
      alert('enter a valid message');
      return;
    }

      try {
        const { uid, displayName, photoURL } = currentUser
        await addDoc(collection(db, "messages"), {
          text: value,
          name: displayName,
          uid,
          image: photoURL,
          createdAt: serverTimestamp()

        })
      } catch (error) {
        // console.log(error)
      }
      setValue("")
  }
  

  return (
    <div className="fixed bg-gray-200 bottom-0 w-full p-10 shadow-lg">
        <form onSubmit={handleSubmit} action="" className="containerWrapper flex">
            <input type="text" value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none rounded-r-none bg-gray-100" />
            <button type="submit" className="bg-gray-500 w-auto text-white rounded-r-lg text-sm px-5">send</button>
        </form>
    </div>
  )
}

export default Sendmessage