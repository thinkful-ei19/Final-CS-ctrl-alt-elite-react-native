// export const API_BASE_URL = process.env.NODE_ENV === 'production'
//     ? 'https://ctrl-alt-elite.herokuapp.com/api'
//     : 'http://localhost:8080/api';


//Android emulator is unable to use localhost (it thinks that is itself);
//User hosted server-side instead
export const API_BASE_URL = 'https://ctrl-alt-elite.herokuapp.com/api'

// export const CLIENT_ORIGIN = 
//     process.env.CLIENT_ORIGIN || 'http://localhost:3000'