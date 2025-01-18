'use client'

import { useState, useEffect } from 'react'

export default function ImageUploadForm() {
  const [message, setMessage] = useState<string>('')
  const [isUploading, setIsUploading] = useState(false)
  const [CookieId, setCookieId] = useState<string>('');
  useEffect( () => {
    const _Id = window.localStorage.getItem("CookieId");
    setCookieId( _Id ? _Id : "");
  }, []);
  

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsUploading(true)
    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        // headers: { 
        //   'Content-Type': 'multipart/form-data; boundary=--waeoijvbawefdnlk'
        // },
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        setMessage(result.message)
      } else {
        setMessage('Upload failed')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('An error occurred')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Image Upload</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            好きな写真
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            multiple
            className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
          />
        </div>
        <input id="user" type="hidden"  value={CookieId}/>
        <button
          type="submit"
          disabled={isUploading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  )
}