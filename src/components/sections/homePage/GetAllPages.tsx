"use client"
import { useAppSelector } from '@/lib/redux/hooks';
import { fetchAllPages } from '@/lib/redux/slices/pages/pageThunk';
import { AppDispatch, RootState } from '@/lib/redux/store';
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';

const GetAllPages = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { allPages, isFetched, error } = useAppSelector((state:RootState) => state.page);
    

    const isApi= useRef<boolean>(false)

    useEffect(()=>{
        if(!isApi.current  && !isFetched){
            dispatch(fetchAllPages())
            isApi.current=true
        }else{
            isApi.current= false
        }
    },[isFetched])
  return (
   null
  )
}

export default GetAllPages