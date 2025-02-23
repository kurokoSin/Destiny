"use client";

import React, { useState } from "react";
// import axios from "axios";
import Image from "next/image";
import { MyLink } from "../components/ButtonNormal";
import Link from "next/link";

export default function Home() {
  const user_id = "x3zncbzaecv1shnh9vz7hq3e";
  const [isCommentSending, setIsCommentSending] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  // const maxImagesUpload = 4; // 画像を最大4枚まで選択・アップロード
  // const [commentText, setCommentText] = useState<string>("");
  const inputId =  "p" + user_id; // Math.random().toString(32).substring(2);

  const handleOnSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    setIsCommentSending(true);

    const target = e.target as typeof e.target & {
      comment: { value: string };
    };

    const data = new FormData();
    images.map((image) => {
      data.append("images[]", image);
    });
    data.append("comment", target.comment?.value || "");
    // コメントを送信
    // const postedComment = await axios.post("/api/v1/comments", data);
    setIsCommentSending(false);

    location.href="/profile/result";
  };

  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImages([...images, ...e.target.files]);
  };

  const handleOnRemoveImage = (index: number) => {
    // 選択した画像は削除可能
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (<>
    <h4 className="text-4xl font-bold text-center mt-2 me-auto text-purple-500 w-full max-w-md border-b-2 border-solid">
      <div className="w-full max-w-md flex">
        <div><Link href="/">運命&apos;ker</Link></div>
      </div>
    </h4>
    <form action="" onSubmit={(e) => handleOnSubmit(e)} className="p-1">
      <span aria-hidden="true" className="hidden">{user_id}</span>
      <div>
        <div className="flex flex-col p-2">
          <div className="flex flex-col md:flex-row mt-5 border">
            <div>【性別】</div>
            <div className="grid grid-cols-3 gap-x-3 my-3 px-5" >
              <label><input type="radio" name="sex" value="1" id="s1" />男</label>
              <label><input type="radio" name="sex" value="2" id="s2" />女</label>
              <label><input type="radio" name="sex" value="9" id="s3" />第3の性,ノンバイナリー</label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 border">
            <div>【希望する相手の性別】</div>
            <div className="grid grid-cols-3 gap-x-3 my-3 px-5">
              <label><input type="radio" name="partner_sex" value="1" id="ps1" />男</label>
              <label><input type="radio" name="partner_sex" value="2" id="ps2" />女</label>
              <label><input type="radio" name="partner_sex" value="9" id="ps3" />第3の性,ノンバイナリー</label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 border">
            <div>【相手に求める交際期間】</div>
            <div className="grid grid-cols-3 gap-x-3 my-3 px-5">
              <label><input type="radio" name="partner_term" value="3" id="ps1" />３日</label>
              <label><input type="radio" name="partner_term" value="90" id="ps2" />３ヶ月</label>
              <label><input type="radio" name="partner_term" value="365" id="ps3" />１年以上</label>
            </div>
            <div>
              <ul className="list-outside ms-4 ps-1 text-wrap marker:content-['※'] text-sm">
                <li><small className="">希望した期間が一致した相手のみマッチします。</small></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 border">
            <div className="">【あなたの好きな写真】</div>
            <div className="my-3 px-5">
              <label htmlFor={inputId}>
                {/*
                <button type='button'
                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                >
                  <div className="flex flex-row">
                    <Image alt="photo" src="/photo.svg" width={24} height={24} color="white" />
                    <span>写真を追加</span>
                  </div>
                </button>
                */}
                <input id={inputId} type="file" multiple 
                  accept="image/*,.jpeg,.jpg,.gif,.png,.jpg,.webp,.avif"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnAddImage(e)
                  }
                  required
                />
              </label>
            </div>
            {/* 1つのボタンで画像を選択する */}
            {/*<label htmlFor={inputId}>
              <Button
                variant="contained"
                disabled={images.length >= maxImagesUpload}
                component="span"
              >
                画像追加
              </Button>
              <input
                id={inputId}
                type="file"
                multiple
                accept="image/*,.png,.jpg,.jpeg,.gif"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleOnAddImage(e)
                }
                style={{ display: "none" }}
              />
            </label>*/}
            {/* 画像を選択したら選択中のすべての画像のプレビューを表示 */}
            <div className="flex flex-wrap gap-2 p-2">
            {images.map((image, i) => (
              <div
                key={i}
                className="flex"
                style={{
                  position: "relative",
                  width: "40%"
                }}
              >
                <Image alt="remove" src="/x-circle.svg"
                  width={32} height={32}
                  className="absolute top-0 right-0"
                  onClick={() => handleOnRemoveImage(i)}
                />

                {/*  
                <IconButton
                  aria-label="delete image"
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    color: "#aaa"
                  }}
                  onClick={() => handleOnRemoveImage(i)}
                >
                  <CancelIcon />
                </IconButton>
                */}
                <img
                  src={URL.createObjectURL(image)}
                  style={{
                    width: "100%"
                  }}
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {isCommentSending ? (
        /* <CircularProgress /> */<></>
      ) : (
        <MyLink caption="性格診断する" href="/profile/result" target="" />
      )}
    </form>
  </>
  );
};

