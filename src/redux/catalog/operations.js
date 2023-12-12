import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = `https://65750e78b2fbb8f6509ce075.mockapi.io/api/v1/Advert`;

export const getCarsWithPagination = createAsyncThunk(
    "catalog/getCarsWithPagination",
    async (page, thunkAPI) => {
        
        try {
            const res = await axios.get(`${url}?page=${page}&limit=12`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getAllCars = createAsyncThunk(
    "catalog/getAllCars",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getCarById = createAsyncThunk(
    "catalog/getCarById",
    async (id, thunkAPI) => {
        try {
            const urlWithId = new URL(id, url);
            const res = await axios.get(urlWithId);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getBrands = createAsyncThunk(
    "catalog/getBrands",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(url);
            const allData = res.data;
            let uniquBrands = new Set();
            allData.forEach(car => {
            uniquBrands.add(car.make);
            });
            return Array.from(uniquBrands)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
