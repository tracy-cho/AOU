import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

import "./ShopPage.scss";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { asyncGetShopData, buyItem } from "../lib/store/shop";
import { showModal } from "../lib/store/common";

export type ShopPageProps = {
  cx?: string;
};

const useShop = () => {
  const { state, contents } = useRecoilValueLoadable(asyncGetShopData);
  if (state === "hasValue") {
    try {
      return {
        state,
        contents,
      };
    } catch (e) {
      return { state: "hasError", contents };
    }
  }
  return { state, contents: [] };
};

export const ShopPage: React.FC<ShopPageProps> = ({ cx = "" }) => {
  const [showModal, setShowModal] = useState(99);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
  };
  initializeApp(firebaseConfig);

  const auth = getAuth();
  const provider = new TwitterAuthProvider();

  const handleSignIn = async (price: string, name: string) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      await buyItem({
        id: user.providerData[0].uid,
        user_name: user.displayName || "",
        price,
        name,
      });
      await window.alert("구매해주셔서 감사합니다.");
    } catch (e) {
      await window.alert("구매에 실패했습니다.");
      console.log(e);
    }
    await setShowModal(99)
  };

  const shop = useShop();
  return (
    <main className={`ShopPage ${cx}`}>
      <section className="top-image">
        <img
          src={
            "data:img/png;base64,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"
          }
          alt=""
        />
        <h3>상점</h3>
      </section>
      <section className="body">
        {shop.contents.map(
          (
            i: {
              name: string;
              image: string;
              effect: string;
              desc: string;
              price: string;
            },
            idx: number
          ) => (
            <div className={"items"} key={i.name}>
              <div className="image-wrapper">
                <img
                  src={`https://cdn.star-light.space/${i.image}.png`}
                  alt=""
                />
              </div>
              <div className="desc">
                <h5>[{i.name}]</h5>
                <p>효과 : {i.effect}</p>
                <p>{i.desc}</p>
              </div>
              <div className="bottom">
                {showModal === idx ? (
                  <>
                    <button onClick={() => handleSignIn(i.price, i.name)}>
                      구매
                    </button>
                    <button onClick={() => setShowModal(99)}>취소</button>
                  </>
                ) : (
                  <>
                    <span>{i.price} 디나르</span>
                    <button onClick={() => setShowModal(idx)}>구매하기</button>
                  </>
                )}
              </div>
            </div>
          )
        )}
      </section>
    </main>
  );
};
