import { IHttpRequestParams } from './api'

const getHeaders = (props: IHttpRequestParams) => {
  let token = null
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
  }
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {}
  const headers = {
    ...authHeader,
    'Content-type': 'application/json',
    ...props.extraHeaders,
  }

  return headers
}
export default getHeaders
