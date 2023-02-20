import {request} from "../axios/Axios-utils";

export const getAllClaims = async(status)=>{
    return await request({url: '/agent/all-claim-details', method: 'post', data:{status}});
}

export const registerCustomer = async (data) => {
    return await request({ url: '/auth/register', method: 'post', data: data})
}

export const registerVehicle = async (data) => {
    return await request({ url: '/agent/register-vehicle', method: 'post', data: data})
}

export const getAllCustomers = async () => {
    return await request({ url: '/agent/all-customers'})
}

export const getClaimDetails = async (claimId) => {
    return await request({ url: '/customer/get-claim-details', method: 'post', data: {claimId}})
}
export const validateClaim = async (data) => {
    return await request({ url: '/agent/validate-claim', method: 'post', data: data})
}
