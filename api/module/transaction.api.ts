import axiosClient from "../axiosConfig";

const transactionApi = {
    getTransaction: async (data: { accountId: string }) => {
        try {
            const url = `transaction/${data.accountId}`;
            const response = await axiosClient.get(url);
            if (response) return response;
        } catch (error) {
            console.error(error);
        }
    },
};

export default transactionApi;
