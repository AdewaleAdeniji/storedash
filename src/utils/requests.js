import { axios } from "./imports";
// import { httpGet } from ".";
// export const checkToken = () => {
//   const promise = new Promise(async (resolve, reject) => {
//     await httpGet(``)
//       .then((res) => {
//         if (res.status !== 200) {
//           resolve({ code: res.status });
//         }
//         return res.json();
//       })
//       .then((data) => {
//         resolve(data);
//       });
//   });
//   return promise;
// };
export const poster = async (url, payload, token) => {
  
  try {
    const post = await axios.post(url, payload, {
      headers: { Authorization: token },
    });
    return post;
  }
  catch(err) {
    if(err?.response){
      return err?.response;
    }
    return err.response;
  }
};
export const getter = async (url, token) => {
  try {
    const post = await axios.get(url,{
    headers: { Authorization: token },
  });
  return post;
  }
  catch(err) {
    if(err?.response){
      return err?.response;
    }
    return err;
  }
};
