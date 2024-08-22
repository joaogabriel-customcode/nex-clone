


import { AuthApi, Configuration, EventParticipantApi, EventProducerApi, EventProducerCredentialApi, EventProducerStaffApi, EventProducerTicketsApi, EventQuizApi, OtpApi, UserProducerApi } from './api-back'


import apiInterceptorInstance from './interceptor'


const configuration = new Configuration({
    basePath: import.meta.env.VITE_BASE_API
})

const authApi = new AuthApi(configuration, undefined, apiInterceptorInstance)
const eventProducerTicketsApi = new EventProducerTicketsApi(configuration, undefined, apiInterceptorInstance)
const eventProducerStaffApi = new EventProducerStaffApi(configuration, undefined, apiInterceptorInstance)
const userProducerApi = new UserProducerApi(configuration, undefined, apiInterceptorInstance)
const eventParticipantApi = new EventParticipantApi(configuration, undefined, apiInterceptorInstance)
const otpApi = new OtpApi(configuration, undefined, apiInterceptorInstance)
const eventProducerCredentialApi = new EventProducerCredentialApi(configuration, undefined, apiInterceptorInstance)
const eventProducerApi = new EventProducerApi(configuration, undefined, apiInterceptorInstance)
const eventQuizApi = new EventQuizApi(configuration, undefined, apiInterceptorInstance)


export {
    authApi,
    userProducerApi,
    eventParticipantApi,
    otpApi,
    eventProducerTicketsApi,
    eventProducerStaffApi,
    eventProducerCredentialApi,
    eventProducerApi,
    eventQuizApi
}