import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContractState {
  contractType: string | null;
  transactionType: string | null;
  address: string;
  detailAddress: string;
}

const initialState: ContractState = {
  contractType: null,
  transactionType: null,
  address: "",
  detailAddress: "",
};

const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    setContractType(state, action: PayloadAction<string | null>) {
      state.contractType = action.payload;
    },
    setTransactionType(state, action: PayloadAction<string | null>) {
      state.transactionType = action.payload;
    },
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setDetailAddress(state, action: PayloadAction<string>) {
      state.detailAddress = action.payload;
    },
    resetContract(state) {
      state.contractType = null;
      state.transactionType = null;
      state.address = "";
      state.detailAddress = "";
    },
  },
});

export const {
  setContractType,
  setTransactionType,
  setAddress,
  setDetailAddress,
  resetContract,
} = contractSlice.actions;
export default contractSlice.reducer;
