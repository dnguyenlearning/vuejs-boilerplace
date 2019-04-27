// import axios from "@/client";
// import { defaultHelper } from "@/helpers/header.helper";

// const userApi = {
//     login: '/api/login_check'
// }

export const userLogin = async ({ user }) => {
    if (user.email === "demo@gmail.com" && user.password === "demo1234") {
        return {
            user: {
                id: Math.floor(Math.random() * 10000),
                name: "demo",
                email: "demo@gmail.com"
            },
            token: "uoiuowerqrq12412"
        }
    }

    // try {
        //     const response = await axios.post(userApi.login, JSON.stringify(user), defaultHelper());
        //     if (response.status === 200) {
        //         return response.data
        //     }
        // } catch (err) {
        //     throw "Unauthorized"
        // }


    throw "Unauthorized"
}