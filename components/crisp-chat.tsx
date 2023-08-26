'use client';

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("63d745d9-26d7-40c8-9f72-c0b4638ed618");
    }, []);

  return null;
};