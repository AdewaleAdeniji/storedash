import React from "react";
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import filter from 'leo-profanity';
import banks from './banks.json';

const currencies = ['₦']

export const currency = {
    get: function(id){
        return <React.Fragment> {currencies[id] || currencies[0] }</React.Fragment>;
    }
}

export const validateUser = (flag) => {
    // var url = '';
    if(flag.suspended){
        return '/user/message';
    }
    else if(!flag.verified){
        return '/verify-email';
    }
    else if(!flag.hasBVN){
        return '/verify/bvn';
    }
    else if(!flag.hasPicture){
        return '/user/image';
    }
    else if(!flag.hasName){
        return '/user/names';
    }
    else if(!flag.hasPin){
        return '/user/set-pin';
    }
    else if(!flag.hasTopUpAccount){
        return '/welcome';
    }
    else {
        return false;
    }
}

export const goToURL = (props,url) => {
    return props.history.push(url);
}
export const getBanks = () => {
    return banks;
}
export const removeNonLetters = (str) => {
const regex = /[^A-Za-z ]/g;
const newStr = str.replace(regex, "");
return newStr;
}
export const copyText =async (text,message) => {
    await copy(text)
    toast.info(message || 'Copied!');
}
export const formatMoney = (money) => {
    return new Intl.NumberFormat('ng-NG').format(money);
}
export function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

// accounts: "0"
// email: "d@er.co"
// firstname: "adewale"
// hasAccounts: false
// hasBVN: true
// hasName: true
// hasPhoneNumber: true
// hasPicture: true
// verified: true
// hasPin: true
// hasTopUpAccount: false
// imageURL: "https://res.cloudinary.com/hdlky7wud/image/upload/c_crop,g_face/r_max/c_scale/r81kevbqqoxikaejjt8e.jpg"
// kycLevel: "1"
// lastname: "adeniji"
// message: "Welcome to Falcons!"
// suspended: false
// username: "userhane"
/* eslint-disable */

class Utils {
    static convertPhoneToISO = (number, countryCode = 234) => {
      if (!number) return "";
      if (number.substring(0, 4) === `+${countryCode}`) {
        return number;
      } else if (number.substring(0, 3) === countryCode) {
        return `+${number}`;
      } else if (number.charAt(0) === "0") {
        return `+${countryCode}${number.slice(1)}`;
      } else {
        return null;
      }
    };
  
    static sendSlackMessage(body) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        to: "reports",
        message: body,
      });
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch("https://doedoh-message.herokuapp.com/v1/send-slack", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  }
  
  export default Utils;
  