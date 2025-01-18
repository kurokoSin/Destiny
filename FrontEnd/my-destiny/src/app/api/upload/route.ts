import {  NextRequest, NextResponse } from 'next/server'
// import formidable from 'formidable'
// import { IncomingForm } from 'formidable'
// import { promises as fs } from 'fs'
// import fs from 'fs/promises'
// import path from 'path'

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  try {
    const response = await fetch('https://api.dify.ai/v1/files/upload', {
      method: 'POST',
      headers: { 
        'Content-Type': "multipart/form-data",
        'Authorization': 'Bearer app-ydap2xSsQP8a1eicacPQ9fpn'
      },
      body: formData,
    })

    if (response.ok) {
      const result = await response.json()
      console.info(result.message)
    } else {
      console.error('Upload failed')
      console.error(response.body)
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    console.error(false)
  }

  return NextResponse.json({ message: 'Files Created' });
  // revalidatePath('');
}

// export async function POST(request: NextRequest) {
//   // Create a new formidable instance
//   const form = new formidable.IncomingForm({
//     // Configure upload options
//     uploadDir: path.join(process.cwd(), 'public/uploads'),
//     keepExtensions: true,
//     maxFileSize: 5 * 1024 * 1024, // 5MB max file size
//     multiples: true // Allow multiple files
//   })

//   // Parse the incoming form data
//   return new Promise((resolve, reject) => {
//     form.parse(request, async (err, fields, files) => {
//       if (err) {
//         return resolve(
//           NextResponse.json(
//             { error: 'File upload failed' }, 
//             { status: 400 }
//           )
//         )
//       }

//       try {
//         // Process text fields
//         const username = fields.username as string
//         const email = fields.email as string

//         // Process uploaded files
//         const uploadedFiles = Array.isArray(files.file) 
//           ? files.file 
//           : [files.file]

//         const processedFiles = uploadedFiles.map((file: formidable.File) => ({
//           originalFilename: file.originalFilename,
//           mimetype: file.mimetype,
//           size: file.size,
//           filepath: file.filepath.replace(process.cwd(), '')
//         }))

//         // Return successful response
//         resolve(
//           NextResponse.json({
//             message: 'Upload successful',
//             user: { username, email },
//             files: processedFiles
//           }, { 
//             status: 200 
//           })
//         )
//       } catch (error) {
//         resolve(
//           NextResponse.json(
//             { error: 'Internal server error' }, 
//             { status: 500 }
//           )
//         )
//       }
//     })
//   })
// }


// export async function POST(req: NextRequest) {
//   const form = new IncomingForm()

//   return new Promise((resolve, reject) => {
//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       if (typeof(files.image) == "undefined") {
//         reject("ファイルが見つかりません");
//         return;
//       }

//       const file = files.image[0];
//       const data = await fs.readFile(file.filepath)
//       const fileName = `${Date.now()}-${file.originalFilename}`
//       await fs.writeFile(`./public/uploads/${fileName}`, data)
//       await fs.unlink(file.filepath)

//       resolve(NextResponse.json({ message: 'File uploaded successfully' }))
//     })
//   })

  //   let formData = new FormData(event.currentTarget)
  //   formData.append("user", "hogehoge");

  //   try {
  //     const response = await fetch('https://api.dify.ai/v1/files/upload', {
  //       method: 'POST',
  //       headers: { 
  //         "Authorization": "Bearer app-ydap2xSsQP8a1eicacPQ9fpn",
  //         "Content-Type": "application/json"
  //       },
  //       body: formData,
  //     })

  //     if (response.ok) {
  //       const result = await response.json()
  //       setMessage(result.message)
  //     } else {
  //       setMessage('Upload failed')
  //     }
  //   } catch (error) {
  //     console.error('Error:', error)
  //     setMessage('An error occurred')
  //   } finally {
  //     setIsUploading(false)
  //   }
  // }

// }