"use client"
import { Dispatch, SetStateAction } from "react";

const toggleBooleanState = (setter: Dispatch<SetStateAction<boolean>>) => {
    setter((curr) => !curr);
}

export {toggleBooleanState}