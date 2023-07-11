'use client'
import React, { useState } from 'react'

function User({ id, name, setChangeCount}) {
	const [isEditingMode, setIsEditingMode] = useState(false)
	const [inputchange, setInputChange] = useState(name)
	function handleEditingMode() {
		setIsEditingMode(true)
	}

	function handleInputChange(e) {
		setInputChange(e.target.value)
	}

	async function handleUpdate(id, userName) {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_ROOT_URL}/update-users`,
			{
				method: 'PUT',
				
				body: JSON.stringify({
					id:id,
					userName:userName,
				}),
			},
		).then((res) => res.json())
    setChangeCount(count=>count+1)
    setIsEditingMode(false)
		console.log('res', response)
	}

  async function handleDelete(id) {
    const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_ROOT_URL}/delete-user`,
			{
				method: 'DELETE',
				body: JSON.stringify({id}),
			},
		).then((res) => res.json())
    setChangeCount(count=>count+1)
		console.log('res', response)
  }

	return (
		<li key={id}>
			{isEditingMode ? (
				<input type='text' value={inputchange} onChange={handleInputChange} />
			) : (
				name
			)}

			<button
				onClick={() =>
					isEditingMode ? handleUpdate(id, inputchange) : handleEditingMode()
				}
				className={`${
					isEditingMode ? 'border-green-500' : 'border-red-500'
				} border-2 mx-2`}>
				{isEditingMode ? 'Save' : 'Edit'}
			</button>

			<button
				onClick={() => handleDelete(id)}
				className='border-red-500 border-2 mx-2'>
				Delete
			</button>
		</li>
	)
}

export default User
