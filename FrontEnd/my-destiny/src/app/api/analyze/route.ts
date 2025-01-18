import {  NextRequest, NextResponse } from 'next/server'
// import axios from 'axios'
// import formidable from 'formidable'
// import { IncomingForm } from 'formidable'
//import { promises as fs } from 'fs'
// import fs from 'fs/promises'
// import path from 'path'

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(req: NextRequest) {
  console.debug(req);
  // const ApiKey = process.env.DIFY_KEY;
  const ApiUrl = process.env.ANALYZE_URL;

  // const res = await axios.post(ApiUrl!, 
  //   {
  //     inputs: {
  //       images:[
  //         {"type":"image","transfer_method":"local_file","url":"","upload_file_id":"c9b68a26-a187-4c47-b306-7606cd3aeac5"},
  //         {"type":"image","transfer_method":"local_file","url":"","upload_file_id":"6adef5e6-6bad-4402-88c1-3c4ff8e1c8bd"}
  //       ],
  //       Generation:"33",
  //       Gender:"男性"
  //     },
  //     response_mode: "blocking",
  //     user: "hogehoge",
  //   },
  //   {
  //     headers: {
  //       Authorization: `Bearer ${ApiKey}` ,
  //     }
  // });

  // console.log(res);

  return NextResponse.json(
    { 
      // big_five: res.data?.big_five,
      // message: res.data?.if_result,
      // one_phrase: res.data?.one_phrase, 
      con: ApiUrl
    }
  );
  // revalidatePath('');
}