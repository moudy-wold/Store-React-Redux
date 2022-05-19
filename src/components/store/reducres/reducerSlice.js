import { createSlice, current } from '@reduxjs/toolkit';
import Clothes from '../../../clothes.json';
import Mobile from '../../../mobile.json';
import Computer from '../../../computer.json';
export const userSlice = createSlice({
    name: "user",
    initialState: {
        selectedProducts: JSON.parse(localStorage.getItem('selectedProductsLocal')) || [],
        clothesData: Clothes,
        mobileData: Mobile,
        computerData: Computer,
        // Collection Price
        totlaPrice: 0,
        // To Save Data entered From User
        orderData: JSON.parse(localStorage.getItem('nameEmail')) || {},
        // To Open details Order Window
        orderStatus: false,
        // To Open Close Accept Window
        openAccept: false,
        // To CHeck Selected Size Or No
        selectSize: false,
        // To Open Close Accept Window
        // check: true,
        // Came Data From Fliter Search
        filterData: '',
        // To Save Selected Size 
        selectedSize: '',
        // To Open Close NavBar  in media query
        activeNav: false,
        // To Check Entered Email In login Page Is Valid Or No
        emailValid: false
    },
    reducers: {
        // To search in home section
        searchInHome: (state, action) => {
            state.filterData = action.payload.e;
        },
        //  To Add Items to card
        handleAddToCart: function (state, action) {
            let newArr = [...state.selectedProducts];
            // To check 
            var isExit = false;
            newArr.forEach(item => {
                if (current(item).title == action.payload.title) {
                    item.selectedSize += " " + state.selectedSize;
                    item.qty++;
                    isExit = true;
                    state.selectedProducts = newArr;
                }
            })
            // To Check The Item Hava Size Or No
            if (isExit == false) {
                if (action.payload.type === "Clothes") {
                    if (state.selectedSize != "") {
                        newArr.push({ ...action.payload });
                        newArr.forEach(item => {
                            if (item.id == action.payload.id) {
                                item.selectedSize = state.selectedSize;
                            }
                        })
                    } else {
                        state.selectSize = true
                    }
                } else {
                    newArr.push({ ...action.payload });
                }
            }
            localStorage.setItem("selectedProductsLocal", JSON.stringify(newArr));
            state.selectedProducts = newArr;

        },
        // To select Size to clothes
        handleSelctSize: (state, action) => {
            // To Save Selected Size In Our Variable
            state.selectedSize = action.payload.e;
            // To Check selected Size Or No And Write in JSON
            action.payload.noSelectedSize = false;
            state.selectSize = false
        },
        // select item from card and from local storage
        handleRermoveFromSelected: (state, action) => {
            let newArr = state.selectedProducts.filter(item => item.id != action.payload.id)
            localStorage.setItem("selectedProductsLocal", JSON.stringify(newArr));
            state.selectedProducts = newArr;
        },
        // collection items`s price
        priceCollection: (state) => {
            if (state.selectedProducts.length) {
                state.totlaPrice = state.selectedProducts.reduce((acc, p) => {
                    return acc + (p.price * p.qty)
                }, 0)
            }
        },
        // To Register And Save Came Data From User In "orderData" Array
        handleBlurInput: (state, action) => {
            if (action.payload.name || action.payload.pass) {
                state.orderData = { ...state.orderData, ...action.payload }
                localStorage.setItem("nameEmail", JSON.stringify(state.orderData));
            } else {
                let reg = /\w+@\w+.\w+/;
                let vailedValueFromEmail = reg.test(action.payload.email);
                if (vailedValueFromEmail) {
                    state.orderData = { ...state.orderData, ...action.payload };
                    localStorage.setItem("nameEmail", JSON.stringify(state.orderData));

                }
            }
            // Check If Inputs Empty Or No
            action.payload.name == "" && delete state.orderData["name"];
            action.payload.email == "" && delete state.orderData["email"];
            action.payload.pass == "" && delete state.orderData["pass"]
        },
        // To open accept window (register)
        setOpenAcceptOrder: (state) => {

            // To check if the user is logged in
            if (Object.keys(state.orderData).length === 0) {
                state.openAccept = true;
            } else {
                state.orderStatus = true
                window.scroll({ top: 0, behavior: "smooth" })
            }
        },
        // close Accept Window (register)
        closeAccept: (state) => {
            state.openAccept = false
        },
        // to open details order window
        orderDoneSubmit: (state) => {
            // To check if the user is entered right data 

            // If Data Is Right Open Details Order Window
            // if (vailedValueFromEmail) {
            if (Object.keys(state.orderData).length == 3) {
                state.orderStatus = true;
                state.openAccept = false;
                window.scroll({ top: 0, behavior: "smooth" });
                console.log("asd")
            }
            // } else {
            // state.orderStatus = false;
            // }
        },
        // To close Details Order Window
        orderCloseFun: (state) => {
            state.orderStatus = false;
        },
        // To set NavBar in media query
        oenNavFun: (state) => {
            state.activeNav ? state.activeNav = false : state.activeNav = true;
        },



    }
})

export const { searchInHome, handleAddToCart, handleBLorInput, handleSelctSize, handleRermoveFromSelected, priceCollection, orderCloseFun, orderDoneSubmit, handleBlurInput, setOpenAcceptOrder, closeAccept, oenNavFun } = userSlice.actions;

export default userSlice.reducer;