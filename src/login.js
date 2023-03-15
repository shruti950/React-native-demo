import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  const SIGN_IN = gql`
mutation SignIn($password: String!, $email: String, $fcmToken: String) {
  signIn(password: $password, email: $email, FCMToken: $fcmToken) {
      token
      user {
        id
        userName
        firstName
        lastName
        email
        gender
        companyName
        mobile
        teamSize
        timePeriod
        address
        stateId
        cityId
        pincodeId
        TwoFA{
          isEnable
          secret
          qrCode
        }
        isSubscription
        setting{
          dateFormat
          timezone
          currency
          financialYear
        }
       isBuilderEmployee
        isCustomerAdd
        photo
        roleId {
          id
          roleName
          permission
        }
        branchId {
          id
          branchCode
          name
        
        }
        connectedDSA {
          dsaId {
            id
            firstName
            lastName
          }
          branchId {
            id
            name
            branchCode
          }
          isExpired
        }
        DSAId{
          id
          firstName
          lastName
        }
        activeBankId {
          id
          bankName
          #loanOption
        }
        Permissions
        subscriptionPlan
        isActive
        isVerified
        isApproved
        createdBy
        updatedBy
        createdAt
        updatedAt
      }
    }
  }
`;
const [Signin] = useMutation(SIGN_IN);

const onsubmit=()=>{

  Signin({
    variables: {
      email: "urvishpatel.scaleteam@gmail.com",
      password: "123456",
    }
  }).then(async ({ data }) => {
    console.log("🚀 ~ file: login.js:99 ~ onsubmit ~ data:", data)
    if (data?.signIn?.token) {
      AsyncStorage.setItem("token", data?.signIn?.token);
    } else {
      // Toast.show("Something went wrong");
    }
  }).catch(err => {
      console.log("🚀 ~ file: login.js:107 ~ onsubmit ~ err:", err)
      return {
  }
    
  })
}
  return (
    <Pressable onPress={()=>onsubmit()} style={{marginTop:10}}>
      <Text>Login</Text>
    </Pressable>
  )
}

export default Login