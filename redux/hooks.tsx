import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import { AppDispatch, RootState } from "./store"


// use throughout your app instead of useDispatch and useSelector

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector